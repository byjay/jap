"""
comprehensive_word.py - 듀오링고 스타일 단어 집중학습 시스템

네이버 사전 스타일 데이터 + 듀오링고식 집중학습
- 한 단어를 완벽하게 마스터할 때까지 다각도 학습
- 문법 설명, 예문, 게임, 변형 모두 통합
"""

import os
import json
from datetime import datetime
from typing import Dict, List, Optional
from verb_conjugator import conjugate_verb, detect_verb_group

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

# ==========================================
# 품사별 문법 규칙 정의
# ==========================================

GRAMMAR_RULES = {
    "동사": {
        "ます形": {
            "name": "정중형 (ます形)",
            "description": "공손한 표현으로, 격식 있는 상황에서 사용합니다.",
            "formation": {
                "1류": "어미를 い단으로 바꾸고 + ます",
                "2류": "る를 빼고 + ます",
                "3류": "する→します, くる→きます"
            },
            "usage": ["일상 대화", "비즈니스", "처음 만난 사람과의 대화"],
            "examples": ["食べます (먹습니다)", "行きます (갑니다)"]
        },
        "て形": {
            "name": "연결형 (て形)",
            "description": "동작의 연결, 진행, 부탁 등 다양한 표현에 사용됩니다.",
            "formation": {
                "1류_う/つ/る": "→って",
                "1류_む/ぶ/ぬ": "→んで",
                "1류_く": "→いて",
                "1류_ぐ": "→いで",
                "1류_す": "→して",
                "2류": "る→て",
                "3류": "する→して, くる→きて"
            },
            "usage": ["~ている (진행)", "~てください (부탁)", "~てから (순서)"],
            "examples": ["食べて (먹고)", "行って (가서)"]
        },
        "ない形": {
            "name": "부정형 (ない形)",
            "description": "동작의 부정을 나타냅니다.",
            "formation": {
                "1류": "어미를 あ단으로 바꾸고 + ない",
                "2류": "る를 빼고 + ない",
                "3류": "する→しない, くる→こない"
            },
            "usage": ["부정문", "~なければならない (해야 한다)"],
            "examples": ["食べない (먹지 않다)", "行かない (가지 않다)"]
        },
        "過去形": {
            "name": "과거형 (た形)",
            "description": "과거의 동작이나 완료를 나타냅니다.",
            "formation": {
                "1류": "て形과 같지만 て→た, で→だ",
                "2류": "る→た",
                "3류": "する→した, くる→きた"
            },
            "usage": ["과거 표현", "경험 표현 (~たことがある)"],
            "examples": ["食べた (먹었다)", "行った (갔다)"]
        },
        "可能形": {
            "name": "가능형 (可能形)",
            "description": "~할 수 있다는 능력이나 가능성을 나타냅니다.",
            "formation": {
                "1류": "어미를 え단으로 바꾸고 + る",
                "2류": "る→られる",
                "3류": "する→できる, くる→こられる"
            },
            "usage": ["능력", "가능성", "허가"],
            "examples": ["食べられる (먹을 수 있다)", "行ける (갈 수 있다)"]
        }
    },
    "형용사": {
        "い형": {
            "name": "い형용사",
            "description": "い로 끝나는 형용사. 활용 시 い가 변합니다.",
            "conjugation": {
                "현재": "~い",
                "과거": "い→かった",
                "부정": "い→くない",
                "과거부정": "い→くなかった",
                "연결": "い→くて"
            },
            "examples": ["高い→高かった (비쌌다)", "美味しい→美味しくない (맛없다)"]
        },
        "な형": {
            "name": "な형용사",
            "description": "명사를 수식할 때 な를 붙이는 형용사.",
            "conjugation": {
                "현재": "~だ/です",
                "과거": "~だった/でした",
                "부정": "~じゃない/ではない",
                "수식": "~な + 명사"
            },
            "examples": ["静か→静かな部屋 (조용한 방)", "きれい→きれいだった (예뻤다)"]
        }
    },
    "명사": {
        "です/だ": {
            "name": "명사 술어",
            "description": "명사 뒤에 です/だ를 붙여 문장을 완성합니다.",
            "conjugation": {
                "현재_정중": "~です",
                "현재_보통": "~だ",
                "과거_정중": "~でした",
                "과거_보통": "~だった",
                "부정_정중": "~じゃありません",
                "부정_보통": "~じゃない"
            },
            "examples": ["学生です (학생입니다)", "日本人だった (일본인이었다)"]
        }
    }
}


def create_comprehensive_word(
    word: str,
    reading: str,
    meaning: str,
    word_type: str,  # 동사/형용사/명사/부사
    jlpt_level: str = "N5",
    kanji: str = None,
    audio_url: str = None
) -> Dict:
    """
    듀오링고 스타일 종합 단어 데이터 생성
    
    한 단어에 대한 완벽한 학습 자료 패키지
    """
    
    word_data = {
        # === 기본 정보 (네이버 사전 스타일) ===
        "word": word,
        "reading": reading,
        "kanji": kanji or word,
        "meaning": meaning,
        "word_type": word_type,
        "jlpt_level": jlpt_level,
        "audio_url": audio_url,
        "created_at": datetime.now().isoformat(),
        
        # === 상세 뜻풀이 ===
        "definitions": [],
        
        # === 문법 설명 ===
        "grammar": {},
        
        # === 활용형 (동사/형용사) ===
        "conjugations": {},
        
        # === 예문 ===
        "examples": [],
        
        # === 관련 표현 ===
        "related": [],
        
        # === 듀오링고식 학습 콘텐츠 ===
        "learning": {
            "flashcard": {},
            "fill_blank": [],
            "matching": [],
            "listening": [],
            "translation": [],
            "grammar_quiz": []
        }
    }
    
    # 품사별 문법 정보 추가
    if word_type in GRAMMAR_RULES:
        word_data["grammar"] = GRAMMAR_RULES[word_type]
    
    # 동사인 경우 활용형 자동 생성
    if word_type == "동사":
        verb_group = detect_verb_group(word)
        conjugation_data = conjugate_verb(word, meaning)
        word_data["conjugations"] = conjugation_data.get("conjugations", {})
        word_data["verb_group"] = verb_group
        word_data["verb_group_name"] = conjugation_data.get("group_name", "")
    
    # 듀오링고식 학습 콘텐츠 생성
    word_data["learning"] = generate_learning_content(word_data)
    
    return word_data


def generate_learning_content(word_data: Dict) -> Dict:
    """듀오링고 스타일 학습 콘텐츠 자동 생성"""
    
    word = word_data["word"]
    meaning = word_data["meaning"]
    word_type = word_data["word_type"]
    
    learning = {
        # 1. 플래시카드
        "flashcard": {
            "front": word,
            "back": meaning,
            "hint": f"{word_type} - {word_data.get('jlpt_level', 'N5')}"
        },
        
        # 2. 빈칸 채우기 문제
        "fill_blank": [],
        
        # 3. 매칭 게임용 쌍
        "matching": [
            {"japanese": word, "korean": meaning}
        ],
        
        # 4. 번역 문제
        "translation": {
            "jp_to_kr": {"question": word, "answer": meaning},
            "kr_to_jp": {"question": meaning, "answer": word}
        },
        
        # 5. 문법 퀴즈
        "grammar_quiz": []
    }
    
    # 동사인 경우 활용 퀴즈 추가
    if word_type == "동사" and "conjugations" in word_data:
        conj = word_data["conjugations"]
        
        # 활용형 퀴즈
        if "masu" in conj:
            learning["grammar_quiz"].append({
                "type": "conjugation",
                "question": f"'{word}'의 ます形은?",
                "answer": conj["masu"],
                "options": [conj["masu"], conj.get("te", ""), conj.get("nai", ""), conj.get("ta", "")],
                "explanation": "ます形은 정중한 표현에 사용됩니다."
            })
        
        if "te" in conj:
            learning["grammar_quiz"].append({
                "type": "conjugation", 
                "question": f"'{word}'의 て形은?",
                "answer": conj["te"],
                "options": [conj["te"], conj.get("masu", ""), conj.get("ta", ""), conj.get("nai", "")],
                "explanation": "て形은 동작의 연결이나 ~ている(진행)에 사용됩니다."
            })
        
        if "nai" in conj:
            learning["grammar_quiz"].append({
                "type": "conjugation",
                "question": f"'{word}'의 부정형은?",
                "answer": conj["nai"],
                "options": [conj["nai"], conj.get("masu", ""), conj.get("te", ""), conj.get("ta", "")],
                "explanation": "ない形은 ~하지 않다는 부정을 나타냅니다."
            })
        
        # 빈칸 채우기
        if "masu" in conj:
            learning["fill_blank"].append({
                "sentence": f"私は毎日 _____ 。 (매일 {meaning})",
                "answer": conj["masu"],
                "hint": "ます形을 사용하세요"
            })
        
        if "te" in conj:
            learning["fill_blank"].append({
                "sentence": f"_____ ください。 ({meaning} 주세요)",
                "answer": conj["te"],
                "hint": "て形 + ください = ~해 주세요"
            })
    
    return learning


def generate_sample_words() -> List[Dict]:
    """샘플 종합 단어 데이터 생성"""
    
    sample_words = [
        # 동사
        {
            "word": "食べる",
            "reading": "たべる",
            "meaning": "먹다",
            "word_type": "동사",
            "jlpt_level": "N5",
            "definitions": [
                {"num": 1, "meaning": "음식을 입에 넣고 씹어 삼키다", "context": "일반적인 식사"},
                {"num": 2, "meaning": "생계를 유지하다", "context": "비유적 표현", "example": "この仕事で食べている"}
            ],
            "examples": [
                {"jp": "朝ごはんを食べる", "kr": "아침밥을 먹다", "romaji": "asagohan wo taberu"},
                {"jp": "一緒に食べましょう", "kr": "함께 먹읍시다", "romaji": "issho ni tabemashou"},
                {"jp": "もう食べました", "kr": "이미 먹었습니다", "romaji": "mou tabemashita"}
            ],
            "related": [
                {"word": "食事", "reading": "しょくじ", "meaning": "식사"},
                {"word": "食べ物", "reading": "たべもの", "meaning": "음식"},
                {"word": "食堂", "reading": "しょくどう", "meaning": "식당"}
            ]
        },
        # 형용사 (い형)
        {
            "word": "美しい",
            "reading": "うつくしい",
            "meaning": "아름답다",
            "word_type": "형용사",
            "jlpt_level": "N4",
            "definitions": [
                {"num": 1, "meaning": "(빛깔이 붉고) 아름답다", "context": "외관"},
                {"num": 2, "meaning": "곱다, 예쁘다", "context": "미적 표현"},
                {"num": 3, "meaning": "(칭찬할 만큼) 훌륭하다", "context": "품질/행동"}
            ],
            "examples": [
                {"jp": "美しい花", "kr": "아름다운 꽃", "romaji": "utsukushii hana"},
                {"jp": "景色が美しい", "kr": "경치가 아름답다", "romaji": "keshiki ga utsukushii"}
            ],
            "related": [
                {"word": "きれい", "reading": "きれい", "meaning": "예쁜, 깨끗한"},
                {"word": "美人", "reading": "びじん", "meaning": "미인"}
            ]
        },
        # 명사
        {
            "word": "学校",
            "reading": "がっこう",
            "meaning": "학교",
            "word_type": "명사",
            "jlpt_level": "N5",
            "definitions": [
                {"num": 1, "meaning": "교육을 위해 설립된 기관"}
            ],
            "examples": [
                {"jp": "学校に行く", "kr": "학교에 가다", "romaji": "gakkou ni iku"},
                {"jp": "学校が好きです", "kr": "학교를 좋아합니다", "romaji": "gakkou ga suki desu"}
            ],
            "related": [
                {"word": "大学", "reading": "だいがく", "meaning": "대학"},
                {"word": "小学校", "reading": "しょうがっこう", "meaning": "초등학교"},
                {"word": "中学校", "reading": "ちゅうがっこう", "meaning": "중학교"},
                {"word": "高校", "reading": "こうこう", "meaning": "고등학교"}
            ]
        }
    ]
    
    results = []
    for word_info in sample_words:
        comprehensive = create_comprehensive_word(
            word=word_info["word"],
            reading=word_info["reading"],
            meaning=word_info["meaning"],
            word_type=word_info["word_type"],
            jlpt_level=word_info["jlpt_level"]
        )
        
        # 추가 정보 병합
        comprehensive["definitions"] = word_info.get("definitions", [])
        comprehensive["examples"] = word_info.get("examples", [])
        comprehensive["related"] = word_info.get("related", [])
        
        results.append(comprehensive)
    
    return results


def save_comprehensive_words(data: List[Dict], filename: str = "comprehensive_words.json") -> bool:
    """종합 단어 데이터 저장"""
    try:
        filepath = os.path.join(DATA_DIR, filename)
        db = {
            "metadata": {
                "version": "1.0.0",
                "last_updated": datetime.now().isoformat(),
                "total_words": len(data),
                "description": "듀오링고 스타일 종합 단어 학습 데이터"
            },
            "words": data
        }
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(db, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"❌ Save Error: {e}")
        return False


if __name__ == "__main__":
    print("📚 Generating comprehensive word data...")
    
    sample_data = generate_sample_words()
    
    if save_comprehensive_words(sample_data):
        print(f"✅ Saved {len(sample_data)} comprehensive words")
    
    # 샘플 출력
    print("\n📋 Sample Word Structure:")
    sample = sample_data[0]
    print(f"Word: {sample['word']} ({sample['reading']})")
    print(f"Meaning: {sample['meaning']}")
    print(f"Type: {sample['word_type']}")
    print(f"JLPT: {sample['jlpt_level']}")
    print(f"Conjugations: {list(sample.get('conjugations', {}).keys())}")
    print(f"Learning Quiz Count: {len(sample['learning']['grammar_quiz'])}")
