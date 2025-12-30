"""
daily_dialogue_generator.py - AI Dialogue Generator (Safe Edition)
"""
import os
import json
import time
import sys
from datetime import datetime
from typing import List, Dict
import google.generativeai as genai
from dotenv import load_dotenv

# Environment & Output Control
load_dotenv()
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
DIALOGUE_FILE = os.path.join(DATA_DIR, 'daily_dialogues.json')

if not GEMINI_API_KEY:
    print("[WARN] GEMINI_API_KEY not found.")
    model = None
else:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')

def generate_daily_dialogues(count: int = 10) -> List[Dict]:
    if not model: return []
    print(f"[AI] Generating {count} daily dialogues...")
    
    prompt = f"Create {count} natural Japanese dialogues with 2 speakers. JSON list format. Include jp, ro, kr, grammar_explanation, action."
    
    try:
        response = model.generate_content(prompt)
        text = response.text.replace('```json', '').replace('```', '').strip()
        dialogues = json.loads(text)
        today = datetime.now().strftime("%Y-%m-%d")
        for i, d in enumerate(dialogues):
            d['date'] = today
            d['id'] = f"{datetime.now().strftime('%Y%m%d')}_{i+1:02d}"
        print(f"[Success] Generated {len(dialogues)} dialogues.")
        return dialogues
    except Exception as e:
        print(f"[Error] {e}")
        return []

def save_dialogues(new_dialogues: List[Dict]):
    if not os.path.exists(DATA_DIR): os.makedirs(DATA_DIR)
    db = []
    if os.path.exists(DIALOGUE_FILE):
        with open(DIALOGUE_FILE, 'r', encoding='utf-8') as f:
            try: db = json.load(f)
            except: db = []
    
    existing_ids = {d['id'] for d in db}
    for d in new_dialogues:
        if d['id'] not in existing_ids: db.append(d)
    
    db = db[-100:]
    with open(DIALOGUE_FILE, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)
    print(f"[Saved] Data stored in {DIALOGUE_FILE}")

if __name__ == "__main__":
    data = generate_daily_dialogues(10)
    if data: save_dialogues(data)
