import google.generativeai as genai
import json
import os
from typing import List, Dict, Optional

# Configure Gemini - Gracefully handle missing API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
model = None

if GEMINI_API_KEY:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        # Use gemini-2.5-flash (User requested for max daily limit/efficiency)
        model = genai.GenerativeModel('gemini-2.5-flash')
        print("✅ AIService: Gemini model initialized")
    except Exception as e:
        print(f"⚠️ AIService: Failed to initialize Gemini: {e}")
        model = None
else:
    print("⚠️ AIService: GEMINI_API_KEY not found, AI features disabled")

class AIService:
    # generate_word_info removed as per user request (Use Naver Scraper instead)

    @staticmethod
    def generate_conversation(topic: str, level: str = "N5") -> Dict:
        """
        Generates a short roleplay dialogue.
        """
        prompt = f"""
        Topic: {topic}
        JLPT Level: {level}
        
        Create a short, natural Japanese conversation (3-4 turns per person).
        Format as JSON.
        Roles: A (User), B (AI/Friend).
        Include pronunciation (Romaji) and Korean translation for each line.
        
        Format:
        {{
            "topic": "{topic}",
            "level": "{level}",
            "dialogue": [
                {{
                    "role": "A",
                    "text": "こんにちは",
                    "romaji": "Konnichiwa",
                    "translation": "안녕하세요"
                }},
                ...
            ]
        }}
        """
        if not model:
            return {"error": "AI service not available"}
        try:
            response = model.generate_content(prompt)
            text = response.text.replace('```json', '').replace('```', '').strip()
            return json.loads(text)
        except Exception as e:
            print(f"AI Chat Error: {e}")
            return {"error": str(e)}

    @staticmethod
    def analyze_sentiment_for_action(text: str) -> Dict:
        """
        Analyzes text sentiment to trigger an Avatar Action.
        Returns an 'action_id' from a simplified list.
        """
        prompt = f"""
        Analyze the sentiment of this text: "{text}"
        
        Map it to ONE of the following action categories:
        - happy (joy, success, greeting)
        - sad (failure, bad news, sorry)
        - angry (frustration, mad)
        - surprise (shock, wow)
        - study (focus, thinking, question)
        - idle (neutral, waiting)
        - fight (aggressive, conflict)
        
        Return ONLY a JSON object:
        {{
            "sentiment": "happy",
            "action_id": "happy_jump" 
        }}
        
        Choose the most appropriate specific 'action_id' based on intensity.
        Examples: 
        - "I won!" -> happy_jump
        - "Hello" -> happy_wave
        - "Oh no" -> sad_shrink
        - "What is this?" -> study_question
        """
        if not model:
            return {"error": "AI service not available"}
        try:
            response = model.generate_content(prompt)
            text = response.text.replace('```json', '').replace('```', '').strip()
            return json.loads(text)
        except Exception as e:
            print(f"AI Action Error: {e}")
            return {"error": str(e)}
