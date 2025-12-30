"""
verb_conjugator.py - 일본어 동사 변형 시스템

일본어 동사의 10가지 활용형을 자동으로 생성합니다.
- 1류 (五段) 동사: 書く, 読む, 行く 등
- 2류 (一段) 동사: 食べる, 見る 등
- 3류 (不規則) 동사: する, 来る
"""

import os
import json
from datetime import datetime
from typing import Dict, List, Optional

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
VERB_CONJUGATIONS_FILE = os.path.join(DATA_DIR, 'verb_conjugations.json')

# ==========================================
# 동사 그룹별 활용 규칙
# ==========================================

# 1류 (五段) 동사 어미 변환표
GODAN_ENDINGS = {
    'う': {'masu': 'い', 'te': 'っ', 'ta': 'っ', 'nai': 'わ', 'potential': 'え', 'imperative': 'え', 'volitional': 'お'},
    'く': {'masu': 'き', 'te': 'い', 'ta': 'い', 'nai': 'か', 'potential': 'け', 'imperative': 'け', 'volitional': 'こ'},
    'ぐ': {'masu': 'ぎ', 'te': 'い', 'ta': 'い', 'nai': 'が', 'potential': 'げ', 'imperative': 'げ', 'volitional': 'ご'},
    'す': {'masu': 'し', 'te': 'し', 'ta': 'し', 'nai': 'さ', 'potential': 'せ', 'imperative': 'せ', 'volitional': 'そ'},
    'つ': {'masu': 'ち', 'te': 'っ', 'ta': 'っ', 'nai': 'た', 'potential': 'て', 'imperative': 'て', 'volitional': 'と'},
    'ぬ': {'masu': 'に', 'te': 'ん', 'ta': 'ん', 'nai': 'な', 'potential': 'ね', 'imperative': 'ね', 'volitional': 'の'},
    'ぶ': {'masu': 'び', 'te': 'ん', 'ta': 'ん', 'nai': 'ば', 'potential': 'べ', 'imperative': 'べ', 'volitional': 'ぼ'},
    'む': {'masu': 'み', 'te': 'ん', 'ta': 'ん', 'nai': 'ま', 'potential': 'め', 'imperative': 'め', 'volitional': 'も'},
    'る': {'masu': 'り', 'te': 'っ', 'ta': 'っ', 'nai': 'ら', 'potential': 'れ', 'imperative': 'れ', 'volitional': 'ろ'},
}

# て형/た형 조사 결합
TE_TA_SUFFIX = {
    'う': {'te': 'て', 'ta': 'た'},
    'く': {'te': 'て', 'ta': 'た'},
    'ぐ': {'te': 'で', 'ta': 'だ'},
    'す': {'te': 'て', 'ta': 'た'},
    'つ': {'te': 'て', 'ta': 'た'},
    'ぬ': {'te': 'で', 'ta': 'だ'},
    'ぶ': {'te': 'で', 'ta': 'だ'},
    'む': {'te': 'で', 'ta': 'だ'},
    'る': {'te': 'て', 'ta': 'た'},
}

# 불규칙 동사
IRREGULAR_VERBS = {
    'する': {
        'dictionary': 'する',
        'masu': 'します',
        'te': 'して',
        'ta': 'した',
        'nai': 'しない',
        'potential': 'できる',
        'passive': 'される',
        'causative': 'させる',
        'imperative': 'しろ',
        'volitional': 'しよう',
        'conditional': 'すれば'
    },
    '来る': {
        'dictionary': '来る',
        'masu': '来ます',
        'te': '来て',
        'ta': '来た',
        'nai': '来ない',
        'potential': '来られる',
        'passive': '来られる',
        'causative': '来させる',
        'imperative': '来い',
        'volitional': '来よう',
        'conditional': '来れば'
    },
    'くる': {
        'dictionary': 'くる',
        'masu': 'きます',
        'te': 'きて',
        'ta': 'きた',
        'nai': 'こない',
        'potential': 'こられる',
        'passive': 'こられる',
        'causative': 'こさせる',
        'imperative': 'こい',
        'volitional': 'こよう',
        'conditional': 'くれば'
    },
    '行く': {  # 특수 불규칙 (て형이 いって)
        'dictionary': '行く',
        'masu': '行きます',
        'te': '行って',
        'ta': '行った',
        'nai': '行かない',
        'potential': '行ける',
        'passive': '行かれる',
        'causative': '行かせる',
        'imperative': '行け',
        'volitional': '行こう',
        'conditional': '行けば'
    }
}


def detect_verb_group(verb: str) -> int:
    """동사 그룹(류) 판별"""
    if verb in IRREGULAR_VERBS or verb.endswith('する'):
        return 3
    
    if not verb.endswith('る'):
        return 1  # る로 안 끝나면 무조건 1류
    
    # る로 끝나는 경우: 2류 판별 (い단/え단 + る)
    if len(verb) >= 2:
        before_ru = verb[-2]
        ichidan_vowels = 'いえきけぎげしせじぜちてぢでにねひへびべみめりれ'
        if before_ru in ichidan_vowels:
            # 예외 처리: 1류인 る동사들
            godan_ru_verbs = ['帰る', '入る', '走る', '知る', '切る', '要る', '減る', '焦る', '限る', '握る', '散る', '練る', '滑る', 'かえる', 'はいる', 'はしる', 'しる', 'きる', 'いる']
            if verb in godan_ru_verbs:
                return 1
            return 2
    
    return 1


def conjugate_godan(verb: str) -> Dict[str, str]:
    """1류 (五段) 동사 활용"""
    if len(verb) < 1:
        return {}
    
    stem = verb[:-1]
    ending = verb[-1]
    
    if ending not in GODAN_ENDINGS:
        return {'error': f'Unknown ending: {ending}'}
    
    rules = GODAN_ENDINGS[ending]
    te_ta = TE_TA_SUFFIX[ending]
    
    return {
        'dictionary': verb,
        'masu': stem + rules['masu'] + 'ます',
        'te': stem + rules['te'] + te_ta['te'],
        'ta': stem + rules['ta'] + te_ta['ta'],
        'nai': stem + rules['nai'] + 'ない',
        'potential': stem + rules['potential'] + 'る',
        'passive': stem + rules['nai'] + 'れる',
        'causative': stem + rules['nai'] + 'せる',
        'imperative': stem + rules['imperative'],
        'volitional': stem + rules['volitional'] + 'う',
        'conditional': stem + rules['potential'] + 'ば'
    }


def conjugate_ichidan(verb: str) -> Dict[str, str]:
    """2류 (一段) 동사 활용"""
    if len(verb) < 2 or not verb.endswith('る'):
        return {'error': 'Not a valid ichidan verb'}
    
    stem = verb[:-1]
    
    return {
        'dictionary': verb,
        'masu': stem + 'ます',
        'te': stem + 'て',
        'ta': stem + 'た',
        'nai': stem + 'ない',
        'potential': stem + 'られる',
        'passive': stem + 'られる',
        'causative': stem + 'させる',
        'imperative': stem + 'ろ',
        'volitional': stem + 'よう',
        'conditional': stem + 'れば'
    }


def conjugate_verb(verb: str, meaning: str = None) -> Dict:
    """동사 활용 생성 (통합)"""
    group = detect_verb_group(verb)
    
    if verb in IRREGULAR_VERBS:
        conjugations = IRREGULAR_VERBS[verb]
    elif verb.endswith('する') and len(verb) > 2:
        # ~する 복합동사
        noun_part = verb[:-2]
        base = IRREGULAR_VERBS['する']
        conjugations = {k: noun_part + v for k, v in base.items()}
    elif group == 1:
        conjugations = conjugate_godan(verb)
    elif group == 2:
        conjugations = conjugate_ichidan(verb)
    else:
        conjugations = {'error': 'Unknown verb type'}
    
    return {
        'verb': verb,
        'meaning': meaning,
        'group': group,
        'group_name': ['', '五段 (1류)', '一段 (2류)', '不規則 (3류)'][group],
        'conjugations': conjugations,
        'created_at': datetime.now().isoformat()
    }


# ==========================================
# 필수 동사 목록 (JLPT N5 ~ N3)
# ==========================================
ESSENTIAL_VERBS = [
    # N5 기초 동사
    ('食べる', '먹다'),
    ('飲む', '마시다'),
    ('見る', '보다'),
    ('聞く', '듣다'),
    ('読む', '읽다'),
    ('書く', '쓰다'),
    ('話す', '말하다'),
    ('行く', '가다'),
    ('来る', '오다'),
    ('帰る', '돌아가다'),
    ('買う', '사다'),
    ('売る', '팔다'),
    ('作る', '만들다'),
    ('使う', '사용하다'),
    ('待つ', '기다리다'),
    ('会う', '만나다'),
    ('分かる', '알다/이해하다'),
    ('知る', '알다'),
    ('思う', '생각하다'),
    ('考える', '생각하다/고려하다'),
    ('する', '하다'),
    ('起きる', '일어나다'),
    ('寝る', '자다'),
    ('着る', '입다'),
    ('脱ぐ', '벗다'),
    ('洗う', '씻다'),
    ('歩く', '걷다'),
    ('走る', '달리다'),
    ('泳ぐ', '수영하다'),
    ('遊ぶ', '놀다'),
    
    # N4 동사
    ('働く', '일하다'),
    ('休む', '쉬다'),
    ('勉強する', '공부하다'),
    ('教える', '가르치다'),
    ('習う', '배우다'),
    ('覚える', '기억하다/외우다'),
    ('忘れる', '잊다'),
    ('開ける', '열다'),
    ('閉める', '닫다'),
    ('始める', '시작하다'),
    ('終わる', '끝나다'),
    ('変わる', '변하다'),
    ('変える', '바꾸다'),
    ('決める', '정하다'),
    ('探す', '찾다'),
    ('見つける', '발견하다'),
    ('届ける', '전하다/배달하다'),
    ('届く', '도착하다'),
    ('送る', '보내다'),
    ('受ける', '받다'),
    
    # N3 동사
    ('伝える', '전하다'),
    ('連絡する', '연락하다'),
    ('相談する', '상담하다'),
    ('頼む', '부탁하다'),
    ('断る', '거절하다'),
    ('許す', '용서하다'),
    ('諦める', '포기하다'),
    ('続ける', '계속하다'),
    ('やめる', '그만두다'),
    ('努力する', '노력하다'),
]


def generate_all_conjugations() -> List[Dict]:
    """모든 필수 동사 활용 생성"""
    results = []
    for verb, meaning in ESSENTIAL_VERBS:
        result = conjugate_verb(verb, meaning)
        results.append(result)
        print(f"✅ {verb} ({meaning}) - {result['group_name']}")
    return results


def save_conjugations(data: List[Dict]) -> bool:
    """동사 활용 데이터 저장"""
    try:
        db = {
            'metadata': {
                'version': '1.0.0',
                'last_updated': datetime.now().isoformat(),
                'total_verbs': len(data)
            },
            'verbs': data
        }
        with open(VERB_CONJUGATIONS_FILE, 'w', encoding='utf-8') as f:
            json.dump(db, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"❌ Save Error: {e}")
        return False


def load_conjugations() -> Dict:
    """저장된 동사 활용 로드"""
    try:
        if os.path.exists(VERB_CONJUGATIONS_FILE):
            with open(VERB_CONJUGATIONS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
    except Exception as e:
        print(f"[Load Error] {e}")
    return {'metadata': {}, 'verbs': []}


def get_verb_conjugation(verb: str) -> Optional[Dict]:
    """특정 동사 활용 조회"""
    db = load_conjugations()
    for v in db.get('verbs', []):
        if v['verb'] == verb:
            return v
    # 없으면 실시간 생성
    return conjugate_verb(verb)


# 테스트
if __name__ == "__main__":
    print("🔄 Generating verb conjugations...")
    all_data = generate_all_conjugations()
    
    if save_conjugations(all_data):
        print(f"\n✅ Saved {len(all_data)} verb conjugations")
    
    # 샘플 출력
    print("\n📋 Sample:")
    sample = conjugate_verb('食べる', '먹다')
    print(f"動詞: {sample['verb']} ({sample['meaning']})")
    print(f"グループ: {sample['group_name']}")
    for form, value in sample['conjugations'].items():
        print(f"  {form}: {value}")
