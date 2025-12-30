"""
asset_manager.py - 단어별 시각적 자산(아이콘, 이미지) 관리 시스템

- 기초 단어(동물, 사물 등)에 대한 아이콘/이미지 매핑
- 캐릭터 시스템의 액션 패턴과 동사 연동
- 외부 무료 이미지 API 연동 (추후 확장)
"""

import os
import json
from typing import Dict, Optional

# 기초 범주별 아이콘 매핑 (Emoji & FontAwesome)
BASIC_ASSET_MAPPING = {
    # 동물 (Animals)
    "개": {"icon": "🐶", "fa": "fa-dog", "category": "animal"},
    "고양이": {"icon": "🐱", "fa": "fa-cat", "category": "animal"},
    "새": {"icon": "🐦", "fa": "fa-dove", "category": "animal"},
    "물고기": {"icon": "🐟", "fa": "fa-fish", "category": "animal"},
    "토끼": {"icon": "🐰", "fa": "fa-rabbit", "category": "animal"},
    "말": {"icon": "🐴", "fa": "fa-horse", "category": "animal"},
    "원숭이": {"icon": "🐵", "fa": "fa-monkey", "category": "animal"},
    "곰": {"icon": "🐻", "fa": "fa-bear", "category": "animal"},
    "사자": {"icon": "🦁", "fa": "fa-lion", "category": "animal"},
    "코끼리": {"icon": "🐘", "fa": "fa-elephant", "category": "animal"},
    
    # 음식 (Food)
    "사과": {"icon": "🍎", "fa": "fa-apple-whole", "category": "food"},
    "바나나": {"icon": "🍌", "fa": "fa-banana", "category": "food"},
    "포도": {"icon": "🍇", "fa": "fa-grapes", "category": "food"},
    "빵": {"icon": "🍞", "fa": "fa-bread-slice", "category": "food"},
    "우유": {"icon": "🥛", "fa": "fa-glass-water", "category": "food"},
    "밥": {"icon": "🍚", "fa": "fa-bowl-rice", "category": "food"},
    "커피": {"icon": "☕", "fa": "fa-coffee", "category": "food"},
    "차": {"icon": "🍵", "fa": "fa-tea-cup", "category": "food"},
    "고기": {"icon": "🥩", "fa": "fa-meat", "category": "food"},
    "생선": {"icon": "🐟", "fa": "fa-fish", "category": "food"},
    
    # 사물/교통 (Objects/Transport)
    "차": {"icon": "🚗", "fa": "fa-car", "category": "transport"},
    "버스": {"icon": "🚌", "fa": "fa-bus", "category": "transport"},
    "기차": {"icon": "🚆", "fa": "fa-train", "category": "transport"},
    "비행기": {"icon": "✈️", "fa": "fa-plane", "category": "transport"},
    "자전거": {"icon": "🚲", "fa": "fa-bicycle", "category": "transport"},
    "책": {"icon": "📖", "fa": "fa-book", "category": "object"},
    "컴퓨터": {"icon": "💻", "fa": "fa-desktop", "category": "object"},
    "핸드폰": {"icon": "📱", "fa": "fa-mobile-screen", "category": "object"},
    "집": {"icon": "🏠", "fa": "fa-house", "category": "object"},
    "학교": {"icon": "🏫", "fa": "fa-school", "category": "object"},
    "병원": {"icon": "🏥", "fa": "fa-hospital", "category": "object"},
    
    # 자연/날씨 (Nature/Weather)
    "해": {"icon": "☀️", "fa": "fa-sun", "category": "nature"},
    "달": {"icon": "🌙", "fa": "fa-moon", "category": "nature"},
    "별": {"icon": "⭐", "fa": "fa-star", "category": "nature"},
    "구름": {"icon": "☁️", "fa": "fa-cloud", "category": "nature"},
    "비": {"icon": "🌧️", "fa": "fa-cloud-showers-heavy", "category": "nature"},
    "눈": {"icon": "❄️", "fa": "fa-snowflake", "category": "nature"},
    "산": {"icon": "⛰️", "fa": "fa-mountain", "category": "nature"},
    "바다": {"icon": "🌊", "fa": "fa-water", "category": "nature"},
    "꽃": {"icon": "🌸", "fa": "fa-flower", "category": "nature"},
    "나무": {"icon": "🌳", "fa": "fa-tree", "category": "nature"},
}

# 캐릭터 액션과 동사 연동
VERB_TO_ACTION_MAPPING = {
    "먹다": "hungry",
    "마시다": "thirsty",
    "자다": "tired",
    "인사하다": "greeting",
    "축하하다": "celebrating",
    "공부하다": "explaining",
    "달리다": "running",
    "웃다": "laughing",
    "울다": "sad_tears",
    "화내다": "angry",
}

def get_visual_asset(word_kr: Optional[str], word_type: str = "noun") -> Dict:
    """단어에 해당하는 시각적 자산 정보 반환"""
    if not word_kr or not isinstance(word_kr, str):
        return {
            "type": "default",
            "icon": "📝",
            "fa": "fa-pen-to-square"
        }
    
    # 1. 기본 명사 매핑 확인
    if word_kr in BASIC_ASSET_MAPPING:
        return {
            "type": "icon",
            "data": BASIC_ASSET_MAPPING[word_kr]
        }
    
    # 2. 동사일 경우 캐릭터 액션 연동 확인
    if word_type == "verb" or "다" in word_kr:
        for verb, action in VERB_TO_ACTION_MAPPING.items():
            if verb in word_kr:
                return {
                    "type": "character_action",
                    "action_id": action
                }
                
    # 3. 매핑이 없을 경우 기본값
    return {
        "type": "default",
        "icon": "📝",
        "fa": "fa-pen-to-square"
    }

def enrich_word_with_asset(word_data: Dict) -> Dict:
    """단어 데이터 객체에 시각적 자산 필드 추가"""
    kr_meaning = word_data.get('translation', word_data.get('kr', ''))
    word_type = word_data.get('type', 'noun')
    
    asset = get_visual_asset(kr_meaning, word_type)
    word_data['visual_asset'] = asset
    
    return word_data

if __name__ == "__main__":
    # 테스트
    test_words = ["강아지", "사과", "먹다", "학교", "노트북"]
    for word in test_words:
        print(f"[{word}] Asset: {get_visual_asset(word)}")
