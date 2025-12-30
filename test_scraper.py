
import sys
import os
import json
sys.path.append(os.path.join(os.getcwd(), 'backend'))

try:
    from word_collector import scrape_naver_dict
    print("✅ word_collector imported")
except ImportError as e:
    print(f"❌ Import Failed: {e}")
    sys.exit(1)

def test_scraper(word):
    print(f"\n--- Testing Scraper for '{word}' ---")
    res = scrape_naver_dict(word)
    if res:
        print(json.dumps(res, ensure_ascii=False, indent=2))
        print("✅ Scraper Success")
    else:
        print("❌ Scraper Failed (Returned None)")

if __name__ == "__main__":
    test_scraper("猫")
    test_scraper("食べる")
