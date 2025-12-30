"""
daily_character_generator.py - Character Action AI Generator (Safe Edition)
"""
import os
import json
import time
import sys
from datetime import datetime
from typing import Dict, List, Optional
import google.generativeai as genai
from dotenv import load_dotenv

# Environment & Output Control
load_dotenv()
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
else:
    print("[WARN] GEMINI_API_KEY not found. AI generation disabled.")

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
CHARACTERS_FILE = os.path.join(DATA_DIR, 'characters.json')
CHARACTERS_DIR = os.path.join(os.path.dirname(__file__), '..', 'characters')

def generate_action_prompts(character: Dict, action_pattern: Dict) -> List[str]:
    char_name = character['kr_name']
    char_desc = character.get('personality', '')
    action_name = action_pattern['name']
    base_prompt = f"Professional anime style character design, {char_name}, {char_desc}. "
    action_prompt = f"Performing action: {action_name}. Consistent look, high quality, 2D vector style, Duolingo aesthetic."
    prompts = []
    for i in range(action_pattern.get('frames', 1)):
        prompts.append(f"{base_prompt}{action_prompt}, animation frame {i+1}/{action_pattern['frames']}")
    return prompts

def run_daily_generation(target_count: int = 10):
    print(f"[Character] Starting daily generation (Target: {target_count})...")
    if not os.path.exists(CHARACTERS_FILE):
        print("[Error] Characters DB not found.")
        return

    with open(CHARACTERS_FILE, 'r', encoding='utf-8') as f:
        db = json.load(f)

    characters = db.get('characters', [])
    if not characters:
        print("[Error] No characters defined.")
        return

    import random
    try:
        from character_system import ACTION_PATTERNS
    except ImportError:
        ACTION_PATTERNS = {"general": [{"id": "greeting", "name": "Greeting", "frames": 1}]}
        
    all_patterns = []
    for cat in ACTION_PATTERNS.values():
        all_patterns.extend(cat)

    generated_count = 0
    for _ in range(target_count * 2): # Try more times to find new actions
        char = random.choice(characters)
        pattern = random.choice(all_patterns)
        char_id = char['id']
        action_id = pattern['id']
        
        if action_id in char.get('actions', {}): continue
            
        print(f"  Generating action '{pattern['name']}' for {char['kr_name']}...")
        prompts = generate_action_prompts(char, pattern)
        category_dir = os.path.join(CHARACTERS_DIR, char['category'], char_id, action_id)
        os.makedirs(category_dir, exist_ok=True)
        
        for i in range(len(prompts)):
            frame_path = os.path.join(category_dir, f"frame_{i+1:03d}.webp")
            if not os.path.exists(frame_path):
                with open(frame_path, 'w') as f: f.write("DUMMY IMAGE DATA") 
        
        if 'actions' not in char: char['actions'] = {}
        char['actions'][action_id] = {
            "status": "completed",
            "last_updated": datetime.now().isoformat(),
            "frames": len(prompts),
            "folder_path": f"characters/{char['category']}/{char_id}/{action_id}"
        }
        generated_count += 1
        if generated_count >= target_count: break

    db['metadata']['last_updated'] = datetime.now().isoformat()
    db['metadata']['total_actions'] = sum(len(c.get('actions', {})) for c in db['characters'])
    
    with open(CHARACTERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

    print(f"[Success] Generated {generated_count} actions.")
    
    try:
        from manifest_updater import update_manifest
        update_manifest()
    except Exception as e:
        print(f"[Error] Manifest Update failed: {e}")

if __name__ == "__main__":
    run_daily_generation(10)
