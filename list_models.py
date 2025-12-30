
import google.generativeai as genai
import sys
import os
sys.path.append(os.path.join(os.getcwd(), 'backend'))
import app_config as config

genai.configure(api_key=config.GOOGLE_API_KEY)

print("Listing models...")
try:
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)
except Exception as e:
    print(f"Error listing models: {e}")
