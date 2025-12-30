
import sys
import os
import json
sys.path.append(os.path.join(os.getcwd(), 'backend'))

try:
    from ai_service import AIService
    print("✅ AIService imported")
except ImportError as e:
    print(f"❌ Import Failed: {e}")
    sys.exit(1)

def test_word():
    print("\n--- Testing Word ---")
    res = AIService.generate_word_info("猫")
    print(json.dumps(res, ensure_ascii=False, indent=2))
    if "reading" in res: print("✅ Word Test Passed")
    else: print("❌ Word Test Failed")

def test_chat():
    print("\n--- Testing Chat ---")
    res = AIService.generate_conversation("Ordering in a Restaurant (식당에서 주문하기)", "N5")
    # print(json.dumps(res, ensure_ascii=False, indent=2))
    if "dialogue" in res: print("✅ Chat Test Passed")
    else: print("❌ Chat Test Failed")

def test_action():
    print("\n--- Testing Action ---")
    res = AIService.analyze_sentiment_for_action("I passed the exam!")
    print(json.dumps(res, ensure_ascii=False, indent=2))
    if "action_id" in res: print("✅ Action Test Passed")
    else: print("❌ Action Test Failed")

if __name__ == "__main__":
    # test_word() # Disabled: Word collection moved to Naver Scraper
    test_chat()
    test_action()
