"""
word_collector.py - 야금야금 단어 수집 시스템 (확장판)

매일 네이버 사전에서 단어+예문을 수집하여 로컬 JSON DB에 저장합니다.
- JLPT 레벨별 (N5~N1)
- 학교급별 (중학교, 고등학교)
- 주제별 (여행, 음식, 비즈니스 등)
- 한 번에 300~500개 단어 수집 가능
"""

import os
import json
import urllib.request
import urllib.parse
from datetime import datetime
from typing import List, Dict, Optional
import time

# 설정
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
COLLECTED_WORDS_FILE = os.path.join(DATA_DIR, 'collected_words.json')

# 환경변수에서 API 키 로드 (하드코딩 금지!)
NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")

if not NAVER_CLIENT_ID or not NAVER_CLIENT_SECRET:
    print("⚠️ NAVER API keys not found. Set NAVER_CLIENT_ID and NAVER_CLIENT_SECRET environment variables.")

# ==========================================
# 수집 대상 카테고리 정의 (대폭 확장)
# ==========================================
COLLECTION_CATEGORIES = {
    # JLPT N5 (가장 기초) - 약 100단어
    "jlpt_n5": {
        "name": "JLPT N5 기초",
        "level": "beginner",
        "seed_words": [
            # 인사/기본
            "こんにちは", "ありがとう", "すみません", "はい", "いいえ", "おはよう", "こんばんは", "さようなら",
            # 숫자
            "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万",
            # 요일/시간
            "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日", "今日", "明日", "昨日",
            # 가족
            "父", "母", "兄", "姉", "弟", "妹", "家族", "子供", "男", "女",
            # 기본 동사
            "食べる", "飲む", "見る", "聞く", "読む", "書く", "話す", "行く", "来る", "帰る",
            "買う", "売る", "作る", "使う", "待つ", "会う", "分かる", "知る", "思う", "考える",
            # 기본 형용사
            "大きい", "小さい", "新しい", "古い", "高い", "安い", "良い", "悪い", "長い", "短い",
            "暑い", "寒い", "熱い", "冷たい", "甘い", "辛い", "美味しい", "楽しい", "嬉しい", "悲しい"
        ]
    },
    
    # JLPT N4 (초급) - 약 150단어
    "jlpt_n4": {
        "name": "JLPT N4 초급",
        "level": "elementary",
        "seed_words": [
            # 학교/교육
            "学校", "大学", "先生", "学生", "授業", "勉強", "宿題", "試験", "教室", "図書館",
            # 직업/일
            "仕事", "会社", "社長", "社員", "店員", "医者", "看護師", "警察", "運転手", "料理人",
            # 장소
            "駅", "空港", "病院", "銀行", "郵便局", "警察署", "消防署", "市役所", "公園", "神社",
            # 교통
            "電車", "バス", "タクシー", "飛行機", "船", "自転車", "車", "道", "信号", "交差点",
            # 음식
            "ご飯", "パン", "肉", "魚", "野菜", "果物", "卵", "牛乳", "水", "お茶",
            # 일상 동사
            "起きる", "寝る", "着る", "脱ぐ", "洗う", "磨く", "掃除する", "洗濯する", "料理する", "買い物する",
            "働く", "休む", "遊ぶ", "泳ぐ", "走る", "歩く", "登る", "降りる", "乗る", "出る",
            # 일상 형용사/부사
            "静か", "賑やか", "便利", "不便", "危険", "安全", "簡単", "難しい", "有名", "特別"
        ]
    },
    
    # JLPT N3 (중급) - 약 200단어
    "jlpt_n3": {
        "name": "JLPT N3 중급",
        "level": "intermediate",
        "seed_words": [
            # 감정/심리
            "感動", "感謝", "心配", "緊張", "興奮", "失望", "後悔", "満足", "不満", "驚き",
            # 사회/관계
            "友人", "恋人", "夫婦", "親戚", "隣人", "上司", "部下", "同僚", "先輩", "後輩",
            # 비즈니스
            "会議", "報告", "連絡", "相談", "決定", "計画", "目標", "結果", "成功", "失敗",
            # 자연/환경
            "自然", "環境", "気候", "天気", "季節", "春", "夏", "秋", "冬", "雨",
            # 건강/의료
            "健康", "病気", "症状", "治療", "薬", "注射", "手術", "入院", "退院", "検査",
            # 추상적 개념
            "意味", "理由", "原因", "結果", "関係", "影響", "効果", "価値", "意見", "考え"
        ]
    },
    
    # JLPT N2 (상급)
    "jlpt_n2": {
        "name": "JLPT N2 상급",
        "level": "advanced",
        "seed_words": [
            "経済", "政治", "社会", "文化", "歴史", "科学", "技術", "産業", "貿易", "投資",
            "国際", "外交", "条約", "法律", "制度", "改革", "発展", "成長", "競争", "協力",
            "環境問題", "温暖化", "資源", "エネルギー", "公害", "リサイクル", "持続可能", "保護", "対策", "解決"
        ]
    },
    
    # JLPT N1 (최상급)
    "jlpt_n1": {
        "name": "JLPT N1 최상급",
        "level": "expert",
        "seed_words": [
            "概念", "抽象", "具体", "論理", "矛盾", "皮肉", "風刺", "比喩", "暗示", "象徴",
            "哲学", "倫理", "道徳", "価値観", "世界観", "人生観", "理念", "理想", "現実", "本質"
        ]
    },
    
    # 중학교 기초
    "middle_school": {
        "name": "중학교 일본어",
        "level": "school_middle",
        "seed_words": [
            "教科書", "ノート", "鉛筆", "消しゴム", "定規", "時間割", "給食", "部活動", "体育", "音楽",
            "数学", "国語", "理科", "社会", "英語", "美術", "家庭科", "技術", "道徳", "総合",
            "入学", "卒業", "進学", "受験", "合格", "不合格", "成績", "通知表", "テスト", "期末"
        ]
    },
    
    # 고등학교 기초
    "high_school": {
        "name": "고등학교 일본어",
        "level": "school_high",
        "seed_words": [
            "進路", "就職", "大学受験", "センター試験", "推薦", "面接", "志望校", "偏差値", "予備校", "塾",
            "文系", "理系", "専攻", "研究", "論文", "発表", "討論", "プレゼン", "レポート", "課題"
        ]
    },
    
    # 여행 일본어
    "travel": {
        "name": "여행 일본어",
        "level": "practical",
        "seed_words": [
            "空港", "駅", "ホテル", "レストラン", "観光", "地図", "案内", "予約", "チェックイン", "チェックアウト",
            "切符", "乗り換え", "出口", "入口", "改札", "ホーム", "特急", "新幹線", "路線", "終電",
            "両替", "クレジットカード", "現金", "レシート", "免税", "お土産", "記念品", "写真", "カメラ", "スマホ"
        ]
    },
    
    # 음식/레스토랑
    "food": {
        "name": "음식/레스토랑",
        "level": "practical",
        "seed_words": [
            "ラーメン", "寿司", "天ぷら", "うどん", "そば", "焼肉", "刺身", "丼", "弁当", "おにぎり",
            "味噌汁", "漬物", "豆腐", "納豆", "枝豆", "餃子", "カレー", "定食", "コース", "デザート",
            "メニュー", "注文", "会計", "お箸", "スプーン", "フォーク", "おしぼり", "お冷", "生ビール", "日本酒"
        ]
    },
    
    # 쇼핑
    "shopping": {
        "name": "쇼핑",
        "level": "practical",
        "seed_words": [
            "店", "値段", "セール", "割引", "特売", "レジ", "袋", "包装", "ギフト", "交換",
            "サイズ", "色", "在庫", "品切れ", "入荷", "取り寄せ", "配送", "送料", "返品", "保証"
        ]
    },
    
    # 비즈니스
    "business": {
        "name": "비즈니스 일본어",
        "level": "professional",
        "seed_words": [
            "名刺", "挨拶", "敬語", "謙譲語", "丁寧語", "お辞儀", "商談", "契約", "提案", "企画",
            "プロジェクト", "チーム", "リーダー", "マネージャー", "部長", "課長", "係長", "社長", "取締役", "株主"
        ]
    }
}


def load_collected_words() -> Dict:
    """저장된 단어 DB 로드"""
    try:
        if os.path.exists(COLLECTED_WORDS_FILE):
            with open(COLLECTED_WORDS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
    except Exception as e:
        print(f"[Load Error] {e}")
    
    return {
        "metadata": {
            "version": "2.0.0",
            "last_updated": None,
            "total_words": 0,
            "categories": []
        },
        "words": []
    }


def save_collected_words(data: Dict) -> bool:
    """단어 DB 저장"""
    try:
        data['metadata']['last_updated'] = datetime.now().isoformat()
        data['metadata']['total_words'] = len(data['words'])
        data['metadata']['categories'] = list(set(w.get('category', 'unknown') for w in data['words']))
        
        with open(COLLECTED_WORDS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"[Save Error] {e}")
        return False


def fetch_word_from_naver(word: str) -> Optional[Dict]:
    """네이버 검색 API로 단어 정보 조회 (백과사전 + 웹검색)"""
    try:
        enc_text = urllib.parse.quote(word)
        translation = None
        definition = None
        examples = []
        
        # 1. 백과사전 검색 (단어 정의)
        try:
            url_encyc = f"https://openapi.naver.com/v1/search/encyc.json?query={enc_text}&display=3"
            
            request = urllib.request.Request(url_encyc)
            request.add_header("X-Naver-Client-Id", NAVER_CLIENT_ID)
            request.add_header("X-Naver-Client-Secret", NAVER_CLIENT_SECRET)
            
            response = urllib.request.urlopen(request, timeout=5)
            
            if response.getcode() == 200:
                res_body = json.loads(response.read().decode('utf-8'))
                items = res_body.get('items', [])
                if items:
                    definition = items[0]['description'].replace("<b>", "").replace("</b>", "")
                    examples = [
                        {"title": item['title'].replace("<b>", "").replace("</b>", ""),
                         "desc": item['description'].replace("<b>", "").replace("</b>", "")}
                        for item in items[:3]
                    ]
        except Exception as e:
            print(f"  [Encyclopedia] {word}: {e}")
        
        # 2. 블로그 검색 (예문/활용)
        try:
            search_query = urllib.parse.quote(f"{word} 일본어 뜻")
            url_blog = f"https://openapi.naver.com/v1/search/blog.json?query={search_query}&display=2"
            
            request = urllib.request.Request(url_blog)
            request.add_header("X-Naver-Client-Id", NAVER_CLIENT_ID)
            request.add_header("X-Naver-Client-Secret", NAVER_CLIENT_SECRET)
            
            response = urllib.request.urlopen(request, timeout=5)
            
            if response.getcode() == 200:
                res_body = json.loads(response.read().decode('utf-8'))
                items = res_body.get('items', [])
                if items and not translation:
                    # 블로그에서 번역 추출 시도
                    desc = items[0]['description'].replace("<b>", "").replace("</b>", "")
                    if len(desc) > 10:
                        translation = desc[:100] + "..."
        except Exception as e:
            print(f"  [Blog] {word}: {e}")
        
        if definition or translation:
            return {
                "word": word,
                "translation": translation,
                "definition": definition,
                "examples": examples,
                "collected_at": datetime.now().isoformat()
            }
        
    except Exception as e:
        print(f"[Fetch Error] {word}: {e}")
    
    return None


def collect_words_by_category(category_key: str, limit: int = 50) -> List[Dict]:
    """특정 카테고리에서 단어 수집 (기본 50개)"""
    if category_key not in COLLECTION_CATEGORIES:
        print(f"Unknown category: {category_key}")
        return []
    
    category = COLLECTION_CATEGORIES[category_key]
    db = load_collected_words()
    existing_words = {w['word'] for w in db['words']}
    
    collected = []
    for word in category['seed_words']:
        if word in existing_words:
            continue
        
        if len(collected) >= limit:
            break
        
        print(f"  [{category_key}] Collecting: {word}")
        word_data = fetch_word_from_naver(word)
        
        if word_data:
            word_data['category'] = category_key
            word_data['category_name'] = category['name']
            word_data['level'] = category.get('level', 'unknown')
            collected.append(word_data)
            
            # API 속도 제한 대응 (0.2초 = 초당 5회)
            time.sleep(0.2)
    
    # 저장
    if collected:
        db['words'].extend(collected)
        if save_collected_words(db):
            print(f"✅ [{category_key}] Saved {len(collected)} words")
    
    return collected


def mass_collection(limit_per_category: int = 30) -> int:
    """대량 수집 - 모든 카테고리에서 한꺼번에 수집"""
    print(f"🚀 Mass Collection Started: {datetime.now()}")
    print(f"   Target: {limit_per_category} words per category")
    
    total_collected = 0
    for category_key in COLLECTION_CATEGORIES.keys():
        collected = collect_words_by_category(category_key, limit=limit_per_category)
        total_collected += len(collected)
        print(f"   [{category_key}] +{len(collected)} words")
    
    print(f"📊 Total Collected: {total_collected} words")
    
    # 매니페스트 업데이트 호출 (코드 삽입 트리거)
    try:
        from manifest_updater import update_manifest
        update_manifest()
    except Exception as e:
        print(f"⚠️ Manifest Update failed: {e}")
        
    return total_collected


def daily_collection_job():
    """매일 실행할 수집 작업 - 각 카테고리에서 10개씩 수집"""
    print(f"🌅 Daily Collection Started: {datetime.now()}")
    return mass_collection(limit_per_category=10)


def get_collected_words(category: str = None, limit: int = 50) -> List[Dict]:
    """수집된 단어 조회 API용"""
    db = load_collected_words()
    words = db['words']
    
    if category:
        words = [w for w in words if w.get('category') == category]
    
    return words[-limit:]


def get_collection_stats() -> Dict:
    """수집 통계"""
    db = load_collected_words()
    words = db['words']
    
    stats = {
        "total": len(words),
        "last_updated": db['metadata'].get('last_updated'),
        "by_category": {},
        "by_level": {}
    }
    
    for word in words:
        cat = word.get('category', 'unknown')
        level = word.get('level', 'unknown')
        stats['by_category'][cat] = stats['by_category'].get(cat, 0) + 1
        stats['by_level'][level] = stats['by_level'].get(level, 0) + 1
    
    return stats


# 테스트용
if __name__ == "__main__":
    print("🧪 Testing word collector (expanded)...")
    
    # 테스트: JLPT N5에서 5개 수집
    collected = collect_words_by_category("jlpt_n5", limit=5)
    print(f"\nCollected {len(collected)} words:")
    for w in collected:
        print(f"  - {w['word']}: {w['translation']}")
    
    # 통계 확인
    stats = get_collection_stats()
    print(f"\nStats: {stats}")
