(function () {
    // ==========================================================================
    //  ⚙️ ULTRA CONFIGURATION
    // ==========================================================================
    const CONFIG = {
        MODE: 'COMMERCIAL',
        AFFILIATE: {
            COUPANG_BASE: "https://link.coupang.com/a/c9Vuww",
            AGODA_CID: "1922240",
            TRIP_AID: "12345",
            KLOOK_ID: "YOUR_KLOOK_ID",
            RENTAL_CAR: "https://www.rentalchars.com",
        },
        ADSENSE: {
            CLIENT: "ca-pub-5240158357882882",
            SLOT_SIDE: "1880725743",
            SLOT_FLUID: "2808903845"
        }
    };

    // ==========================================================================
    //  ❄️ MASSIVE DATABASE: SAPPORO (30+ Spots)
    // ==========================================================================
    const POI_DATABASE = [
        // --- 교통 ---
        {
            id: 'cts_airport', name: '신치토세 공항 (CTS)', lat: 42.7874, lng: 141.6813, type: 'transport', region: 'airport', rating: 4.5,
            desc: '온천과 영화관이 있는 테마파크형 공항.',
            photos: ['https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=800'],
            details: {
                info: "국내선 청사 3층 라멘 도장과 로이즈 초콜릿 월드는 필수 코스입니다.",
                transport: `
                    <div class="space-y-2">
                        <button onclick="openAffiliate('klook', 'JR 홋카이도 레일패스')" class="block w-full bg-blue-600 text-white text-xs py-3 rounded font-bold hover:bg-blue-700">🚆 JR 레일패스 예매</button>
                        <button onclick="openAffiliate('klook', '홋카이도 렌트카')" class="block w-full bg-green-500 text-white text-xs py-3 rounded font-bold hover:bg-green-600">🚗 렌트카 최저가 검색</button>
                    </div>`
            },
            learning: { situation: "렌트카", phrase: "스노우 타이어 장착되어 있나요?", pronunciation: "스노-타이야와 츠이테 마스카?", meaning: "겨울 운전 시 필수 질문." }
        },

        // --- 삿포로 시내 ---
        {
            id: 'odori_park', name: '오도리 공원', lat: 43.0600, lng: 141.3500, type: 'spot', region: 'central', rating: 4.4,
            desc: '눈축제와 맥주축제의 메인 무대.',
            photos: ['https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800'],
            shop_keyword: '핫팩',
            details: { info: "겨울엔 눈축제(2월), 여름엔 맥주축제(7-8월)가 열립니다. 명물 구운 옥수수를 드셔보세요." }
        },
        {
            id: 'tv_tower', name: '삿포로 TV타워', lat: 43.0611, lng: 141.3564, type: 'spot', region: 'central', rating: 4.3,
            desc: '오도리 공원이 한눈에 보이는 랜드마크.',
            photos: ['https://images.unsplash.com/photo-1579262963363-22246759c22d?w=800'],
            details: { 
                info: "밤에 타워에 조명이 켜지면 공원에서 바라보는 뷰가 환상적입니다.", 
                transport: `<button onclick="openAffiliate('klook', '삿포로 TV타워')" class="w-full bg-orange-500 text-white py-2 rounded font-bold">🎫 전망대 입장권 할인</button>` 
            }
        },
        {
            id: 'susukino', name: '스스키노 거리', lat: 43.0555, lng: 141.3533, type: 'spot', region: 'central', rating: 4.5,
            desc: '화려한 네온사인. 니카상 간판.',
            photos: ['https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800'],
            details: { info: "니카상 배경 사진은 교차로 건너편 건물 2층에서 찍으면 잘 나옵니다." }
        },
        {
            id: 'clock_tower', name: '삿포로 시계탑', lat: 43.0626, lng: 141.3537, type: 'spot', region: 'central', rating: 3.8,
            desc: '일본 최고(最古)의 시계탑.',
            photos: ['https://images.unsplash.com/photo-1612347366838-89c025076639?w=800'],
            details: { info: "내부 관람보다는 외부에서 사진만 찍고 이동하는 것을 추천합니다." }
        },
        {
            id: 'akarenga', name: '구 본청사 (아카렌가)', lat: 43.0639, lng: 141.3478, type: 'spot', region: 'central', rating: 4.4,
            desc: '붉은 벽돌의 고풍스러운 건물.',
            photos: ['https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800'],
            details: { info: "정원이 예뻐서 산책하기 좋습니다. 내부는 무료로 관람 가능합니다." }
        },
        {
            id: 'beer_museum', name: '삿포로 맥주 박물관', lat: 43.0713, lng: 141.3695, type: 'spot', region: 'central', rating: 4.6,
            desc: '갓 만든 삿포로 클래식 생맥주.',
            photos: ['https://images.unsplash.com/photo-1629125306979-43c223c60447?w=800'],
            details: { 
                info: "1층 스타홀에서 유료 시음(3종 샘플러)은 필수입니다. 징기스칸 식당은 예약해야 합니다.",
                transport: `<button onclick="openAffiliate('klook', '삿포로 맥주엔')" class="w-full bg-yellow-600 text-white py-2 rounded font-bold">🍺 징기스칸+맥주 뷔페 예약</button>`
            }
        },
        {
            id: 'nijo_market', name: '니조 시장', lat: 43.0575, lng: 141.3582, type: 'food', region: 'central', rating: 4.2,
            desc: '아침 식사 가능한 해산물 시장.',
            photos: ['https://images.unsplash.com/photo-1579623696562-b91c01995801?w=800'],
            details: { info: "오전 7시부터 영업. 우니(성게알) 덮밥과 털게가 유명합니다." }
        },
        {
            id: 'tanukikoji', name: '다누키코지 상점가', lat: 43.0565, lng: 141.3540, type: 'spot', region: 'central', rating: 4.3,
            desc: '비 오는 날도 OK. 거대 아케이드.',
            photos: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
            shop_keyword: '드럭스토어',
            details: { info: "메가 돈키호테가 있습니다. 기념품 쇼핑의 최적 장소." }
        },
        {
            id: 'nakajima_park', name: '나카지마 공원', lat: 43.0445, lng: 141.3556, type: 'spot', region: 'central', rating: 4.5,
            desc: '도심 속 호수 공원. 단풍 명소.',
            photos: ['https://images.unsplash.com/photo-1576788235839-55668b577366?w=800'],
            details: { info: "스스키노에서 도보로 갈 수 있습니다. 조용하게 산책하기 좋습니다." }
        },

        // --- 서부 ---
        {
            id: 'shiroi', name: '시로이 코이비토 파크', lat: 43.0886, lng: 141.2706, type: 'spot', region: 'west', rating: 4.5,
            desc: '동화 속 과자 공장.',
            photos: ['https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800'],
            shop_keyword: '쿠키 선물세트',
            details: { info: "정원은 무료 개방. 유료 구역에선 쿠키 만들기 체험이 가능합니다." }
        },
        {
            id: 'hokkaido_shrine', name: '홋카이도 신궁', lat: 43.0537, lng: 141.3076, type: 'spot', region: 'west', rating: 4.4,
            desc: '울창한 숲 속의 신사. 벚꽃 명소.',
            photos: ['https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800'],
            details: { info: "마루야마 공원 안에 위치합니다. 리락쿠마 에마(소원판)가 귀엽습니다." }
        },
        {
            id: 'maruyama_zoo', name: '마루야마 동물원', lat: 43.0515, lng: 141.3015, type: 'spot', region: 'west', rating: 4.3,
            desc: '북극곰을 볼 수 있는 동물원.',
            photos: ['https://images.unsplash.com/photo-1570649237648-512c58902521?w=800'],
            details: { info: "홋카이도 신궁 바로 옆입니다. 아이들과 가기 좋습니다." }
        },
        {
            id: 'moiwa', name: '모이와야마 전망대', lat: 43.0236, lng: 141.3197, type: 'spot', region: 'west', rating: 4.7,
            desc: '일본 신 3대 야경. 로프웨이.',
            photos: ['https://images.unsplash.com/photo-1612347366838-89c025076639?w=800'],
            details: { info: "삿포로 시내가 보석처럼 빛납니다. 정상은 바람이 많이 부니 따뜻하게 입으세요." }
        },

        // --- 오타루 ---
        {
            id: 'otaru_canal', name: '오타루 운하', lat: 43.1994, lng: 141.0016, type: 'spot', region: 'otaru', rating: 4.7,
            desc: '영화 러브레터의 그곳.',
            photos: ['https://images.unsplash.com/photo-1548834764-d8d475545a4d?w=800'],
            shop_keyword: '장갑',
            details: { 
                info: "해 질 녘 가스등이 켜질 때가 가장 아름답습니다. 운하 크루즈 추천.",
                transport: `<button onclick="openAffiliate('klook', '오타루 인력거')" class="w-full bg-pink-500 text-white py-2 rounded font-bold">🚲 오타루 인력거 투어 예약</button>`
            }
        },
        {
            id: 'orgel_doh', name: '오르골당 본관', lat: 43.1906, lng: 141.0075, type: 'spot', region: 'otaru', rating: 4.6,
            desc: '세계 최대 규모 오르골 상점.',
            photos: ['https://images.unsplash.com/photo-1610961805527-33a927774213?w=800'],
            details: { info: "입구 앞 증기 시계는 15분마다 소리를 냅니다. 내부가 매우 아름답습니다." }
        },
        {
            id: 'letao', name: '르타오 본점', lat: 43.1912, lng: 141.0080, type: 'food', region: 'otaru', rating: 4.7,
            desc: '더블 프로마쥬 치즈케이크.',
            photos: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800'],
            details: { info: "2층 카페에서 티 타임을 즐기세요. 3층 전망대 무료 개방." }
        },
        {
            id: 'kitaichi', name: '키타이치 가라스관', lat: 43.1925, lng: 141.0083, type: 'spot', region: 'otaru', rating: 4.4,
            desc: '석유 램프가 켜진 환상적인 카페.',
            photos: ['https://images.unsplash.com/photo-1554797589-7241bb691973?w=800'],
            details: { info: "3호관 카페는 전기가 아닌 167개의 석유 램프로만 조명을 밝힙니다." }
        },
        {
            id: 'kamaei', name: '카마에이 어묵 공장', lat: 43.1950, lng: 141.0050, type: 'food', region: 'otaru', rating: 4.3,
            desc: '갓 튀긴 빵롤(판로르) 어묵.',
            photos: ['https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800'],
            details: { info: "공장 견학 무료. 빵롤은 여기서만 먹을 수 있는 별미입니다." }
        },

        // --- 비에이/후라노 (Tour) ---
        {
            id: 'biei_tour', name: '비에이 패치워크 로드', lat: 43.5902, lng: 142.4674, type: 'spot', region: 'tour', rating: 4.9,
            desc: '켄과 메리의 나무, 세븐스타 나무.',
            photos: ['https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800'],
            shop_keyword: '방한 부츠',
            details: { 
                info: "대중교통으로 가기 어렵습니다. 렌트카나 버스 투어를 이용하세요.",
                transport: `<button onclick="openAffiliate('klook', '비에이 버스투어')" class="w-full bg-purple-600 text-white py-3 rounded font-bold shadow-lg animate-pulse">🚌 비에이/후라노 일일 투어 예약</button>`
            }
        },
        {
            id: 'blue_pond', name: '청의 호수 (아오이이케)', lat: 43.4938, lng: 142.6143, type: 'spot', region: 'tour', rating: 4.7,
            desc: '신비로운 푸른 물빛의 호수.',
            photos: ['https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800'],
            details: { info: "날씨에 따라 물색이 다릅니다. 겨울엔 라이트업 행사를 합니다." }
        },
        {
            id: 'shirahige', name: '흰수염 폭포', lat: 43.4750, lng: 142.6375, type: 'spot', region: 'tour', rating: 4.6,
            desc: '얼지 않는 푸른 폭포.',
            photos: ['https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800'],
            details: { info: "청의 호수 근처입니다. 다리 위에서 내려다보는 뷰가 장관입니다." }
        },
        {
            id: 'ningle', name: '닝구르 테라스', lat: 43.3235, lng: 142.3556, type: 'spot', region: 'tour', rating: 4.5,
            desc: '요정이 살 것 같은 통나무 집 마을.',
            photos: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'],
            details: { info: "밤에 조명이 켜지면 훨씬 예쁩니다. 수공예품을 팝니다." }
        },
        {
            id: 'noboribetsu', name: '노보리베츠 온천', lat: 42.4959, lng: 141.1466, type: 'spot', region: 'tour', rating: 4.6,
            desc: '지옥 계곡이 있는 홋카이도 대표 온천 마을.',
            photos: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
            details: { info: "유황 냄새가 강하게 납니다. 지옥 계곡 산책로를 걷고 족욕탕에서 발을 담그세요." }
        },

        // --- 맛집 (Food) ---
        {
            id: 'daruma', name: '징기스칸 다루마', lat: 43.0538, lng: 141.3530, type: 'food', region: 'central', rating: 4.3,
            desc: '삿포로 양고기의 전설.',
            photos: ['https://images.unsplash.com/photo-1582234033096-7c06834b97d7?w=800'],
            details: { info: "웨이팅이 깁니다. 4.4점, 5.5점 등 지점이 많으니 분산해서 가세요." }
        },
        {
            id: 'suage', name: '스프카레 스아게+', lat: 43.0552, lng: 141.3536, type: 'food', region: 'central', rating: 4.6,
            desc: '튀긴 야채가 맛있는 스프카레.',
            photos: ['https://images.unsplash.com/photo-1548943487-a2e4e43b485c?w=800'],
            details: { info: "치즈 밥을 꼭 추가하세요. 브로콜리 토핑도 인기입니다." }
        },
        {
            id: 'garaku', name: '스프카레 가라쿠', lat: 43.0560, lng: 141.3540, type: 'food', region: 'central', rating: 4.5,
            desc: '진한 국물의 스프카레 맛집.',
            photos: ['https://images.unsplash.com/photo-1599354607478-6f363c473167?w=800'],
            details: { info: "대기표를 뽑고 오도리 공원을 산책하고 오면 좋습니다." }
        },
        {
            id: 'shingen', name: '라멘 신겐', lat: 43.0522, lng: 141.3468, type: 'food', region: 'central', rating: 4.4,
            desc: '현지인이 사랑하는 미소 라멘.',
            photos: ['https://images.unsplash.com/photo-1552611052-33e04de081de?w=800'],
            details: { info: "국물이 부드럽고 볶음밥(차한)이 정말 맛있습니다." }
        },
        {
            id: 'kani_honke', name: '카니혼케', lat: 43.0652, lng: 141.3518, type: 'food', region: 'central', rating: 4.2,
            desc: '대게 코스 요리 전문점.',
            photos: ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800'],
            details: { info: "점심 특선을 이용하면 합리적인 가격에 게 요리를 즐길 수 있습니다." }
        },

        // --- 호텔 (Hotel) ---
        {
            id: 'the_knot', name: '더 놋 삿포로', lat: 43.0568, lng: 141.3535, type: 'hotel', region: 'central', rating: 4.5,
            desc: '지하상가 연결. 힙한 감성.',
            photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
            details: { info: "스스키노와 오도리 공원 사이라 위치가 최고입니다. 1층에 세이코마트가 있습니다." }
        },
        {
            id: 'nikko', name: 'JR 타워 호텔 닛코', lat: 43.0686, lng: 141.3508, type: 'hotel', region: 'central', rating: 4.7,
            desc: '삿포로역 직결. 최고의 뷰.',
            photos: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
            details: { info: "가장 높은 곳에서 삿포로 시내를 내려다볼 수 있습니다. 스파 시설도 훌륭합니다." }
        }
    ];

    const COUPANG_ITEMS = {
        'essentials': { title: '🧳 삿포로 겨울 여행', items: ['방한부츠 (필수)', '아이젠', '터치 장갑', '붙이는 핫팩', '귀마개'] },
        'snack': { title: '🍫 홋카이도 간식', items: ['시로이 코이비토', '로이즈 초콜릿', '자가포쿠', '유바리 멜론 젤리', '삿포로 클래식 맥주'] },
        'warm': { title: '🧣 방한 용품', items: ['히트텍', '목도리', '털모자', '바람막이', '고보습 크림'] }
    };

    // ==========================================================================
    //  🚀 CORE ENGINE (STATE MANAGEMENT & UI)
    // ==========================================================================
    let userItinerary = { 1: ['cts_airport', 'the_knot', 'susukino', 'daruma'], 2: [], 3: [], 4: [] };
    let activeDay = 1;
    let map, markers = [];
    let adClickCount = 0;

    function initApp() {
        console.log(`❄️ Sapporo App V4.0 Loaded [${CONFIG.MODE}]`);
        injectCSS();
        renderHeader();
        renderBuilderUI();
        setTimeout(initMap, 500);
        if (CONFIG.MODE === 'COMMERCIAL') renderFloatingShop();
    }

    function initMap() {
        const mapEl = document.getElementById('map');
        if (!mapEl) return;
        map = new google.maps.Map(mapEl, {
            center: { lat: 43.0618, lng: 141.3545 },
            zoom: 12,
            mapTypeControl: false, streetViewControl: false, fullscreenControl: true
        });
        updateMapMarkers();
    }

    function renderHeader() {
        const container = document.getElementById('day-tabs');
        if (!container) return;
        container.innerHTML = Object.keys(userItinerary).map(day => 
            `<button onclick="switchDay(${day})" class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay ? 'bg-cyan-600 text-white scale-105 border-cyan-700' : 'bg-white text-gray-500 hover:bg-gray-100'}">Day ${day}</button>`
        ).join('');
    }

    function renderBuilderUI() {
        const container = document.getElementById('itinerary-content');
        if (!container) return;
        
        const planList = userItinerary[activeDay].map((id, idx) => {
            const item = POI_DATABASE.find(p => p.id === id);
            return `
                <div class="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 transition hover:shadow-md">
                    <div class="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">${idx + 1}</div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-cyan-600 truncate" onclick="showDetail('${item.id}')">${item.name}</div>
                        <div class="text-[10px] text-gray-400">${item.region.toUpperCase()} • ${item.type}</div>
                    </div>
                    <button onclick="removeFromPlan('${item.id}')" class="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition">⛔</button>
                </div>`;
        }).join('');

        container.innerHTML = `
            <div class="bg-cyan-50 p-4 rounded-xl mb-6 border border-cyan-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-cyan-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <span class="text-xs text-cyan-600 bg-white px-2 py-1 rounded border border-cyan-200 font-bold">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-cyan-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}</div>
            </div>
            <div class="mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition">전체</button>
                <button onclick="filterSpots('central')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">삿포로 시내</button>
                <button onclick="filterSpots('otaru')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">오타루</button>
                <button onclick="filterSpots('tour')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">비에이/투어</button>
            </div>
            <div id="spot-pool" class="grid grid-cols-1 gap-3 pb-24"></div>`;
        renderSpotPool('all');
    }

    window.renderSpotPool = function(region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);
        
        let htmlContent = filtered.map(place => `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 group hover:border-cyan-400 transition cursor-pointer" onclick="showDetail('${place.id}')">
                <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src="${place.photos[0]}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute bottom-0 w-full bg-black/50 text-white text-[10px] text-center p-0.5 backdrop-blur-sm">상세보기</div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-gray-800 text-sm leading-tight group-hover:text-cyan-600 transition">${place.name}</h4>
                            <span class="text-[10px] font-bold ${place.type === 'food' ? 'text-orange-500 bg-orange-50' : 'text-blue-500 bg-blue-50'} px-1.5 py-0.5 rounded">${place.type.toUpperCase()}</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">${place.desc}</p>
                        <div class="text-[10px] text-yellow-500 mt-1 flex items-center gap-1"><span>★ ${place.rating}</span></div>
                    </div>
                    <button onclick="event.stopPropagation(); addToPlan('${place.id}')" class="w-full mt-2 bg-gray-100 hover:bg-cyan-500 hover:text-white text-gray-600 text-xs py-2 rounded-lg font-bold transition flex items-center justify-center gap-1"><span>➕ 일정에 담기</span></button>
                </div>
            </div>`).join('');

        if (CONFIG.MODE === 'COMMERCIAL') {
            htmlContent += `<div class="bg-gray-50 p-2 rounded-xl text-center border border-gray-200 my-2"><p class="text-[10px] text-gray-400 mb-1 tracking-widest">SPONSORED</p><ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-6q+e9+15-2u+4y" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_FLUID}"></ins></div>`;
            setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 500);
        }
        pool.innerHTML = htmlContent;
    }

    // --- Interaction Logic ---
    window.filterSpots = (region) => { document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('bg-gray-800', 'text-white'); b.classList.add('bg-white', 'text-gray-600'); }); event.target.classList.add('bg-gray-800', 'text-white'); event.target.classList.remove('bg-white', 'text-gray-600'); renderSpotPool(region); }
    window.addToPlan = (id) => { if (userItinerary[activeDay].includes(id)) return alert('이미 일정에 있습니다.'); userItinerary[activeDay].push(id); renderBuilderUI(); updateMapMarkers(); if (userItinerary[activeDay].length % 3 === 0) triggerInterstitial(); }
    window.removeFromPlan = (id) => { userItinerary[activeDay] = userItinerary[activeDay].filter(itemId => itemId !== id); renderBuilderUI(); updateMapMarkers(); }
    window.switchDay = (day) => { triggerInterstitial(() => { activeDay = day; renderHeader(); renderBuilderUI(); updateMapMarkers(); }); }
    function updateMapMarkers() { if (!map) return; markers.forEach(m => m.setMap(null)); markers = []; const bounds = new google.maps.LatLngBounds(); userItinerary[activeDay].forEach((id, idx) => { const item = POI_DATABASE.find(p => p.id === id); if (item) { const marker = new google.maps.Marker({ position: { lat: item.lat, lng: item.lng }, map: map, label: { text: (idx + 1).toString(), color: "white", fontWeight: 'bold' }, animation: google.maps.Animation.DROP }); marker.addListener('click', () => showDetail(id)); markers.push(marker); bounds.extend(marker.getPosition()); } }); if (markers.length > 0) map.fitBounds(bounds); }

    // --- Detail Modal ---
    window.showDetail = function(id) {
        const item = POI_DATABASE.find(p => p.id === id); 
        if (!createModal()) return;
        const content = document.getElementById('modal-content');
        
        let affiliateBtn = '';
        if (CONFIG.MODE === 'COMMERCIAL') {
            if (item.type === 'hotel') {
                affiliateBtn = `<button onclick="openAffiliate('agoda', '${item.name}')" class="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">🏨 아고다 최저가</button><button onclick="openAffiliate('trip', '${item.name}')" class="flex-1 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition">💎 트립닷컴 예약</button>`;
            } else if (item.type === 'spot' || item.type === 'transport') {
                affiliateBtn = `<button onclick="openAffiliate('klook', '${item.name}')" class="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition">🎫 티켓/투어 예매 (클룩)</button>`;
            }
        }
        
        content.innerHTML = `
            <div class="relative h-72 bg-gray-900 group">
                <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90 transition group-hover:opacity-100 duration-700">
                <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur hover:bg-black/70 transition z-20">✕</button>
                <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                    <span class="bg-cyan-600 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-2 inline-block">${item.region.toUpperCase()}</span>
                    <h2 class="text-2xl font-bold text-white leading-tight">${item.name}</h2>
                    <p class="text-sm text-gray-300 mt-1 line-clamp-1">${item.desc}</p>
                </div>
            </div>
            <div class="sticky top-0 bg-white z-10 flex border-b shadow-sm">
                <button class="flex-1 py-3 text-sm font-bold text-cyan-600 border-b-2 border-cyan-600 transition">정보 & 예약</button>
                <button class="flex-1 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition" onclick="alert('준비중입니다.')">리뷰</button>
            </div>
            <div class="p-5 pb-24 space-y-6">
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100"><h3 class="font-bold text-gray-800 text-sm mb-2">💡 여행 꿀팁</h3><div class="prose text-sm text-gray-600 leading-relaxed">${item.details?.info || '정보 업데이트 중...'}</div></div>
                ${item.learning ? `<div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200"><h3 class="font-bold text-yellow-800 text-sm mb-2">🇯🇵 일본어 한마디 (${item.learning.situation})</h3><p class="text-lg font-bold text-gray-800">"${item.learning.phrase}"</p><p class="text-sm text-gray-500 font-mono bg-white inline-block px-2 rounded mt-1">${item.learning.pronunciation}</p><p class="text-xs text-gray-400 mt-2">${item.learning.meaning}</p></div>` : ''}
                ${item.details?.transport ? `<div class="space-y-2"><h3 class="font-bold text-gray-800 text-sm mb-1">🚦 교통 / 티켓 정보</h3>${item.details.transport}</div>` : ''}
                <div class="flex gap-2">${affiliateBtn}</div>
                ${CONFIG.MODE === 'COMMERCIAL' ? `<div class="mt-4 text-center"><div class="text-[10px] text-gray-300 mb-1 tracking-widest">SPONSORED</div><ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins></div>` : ''}
            </div>`;
        if (CONFIG.MODE === 'COMMERCIAL') setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 300);
    }

    // --- Helpers & Shop ---
    function renderFloatingShop() { const btn = document.createElement('button'); btn.className = "fixed bottom-24 right-5 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center text-2xl z-40 border-2 border-white animate-bounce hover:scale-110 transition"; btn.innerHTML = "🛍️"; btn.onclick = () => { if (!createModal()) return; const content = document.getElementById('modal-content'); let html = `<div class="bg-gradient-to-r from-red-500 to-pink-600 text-white p-5 sticky top-0 flex justify-between items-center shadow-md z-10"><div><h2 class="font-bold text-lg">🎒 삿포로 여행 준비물</h2><p class="text-xs opacity-90">로켓배송으로 내일 도착</p></div><button onclick="closeModal()" class="bg-white/20 w-8 h-8 rounded-full">✕</button></div><div class="p-4 grid grid-cols-2 gap-3 pb-24">`; Object.values(COUPANG_ITEMS).forEach(cat => { html += `<div class="col-span-2 font-bold text-gray-700 mt-4 border-l-4 border-red-500 pl-2">${cat.title}</div>`; cat.items.forEach(item => { html += `<div onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')" class="bg-white p-3 rounded-xl border border-gray-200 text-center cursor-pointer hover:border-red-400 hover:shadow-md transition flex flex-col items-center gap-2"><div class="text-3xl bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center">🎁</div><div class="text-xs text-gray-600 font-bold">${item}</div></div>`; }); }); content.innerHTML = html + `</div>`; }; document.body.appendChild(btn); }
    function createModal() { let m = document.getElementById('app-modal'); if (!m) { m = document.createElement('div'); m.id = 'app-modal'; m.className = 'fixed inset-0 z-50 hidden'; m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div><div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform transform translate-y-0"><div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide bg-white"></div></div>`; document.body.appendChild(m); } m.classList.remove('hidden'); return true; }
    window.closeModal = () => document.getElementById('app-modal').classList.add('hidden');
    window.openAffiliate = (type, query) => { let url = ''; if (type === 'klook') url = `https://www.klook.com/ko/search/?query=${encodeURIComponent(query)}`; else if (type === 'agoda') url = `https://www.agoda.com/partners/partnersearch.aspx?cid=${CONFIG.AFFILIATE.AGODA_CID}&city=1`; else if (type === 'trip') url = `${CONFIG.AFFILIATE.TRIP_AID}`; if (url) window.open(url, '_blank'); };
    function triggerInterstitial(cb) { if (CONFIG.MODE !== 'COMMERCIAL') return cb ? cb() : null; adClickCount++; if (adClickCount % 3 !== 0) return cb ? cb() : null; const ad = document.createElement('div'); ad.className = "fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"; ad.innerHTML = `<div class="text-xl font-bold mb-2 animate-pulse text-gray-800">잠시 후 화면이 이동합니다...</div><div class="w-[300px] h-[250px] bg-gray-50 mb-6 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"><ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins></div><button id="skip-ad" class="px-8 py-3 bg-gray-200 rounded-full text-gray-400 font-bold cursor-not-allowed transition-all">5초 후 건너뛰기</button>`; document.body.appendChild(ad); setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 100); let sec = 5; const timer = setInterval(() => { sec--; const btn = document.getElementById('skip-ad'); if (btn) { btn.innerText = sec > 0 ? `${sec}초 후 건너뛰기` : "건너뛰기 ⏩"; if (sec <= 0) { clearInterval(timer); btn.classList.remove('bg-gray-200', 'text-gray-400', 'cursor-not-allowed'); btn.classList.add('bg-cyan-600', 'text-white', 'hover:bg-cyan-700', 'shadow-lg', 'transform', 'hover:scale-105'); btn.onclick = () => { ad.remove(); if (cb) cb(); }; } } }, 1000); }
    function injectCSS() { const s = document.createElement('style'); s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }`; document.head.appendChild(s); }

    initApp();
})();