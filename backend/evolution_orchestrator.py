"""
evolution_orchestrator.py - 모든 매일 진화 작업을 총괄 실행하는 마스터 스크립트
"""

import subprocess
import os
import sys

import sys

# Windows 인코딩 대응
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 작업 순서 정의
JOBS = [
    "backend/word_collector.py",      # 단어 수집
    "backend/daily_character_generator.py", # 캐릭터 액션 생성
    "backend/daily_dialogue_generator.py",  # AI 대화로그 생성
    "backend/tts_engine.py",          # 음성 합치기
    "backend/manifest_updater.py"     # 최종 코드 삽입(매니페스트)
]

def run_evolution():
    print("--- JAP_BONG_PRO Living App Evolution Started ---")
    
    base_dir = os.path.dirname(os.path.dirname(__file__))
    
    for job in JOBS:
        script_path = os.path.join(base_dir, job)
        print(f"\n--- Running: {job} ---")
        try:
            # subprocess를 사용하여 각 스크립트 실행 (UTF-8 인코딩 강제)
            result = subprocess.run(
                [sys.executable, script_path], 
                check=True, 
                capture_output=True, 
                text=True, 
                encoding='utf-8', 
                errors='replace'
            )
            print(result.stdout)
        except subprocess.CalledProcessError as e:
            print(f"❌ Error in {job}:")
            print(e.stderr)
            
    print("\n✅ All evolution jobs completed.")

if __name__ == "__main__":
    run_evolution()
