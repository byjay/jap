(function () {
    // ==========================================================================
    //  COMMERCIAL CONFIGURATION (수익화 설정)
    //  * Phase 2에서 활성화 예정
    //  * FAMILY MODE: ADS DISABLED (가족 모드에서는 절대 광고 노출 금지)
    // ==========================================================================
    const COMM_CONFIG = {
        ENABLED: false, // Phase 1에서는 false로 설정 (절대 변경 금지)
        affiliate: {
            coupang: "https://link.coupang.com/a/c9Vuww", // 쿠팡 파트너스 메인 링크
            agoda_base: "https://www.agoda.com/partners/partnersearch.aspx?cid=[YOUR_ID]&city=", // 아고다 검색 딥링크
            trip_base: "https://kr.trip.com/hotels/list?cityname=", // 트립닷컴 검색
            klook_base: "https://www.klook.com/ko/search/?query=" // 클룩 검색
        },
        adsense: {
            enabled: true,
            interstitialInterval: 3, // 탭 전환 3회마다 전면 광고 노출
            clientId: "ca-pub-XXXXXXXXXXXXXX" // 구글 애드센스 클라이언트 ID
        }
    };

    let adClickCounter = 0;

    // ==========================================================================
    //  2. TASTE MODE (맛보기 모드)
    // ==========================================================================
    const TASTE_LIMITS = {
        CLICKS: 6, // 클릭 6회까지 허용
        TIME: 30000 // 30초까지 허용
    };

    // ==========================================================================
    //  1. COUPANG PARTNERS SHOP GENERATOR (여행 준비물 샵)
    // ==========================================================================
    const SHOP_ITEMS = [
        { cat: '통신/데이터', items: ['일본 유심(매일 2GB)', '도시락 와이파이', 'eSIM 무제한', '로밍 패스'] },
        { cat: '가방/수납', items: ['24인치 캐리어', '기내용 캐리어', '압축 파우치', '보조 가방', '여권 지갑'] },
        { cat: '전자기기', items: ['110v 돼지코', '멀티 어댑터', '보조 배터리 10000', '고속 충전기', '셀카봉'] },
        { cat: '생활/위생', items: ['여행용 세면도구', '동전 지갑', '휴족시간', '일회용 필름카메라', '상비약 파우치'] }
    ];

    function initCoupangShop() {
        if (!COMM_CONFIG.ENABLED) return;

        // 1. 샵 버튼 생성 (우측 하단 플로팅)
        const shopBtn = document.createElement('button');
        shopBtn.innerHTML = `
            <div class="relative group">
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow-lg animate-bounce whitespace-nowrap">
                    여행 필수품 특가!
                </div>
                <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-full shadow-xl flex items-center justify-center text-2xl border-2 border-white transform transition hover:scale-110 hover:rotate-12 cursor-pointer z-50">
                    🎒
                </div>
            </div>
        `;
        shopBtn.className = "fixed bottom-24 right-5 z-40";
        shopBtn.onclick = openShopModal;
        document.body.appendChild(shopBtn);

        // 2. 샵 모달 생성
        createShopModal();
    }

    function createShopModal() {
        if (document.getElementById('coupang-shop-modal')) return;

        let gridHtml = '';

        // 반복을 통해 아이템 그리드 생성
        for (let i = 0; i < 3; i++) {
            SHOP_ITEMS.forEach(cat => {
                cat.items.forEach(item => {
                    gridHtml += `
                        <a href="${COMM_CONFIG.affiliate.coupang}" target="_blank" 
                           class="flex flex-col items-center p-3 bg-gray-50 rounded-xl hover:bg-red-50 hover:border-red-200 border border-transparent transition group">
                            <div class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl mb-2 group-hover:scale-110 transition">
                                ${getIcon(item)}
                            </div>
                            <div class="text-xs font-bold text-gray-700 text-center line-clamp-1">${item}</div>
                            <div class="text-[10px] text-red-500 font-bold mt-1">최저가 보기 ></div>
                        </a>
                    `;
                });
            });
        }

        const modal = document.createElement('div');
        modal.id = 'coupang-shop-modal';
        modal.className = 'fixed inset-0 z-[1000] hidden';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeShopModal()"></div>
            <div class="absolute inset-x-0 bottom-0 h-[80vh] md:h-[90vh] md:w-[600px] md:inset-x-auto md:right-0 bg-white rounded-t-3xl md:rounded-l-3xl overflow-hidden flex flex-col shadow-2xl animate-slide-up">
                
                <!-- 헤더 -->
                <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-red-600 text-white">
                    <div>
                        <h2 class="font-bold text-lg">🎒 여행 준비물 체크리스트</h2>
                        <p class="text-xs text-red-100">쿠팡 로켓배송으로 내일 바로 도착!</p>
                    </div>
                    <button onclick="closeShopModal()" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40">✕</button>
                </div>

                <!-- 콘텐츠 -->
                <div class="flex-1 overflow-y-auto p-4">
                    <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
                        ${gridHtml}
                    </div>
                </div>

                <!-- 푸터 (광고 배너 영역) -->
                <div class="p-3 bg-gray-100 text-center text-xs text-gray-400">
                    <p>파트너스 활동을 통해 수수료를 제공받을 수 있습니다.</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function getIcon(name) {
        if (name.includes('유심') || name.includes('와이파이')) return '📶';
        if (name.includes('캐리어')) return '🧳';
        if (name.includes('어댑터') || name.includes('충전기')) return '🔌';
        if (name.includes('카메라')) return '📷';
        if (name.includes('약')) return '💊';
        return '🛍️';
    }

    window.openShopModal = () => document.getElementById('coupang-shop-modal').classList.remove('hidden');
    window.closeShopModal = () => document.getElementById('coupang-shop-modal').classList.add('hidden');


    // ==========================================================================
    //  2. ADSENSE INTERSTITIAL LOGIC (전면 광고 처리)
    // ==========================================================================

    function interceptNavigation() {
        if (!COMM_CONFIG.ENABLED) return;

        // window.switchDay 함수를 가로채기 (japan_travel.js 또는 각 도시 파일에서 정의됨)
        if (window.switchDay) {
            const originalFunc = window.switchDay;
            window.switchDay = function (day) {
                adClickCounter++;
                if (COMM_CONFIG.adsense.enabled && adClickCounter % COMM_CONFIG.adsense.interstitialInterval === 0) {
                    showInterstitialAd(() => originalFunc(day));
                } else {
                    originalFunc(day);
                }
            };
        }
    }

    function showInterstitialAd(callback) {
        const adModal = document.createElement('div');
        adModal.className = "fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center";
        adModal.innerHTML = `
            <div class="text-white mb-4 text-sm animate-pulse">광고 후 다음 일정으로 이동합니다...</div>
            <div class="w-[300px] h-[250px] bg-white flex items-center justify-center rounded text-gray-400 mb-4 relative overflow-hidden">
                <!-- 구글 애드센스 자리 -->
                <span class="z-10 font-bold">Google AdSense Area</span>
                <div class="absolute inset-0 bg-gray-100 animate-pulse"></div>
            </div>
            <button id="skip-ad-btn" class="px-6 py-2 bg-white text-black rounded-full font-bold text-sm opacity-50 cursor-not-allowed">
                3초 후 건너뛰기
            </button>
        `;
        document.body.appendChild(adModal);

        let count = 3;
        const btn = adModal.querySelector('#skip-ad-btn');
        const timer = setInterval(() => {
            count--;
            if (count <= 0) {
                clearInterval(timer);
                btn.textContent = "건너뛰기 ⏩";
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.add('hover:bg-gray-200');
                btn.onclick = () => {
                    adModal.remove();
                    callback();
                };
            } else {
                btn.textContent = `${count}초 후 건너뛰기`;
            }
        }, 1000);
    }


    // ==========================================================================
    //  3. DYNAMIC BOOKING LINK INJECTION (호텔/티켓 버튼 주입)
    // ==========================================================================

    function initBookingInjection() {
        if (!COMM_CONFIG.ENABLED) return;

        setInterval(() => {
            // fam 프로젝트의 모달 ID는 'app-modal'
            const modal = document.getElementById('app-modal');
            if (!modal || modal.classList.contains('hidden')) return;

            // 모달 제목 찾기 (fam 구조에 맞게 수정)
            // fam/js/travel/tokyo.js line 391: <h2 class="text-3xl font-black text-white leading-tight mb-1">${item.name}</h2>
            const titleEl = modal.querySelector('h2');
            if (!titleEl) return;

            const placeName = titleEl.textContent;

            // 버튼 넣을 위치: 탭 메뉴 아래 또는 개요 탭 내부
            // fam 구조: .p-6.pb-24 (content area)
            const container = modal.querySelector('.p-6.pb-24');

            if (container && !document.getElementById('affiliate-btn-group')) {
                injectButtons(container, placeName);
            }
        }, 1000);
    }

    function injectButtons(container, placeName) {
        let isHotel = placeName.includes('호텔') || placeName.includes('료칸') || placeName.includes('숙소');
        let isTransport = placeName.includes('패스') || placeName.includes('공항') || placeName.includes('열차') || placeName.includes('스카이라이너');
        let isSpot = !isHotel && !isTransport; // 나머지는 투어/티켓으로 간주 (간소화)

        const btnGroup = document.createElement('div');
        btnGroup.id = 'affiliate-btn-group';
        btnGroup.className = "flex gap-2 mb-4 animate-slide-up";

        if (isHotel) {
            btnGroup.innerHTML = `
                <button onclick="window.open('${COMM_CONFIG.affiliate.agoda_base}${encodeURIComponent(placeName)}')" 
                    class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-blue-700 flex items-center justify-center gap-2">
                    <span>🏨</span> 아고다 최저가
                </button>
                <button onclick="window.open('${COMM_CONFIG.affiliate.trip_base}${encodeURIComponent(placeName)}')" 
                    class="flex-1 py-3 bg-blue-500 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-blue-600 flex items-center justify-center gap-2">
                    <span>💎</span> 트립닷컴 예약
                </button>
            `;
        } else {
            // 교통 및 관광지
            btnGroup.innerHTML = `
                <button onclick="window.open('${COMM_CONFIG.affiliate.klook_base}${encodeURIComponent(placeName)}')" 
                    class="flex-1 py-3 bg-orange-500 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-orange-600 flex items-center justify-center gap-2">
                    <span>🎫</span> 클룩에서 예매하기
                </button>
            `;
        }

        // 컨테이너의 맨 앞에 삽입
        container.insertBefore(btnGroup, container.firstChild);
    }


    // ==========================================================================
    //  INITIALIZE
    // ==========================================================================
    function initCommercialEngine() {
        console.log('💰 Commercial Engine Loaded (Enabled: ' + COMM_CONFIG.ENABLED + ')');
        initCoupangShop();
        interceptNavigation();
        initBookingInjection();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCommercialEngine);
    } else {
        initCommercialEngine();
    }

})();
