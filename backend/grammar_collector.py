"""
grammar_collector.py - 일본어 문법 패턴 수집 및 관리 시스템

- JLPT 급수별(N1~N5) 필수 문법 패턴 수집
- 문법 패턴, 의미, 접속법(Formation), 상세 설명, 예문 포함
"""

import os
import json
from datetime import datetime
from typing import Dict, List, Optional

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
GRAMMAR_FILE = os.path.join(DATA_DIR, 'grammar_data.json')

def initialize_grammar_db():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    db = {
        "metadata": {
            "version": "1.0.0",
            "last_updated": datetime.now().isoformat(),
            "total_patterns": 0
        },
        "grammar_list": []
    }
    
    # 샘플 문법 데이터 (N5)
    n5_grammar = [
        {
            "pattern": "~は ~です",
            "meaning": "~은/는 ~입니다",
            "formation": "명사 + は + 명사 + です",
            "explanation": "가장 기본적인 주어와 술어를 나타내는 문형입니다. '은/는'에 해당하는 조사는 'は'를 사용하지만 발음은 '와(wa)'로 합니다.",
            "level": "N5",
            "examples": [
                {"jp": "私は学生です。", "kr": "저는 학생입니다.", "romaji": "watashi wa gakusei desu"},
                {"jp": "これは本です。", "kr": "이것은 책입니다.", "romaji": "kore wa hon desu"}
            ]
        },
        {
            "pattern": "~てください",
            "meaning": "~해 주세요",
            "formation": "동사 て형 + ください",
            "explanation": "상대방에게 정중하게 부탁하거나 지시할 때 사용합니다.",
            "level": "N5",
            "examples": [
                {"jp": "見てください。", "kr": "봐 주세요.", "romaji": "mite kudasai"},
                {"jp": "食べてください。", "kr": "먹어 주세요.", "romaji": "tabete kudasai"}
            ]
        },
        {
            "pattern": "~ています",
            "meaning": "~하고 있습니다 / ~해 있습니다",
            "formation": "동사 て형 + います",
            "explanation": "동작의 진행 상황이나 상태의 지속을 나타냅니다.",
            "level": "N5",
            "examples": [
                {"jp": "本を読んでいます。", "kr": "책을 읽고 있습니다.", "romaji": "hon wo yonde imasu"},
                {"jp": "ドアが開いています。", "kr": "문이 열려 있습니다.", "romaji": "doa ga aite imasu"}
            ]
        }
    ]
    
    db["grammar_list"] = n5_grammar
    db["metadata"]["total_patterns"] = len(n5_grammar)
    
    with open(GRAMMAR_FILE, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Grammar DB initialized with {len(n5_grammar)} patterns.")

if __name__ == "__main__":
    initialize_grammar_db()
