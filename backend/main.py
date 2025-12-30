from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from typing import Optional, Dict, Any

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from typing import List
from pydantic import BaseModel
import google.generativeai as genai

app = FastAPI(title="JapBong Learning API", version="1.0.0")

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 데이터 로딩
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

def load_json(filename):
    """JSON 파일을 안전하게 로드합니다."""
    try:
        filepath = os.path.join(DATA_DIR, filename)
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        else:
            print(f"⚠️ File not found: {filename}")
            return {}
    except Exception as e:
        print(f"❌ Error loading {filename}: {e}")
        return {}

conversations_db = load_json('conversations.json')
words_db = load_json('words.json')
print(f"✅ Loaded {len(conversations_db)} conversation categories, {len(words_db)} word categories")


# Serve Frontend Static Files
# Mount specialized directories first
# Since we run from backend/, we need to go up one level
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app.mount("/js", StaticFiles(directory=os.path.join(BASE_DIR, "js")), name="js")
app.mount("/css", StaticFiles(directory=os.path.join(BASE_DIR, "css")), name="css")
app.mount("/images", StaticFiles(directory=os.path.join(BASE_DIR, "images")), name="images")

# Serve index.html at root
@app.get("/")
async def read_root():
    return FileResponse(os.path.join(BASE_DIR, 'index.html'))

# Remove the old health check or move it to /api/health
@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "JapBong API is running"}

# --- Conversation Endpoints ---

@app.get("/api/conversations")
def get_conversation_categories():
    """Returns metadata for all conversation categories."""
    return {
        key: {
            "title": val.get("title"),
            "icon": val.get("icon"),
            "color": val.get("color"),
            "count": len(val.get("conversations", []))
        }
        for key, val in conversations_db.items()
    }

@app.get("/api/conversations/{category_id}")
def get_conversation_detail(category_id: str):
    """Returns full conversation data for a specific category."""
    if category_id not in conversations_db:
        raise HTTPException(status_code=404, detail="Category not found")
    return conversations_db[category_id]

# --- Word Study Endpoints ---

@app.get("/api/words")
def get_word_categories():
    """Returns metadata for all word categories."""
    return {
        key: {
            "title": val.get("title"),
            "icon": val.get("icon"),
            "color": val.get("color"),
            "count": len(val.get("words", []))
        }
        for key, val in words_db.items()
    }

@app.get("/api/words/{category_id}")
def get_word_detail(category_id: str):
    """Returns full word list for a specific category."""
    if category_id not in words_db:
        raise HTTPException(status_code=404, detail="Category not found")
    return words_db[category_id]

# --- Dynamic & User Features (Stub) ---

@app.post("/api/learning/progress")
def save_progress(data: Dict[str, Any]):
    """
    Saves user learning progress.
    Expects JSON body with 'userId' and other data.
    """
    user_id = data.get("userId")
    if not user_id:
        raise HTTPException(status_code=400, detail="userId is required in the body")

    try:
        filename = f"user_{user_id}.json"
        filepath = os.path.join(DATA_DIR, filename)
        
        current_data = {}
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                try:
                    current_data = json.load(f)
                except json.JSONDecodeError:
                    current_data = {}
        
        # Merge incoming data
        current_data.update(data)

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(current_data, f, indent=4, ensure_ascii=False)
            
        print(f"Successfully saved progress for {user_id} to {filename}")
        return {"status": "saved", "user_id": user_id}
        
    except Exception as e:
        print(f"Error saving progress: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# ... existing code ...

# Gemini API Setup
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-2.5-flash')
else:
    model = None
    print("⚠️ GEMINI_API_KEY not found. AI features will be disabled.")

# ... existing code ...

class SentenceRequest(BaseModel):
    sentence: str
    target_form: str # e.g., "negative", "past", "polite", "question"

class CheckRequest(BaseModel):
    words: List[str]
    user_sentence: str

@app.post("/api/practice/transform")
def transform_sentence(req: SentenceRequest):
    if not model:
        raise HTTPException(status_code=503, detail="AI Service Unavailable (Missing Key)")
    
    prompt = f"""
    You are a Japanese language teacher.
    Task:
    1. If the input is a word (e.g., 'apple', 'eat'), create a natural, simple Japanese sentence using that word in the '{req.target_form}' form.
    2. If the input is a sentence (e.g., 'I eat apple'), transform it into the '{req.target_form}' form.
    
    Input: {req.sentence}
    Target Form: {req.target_form}
    
    Output JSON format:
    {{
        "result": "The Japanese sentence (in Kanji/Kana)",
        "romaji": "The reading in Romaji",
        "explanation": "A brief explanation in Korean (e.g., 'Past tense of eat')"
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        # Simple cleanup to ensure JSON parsing if model adds backticks
        text = response.text.replace("```json", "").replace("```", "").strip()
        return json.loads(text)
    except Exception as e:
        print(f"AI Error: {e}")
        raise HTTPException(status_code=500, detail="AI Processing Failed")

@app.post("/api/practice/check")
def check_sentence(req: CheckRequest):
    if not model:
        raise HTTPException(status_code=503, detail="AI Service Unavailable (Missing Key)")
        
    prompt = f"""
    Check if the user constructed a natural Japanese sentence using the provided words.
    Words: {', '.join(req.words)}
    User Sentence: {req.user_sentence}
    
    Output JSON format:
    {{
        "is_correct": true/false,
        "feedback": "feedback in Korean",
        "better_version": "optional better version"
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        text = response.text.replace("```json", "").replace("```", "").strip()
        return json.loads(text)
    except Exception as e:
        print(f"AI Error: {e}")
        raise HTTPException(status_code=500, detail="AI Processing Failed")

# --- Routers ---
from routers import scraper
app.include_router(scraper.router, prefix="/api")


class ConversationGenRequest(BaseModel):
    word: str

@app.post("/api/generate/conversation")
def generate_conversation(req: ConversationGenRequest):
    """AI를 사용하여 단어 기반 회화를 생성합니다. 실패 시 폴백 응답 제공."""
    
    # Fallback response for when AI is unavailable
    fallback_response = {
        "title": f"'{req.word}' 활용 회화 (샘플)",
        "dialogue": [
            {"speaker": "A", "jp": f"{req.word}はどこですか？", "kr": f"{req.word}은(는) 어디입니까?", "romaji": f"{req.word} wa doko desu ka?"},
            {"speaker": "B", "jp": "あそこにあります。", "kr": "저기에 있습니다.", "romaji": "Asoko ni arimasu."},
            {"speaker": "A", "jp": "ありがとうございます。", "kr": "감사합니다.", "romaji": "Arigatou gozaimasu."}
        ]
    }
    
    if not model:
        print("⚠️ AI model not available, returning fallback response")
        return fallback_response
        
    prompt = f"""
    Create a short, natural Japanese conversation (dialogue between A and B) using the word '{req.word}'.
    The conversation should be simple, suitable for beginners (JLPT N5-N4 level).
    
    Target Word: {req.word}
    
    Output JSON format (MUST be valid JSON, no markdown):
    {{
        "title": "A short title for the situation in Korean",
        "dialogue": [
            {{ "speaker": "A", "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "speaker": "B", "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "speaker": "A", "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }}
        ]
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        text = response.text.replace("```json", "").replace("```", "").strip()
        result = json.loads(text)
        return result
    except json.JSONDecodeError as e:
        print(f"❌ JSON Parse Error: {e}")
        print(f"   Raw response: {response.text[:200] if response else 'None'}...")
        return fallback_response
    except Exception as e:
        print(f"❌ AI Conversation Error: {e}")
        return fallback_response

class SentenceGenRequest(BaseModel):
    word: str

@app.post("/api/generate/sentences")
def generate_sentences(req: SentenceGenRequest):
    """AI를 사용하여 단어 기반 예문을 생성합니다. 실패 시 폴백 응답 제공."""
    
    # Fallback response
    fallback_response = {
        "sentences": [
            {"jp": f"{req.word}を食べます。", "kr": f"{req.word}을(를) 먹습니다.", "romaji": f"{req.word} wo tabemasu."},
            {"jp": f"{req.word}が好きです。", "kr": f"{req.word}을(를) 좋아합니다.", "romaji": f"{req.word} ga suki desu."},
            {"jp": f"{req.word}はどこですか？", "kr": f"{req.word}은(는) 어디입니까?", "romaji": f"{req.word} wa doko desu ka?"},
            {"jp": f"これは{req.word}です。", "kr": f"이것은 {req.word}입니다.", "romaji": f"Kore wa {req.word} desu."},
            {"jp": f"{req.word}をください。", "kr": f"{req.word}을(를) 주세요.", "romaji": f"{req.word} wo kudasai."}
        ]
    }
    
    if not model:
        print("⚠️ AI model not available, returning fallback response")
        return fallback_response
        
    prompt = f"""
    Create 5 simple Japanese example sentences using the word '{req.word}'.
    The sentences should be practical and suitable for beginners (JLPT N5-N4 level).
    Each sentence should demonstrate different uses or contexts.
    
    Target Word: {req.word}
    
    Output JSON format (MUST be valid JSON, no markdown):
    {{
        "sentences": [
            {{ "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }},
            {{ "jp": "Japanese sentence", "kr": "Korean translation", "romaji": "Romaji reading" }}
        ]
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        text = response.text.replace("```json", "").replace("```", "").strip()
        result = json.loads(text)
        return result
    except json.JSONDecodeError as e:
        print(f"❌ JSON Parse Error: {e}")
        print(f"   Raw response: {response.text[:200] if response else 'None'}...")
        return fallback_response
    except Exception as e:
        print(f"❌ AI Sentences Error: {e}")
        return fallback_response


# ==========================================
# 수집된 단어 API (야금야금 시스템)
# ==========================================
from word_collector import (
    get_collected_words, 
    get_collection_stats, 
    collect_words_by_category,
    daily_collection_job,
    COLLECTION_CATEGORIES
)

@app.get("/api/collected/words")
def api_get_collected_words(category: str = None, limit: int = 50):
    """수집된 단어 목록 조회"""
    words = get_collected_words(category=category, limit=limit)
    return {
        "count": len(words),
        "words": words
    }

@app.get("/api/collected/stats")
def api_get_collection_stats():
    """수집 통계 조회"""
    return get_collection_stats()

@app.get("/api/collected/categories")
def api_get_collection_categories():
    """수집 가능한 카테고리 목록"""
    return {
        key: {"name": val["name"], "seed_count": len(val["seed_words"])}
        for key, val in COLLECTION_CATEGORIES.items()
    }

@app.post("/api/collected/trigger")
def api_trigger_collection(category: str = None, limit: int = 5):
    """수동 수집 트리거 (관리자용)"""
    if category:
        collected = collect_words_by_category(category, limit=limit)
        return {
            "status": "done",
            "category": category,
            "collected_count": len(collected),
            "words": [w["word"] for w in collected]
        }
    else:
        total = daily_collection_job()
        return {
            "status": "done",
            "total_collected": total
        }

@app.get("/api/collected/latest")
def api_get_latest_words(hours: int = 24):
    """최근 N시간 내 수집된 단어"""
    from datetime import datetime, timedelta
    
    words = get_collected_words(limit=1000)
    cutoff = datetime.now() - timedelta(hours=hours)
    
    recent = []
    for w in words:
        try:
            collected_at = datetime.fromisoformat(w.get('collected_at', ''))
            if collected_at > cutoff:
                recent.append(w)
        except:
            pass
    
    return {
        "hours": hours,
        "count": len(recent),
        "words": recent
    }

# --- AI Service Endpoints (Phase 8) ---
from ai_service import AIService

class AIWordRequest(BaseModel):
    word: str

class AIChatRequest(BaseModel):
    topic: str
    level: str = "N5"

class AIActionRequest(BaseModel):
    text: str

@app.post("/api/ai/word")
def api_ai_word(req: AIWordRequest):
    # User requested Naver Scraper for words, not AI
    from word_collector import scrape_naver_dict
    result = scrape_naver_dict(req.word)
    if result:
        return result
    else:
        return {"error": "Word not found in Naver Dictionary or Scraping Failed"}

@app.post("/api/ai/conversation")
def api_ai_conversation(req: AIChatRequest):
    return AIService.generate_conversation(req.topic, req.level)

@app.post("/api/ai/analyze-action")
def api_ai_action(req: AIActionRequest):
    result = AIService.analyze_sentiment_for_action(req.text)
    return result
