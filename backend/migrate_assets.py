"""
migrate_assets.py - 기존 수집된 단어들에 시각적 자산 연동 (일회성 마이그레이션)
"""

import os
import json
from asset_manager import enrich_word_with_asset

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
COLLECTED_WORDS_FILE = os.path.join(DATA_DIR, 'collected_words.json')

def migrate():
    if not os.path.exists(COLLECTED_WORDS_FILE):
        print("❌ collected_words.json not found.")
        return

    print("🔄 Migrating visual assets for existing words...")
    
    with open(COLLECTED_WORDS_FILE, 'r', encoding='utf-8') as f:
        db = json.load(f)

    words = db.get('words', [])
    updated_count = 0
    
    for word in words:
        # 이미 자산이 있는 경우는 건너뜀 (선택 사항)
        if 'visual_asset' not in word or word['visual_asset']['type'] == 'default':
            enrich_word_with_asset(word)
            updated_count += 1

    db['metadata']['last_updated'] = None # 세이브 함수에서 자동 설정됨
    
    with open(COLLECTED_WORDS_FILE, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

    print(f"✅ Successfully enriched {updated_count} words with visual assets.")

if __name__ == "__main__":
    migrate()
