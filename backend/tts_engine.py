"""
tts_engine.py - High Quality TTS Engine (Safe Edition)
"""
import os
import asyncio
import edge_tts
import json
import sys
from datetime import datetime

if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
AUDIO_DIR = os.path.join(os.path.dirname(__file__), '..', 'audio', 'dialogues')
DIALOGUE_FILE = os.path.join(DATA_DIR, 'daily_dialogues.json')
VOICES = {"A": "ja-JP-NanamiNeural", "B": "ja-JP-KeitaNeural"}

async def generate_speech(text, voice, output_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

async def process_daily_tts():
    if not os.path.exists(DIALOGUE_FILE):
        print("[Error] No dialogue file.")
        return
    if not os.path.exists(AUDIO_DIR): os.makedirs(AUDIO_DIR, exist_ok=True)

    with open(DIALOGUE_FILE, 'r', encoding='utf-8') as f:
        dialogues = json.load(f)

    print(f"[TTS] Processing {len(dialogues)} dialogues...")
    for d in dialogues:
        if not isinstance(d, dict) or 'dialogue' not in d: continue
        for i, line in enumerate(d['dialogue']):
            if not isinstance(line, dict): continue # line must be a dict
            filename = f"dialogue_{d.get('id', 'unknown')}_{i}.mp3"
            path = os.path.join(AUDIO_DIR, filename)
            if not os.path.exists(path):
                print(f"  Generating: {filename}")
                await generate_speech(line.get('jp', ''), VOICES.get(line.get('speaker', 'A'), "ja-JP-NanamiNeural"), path)
            line['audio_url'] = f"audio/dialogues/{filename}"

    with open(DIALOGUE_FILE, 'w', encoding='utf-8') as f:
        json.dump(dialogues, f, ensure_ascii=False, indent=2)
    print("[Success] TTS Processing Complete.")

if __name__ == "__main__":
    asyncio.run(process_daily_tts())
