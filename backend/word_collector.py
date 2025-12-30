"""
word_collector.py - Naver Dictionary Scraper & Database Manager
"""
import os
import time
import json
import requests
import urllib.parse
from typing import List, Dict, Optional, Any

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
os.makedirs(DATA_DIR, exist_ok=True)
COLLECTED_WORDS_FILE = os.path.join(DATA_DIR, 'collected_words.json')

# --- Helper Functions for API Support ---
COLLECTION_CATEGORIES = {
    "daily": {"name": "Daily Words", "seed_words": ["今日", "明日", "昨日"]},
    "food": {"name": "Food", "seed_words": ["寿司", "ラーメン", "天ぷら"]},
    "travel": {"name": "Travel", "seed_words": ["空港", "ホテル", "地図"]}
}

def get_collected_words(category: str = None, limit: int = 50) -> List[Dict]:
    """Retrieve collected words from JSON DB"""
    if not os.path.exists(COLLECTED_WORDS_FILE):
        return []
        
    try:
        with open(COLLECTED_WORDS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            # Flatten dict to list
            words_list = list(data.values())
            # Basic reverse sort (newest implied if appended) - in real db would sort by date
            return words_list[:limit]
    except Exception as e:
        print(f"Error reading words: {e}")
        return []

def get_collection_stats() -> Dict:
    """Return stats about collected database"""
    if not os.path.exists(COLLECTED_WORDS_FILE):
        return {"total_words": 0, "categories": 0}
    try:
        with open(COLLECTED_WORDS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return {"total_words": len(data), "categories": 1} # Simplified
    except:
        return {"total_words": 0, "categories": 0}

def collect_words_by_category(category: str, limit: int = 5) -> List[Dict]:
    """Mock collection trigger"""
    # In real app, this would use seed words to find more related words
    # For now, just scrape specific sample words if needed
    return []

def daily_collection_job() -> int:
    """Mock daily job"""
    return 0

# --- Naver Scraper Logic ---

def scrape_naver_dict(word: str) -> Dict:
    """
    Scrapes Naver Japanese Dictionary for a given word using internal API.
    Returns meanings, reading, and example sentences.
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://ja.dict.naver.com/',
        'Accept': 'application/json, text/plain, */*'
    }

    # Strategy 1: Auto-Complete API (Fast, Open, returns basic meaning)
    # https://ac.dict.naver.com/jako/ac?q={word}&q_enc=utf-8&st=11&r_format=json
    ac_url = f"https://ac.dict.naver.com/jako/ac?q={urllib.parse.quote(word)}&q_enc=utf-8&st=11&r_format=json"
    
    try:
        ac_response = requests.get(ac_url, headers={'User-Agent': headers['User-Agent']}, timeout=5)
        if ac_response.status_code == 200:
            ac_data = ac_response.json()
            # Structure: {"items": [[ [["reading/word"], ["kanji/word"], ...], ... ]]}
            if ac_data.get('items') and len(ac_data['items']) > 0:
                for item in ac_data['items'][0]:
                    # Item structure: [[part1], [part2], ... , [meaning], ...]
                    # part1 is usually reading or word, part2 is usually kanji or empty
                    part1 = item[0][0] if item[0] else ""
                    part2 = item[1][0] if item[1] else ""
                    meaning = item[3][0] if len(item) > 3 and item[3] else ""
                    
                    if word == part1 or word == part2:
                         return {
                            "word": word,
                            "reading": part1 if part1 != word else "", 
                            "meanings": [meaning],
                            "jlpt": "",
                            "part_of_speech": "",
                            "examples": [],
                            "source": "naver_ac_api"
                        }
    except Exception as e:
        print(f"AC Scraper failed: {e}")

    # Strategy 2: Internal Search API (Protected, but comprehensive)
    # https://ja.dict.naver.com/api3/jako/search?query=...&m=pc&range=all
    url = f"https://ja.dict.naver.com/api3/jako/search?query={urllib.parse.quote(word)}&m=pc&range=all"
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code != 200:
            print(f"Scraper Error: Status {response.status_code} | Body: {response.text[:200]}")
            return None
        
        data = response.json()
        
        # Validate structure
        if not data.get('searchResult') or not data['searchResult'].get('searchEntryList'):
            print(f"No search results found for '{word}'")
            return None

        # Determine best entry (exact match preference or first)
        entries = data['searchResult']['searchEntryList']
        target_entry = entries[0]
        
        # Extract Meanings
        meanings = []
        for m in target_entry.get('meanings', []):
            meanings.append(m.get('mean', ''))
            
        result = {
            "word": target_entry.get('entryName', word),
            "reading": target_entry.get('proun', ''),
            "meanings": meanings,
            "jlpt": target_entry.get('jlpt', ''),
            "part_of_speech": target_entry.get('parts_of_speech', ''),
            "examples": [], # API simple response often lacks examples, might need 2nd call if critical
            "source": "naver_api"
        }
        return result

    except Exception as e:
        print(f"Error scraping {word}: {e}")
        return None

def update_word_database(words_to_collect: List[str]):
    """
    Updates the local database with scraped words.
    """
    # Load existing
    if os.path.exists(COLLECTED_WORDS_FILE):
        try:
            with open(COLLECTED_WORDS_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except:
            data = {}
    else:
        data = {}

    for word in words_to_collect:
        if word in data:
            print(f"Skipping {word} (already exists)")
            continue
            
        print(f"Collecting {word} via Naver...")
        
        info = scrape_naver_dict(word)
        
        if info:
            data[word] = info
            # Save incrementally
            with open(COLLECTED_WORDS_FILE, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"✅ Saved {word}")
            time.sleep(1) # Rate limit courtesy
        else:
            print(f"❌ Failed to collect {word}")

if __name__ == "__main__":
    # Test
    update_word_database(["猫", "食べる", "幸せ"])
