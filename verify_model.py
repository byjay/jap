
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

def test_model_version():
    print("--- Testing Model Versions ---")
    try:
        # Test Chat Generation (Gemini)
        res = AIService.generate_conversation("Greeting", "N5")
        if "error" in res:
            print(f"❌ Error: {res['error']}")
        else:
            print(f"✅ Success! Response: {str(res)[:100]}...")
            
    except Exception as e:
        print(f"❌ Exception: {e}")

if __name__ == "__main__":
    test_model_version()
