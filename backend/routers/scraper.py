from fastapi import APIRouter
import os
import json
import urllib.request
import urllib.parse

router = APIRouter()

# 네이버 API 인증 정보 (Railway 환경변수에서 가져옴)
NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")


@router.get("/dictionary/search")
def search_dictionary(q: str):
    """
    네이버 공식 API를 사용한 일본어 단어 검색
    - 파파고 번역 (일→한)
    - 백과사전 검색 (상세 정의)
    """
    results = {
        "query": q,
        "translation": None,
        "definition": None,
        "examples": [],
        "status": "success"
    }
    
    # 1. 파파고 번역 API (일본어 → 한국어)
    try:
        enc_text = urllib.parse.quote(q)
        data = f"source=ja&target=ko&text={enc_text}"
        url_papago = "https://openapi.naver.com/v1/papago/n2mt"
        
        request = urllib.request.Request(url_papago)
        request.add_header("X-Naver-Client-Id", NAVER_CLIENT_ID)
        request.add_header("X-Naver-Client-Secret", NAVER_CLIENT_SECRET)
        
        response = urllib.request.urlopen(request, data=data.encode("utf-8"), timeout=5)
        
        if response.getcode() == 200:
            res_body = json.loads(response.read().decode('utf-8'))
            results['translation'] = res_body['message']['result']['translatedText']
    except Exception as e:
        print(f"[Papago Error] {e}")
        results['translation'] = None
    
    # 2. 백과사전 API (상세 정의)
    try:
        enc_text = urllib.parse.quote(q)
        url_encyc = f"https://openapi.naver.com/v1/search/encyc.json?query={enc_text}&display=3"
        
        request = urllib.request.Request(url_encyc)
        request.add_header("X-Naver-Client-Id", NAVER_CLIENT_ID)
        request.add_header("X-Naver-Client-Secret", NAVER_CLIENT_SECRET)
        
        response = urllib.request.urlopen(request, timeout=5)
        
        if response.getcode() == 200:
            res_body = json.loads(response.read().decode('utf-8'))
            items = res_body.get('items', [])
            if items:
                # HTML 태그 제거
                clean_desc = items[0]['description'].replace("<b>", "").replace("</b>", "")
                results['definition'] = clean_desc
                results['examples'] = [
                    {"title": item['title'].replace("<b>", "").replace("</b>", ""), 
                     "desc": item['description'].replace("<b>", "").replace("</b>", ""),
                     "link": item.get('link', '')}
                    for item in items[:3]
                ]
    except Exception as e:
        print(f"[Encyclopedia Error] {e}")
    
    return results


@router.get("/translate")
def translate_text(text: str, source: str = "ja", target: str = "ko"):
    """
    파파고 번역 API - 범용 번역
    - source: 원본 언어 (ja, ko, en 등)
    - target: 번역 대상 언어
    """
    try:
        enc_text = urllib.parse.quote(text)
        data = f"source={source}&target={target}&text={enc_text}"
        url_papago = "https://openapi.naver.com/v1/papago/n2mt"
        
        request = urllib.request.Request(url_papago)
        request.add_header("X-Naver-Client-Id", NAVER_CLIENT_ID)
        request.add_header("X-Naver-Client-Secret", NAVER_CLIENT_SECRET)
        
        response = urllib.request.urlopen(request, data=data.encode("utf-8"), timeout=5)
        
        if response.getcode() == 200:
            res_body = json.loads(response.read().decode('utf-8'))
            return {
                "original": text,
                "translated": res_body['message']['result']['translatedText'],
                "source": source,
                "target": target,
                "status": "success"
            }
    except Exception as e:
        print(f"[Translate Error] {e}")
        return {"error": str(e), "status": "failed"}


@router.get("/dictionary/suggest")
def get_suggestions(q: str):
    """네이버 사전 자동완성 제안"""
    try:
        url = f"https://ac-dict.naver.com/jako/ac?q={urllib.parse.quote(q)}&st=1&r_lt=100&r_format=json"
        
        request = urllib.request.Request(url)
        request.add_header("User-Agent", "Mozilla/5.0")
        
        response = urllib.request.urlopen(request, timeout=3)
        if response.getcode() == 200:
            data = json.loads(response.read().decode('utf-8'))
            suggestions = []
            if 'items' in data and len(data['items']) > 0:
                for item in data['items'][0][:10]:
                    if isinstance(item, list) and len(item) > 0:
                        suggestions.append(item[0])
            return {"query": q, "suggestions": suggestions}
    except Exception as e:
        return {"error": str(e), "suggestions": []}
    return {"query": q, "suggestions": []}


