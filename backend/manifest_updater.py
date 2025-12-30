"""
manifest_updater.py - 데이터 매니페스트 업데이트 유틸리티 (Safe & Shared Edition)
"""
import os
import json
import sys
from datetime import datetime

# 최상위 경로 기준 설정
BASE_DIR = os.path.join(os.path.dirname(__file__), '..')
MANIFEST_PATH = os.path.join(BASE_DIR, 'js', 'app_data_manifest.js')
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

def update_manifest():
    """모든 데이터 JSON을 분석하여 JS 매니페스트 파일을 업데이트합니다."""
    # stdout wrap 제거 (공통 모듈로 사용 시 버퍼 폐쇄 문제 방지)
    try:
        print(f"[Manifest] Updating manifest at {MANIFEST_PATH}")
    except:
        pass
    
    # 개별 파일별 계산
    total_words = 0
    collected_path = os.path.join(DATA_DIR, 'collected_words.json')
    if os.path.exists(collected_path):
        with open(collected_path, 'r', encoding='utf-8') as f:
            total_words = len(json.load(f))

    total_characters = 0
    total_actions = 0
    chars_path = os.path.join(DATA_DIR, 'characters.json')
    if os.path.exists(chars_path):
        with open(chars_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            total_characters = data.get('metadata', {}).get('total_characters', 0)
            total_actions = data.get('metadata', {}).get('total_actions', 0)

    total_kanji = 0
    kanji_path = os.path.join(DATA_DIR, 'kanji_data.json')
    if os.path.exists(kanji_path):
        with open(kanji_path, 'r', encoding='utf-8') as f:
            total_kanji = len(json.load(f).get('kanji_list', []))

    total_grammar = 0
    grammar_path = os.path.join(DATA_DIR, 'grammar_data.json')
    if os.path.exists(grammar_path):
        with open(grammar_path, 'r', encoding='utf-8') as f:
            total_grammar = len(json.load(f).get('grammar_list', []))

    total_dialogues = 0
    dialogue_path = os.path.join(DATA_DIR, 'daily_dialogues.json')
    if os.path.exists(dialogue_path):
        with open(dialogue_path, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                total_dialogues = len(data) if isinstance(data, list) else 0
            except:
                total_dialogues = 0

    # JS 내용 생성
    manifest_content = f"""/**
 * JAP_BONG_PRO - App Data Manifest
 * 이 파일은 데이터 수집 시스템에 의해 자동으로 업데이트됩니다.
 */
window.JAP_BONG_DATA = {{
    "version": "1.0.{int(datetime.now().timestamp())}",
    "last_updated": "{datetime.now().isoformat()}",
    "total_words": {total_words},
    "total_characters": {total_characters},
    "total_actions": {total_actions},
    "total_kanji": {total_kanji},
    "total_grammar": {total_grammar},
    "total_dialogues": {total_dialogues},
    "triggers": {{
        "daily_evolution": true,
        "ai_active": true
    }}
}};
"""
    
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        f.write(manifest_content)
    
    try:
        print("[Success] Manifest updated.")
    except:
        pass

if __name__ == "__main__":
    update_manifest()
