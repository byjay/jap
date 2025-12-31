```javascript
const CACHE_NAME = 'jap-bong-fam-v29-japro';
const CACHE_URLS = [
    './',
    './index.html',
    './manifest.json',
    './css/styles.css',
    './images/app_icon.png',
    './images/guest.png',
    './images/BACK.png',
    './js/auth.js',
    './js/ui.js',
    './js/gamification.js',
    './js/commercial.js',
    './js/learning/conversation.js',
    './js/learning/characters.js',
    './js/learning/stroke_animation.js',
    './js/learning/vocabulary.js',
    './js/learning/word_study.js',
    './js/learning/progress.js',
    './js/travel/japan_travel.js',
    './js/travel/transportation.js',
    './js/travel/tokyo.js',
    './js/travel/osaka.js',
    './js/travel/kyoto.js',
    './js/travel/fukuoka.js',
    './js/travel/sapporo.js',
    './js/travel/okinawa.js',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// 설치 시 새 캐시 생성
self.addEventListener('install', (event) => {
    console.log('[SW] Installing new version:', CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // 즉시 활성화 (대기하지 않음)
    self.skipWaiting();
});

// 활성화 시 이전 캐시 모두 삭제 (강력 캐시 새로고침)
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating:', CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // 모든 클라이언트 즉시 제어
            return self.clients.claim();
        })
    );
});

// Fetch 요청 처리: 네트워크 우선, 실패시 캐시
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // 성공하면 캐시 업데이트
                if (response.ok) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // 네트워크 실패시 캐시에서 제공
                return caches.match(event.request);
            })
    );
});
