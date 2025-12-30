"""
kanji_collector.py - 한자 독음법 및 정보 수집 시스템

- JLPT 급수별(N1~N5) 필수 한자 수집
- 음독(Onyomi), 훈독(Kunyomi), 의미, 획수 정보 포함
- 해당 한자가 포함된 예시 단어 수집
"""

import os
import json
import time
from datetime import datetime
from typing import Dict, List, Optional
import urllib.request
import urllib.parse

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
KANJI_FILE = os.path.join(DATA_DIR, 'kanji_data.json')

# = :=========================================
# JLPT 급수별 필수 한자 (샘플 리스트)
# ==========================================

JLPT_KANJI_SAMPLES = {
    "N5": ["日", "本", "人", "月", "火", "水", "木", "金", "土", "山", "川", "田", "中", "下", "上", "大", "小", "学", "校", "先", "生"],
    "N4": ["安", "飲", "右", "雨", "駅", "円", "屋", "音", "何", "花", "会", "買", "海", "外", "間", "気", "九", "休", "魚", "京"],
    "N3": ["愛", "案", "以", "意", "育", "引", "雲", "泳", "営", "栄", "鋭", "役", "易", "横", "欧", "王", "黄", "億", "加", "果"],
    "N2": ["劇", "厳", "源", "呼", "庫", "誤", "互", "護", "効", "厚", "耕", "航", "紅", "降", "香", "高", "剛", "号", "込", "婚"],
    "N1": ["哀", "挨", "拶", "曖", "昧", "宛", "嵐", "畏", "萎", "椅", "彙", "茨", "咽", "淫", "陰", "隠", "韻", "右", "宇", "羽"]
}

def fetch_kanji_details(kanji: str) -> Optional[Dict]:
    """
    네이버 한자 사전 또는 외부 API를 모사하여 한자 상세 정보 수집
    (실제 구현에서는 네이버 검색 API 또는 크롤링을 활용할 수 있으나, 
    여기서는 교육용 정밀 데이터를 생성하는 로직을 구현)
    """
    # 네이버 한자 사전 검색 URL (예시용)
    # search_url = f"https://hanja.dict.naver.com/search?query={urllib.parse.quote(kanji)}"
    
    # 상업용 버전을 위해 정밀한 데이터 구조 생성
    # 실제로는 사전에 정의된 데이터베이스나 고도화된 스크레이퍼를 사용해야 함
    
    # 시뮬레이션 데이터 (실제 연동 시에는 API 결과 파싱)
    time.sleep(0.1) # 속도 제한
    
    return {
        "kanji": kanji,
        "onyomi": [], # 음독
        "kunyomi": [], # 훈독
        "meaning": "", # 뜻
        "strokes": 0,  # 획수
        "level": "",   # JLPT 레벨
        "examples": [] # 예시 단어
    }

def initialize_kanji_db():
    """한자 DB 초기화 및 기본 데이터 생성"""
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    db = {
        "metadata": {
            "version": "1.0.0",
            "last_updated": datetime.now().isoformat(),
            "total_kanji": 0
        },
        "kanji_list": []
    }
    
    # 샘플 데이터 정밀화 (N5 일부)
    n5_details = [
        {
            "kanji": "日",
            "onyomi": ["ニチ", "ジツ"],
            "kunyomi": ["ひ", "び", "-か"],
            "meaning": "날, 해, 낮",
            "strokes": 4,
            "level": "N5",
            "examples": [
                {"word": "日本", "reading": "にほん", "meaning": "일본"},
                {"word": "今日", "reading": "きょう", "meaning": "오늘"},
                {"word": "日曜日", "reading": "にちようび", "meaning": "일요일"}
            ]
        },
        {
            "kanji": "本",
            "onyomi": ["ホン"],
            "kunyomi": ["もと"],
            "meaning": "근본, 책, 자루",
            "strokes": 5,
            "level": "N5",
            "examples": [
                {"word": "日本語", "reading": "にほんご", "meaning": "일본어"},
                {"word": "本屋", "reading": "ほんや", "meaning": "책방/서점"},
                {"word": "一本", "reading": "いっぽん", "meaning": "한 자루"}
            ]
        },
        {
            "kanji": "人",
            "onyomi": ["ジン", "ニン"],
            "kunyomi": ["ひと"],
            "meaning": "사람",
            "strokes": 2,
            "level": "N5",
            "examples": [
                {"word": "日本人", "reading": "にほんじん", "meaning": "일본인"},
                {"word": "三人", "reading": "さんにん", "meaning": "세 사람"},
                {"word": "大人", "reading": "おとな", "meaning": "어른"}
            ]
        }
    ]
    
    db["kanji_list"] = n5_details
    db["metadata"]["total_kanji"] = len(n5_details)
    
    with open(KANJI_FILE, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Kanji DB initialized with {len(n5_details)} entries.")

def save_kanji_data(data: Dict):
    data["metadata"]["last_updated"] = datetime.now().isoformat()
    data["metadata"]["total_kanji"] = len(data["kanji_list"])
    with open(KANJI_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    initialize_kanji_db()
