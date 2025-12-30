(function () {
    // ==========================================================================
    //  ⚙️ ULTRA CONFIGURATION (수익화 & 시스템 설정)
    // ==========================================================================
    const CONFIG = {
        // 'COMMERCIAL': 수익화 모드 (광고+예약링크) | 'FAMILY': 가족용 (기능만 작동)
        MODE: 'COMMERCIAL', 
        
        // 내 제휴 ID 설정
        AFFILIATE: {
            COUPANG_BASE: "https://link.coupang.com/a/c9Vuww", // 쿠팡 메인
            AGODA_CID: "1922240", // 아고다 CID
            TRIP_AID: "12345",    // 트립닷컴 AID
            KLOOK_ID: "YOUR_KLOOK_ID",
            RENTAL_CAR: "https://www.rentalchars.com", // 렌트카 제휴 링크
        },

        // 구글 애드센스 설정 (사용자 제공 코드)
        ADSENSE: {
            CLIENT: "ca-pub-5240158357882882",
            SLOT_SIDE: "1880725743",
            SLOT_FLUID: "2808903845"
        }
    };

    // ==========================================================================
    //  🏝️ MASSIVE DATABASE: OKINAWA (30개+ 엄선된 장소)
    // ==========================================================================
    // type: 'spot'(관광), 'food'(맛집), 'hotel'(숙소), 'transport'(교통)
    // region: 'naha'(나하), 'north'(북부), 'middle'(중부), 'south'(남부)
    const POI_DATABASE = [
        // --- 교통 & 공항 ---
        {
            id: 'naha_airport',
            name: '나하 공항 (도착/출발)',
            lat: 26.2048, lng: 127.6458,
            type: 'transport',
            region: 'naha',
            rating: 4.2,
            desc: '오키나와 여행의 시작. 렌트카 셔틀과 모노레일의 기점.',
            photos: ['https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'],
            details: {
                info: "국제선과 국내선이 연결되어 있습니다. 편의점, 식당, 기념품샵은 국내선 터미널이 훨씬 큽니다.",
                transport: `
                    <div class="space-y-2">
                        <div class="p-2 bg-blue-50 rounded border border-blue-200">
                            <strong>🚝 유이레일(모노레일):</strong> 공항 2층에서 연결. 시내까지 15분.
                            <button onclick="openAffiliate('klook', '유이레일 패스')" class="block w-full mt-1 bg-blue-600 text-white text-xs py-1 rounded">🎟️ 유이레일 패스 할인 구매</button>
                        </div>
                        <div class="p-2 bg-orange-50 rounded border border-orange-200">
                            <strong>🚌 공항 리무진:</strong> 북부/중부 리조트 직행. 1층 12번 승강장.
                            <button onclick="openAffiliate('klook', '오키나와 리무진')" class="block w-full mt-1 bg-orange-500 text-white text-xs py-1 rounded">🎫 리무진 버스 예매</button>
                        </div>
                        <div class="p-2 bg-green-50 rounded border border-green-200">
                            <strong>🚗 렌트카:</strong> 1층 밖 셔틀 승강장 이동 필수. (이동시간 20분 소요)
                            <button onclick="window.open('${CONFIG.AFFILIATE.RENTAL_CAR}')" class="block w-full mt-1 bg-green-600 text-white text-xs py-1 rounded">🚗 최저가 렌트카 검색</button>
                        </div>
                    </div>`
            }
        },
        
        // --- 나하 시내 (Naha) ---
        {
            id: 'kokusai', name: '국제거리', lat: 26.2150, lng: 127.6850, type: 'spot', region: 'naha', rating: 4.5,
            desc: '기적의 1마일. 밤늦게까지 쇼핑과 식사가 가능한 중심가.',
            photos: ['https://images.unsplash.com/photo-1589463349208-95817c97fdb6?w=800'],
            shop_keyword: '오키나와 기념품',
            details: { info: "일요일 낮(12:00~18:00)은 보행자 천국으로 차가 다니지 않습니다." }
        },
        {
            id: 'makishi', name: '마키시 공설시장', lat: 26.2145, lng: 127.6885, type: 'food', region: 'naha', rating: 4.3,
            desc: '오키나와의 부엌. 알록달록한 생선을 직접 골라 회로 먹기.',
            photos: ['https://images.unsplash.com/photo-1554797589-7241bb691973?w=800'],
            shop_keyword: '여행용 장바구니',
            details: { info: "1층에서 생선을 사고 2층 식당가에서 조리비(500엔)를 내고 먹는 시스템입니다." }
        },
        {
            id: 'shurijo', name: '슈리성 공원', lat: 26.2183, lng: 127.7153, type: 'spot', region: 'naha', rating: 4.4,
            desc: '류큐 왕국의 영광. 붉은색 정전이 아름다운 유네스코 유산.',
            photos: ['https://images.unsplash.com/photo-1622345562723-4556223455?w=800'],
            shop_keyword: '양산',
            details: { info: "화재로 정전이 소실되었으나 복원 과정을 공개하고 있어 교육적 가치가 높습니다. 꽤 많이 걸어야 합니다." }
        },
        {
            id: 'steak88', name: '스테이크 하우스 88', lat: 26.2155, lng: 127.6840, type: 'food', region: 'naha', rating: 4.2,
            desc: '미군 문화의 영향. 가성비 좋은 오키나와식 스테이크.',
            photos: ['https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800'],
            details: { info: "스프와 샐러드가 무한리필 됩니다. '텐더로인' 부위가 가장 부드럽습니다." }
        },
        {
            id: 'hyatt_naha', name: '하얏트 리젠시 나하', lat: 26.2144, lng: 127.6867, type: 'hotel', region: 'naha', rating: 4.7,
            desc: '국제거리 도보 3분. 시내 관광 최적의 럭셔리 호텔.',
            photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
            details: { info: "수영장이 작지만 알찹니다. 조식 뷔페 '사쿠라자카'가 매우 유명합니다." }
        },

        // --- 중부 (Middle) ---
        {
            id: 'american', name: '아메리칸 빌리지', lat: 26.3165, lng: 127.7577, type: 'spot', region: 'middle', rating: 4.6,
            desc: '미국 서부 해안 분위기. 관람차(철거됨) 터와 선셋 비치.',
            photos: ['https://images.unsplash.com/photo-1599577742099-0b73461461a6?w=800'],
            shop_keyword: '선글라스',
            details: { info: "낮보다 밤이 훨씬 예쁩니다. 포켓몬 벽화가 곳곳에 숨어있으니 찾아보세요." }
        },
        {
            id: 'manzamo', name: '만좌모', lat: 26.5049, lng: 127.8502, type: 'spot', region: 'middle', rating: 4.4,
            desc: '코끼리 모양 절벽. 만 명이 앉을 수 있는 넓은 들판.',
            photos: ['https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=800'],
            shop_keyword: '바람막이',
            details: { info: "드라마 '괜찮아 사랑이야' 촬영지. 바람이 매우 강하게 부니 모자가 날아가지 않게 주의하세요." }
        },
        {
            id: 'rycom', name: '이온몰 라이카무', lat: 26.3144, lng: 127.7958, type: 'spot', region: 'middle', rating: 4.5,
            desc: '오키나와 최대 규모 쇼핑몰. 하루 종일 있어도 모자람.',
            photos: ['https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?w=800'],
            shop_keyword: '일본 쇼핑 리스트',
            details: { info: "메인 로비의 거대 수조가 포토존입니다. 1층 면세 카운터 위치를 미리 파악하세요." }
        },
        {
            id: 'blue_seal', name: '블루씰 아이스크림 본점', lat: 26.2737, lng: 127.7317, type: 'food', region: 'middle', rating: 4.4,
            desc: '미국에서 태어나 오키나와에서 자란 아이스크림.',
            photos: ['https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800'],
            details: { info: "자색고구마(베니이모) 맛과 소금우유(친스코) 맛이 가장 인기 있습니다." }
        },

        // --- 북부 (North) ---
        {
            id: 'churaumi', name: '츄라우미 수족관', lat: 26.6943, lng: 127.8779, type: 'spot', region: 'north', rating: 4.8,
            desc: '거대 고래상어의 유영. 오키나와 필수 코스.',
            photos: ['https://images.unsplash.com/photo-1585672660340-966e33004946?w=800'],
            shop_keyword: '카메라 삼각대',
            details: { 
                info: "세계 최대급 수조 '쿠로시오의 바다' 앞 카페 자리는 오픈런 필수입니다.",
                ticket: `<button onclick="openAffiliate('klook', '츄라우미 수족관')" class="w-full bg-orange-500 text-white py-2 rounded font-bold">🎫 입장권 최저가 예매 (클룩)</button>`
            }
        },
        {
            id: 'kouri', name: '코우리 대교 & 해변', lat: 26.6978, lng: 128.0267, type: 'spot', region: 'north', rating: 4.7,
            desc: '바다 위를 달리는 듯한 2km의 다리. 쉬림프 웨건.',
            photos: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'],
            shop_keyword: '아쿠아슈즈',
            details: { info: "다리 건너기 전 주차장에서 다리를 배경으로 사진을 찍으세요. 코우리 슈림프 웨건은 대기가 깁니다." }
        },
        {
            id: 'bise', name: '비세 후쿠기 가로수길', lat: 26.7042, lng: 127.8797, type: 'spot', region: 'north', rating: 4.5,
            desc: '방풍림이 만든 초록 터널. 자전거 타고 힐링.',
            photos: ['https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=800'],
            shop_keyword: '모기기피제',
            details: { info: "모기가 많으니 기피제 필수. 자전거 대여료는 보통 500엔입니다." }
        },
        {
            id: 'pineapple', name: '나고 파인애플 파크', lat: 26.6163, lng: 127.9692, type: 'spot', region: 'north', rating: 4.2,
            desc: '자동 카트 타고 파인애플 밭 탐험. 가족 여행 강추.',
            photos: ['https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800'],
            shop_keyword: '아이 간식',
            details: { info: "파인애플 송이째로 파는 것보다 컷팅된 과일이나 빵이 선물용으로 좋습니다." }
        },
        {
            id: 'kishimoto', name: '키시모토 식당', lat: 26.6552, lng: 127.8897, type: 'food', region: 'north', rating: 4.3,
            desc: '100년 전통 오키나와 소바. 담백한 국물.',
            photos: ['https://images.unsplash.com/photo-1552611052-33e04de081de?w=800'],
            details: { info: "메뉴는 소바와 영양밥(쥬시) 뿐입니다. 재료 소진 시 일찍 문 닫습니다." }
        },

        // --- 남부 (South) ---
        {
            id: 'umikaji', name: '우미카지 테라스', lat: 26.1754, lng: 127.6445, type: 'spot', region: 'south', rating: 4.5,
            desc: '오키나와의 산토리니. 비행기 이착륙 뷰.',
            photos: ['https://images.unsplash.com/photo-1621847466023-40c354031175?w=800'],
            shop_keyword: '셀카봉',
            details: { info: "그늘이 거의 없어 낮에는 덥습니다. 선셋 타임에 팬케이크 먹는 것을 추천합니다." }
        },
        {
            id: 'okinawa_world', name: '오키나와 월드', lat: 26.1397, lng: 127.7504, type: 'spot', region: 'south', rating: 4.3,
            desc: '거대 종유석 동굴과 류큐 유리 공예 체험.',
            photos: ['https://images.unsplash.com/photo-1574347784033-b9356499876e?w=800'],
            details: { info: "동굴 안은 습하고 미끄러우니 편한 신발을 신으세요. 에이사 공연 시간 맞춰 가세요." }
        },
        {
            id: 'cafe_kurukuma', name: '카페 쿠루쿠마', lat: 26.1664, lng: 127.8136, type: 'food', region: 'south', rating: 4.6,
            desc: '절벽 위 오션뷰 태국 음식점. 뷰가 다했다.',
            photos: ['https://images.unsplash.com/photo-1544563124-7eb3a492931e?w=800'],
            details: { info: "카레가 꽤 맵습니다. 야외석은 식사 불가하고 사진 촬영만 가능할 수 있습니다." }
        },
        {
            id: 'mibaru', name: '미바루 비치', lat: 26.1283, lng: 127.7853, type: 'spot', region: 'south', rating: 4.2,
            desc: '숨겨진 천연 해변. 글라스 보트 체험 가능.',
            photos: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'],
            shop_keyword: '방수팩',
            details: { info: "상업화가 덜 되어 조용합니다. 글라스 보트로 니모를 볼 수 있습니다." }
        },
        {
            id: 'ryukyu_onsen', name: '류큐 온천 세나가지마', lat: 26.1764, lng: 127.6417, type: 'hotel', region: 'south', rating: 4.6,
            desc: '우미카지 테라스 위, 바다와 비행기를 보며 온천.',
            photos: ['https://images.unsplash.com/photo-1571216962909-467439369680?w=800'],
            details: { info: "투숙객이 아니어도 온천만 이용 가능합니다(유료). 선셋 타임 노천탕이 최고입니다." }
        }
    ];

    // ==========================================================================
    //  🛍️ COUPANG PARTNERS CATEGORY ENGINE (자동 링크 생성기)
    // ==========================================================================
    // 키워드를 넣으면 해당 검색 결과 링크로 자동 변환 (Deep Linking Mockup)
    const COUPANG_ITEMS = {
        'essentials': { title: '🧳 여행 필수품', items: ['일본 유심', '110v 돼지코', '보조배터리 20000', '여권케이스', '여행용 압축파우치'] },
        'summer': { title: '🏖️ 물놀이 준비', items: ['스노쿨링 장비', '아쿠아슈즈', '방수팩', '비치타올', '암튜브'] },
        'camera': { title: '📸 인생샷 장비', items: ['스마트폰 삼각대', '고프로', '일회용 카메라', '짐벌', 'SD카드'] },
        'kids': { title: '👶 아이와 함께', items: ['휴대용 유모차', '아기 튜브', '스티커북', '휴대용 선풍기', '모기기피제'] }
    };

    // ==========================================================================
    //  🚀 APPLICATION CORE (일정 빌더 & UI 로직)
    // ==========================================================================
    
    // 사용자 일정 상태 관리 (기본 1일차만 예시로 채움)
    let userItinerary = {
        1: ['naha_airport', 'kokusai', 'steak88', 'hyatt_naha'], // Day 1 Default
        2: [], 3: [], 4: []
    };
    let activeDay = 1;
    let map, markers = [];
    let adClickCount = 0;

    // --- 초기화 ---
    function initOkinawaApp() {
        console.log(`🏝️ Okinawa App V4.0 Loaded [${CONFIG.MODE}]`);
        injectCSS();
        renderHeader();
        renderBuilderUI(); // 빌더 UI (장소 목록 + 내 일정) 렌더링
        setTimeout(initMap, 500);
        
        // 플로팅 쇼핑 버튼 (상업용일 때만)
        if (CONFIG.MODE === 'COMMERCIAL') renderFloatingShop();
    }

    // --- 지도 초기화 ---
    function initMap() {
        const mapEl = document.getElementById('map');
        if (!mapEl) return;
        map = new google.maps.Map(mapEl, {
            center: { lat: 26.2124, lng: 127.6809 },
            zoom: 10,
            mapTypeControl: false, streetViewControl: false, fullscreenControl: true
        });
        updateMapMarkers();
    }

    // --- UI: 헤더 및 탭 ---
    function renderHeader() {
        const container = document.getElementById('day-tabs'); // 기존 탭 컨테이너 재사용
        if (!container) return;
        
        // 날짜 선택 탭
        container.innerHTML = Object.keys(userItinerary).map(day => 
            `<button onclick="switchDay(${day})" 
                class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay ? 'bg-teal-500 text-white scale-105 border-teal-600' : 'bg-white text-gray-500 hover:bg-gray-100'}">
                Day ${day}
            </button>`
        ).join('');
    }

    // --- UI: 빌더 (장소 선택 + 일정 확인) ---
    function renderBuilderUI() {
        const container = document.getElementById('itinerary-content');
        if (!container) return;

        container.innerHTML = `
            <!-- 1. 현재 일정 리스트 -->
            <div class="bg-teal-50 p-4 rounded-xl mb-6 border border-teal-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-teal-800">📅 Day ${activeDay} 내 일정</h3>
                    <span class="text-xs text-teal-600 bg-white px-2 py-1 rounded border border-teal-200">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-4">아래 목록에서 [+] 버튼을 눌러 일정을 추가하세요.</p>' : ''}
                    ${userItinerary[activeDay].map((id, idx) => {
                        const item = POI_DATABASE.find(p => p.id === id);
                        return `
                        <div class="flex items-center bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                            <div class="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold mr-3">${idx+1}</div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-teal-600" onclick="showDetail('${item.id}')">${item.name}</div>
                                <div class="text-[10px] text-gray-400">${item.region.toUpperCase()} • ${item.type}</div>
                            </div>
                            <button onclick="removeFromPlan('${item.id}')" class="text-red-400 hover:text-red-600 p-1">⛔</button>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <!-- 2. 장소 추가하기 (풀) -->
            <div class="mb-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">전체</button>
                <button onclick="filterSpots('naha')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">나하 시내</button>
                <button onclick="filterSpots('north')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">북부 (츄라우미)</button>
                <button onclick="filterSpots('middle')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">중부 (아메리칸)</button>
                <button onclick="filterSpots('south')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">남부 (카페)</button>
            </div>

            <div id="spot-pool" class="grid grid-cols-1 gap-3 pb-20">
                <!-- JS로 장소 목록 로드됨 -->
            </div>
        `;
        
        renderSpotPool('all');
    }

    // --- 장소 목록 렌더링 (필터링 지원) ---
    window.renderSpotPool = function(region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);
        
        pool.innerHTML = filtered.map(place => `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 group hover:border-teal-400 transition">
                <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative cursor-pointer" onclick="showDetail('${place.id}')">
                    <img src="${place.photos[0]}" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 w-full bg-black/50 text-white text-[10px] text-center p-0.5">상세보기</div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-gray-800 text-sm leading-tight cursor-pointer hover:text-teal-600" onclick="showDetail('${place.id}')">${place.name}</h4>
                            <span class="text-[10px] font-bold ${place.type === 'food' ? 'text-orange-500 bg-orange-50' : 'text-blue-500 bg-blue-50'} px-1.5 py-0.5 rounded">${place.type.toUpperCase()}</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1 line-clamp-2">${place.desc}</p>
                        <div class="text-[10px] text-yellow-500 mt-1">★ ${place.rating}</div>
                    </div>
                    <button onclick="addToPlan('${place.id}')" class="w-full mt-2 bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 text-xs py-2 rounded-lg font-bold transition flex items-center justify-center gap-1">
                        <span>➕ 일정에 담기</span>
                    </button>
                </div>
            </div>
        `).join('') + `
            <!-- 리스트 중간 광고 -->
            ${CONFIG.MODE === 'COMMERCIAL' ? `
            <div class="bg-gray-50 p-2 rounded-xl text-center border border-gray-200 my-2">
                <p class="text-[10px] text-gray-400 mb-1">Sponsored</p>
                <ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-6q+e9+15-2u+4y" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_FLUID}"></ins>
            </div>` : ''}
        `;
        
        // 광고 스크립트 실행
        if(CONFIG.MODE === 'COMMERCIAL') try{(adsbygoogle = window.adsbygoogle || []).push({});}catch(e){}
    }

    // --- 필터 버튼 로직 ---
    window.filterSpots = function(region) {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-gray-800', 'text-white');
            b.classList.add('bg-white', 'text-gray-700');
        });
        event.target.classList.add('bg-gray-800', 'text-white');
        event.target.classList.remove('bg-white');
        renderSpotPool(region);
    }

    // --- 일정 추가/삭제 로직 ---
    window.addToPlan = function(id) {
        if(userItinerary[activeDay].includes(id)) return alert('이미 일정에 있습니다.');
        userItinerary[activeDay].push(id);
        renderBuilderUI();
        updateMapMarkers();
        // 일정 추가 시 전면 광고 확률적 노출 (3회 추가당 1회)
        if(userItinerary[activeDay].length % 3 === 0) triggerInterstitial();
    }

    window.removeFromPlan = function(id) {
        userItinerary[activeDay] = userItinerary[activeDay].filter(itemId => itemId !== id);
        renderBuilderUI();
        updateMapMarkers();
    }

    window.switchDay = function(day) {
        // 날짜 변경 시 전면 광고
        triggerInterstitial(() => {
            activeDay = day;
            renderHeader();
            renderBuilderUI();
            updateMapMarkers();
        });
    }

    // --- 지도 마커 업데이트 ---
    function updateMapMarkers() {
        if(!map) return;
        markers.forEach(m => m.setMap(null));
        markers = [];
        const bounds = new google.maps.LatLngBounds();
        
        // 현재 일정에 있는 장소만 마커 표시 (순서대로)
        userItinerary[activeDay].forEach((id, idx) => {
            const item = POI_DATABASE.find(p => p.id === id);
            if(item) {
                const marker = new google.maps.Marker({
                    position: { lat: item.lat, lng: item.lng },
                    map: map,
                    label: { text: (idx + 1).toString(), color: "white", fontWeight: 'bold' },
                    animation: google.maps.Animation.DROP
                });
                marker.addListener('click', () => showDetail(id));
                markers.push(marker);
                bounds.extend(marker.getPosition());
            }
        });

        if(markers.length > 0) map.fitBounds(bounds);
    }

    // ==========================================================================
    //  🔎 DETAIL MODAL (정보 가두기 & 수익화 핵심)
    // ==========================================================================
    window.showDetail = function(id) {
        const item = POI_DATABASE.find(p => p.id === id);
        if(!createModal()) return;
        
        const content = document.getElementById('modal-content');
        
        // 제휴 버튼 생성
        let affiliateBtn = '';
        if(CONFIG.MODE === 'COMMERCIAL') {
            if(item.type === 'hotel') affiliateBtn = `<button onclick="openAffiliate('agoda', '${item.name}')" class="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">🏨 아고다 최저가</button><button onclick="openAffiliate('trip', '${item.name}')" class="flex-1 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600">💎 트립닷컴 예약</button>`;
            else if(item.type === 'spot') affiliateBtn = `<button onclick="openAffiliate('klook', '${item.name}')" class="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600">🎫 입장권/투어 예매 (클룩)</button>`;
        }

        // 쇼핑 아이템 매칭
        const shopKeyword = item.shop_keyword || '여행용품';
        const shopHtml = `
            <div class="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 class="text-sm font-bold text-gray-700 mb-2">🎒 ${item.name} 방문 전 필수템</h4>
                <div class="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    ${[1,2,3].map(i => `
                    <div class="flex-none w-28 bg-white p-2 rounded border border-gray-200 cursor-pointer hover:border-red-400" onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')">
                        <div class="h-20 bg-gray-100 rounded mb-1 flex items-center justify-center text-2xl">🎁</div>
                        <div class="text-[10px] text-gray-500 truncate">${shopKeyword} 추천 ${i}</div>
                        <div class="text-xs font-bold text-red-500">최저가 보기</div>
                    </div>`).join('')}
                </div>
            </div>`;

        // 모달 HTML 구성
        content.innerHTML = `
            <div class="relative h-64 bg-gray-900">
                <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90">
                <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur">✕</button>
                <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
                    <h2 class="text-2xl font-bold text-white">${item.name}</h2>
                    <p class="text-sm text-gray-300">${item.desc}</p>
                </div>
            </div>
            
            <div class="sticky top-0 bg-white z-10 flex border-b">
                <button class="flex-1 py-3 text-sm font-bold text-teal-600 border-b-2 border-teal-600">정보 & 꿀팁</button>
                <button class="flex-1 py-3 text-sm font-bold text-gray-400" onclick="alert('준비중')">리뷰</button>
            </div>

            <div class="p-5 pb-20">
                <!-- 상세 정보 (HTML 지원) -->
                <div class="prose text-sm text-gray-600 mb-6">
                    ${item.details?.info || '상세 정보 업데이트 중...'}
                </div>

                <!-- 교통 정보 -->
                ${item.details?.transport ? `
                <div class="mb-6">
                    <h3 class="font-bold text-gray-800 mb-2">🚦 교통 & 가는 법</h3>
                    ${item.details.transport}
                </div>` : ''}

                <!-- 제휴 버튼 영역 -->
                <div class="flex gap-2 mb-4">${affiliateBtn}</div>

                <!-- 쿠팡 쇼핑 영역 -->
                ${CONFIG.MODE === 'COMMERCIAL' ? shopHtml : ''}

                <!-- 하단 배너 광고 -->
                ${CONFIG.MODE === 'COMMERCIAL' ? `
                <div class="mt-6 text-center">
                    <div class="text-[10px] text-gray-300 mb-1">AD</div>
                    <ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins>
                </div>` : ''}
            </div>
        `;
        
        if(CONFIG.MODE === 'COMMERCIAL') try{(adsbygoogle = window.adsbygoogle || []).push({});}catch(e){}
    }

    // --- 쇼핑 모달 (전체 카테고리) ---
    function renderFloatingShop() {
        const btn = document.createElement('button');
        btn.className = "fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-2xl z-40 border-2 border-white animate-bounce";
        btn.innerHTML = "🛍️";
        btn.onclick = () => {
            if(!createModal()) return;
            const content = document.getElementById('modal-content');
            let html = `<div class="bg-red-600 text-white p-4 sticky top-0 flex justify-between items-center">
                <h2 class="font-bold">🎒 오키나와 여행 준비물 샵</h2>
                <button onclick="closeModal()">✕</button>
            </div><div class="p-4 grid grid-cols-2 gap-3">`;
            
            Object.values(COUPANG_ITEMS).forEach(cat => {
                html += `<div class="col-span-2 font-bold text-gray-700 mt-2">${cat.title}</div>`;
                cat.items.forEach(item => {
                    html += `
                    <div onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')" class="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center cursor-pointer hover:bg-red-50 hover:border-red-200">
                        <div class="text-xl mb-1">🎁</div>
                        <div class="text-xs text-gray-600 font-bold">${item}</div>
                    </div>`;
                });
            });
            content.innerHTML = html + `</div>`;
        };
        document.body.appendChild(btn);
    }

    // ==========================================================================
    //  🛠️ UTILITIES & HELPERS
    // ==========================================================================
    
    // 모달 컨테이너 생성
    function createModal() {
        let m = document.getElementById('app-modal');
        if(!m) {
            m = document.createElement('div');
            m.id = 'app-modal';
            m.className = 'fixed inset-0 z-50 hidden';
            m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div>
            <div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform">
                <div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide"></div>
            </div>`;
            document.body.appendChild(m);
        }
        m.classList.remove('hidden');
        return true;
    }
    
    window.closeModal = () => document.getElementById('app-modal').classList.add('hidden');

    // 제휴 링크 열기
    window.openAffiliate = function(type, query) {
        let url = '';
        if(type === 'klook') url = `https://www.klook.com/ko/search/?query=${encodeURIComponent(query)}`;
        else if(type === 'agoda') url = `https://www.agoda.com/partners/partnersearch.aspx?cid=${CONFIG.AFFILIATE.AGODA_CID}&city=16723`; // 16723=오키나와 코드
        else if(type === 'trip') url = `${CONFIG.AFFILIATE.TRIP}`; // 트립닷컴은 홈으로 보내거나 딥링크 생성 필요
        if(url) window.open(url, '_blank');
    }

    // 전면 광고 트리거
    function triggerInterstitial(callback) {
        if(CONFIG.MODE !== 'COMMERCIAL') return callback ? callback() : null;
        adClickCount++;
        if(adClickCount % 3 !== 0) return callback ? callback() : null; // 3번에 1번만 노출

        const ad = document.createElement('div');
        ad.className = "fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center";
        ad.innerHTML = `
            <div class="text-xl font-bold mb-4 animate-pulse">잠시 후 이동합니다...</div>
            <div class="w-[300px] h-[250px] bg-gray-100 mb-4 flex items-center justify-center border">
                <ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins>
            </div>
            <button id="skip-ad" class="px-6 py-2 bg-gray-200 rounded-full text-gray-400 cursor-not-allowed">5초 후 건너뛰기</button>
        `;
        document.body.appendChild(ad);
        try{(adsbygoogle = window.adsbygoogle || []).push({});}catch(e){}

        let sec = 5;
        const timer = setInterval(() => {
            sec--;
            const btn = document.getElementById('skip-ad');
            if(btn) btn.innerText = sec > 0 ? `${sec}초 후 건너뛰기` : "건너뛰기 ⏩";
            if(sec <= 0) {
                clearInterval(timer);
                btn.classList.remove('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
                btn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
                btn.onclick = () => { ad.remove(); if(callback) callback(); };
            }
        }, 1000);
    }

    function injectCSS() {
        const s = document.createElement('style');
        s.textContent = `
            .scrollbar-hide::-webkit-scrollbar { display: none; } 
            .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        `;
        document.head.appendChild(s);
    }

    // 앱 실행
    initOkinawaApp();
})();