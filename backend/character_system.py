"""
character_system.py - 듀오링고 스타일 캐릭터 애니메이션 시스템

상업용 캐릭터 관리 시스템
- 40개 캐릭터 (5개 카테고리)
- 100개 행동 패턴
- 매일 자동 생성
"""

import os
import json
from datetime import datetime
from typing import Dict, List, Optional

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
CHARACTERS_FILE = os.path.join(DATA_DIR, 'characters.json')
CHARACTERS_DIR = os.path.join(os.path.dirname(__file__), '..', 'characters')

# ==========================================
# 캐릭터 카테고리 정의
# ==========================================

CHARACTER_CATEGORIES = {
    "teachers": {
        "name": "선생님",
        "description": "일본어를 가르치는 친근한 선생님 캐릭터",
        "count": 8,
        "characters": [
            {"id": "tanaka_sensei", "name": "田中先生", "kr_name": "다나카 선생님", "personality": "친절하고 인내심 있는"},
            {"id": "yamamoto_sensei", "name": "山本先生", "kr_name": "야마모토 선생님", "personality": "열정적이고 재미있는"},
            {"id": "suzuki_sensei", "name": "鈴木先生", "kr_name": "스즈키 선생님", "personality": "차분하고 꼼꼼한"},
            {"id": "sato_sensei", "name": "佐藤先生", "kr_name": "사토 선생님", "personality": "활기차고 격려하는"},
            {"id": "watanabe_sensei", "name": "渡辺先生", "kr_name": "와타나베 선생님", "personality": "유머러스한"},
            {"id": "takahashi_sensei", "name": "高橋先生", "kr_name": "다카하시 선생님", "personality": "엄격하지만 따뜻한"},
            {"id": "ito_sensei", "name": "伊藤先生", "kr_name": "이토 선생님", "personality": "창의적인"},
            {"id": "kobayashi_sensei", "name": "小林先生", "kr_name": "고바야시 선생님", "personality": "모험적인"}
        ]
    },
    "students": {
        "name": "학생",
        "description": "함께 일본어를 배우는 학생 캐릭터",
        "count": 8,
        "characters": [
            {"id": "yuki", "name": "ゆき", "kr_name": "유키", "personality": "밝고 호기심 많은"},
            {"id": "kenji", "name": "けんじ", "kr_name": "켄지", "personality": "차분하고 성실한"},
            {"id": "sakura", "name": "さくら", "kr_name": "사쿠라", "personality": "활발하고 사교적인"},
            {"id": "taro", "name": "たろう", "kr_name": "타로", "personality": "소심하지만 노력하는"},
            {"id": "mina", "name": "みな", "kr_name": "미나", "personality": "똑똑하고 분석적인"},
            {"id": "ryu", "name": "りゅう", "kr_name": "류", "personality": "장난스러운"},
            {"id": "hana", "name": "はな", "kr_name": "하나", "personality": "예술적인"},
            {"id": "sota", "name": "そうた", "kr_name": "소타", "personality": "운동을 좋아하는"}
        ]
    },
    "companions": {
        "name": "마스코트",
        "description": "학습을 응원하는 귀여운 동물 캐릭터",
        "count": 8,
        "characters": [
            {"id": "shiba", "name": "シバ", "kr_name": "시바", "type": "시바견", "personality": "충성스럽고 귀여운"},
            {"id": "neko", "name": "ネコ", "kr_name": "네코", "type": "고양이", "personality": "도도하지만 사랑스러운"},
            {"id": "tanuki", "name": "タヌキ", "kr_name": "타누키", "type": "너구리", "personality": "장난꾸러기"},
            {"id": "usagi", "name": "ウサギ", "kr_name": "우사기", "type": "토끼", "personality": "순수하고 부드러운"},
            {"id": "kitsune", "name": "キツネ", "kr_name": "키츠네", "type": "여우", "personality": "영리하고 신비로운"},
            {"id": "panda", "name": "パンダ", "kr_name": "판다", "type": "판다", "personality": "느긋하고 귀여운"},
            {"id": "daruma", "name": "ダルマ", "kr_name": "다루마", "type": "달마", "personality": "끈기있는"},
            {"id": "maneki", "name": "招き猫", "kr_name": "마네키", "type": "복고양이", "personality": "행운을 부르는"}
        ]
    },
    "professionals": {
        "name": "전문가",
        "description": "다양한 직업의 전문가 캐릭터",
        "count": 8,
        "characters": [
            {"id": "chef", "name": "シェフ", "kr_name": "셰프", "job": "요리사"},
            {"id": "doctor", "name": "医者", "kr_name": "의사", "job": "의사"},
            {"id": "pilot", "name": "パイロット", "kr_name": "파일럿", "job": "조종사"},
            {"id": "artist", "name": "芸術家", "kr_name": "예술가", "job": "예술가"},
            {"id": "scientist", "name": "科学者", "kr_name": "과학자", "job": "과학자"},
            {"id": "musician", "name": "音楽家", "kr_name": "음악가", "job": "음악가"},
            {"id": "athlete", "name": "運動選手", "kr_name": "운동선수", "job": "운동선수"},
            {"id": "businessman", "name": "ビジネスマン", "kr_name": "비즈니스맨", "job": "사업가"}
        ]
    },
    "cultural": {
        "name": "문화",
        "description": "일본 전통 문화를 대표하는 캐릭터",
        "count": 8,
        "characters": [
            {"id": "samurai", "name": "侍", "kr_name": "사무라이", "culture": "무사도"},
            {"id": "geisha", "name": "芸者", "kr_name": "게이샤", "culture": "전통 예술"},
            {"id": "ninja", "name": "忍者", "kr_name": "닌자", "culture": "인술"},
            {"id": "sumo", "name": "力士", "kr_name": "스모선수", "culture": "스모"},
            {"id": "miko", "name": "巫女", "kr_name": "무녀", "culture": "신사"},
            {"id": "matsuri", "name": "祭り子", "kr_name": "마츠리", "culture": "축제"},
            {"id": "okami", "name": "女将", "kr_name": "오카미", "culture": "료칸"},
            {"id": "kabuki", "name": "歌舞伎役者", "kr_name": "가부키", "culture": "가부키"}
        ]
    }
}

# ==========================================
# 행동 패턴 정의 (100개)
# ==========================================

ACTION_PATTERNS = {
    # 학습 상황 (25개)
    "learning": [
        {"id": "happy_correct", "name": "정답 기쁨", "trigger": "correct_answer", "frames": 8},
        {"id": "thinking", "name": "생각 중", "trigger": "waiting_answer", "frames": 6},
        {"id": "confused", "name": "혼란", "trigger": "wrong_answer", "frames": 6},
        {"id": "celebrating", "name": "축하", "trigger": "level_up", "frames": 12},
        {"id": "encouraging", "name": "격려", "trigger": "retry", "frames": 8},
        {"id": "explaining", "name": "설명", "trigger": "hint_shown", "frames": 10},
        {"id": "listening", "name": "듣기", "trigger": "audio_playing", "frames": 6},
        {"id": "speaking", "name": "말하기", "trigger": "speaking_exercise", "frames": 8},
        {"id": "writing", "name": "쓰기", "trigger": "writing_exercise", "frames": 10},
        {"id": "reading", "name": "읽기", "trigger": "reading_exercise", "frames": 6},
        {"id": "pointing", "name": "가리키기", "trigger": "showing_answer", "frames": 6},
        {"id": "nodding", "name": "끄덕이기", "trigger": "understanding", "frames": 6},
        {"id": "head_shake", "name": "고개젓기", "trigger": "mistake", "frames": 6},
        {"id": "thumbs_up", "name": "엄지척", "trigger": "good_job", "frames": 4},
        {"id": "applause", "name": "박수", "trigger": "achievement", "frames": 8},
        {"id": "jump_joy", "name": "기쁨점프", "trigger": "streak", "frames": 10},
        {"id": "wave_hello", "name": "인사", "trigger": "lesson_start", "frames": 8},
        {"id": "wave_bye", "name": "작별", "trigger": "lesson_end", "frames": 8},
        {"id": "sit_study", "name": "공부자세", "trigger": "studying", "frames": 4},
        {"id": "stand_ready", "name": "준비자세", "trigger": "ready", "frames": 4},
        {"id": "dance_happy", "name": "춤", "trigger": "perfect_score", "frames": 16},
        {"id": "fist_pump", "name": "화이팅", "trigger": "motivation", "frames": 6},
        {"id": "peace_sign", "name": "브이", "trigger": "photo", "frames": 4},
        {"id": "bow", "name": "인사", "trigger": "formal_greeting", "frames": 8},
        {"id": "salute", "name": "경례", "trigger": "respect", "frames": 4}
    ],
    
    # 감정 표현 (25개)
    "emotions": [
        {"id": "smile", "name": "미소", "emotion": "happy", "frames": 4},
        {"id": "laugh", "name": "웃음", "emotion": "very_happy", "frames": 8},
        {"id": "excited", "name": "흥분", "emotion": "excited", "frames": 10},
        {"id": "proud", "name": "자랑스러움", "emotion": "proud", "frames": 6},
        {"id": "disappointed", "name": "실망", "emotion": "sad", "frames": 6},
        {"id": "determined", "name": "결심", "emotion": "determined", "frames": 4},
        {"id": "curious", "name": "호기심", "emotion": "curious", "frames": 6},
        {"id": "surprised", "name": "놀람", "emotion": "surprised", "frames": 6},
        {"id": "nervous", "name": "긴장", "emotion": "nervous", "frames": 6},
        {"id": "relieved", "name": "안도", "emotion": "relieved", "frames": 6},
        {"id": "embarrassed", "name": "당황", "emotion": "embarrassed", "frames": 6},
        {"id": "sleepy", "name": "졸림", "emotion": "tired", "frames": 8},
        {"id": "energetic", "name": "활기", "emotion": "energetic", "frames": 8},
        {"id": "shy", "name": "수줍음", "emotion": "shy", "frames": 6},
        {"id": "confident", "name": "자신감", "emotion": "confident", "frames": 4},
        {"id": "worried", "name": "걱정", "emotion": "worried", "frames": 6},
        {"id": "focused", "name": "집중", "emotion": "focused", "frames": 4},
        {"id": "bored", "name": "지루함", "emotion": "bored", "frames": 6},
        {"id": "grateful", "name": "감사", "emotion": "grateful", "frames": 6},
        {"id": "love", "name": "사랑", "emotion": "love", "frames": 8},
        {"id": "crying_happy", "name": "감동눈물", "emotion": "touched", "frames": 8},
        {"id": "angry", "name": "화남", "emotion": "frustrated", "frames": 6},
        {"id": "scared", "name": "무서움", "emotion": "scared", "frames": 6},
        {"id": "hopeful", "name": "희망", "emotion": "hopeful", "frames": 4},
        {"id": "peaceful", "name": "평화", "emotion": "calm", "frames": 4}
    ],
    
    # 일본 문화 동작 (25개)
    "cultural": [
        {"id": "bowing_deep", "name": "깊은 절", "context": "formal", "frames": 10},
        {"id": "bowing_casual", "name": "가벼운 절", "context": "casual", "frames": 6},
        {"id": "tea_ceremony", "name": "다도", "context": "tea", "frames": 16},
        {"id": "origami", "name": "종이접기", "context": "craft", "frames": 12},
        {"id": "eating_ramen", "name": "라멘먹기", "context": "food", "frames": 10},
        {"id": "using_chopsticks", "name": "젓가락사용", "context": "food", "frames": 8},
        {"id": "wearing_kimono", "name": "기모노입기", "context": "clothing", "frames": 12},
        {"id": "shrine_prayer", "name": "신사참배", "context": "religion", "frames": 10},
        {"id": "onsen_relax", "name": "온천", "context": "relaxation", "frames": 8},
        {"id": "karaoke", "name": "노래방", "context": "entertainment", "frames": 10},
        {"id": "hanami", "name": "벚꽃구경", "context": "seasonal", "frames": 8},
        {"id": "taiko_drum", "name": "태고북", "context": "music", "frames": 12},
        {"id": "calligraphy", "name": "서예", "context": "art", "frames": 10},
        {"id": "ikebana", "name": "꽃꽂이", "context": "art", "frames": 10},
        {"id": "martial_arts", "name": "무술", "context": "sports", "frames": 12},
        {"id": "sumo_pose", "name": "스모자세", "context": "sports", "frames": 8},
        {"id": "ninja_move", "name": "닌자동작", "context": "historical", "frames": 10},
        {"id": "samurai_sword", "name": "검술", "context": "historical", "frames": 12},
        {"id": "geisha_fan", "name": "부채춤", "context": "dance", "frames": 10},
        {"id": "kabuki_pose", "name": "가부키포즈", "context": "theater", "frames": 8},
        {"id": "matsuri_dance", "name": "축제춤", "context": "festival", "frames": 12},
        {"id": "mochi_making", "name": "떡치기", "context": "food", "frames": 10},
        {"id": "sushi_chef", "name": "초밥만들기", "context": "food", "frames": 12},
        {"id": "sake_toast", "name": "사케건배", "context": "celebration", "frames": 6},
        {"id": "lucky_cat_wave", "name": "마네키손짓", "context": "luck", "frames": 8}
    ],
    
    # 학습 진행 (25개)
    "progress": [
        {"id": "level_up", "name": "레벨업", "trigger": "level_complete", "frames": 16},
        {"id": "streak_fire", "name": "연속학습", "trigger": "streak_bonus", "frames": 12},
        {"id": "hearts_full", "name": "하트만땅", "trigger": "full_hearts", "frames": 8},
        {"id": "hearts_lost", "name": "하트잃음", "trigger": "lost_heart", "frames": 8},
        {"id": "gem_collected", "name": "보석획득", "trigger": "gem_earned", "frames": 10},
        {"id": "xp_gained", "name": "경험치획득", "trigger": "xp_earned", "frames": 8},
        {"id": "practice_complete", "name": "연습완료", "trigger": "practice_done", "frames": 10},
        {"id": "lesson_start", "name": "강의시작", "trigger": "lesson_begin", "frames": 8},
        {"id": "lesson_complete", "name": "강의완료", "trigger": "lesson_done", "frames": 12},
        {"id": "chapter_complete", "name": "챕터완료", "trigger": "chapter_done", "frames": 16},
        {"id": "trophy_earned", "name": "트로피획득", "trigger": "achievement_unlocked", "frames": 14},
        {"id": "badge_earned", "name": "배지획득", "trigger": "badge_unlocked", "frames": 12},
        {"id": "daily_goal", "name": "일일목표", "trigger": "daily_complete", "frames": 12},
        {"id": "weekly_goal", "name": "주간목표", "trigger": "weekly_complete", "frames": 14},
        {"id": "perfect_lesson", "name": "완벽학습", "trigger": "no_mistakes", "frames": 16},
        {"id": "combo_bonus", "name": "콤보보너스", "trigger": "combo", "frames": 10},
        {"id": "speed_bonus", "name": "스피드보너스", "trigger": "fast_answer", "frames": 8},
        {"id": "accuracy_bonus", "name": "정확도보너스", "trigger": "high_accuracy", "frames": 8},
        {"id": "first_try", "name": "첫시도성공", "trigger": "first_attempt", "frames": 10},
        {"id": "comeback", "name": "복귀", "trigger": "return_learning", "frames": 10},
        {"id": "milestone", "name": "마일스톤", "trigger": "milestone_reached", "frames": 14},
        {"id": "ranking_up", "name": "랭킹상승", "trigger": "rank_up", "frames": 12},
        {"id": "friend_beat", "name": "친구추월", "trigger": "beat_friend", "frames": 10},
        {"id": "challenge_win", "name": "챌린지승리", "trigger": "challenge_complete", "frames": 14},
        {"id": "new_unlock", "name": "새잠금해제", "trigger": "content_unlocked", "frames": 10}
    ]
}


def load_characters() -> Dict:
    """캐릭터 DB 로드"""
    try:
        if os.path.exists(CHARACTERS_FILE):
            with open(CHARACTERS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
    except Exception as e:
        print(f"[Load Error] {e}")
    return {"metadata": {}, "characters": []}


def save_characters(data: Dict) -> bool:
    """캐릭터 DB 저장"""
    try:
        data['metadata']['last_updated'] = datetime.now().isoformat()
        data['metadata']['total_characters'] = len(data.get('characters', []))
        
        with open(CHARACTERS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"[Save Error] {e}")
        return False


def initialize_characters() -> Dict:
    """모든 캐릭터 초기화"""
    characters = []
    
    for category_id, category in CHARACTER_CATEGORIES.items():
        for char in category['characters']:
            character = {
                "id": char['id'],
                "category": category_id,
                "name": char['name'],
                "kr_name": char['kr_name'],
                "personality": char.get('personality', ''),
                "type": char.get('type', ''),
                "job": char.get('job', ''),
                "culture": char.get('culture', ''),
                "actions": {},
                "created_at": datetime.now().isoformat()
            }
            characters.append(character)
            print(f"  [{category_id}] {char['kr_name']} ({char['name']})")
    
    return {
        "metadata": {
            "version": "1.0.0",
            "last_updated": datetime.now().isoformat(),
            "total_characters": len(characters),
            "total_actions": 0
        },
        "categories": [
            {"id": cat_id, "name": cat["name"], "count": len(cat["characters"])}
            for cat_id, cat in CHARACTER_CATEGORIES.items()
        ],
        "action_categories": list(ACTION_PATTERNS.keys()),
        "total_action_patterns": sum(len(actions) for actions in ACTION_PATTERNS.values()),
        "characters": characters
    }


def get_action_count() -> int:
    """전체 액션 패턴 수 반환"""
    return sum(len(actions) for actions in ACTION_PATTERNS.values())


def get_character_by_id(char_id: str) -> Optional[Dict]:
    """ID로 캐릭터 조회"""
    db = load_characters()
    for char in db.get('characters', []):
        if char['id'] == char_id:
            return char
    return None


def get_characters_by_category(category: str) -> List[Dict]:
    """카테고리별 캐릭터 조회"""
    db = load_characters()
    return [c for c in db.get('characters', []) if c['category'] == category]


# 테스트
if __name__ == "__main__":
    print("🎭 Initializing character system...")
    
    data = initialize_characters()
    
    if save_characters(data):
        print(f"\n✅ Saved {data['metadata']['total_characters']} characters")
        print(f"📊 Total action patterns: {get_action_count()}")
