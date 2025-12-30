# 카카오 로그인 설정 가이드

## 1. 카카오 개발자 등록

1. [Kakao Developers](https://developers.kakao.com/)에 접속
2. 로그인 후 '내 애플리케이션' → '애플리케이션 추가하기'
3. 앱 이름: `JAP-BONG PRO`
4. 사업자명 입력 후 저장

## 2. 앱 키 확인

- **앱 설정 → 앱 키**에서 `JavaScript 키` 복사
- 이 키를 `js/auth_provider.js`의 `KAKAO_APP_KEY`에 입력

```javascript
KAKAO_APP_KEY: 'YOUR_JAVASCRIPT_KEY_HERE',
```

## 3. 플랫폼 등록

- **앱 설정 → 플랫폼**
- Web 플랫폼 추가:
  - 사이트 도메인: `https://your-app.netlify.app`
  - 로컬 테스트: `http://localhost:3000`

## 4. 카카오 로그인 활성화

- **제품 설정 → 카카오 로그인**
- 활성화 설정: ON
- Redirect URI 등록:
  - `https://your-app.netlify.app`
  - `http://localhost:3000`

## 5. 동의 항목 설정

- **제품 설정 → 카카오 로그인 → 동의항목**
- 필수 동의:
  - 닉네임
  - 프로필 사진
- 선택 동의:
  - 이메일

## 6. 테스트

1. 로컬에서 앱 실행
2. 로그인 화면에서 '카카오로 계속하기' 클릭
3. 카카오 계정으로 로그인
4. 동의 후 앱으로 리다이렉트

---

## Google 로그인 설정

### 1. Google Cloud Console

1. [Google Cloud Console](https://console.cloud.google.com/)에 접속
2. 새 프로젝트 생성: `JAP-BONG-PRO`
3. **API 및 서비스 → 사용자 인증 정보**
4. **사용자 인증 정보 만들기 → OAuth 클라이언트 ID**

### 2. OAuth 클라이언트 설정

- 애플리케이션 유형: 웹 애플리케이션
- 승인된 JavaScript 원본:
  - `https://your-app.netlify.app`
  - `http://localhost:3000`
- 승인된 리디렉션 URI:
  - `https://your-app.netlify.app`

### 3. 클라이언트 ID 적용

```javascript
GOOGLE_CLIENT_ID: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
```

---

## 배포 후 체크리스트

- [ ] Kakao JavaScript 키 설정
- [ ] Kakao 플랫폼 도메인 등록
- [ ] Google Client ID 설정
- [ ] Google 승인된 원본 도메인 등록
- [ ] 로그인 테스트 완료
