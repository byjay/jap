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
    //  🍜 MASSIVE DATABASE: FUKUOKA (25+ Spots)
    // ==========================================================================
    const POI_DATABASE = [
        // --- 교통 ---
        {
            id: 'fuk_airport', name: '후쿠오카 공항 (FUK)', lat: 33.5859, lng: 130.4501, type: 'transport', region: 'airport', rating: 4.6,
            desc: '세계에서 도심과 가장 가까운 공항. 하카타역까지 지하철 5분.',
            photos: ['https://images.unsplash.com/photo-1542349385-52e971371b13?w=800'],
            details: {
                info: "공항이 시내와 너무 가까워 택시를 타도 부담이 없습니다. 국제선 터미널에서 셔틀버스를 타고 국내선으로 이동해야 지하철을 탈 수 있습니다.",
                transport: `
                    <div class="space-y-2">
                        <button onclick="openAffiliate('klook', '산큐패스')" class="block w-full bg-blue-600 text-white text-xs py-3 rounded font-bold hover:bg-blue-700 transition">🚌 산큐패스 (버스 무제한) 최저가</button>
                        <button onclick="openAffiliate('klook', 'JR 규슈 레일패스')" class="block w-full bg-red-500 text-white text-xs py-3 rounded font-bold hover:bg-red-600 transition">🚆 JR 규슈 레일패스 (유후인 이동시 추천)</button>
                    </div>`
            },
            learning: { situation: "택시", phrase: "하카타역까지 부탁합니다.", pronunciation: "하카타에키마데 오네가이시마스.", meaning: "기본요금 수준입니다." }
        },

        // --- 하카타/나카스 (Hakata) ---
        {
            id: 'hakata_station', name: 'JR 하카타역', lat: 33.5897, lng: 130.4207, type: 'spot', region: 'hakata', rating: 4.5,
            desc: '후쿠오카의 중심. 백화점과 맛집의 집결지.',
            photos: ['https://images.unsplash.com/photo-1575443207716-419b48997232?w=800'],
            shop_keyword: '손수건',
            details: { info: "아뮤플라자, 한큐백화점, 데이토스가 모두 연결되어 있습니다. 옥상 정원에서는 비행기 이착륙을 볼 수 있습니다." }
        },
        {
            id: 'canal_city', name: '캐널시티 하카타', lat: 33.5892, lng: 130.4107, type: 'spot', region: 'hakata', rating: 4.4,
            desc: '운하가 흐르는 복합 쇼핑몰. 분수쇼.',
            photos: ['https://images.unsplash.com/photo-1565578768782-b78904df9764?w=800'],
            shop_keyword: '캐릭터 굿즈',
            details: { info: "정각마다 열리는 분수쇼는 필수 관람입니다. 프랑프랑, 디즈니 스토어 등 쇼핑할 곳이 많습니다." }
        },
        {
            id: 'nakasu_yatai', name: '나카스 포장마차 거리', lat: 33.5924, lng: 130.4037, type: 'food', region: 'hakata', rating: 4.2,
            desc: '강변의 낭만. 하카타 돈코츠 라멘과 오뎅.',
            photos: ['https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800'],
            details: { info: "관광지 물가가 적용되어 조금 비쌀 수 있습니다. 분위기를 즐기러 가세요. 화장실 이용이 불편하니 미리 다녀오세요." }
        },
        {
            id: 'kushida', name: '구시다 신사', lat: 33.5930, lng: 130.4105, type: 'spot', region: 'hakata', rating: 4.3,
            desc: '하카타 기온 야마카사의 출발점.',
            photos: ['https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'],
            details: { info: "명성황후를 시해한 칼이 보관된 곳이라 한국인에게는 역사적 의미가 깊은 곳입니다. (일반 공개는 하지 않음)" }
        },

        // --- 텐진/다이묘 (Tenjin) ---
        {
            id: 'tenjin_under', name: '텐진 지하상가', lat: 33.5916, lng: 130.4017, type: 'spot', region: 'tenjin', rating: 4.5,
            desc: '규슈 최대의 지하 쇼핑몰. 유럽풍 인테리어.',
            photos: ['https://images.unsplash.com/photo-1588821949320-e222f771746c?w=800'],
            shop_keyword: '양말',
            details: { info: "비 오는 날 쇼핑하기 최적입니다. 백화점들과 모두 연결되어 있어 길 잃기 쉽습니다. '링고' 애플파이가 유명합니다." }
        },
        {
            id: 'daimyo', name: '다이묘 거리', lat: 33.5876, lng: 130.3970, type: 'spot', region: 'tenjin', rating: 4.4,
            desc: '후쿠오카의 가로수길. 힙한 카페와 편집샵.',
            photos: ['https://images.unsplash.com/photo-1579202673506-ca3ce28f8ef3?w=800'],
            details: { info: "슈프림, 스투시 등 스트릿 브랜드와 빈티지 샵이 많습니다. '앨리스' 샵은 입구가 작아 찾기 힘드니 주의." }
        },
        {
            id: 'ohori', name: '오호리 공원', lat: 33.5855, lng: 130.3769, type: 'spot', region: 'tenjin', rating: 4.7,
            desc: '도심 속 거대한 호수 공원. 스타벅스.',
            photos: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'],
            shop_keyword: '돗자리',
            details: { info: "호수를 바라보는 스타벅스 컨셉 스토어가 인기입니다. 오리배를 탈 수 있습니다." }
        },

        // --- 모모치/타워 (Seaside) ---
        {
            id: 'fukuoka_tower', name: '후쿠오카 타워', lat: 33.5933, lng: 130.3515, type: 'spot', region: 'seaside', rating: 4.5,
            desc: '해변에 우뚝 솟은 거울 타워. 야경 명소.',
            photos: ['https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'],
            details: { 
                info: "외관이 8000장의 반투명 거울로 덮여 있습니다. 모모치 해변이 한눈에 내려다보입니다.",
                transport: `<button onclick="openAffiliate('klook', '후쿠오카 타워')" class="w-full bg-orange-500 text-white py-2 rounded font-bold">🎫 타워 입장권 할인 예매</button>` 
            }
        },
        {
            id: 'momochi', name: '모모치 해변', lat: 33.5954, lng: 130.3523, type: 'spot', region: 'seaside', rating: 4.4,
            desc: '인공 해변과 이국적인 결혼식장 건물.',
            photos: ['https://images.unsplash.com/photo-1621847466023-40c354031175?w=800'],
            details: { info: "마리존(결혼식장) 앞에서 사진 찍으면 유럽에 온 듯한 느낌을 줍니다. 선셋 타임 추천." }
        },
        {
            id: 'teamlab_fuk', name: '팀랩 포레스트 후쿠오카', lat: 33.5900, lng: 130.3550, type: 'spot', region: 'seaside', rating: 4.6,
            desc: '빛과 숲의 디지털 아트 전시.',
            photos: ['https://images.unsplash.com/photo-1569668106296-5ac694709d7d?w=800'],
            details: { info: "스마트폰 앱을 이용해 동물을 잡는 체험이 아이들에게 인기입니다. 타워 바로 옆 E-ZO 건물에 있습니다.", transport: `<button onclick="openAffiliate('klook', '팀랩 포레스트')" class="w-full bg-purple-600 text-white py-2 rounded font-bold">🎫 팀랩 포레스트 예매</button>` }
        },

        // --- 근교 투어 (Nearby) ---
        {
            id: 'dazaifu', name: '다자이푸 텐만구', lat: 33.5215, lng: 130.5349, type: 'spot', region: 'nearby', rating: 4.6,
            desc: '학문의 신을 모시는 신사. 매화가지떡.',
            photos: ['https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=800'],
            details: { info: "참배길(오모테산도)에 있는 '우메가에모치(매화가지떡)'는 꼭 드세요. 스타벅스 컨셉 스토어도 유명합니다." }
        },
        {
            id: 'yufuin', name: '유후인 온천 마을', lat: 33.2655, lng: 131.3556, type: 'spot', region: 'nearby', rating: 4.8,
            desc: '긴린코 호수와 아기자기한 상점가.',
            photos: ['https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800'],
            details: { 
                info: "후쿠오카에서 버스로 2시간. 금상 고로케, 비스픽 롤케이크 등 먹거리가 넘칩니다.",
                transport: `<button onclick="openAffiliate('klook', '유후인 버스투어')" class="w-full bg-green-600 text-white py-2 rounded font-bold animate-pulse">🚌 유후인/다자이푸 일일 투어 예약</button>` 
            }
        },
        {
            id: 'beppu', name: '벳푸 지옥 온천', lat: 33.3155, lng: 131.4727, type: 'spot', region: 'nearby', rating: 4.5,
            desc: '가마솥 지옥 등 7개의 지옥 순례.',
            photos: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'],
            details: { info: "온천 증기로 찐 계란과 라무네 사이다를 먹는 것이 하이라이트입니다." }
        },

        // --- 맛집 (Food) ---
        {
            id: 'ichiran_hq', name: '이치란 라멘 본점', lat: 33.5930, lng: 130.4045, type: 'food', region: 'hakata', rating: 4.6,
            desc: '건물 전체가 라멘집. 본점 한정 메뉴.',
            photos: ['https://images.unsplash.com/photo-1552611052-33e04de081de?w=800'],
            details: { info: "본점 1층에서는 '카마다레(가마 솥)' 돈코츠 라멘을 맛볼 수 있습니다. 24시간 영업." }
        },
        {
            id: 'motsunabe', name: '모츠나베 오오야마', lat: 33.5898, lng: 130.4208, type: 'food', region: 'hakata', rating: 4.5,
            desc: '후쿠오카 명물 대창 전골. 진한 된장 육수.',
            photos: ['https://images.unsplash.com/photo-1541544744-5e3a01994119?w=800'],
            details: { info: "하카타역 내에 있어 접근성이 좋습니다. 런치 세트가 가성비가 좋습니다. 짬뽕면 추가 필수." }
        },
        {
            id: 'shinshin', name: '신신 라멘', lat: 33.5915, lng: 130.3958, type: 'food', region: 'tenjin', rating: 4.7,
            desc: '현지인들이 더 좋아하는 얇은 면발 라멘.',
            photos: ['https://images.unsplash.com/photo-1599354607478-6f363c473167?w=800'],
            details: { info: "동방신기 등 연예인들이 많이 방문한 곳. 국물이 담백해서 한국인 입맛에 잘 맞습니다." }
        },
        {
            id: 'kiwamiya', name: '키와미야 함바그', lat: 33.5888, lng: 130.4005, type: 'food', region: 'tenjin', rating: 4.5,
            desc: '직접 구워 먹는 돌판 함박 스테이크.',
            photos: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'],
            details: { info: "웨이팅이 기본 1시간 이상입니다. 오픈런을 추천합니다. 기름이 많이 튀니 앞치마 필수." }
        },

        // --- 호텔 (Hotel) ---
        {
            id: 'miyako', name: '미야코 호텔 하카타', lat: 33.5900, lng: 130.4215, type: 'hotel', region: 'hakata', rating: 4.8,
            desc: '하카타역 직결 럭셔리 호텔. 옥상 수영장.',
            photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
            details: { info: "루프탑 온천 수영장이 유명합니다. 역과 지하로 연결되어 이동이 매우 편리합니다." }
        },
        {
            id: 'candeo', name: '칸데오 호텔 텐진', lat: 33.5880, lng: 130.4020, type: 'hotel', region: 'tenjin', rating: 4.6,
            desc: '스카이 스파(대욕장)가 있는 가성비 호텔.',
            photos: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'],
            details: { info: "쇼핑과 맛집 탐방에 최적화된 위치입니다. 사우나가 훌륭합니다." }
        }
    ];

    const COUPANG_ITEMS = {
        'essentials': { title: '🧳 후쿠오카 여행 필수템', items: ['110v 돼지코', '동전지갑', '유심/eSIM', '보조배터리', '쇼핑용 장바구니'] },
        'foodie': { title: '🍜 먹방 여행 준비', items: ['소화제(카베진)', '숙취해소제', '물티슈', '치실', '가글'] },
        'gift': { title: '🎁 일본 쇼핑 리스트', items: ['퍼펙트휩', '동전파스', '샤론파스', '곤약젤리', '이치란 밀키트'] }
    };

    // ==========================================================================
    //  🚀 CORE ENGINE (STATE MANAGEMENT & UI)
    // ==========================================================================
    let userItinerary = { 1: ['fuk_airport', 'hakata_station', 'ichiran_hq'], 2: [], 3: [], 4: [] };
    let activeDay = 1;
    let map, markers = [];
    let adClickCount = 0;

    function initApp() {
        console.log(`🍜 Fukuoka App V4.0 Loaded [${CONFIG.MODE}]`);
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
            center: { lat: 33.5902, lng: 130.4017 },
            zoom: 12,
            mapTypeControl: false, streetViewControl: false, fullscreenControl: true
        });
        updateMapMarkers();
    }

    function renderHeader() {
        const container = document.getElementById('day-tabs');
        if (!container) return;
        container.innerHTML = Object.keys(userItinerary).map(day => 
            `<button onclick="switchDay(${day})" 
                class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${
                day == activeDay 
                ? 'bg-orange-500 text-white scale-105 border-orange-600' 
                : 'bg-white text-gray-500 hover:bg-gray-100'
            }">
                Day ${day}
            </button>`
        ).join('');
    }

    function renderBuilderUI() {
        const container = document.getElementById('itinerary-content');
        if (!container) return;
        
        const planList = userItinerary[activeDay].map((id, idx) => {
            const item = POI_DATABASE.find(p => p.id === id);
            return `
                <div class="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 transition hover:shadow-md">
                    <div class="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        ${idx + 1}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-orange-600 truncate" onclick="showDetail('${item.id}')">
                            ${item.name}
                        </div>
                        <div class="text-[10px] text-gray-400">
                            ${item.region.toUpperCase()} • ${item.type}
                        </div>
                    </div>
                    <button onclick="removeFromPlan('${item.id}')" class="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition">
                        ⛔
                    </button>
                </div>`;
        }).join('');

        container.innerHTML = `
            <!-- 1. 내 일정 -->
            <div class="bg-orange-50 p-4 rounded-xl mb-6 border border-orange-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-orange-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <span class="text-xs text-orange-600 bg-white px-2 py-1 rounded border border-orange-200 font-bold">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-orange-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}
                </div>
            </div>

            <!-- 2. 필터 버튼 -->
            <div class="mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition">전체</button>
                <button onclick="filterSpots('hakata')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">하카타/나카스</button>
                <button onclick="filterSpots('tenjin')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">텐진/다이묘</button>
                <button onclick="filterSpots('nearby')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">유후인/근교</button>
            </div>

            <!-- 3. 장소 리스트 -->
            <div id="spot-pool" class="grid grid-cols-1 gap-3 pb-24"></div>`;
            
        renderSpotPool('all');
    }

    window.renderSpotPool = function(region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);
        
        let htmlContent = filtered.map(place => `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 group hover:border-orange-400 transition cursor-pointer" onclick="showDetail('${place.id}')">
                <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src="${place.photos[0]}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="absolute bottom-0 w-full bg-black/50 text-white text-[10px] text-center p-0.5 backdrop-blur-sm">상세보기</div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-gray-800 text-sm leading-tight group-hover:text-orange-600 transition">${place.name}</h4>
                            <span class="text-[10px] font-bold ${place.type === 'food' ? 'text-red-500 bg-red-50' : 'text-blue-500 bg-blue-50'} px-1.5 py-0.5 rounded">${place.type.toUpperCase()}</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">${place.desc}</p>
                        <div class="text-[10px] text-yellow-500 mt-1 flex items-center gap-1"><span>★ ${place.rating}</span></div>
                    </div>
                    <button onclick="event.stopPropagation(); addToPlan('${place.id}')" class="w-full mt-2 bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-600 text-xs py-2 rounded-lg font-bold transition flex items-center justify-center gap-1">
                        <span>➕ 일정에 담기</span>
                    </button>
                </div>
            </div>`).join('');

        if (CONFIG.MODE === 'COMMERCIAL') {
            htmlContent += `
            <div class="bg-gray-50 p-2 rounded-xl text-center border border-gray-200 my-2">
                <p class="text-[10px] text-gray-400 mb-1 tracking-widest">SPONSORED</p>
                <ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-6q+e9+15-2u+4y" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_FLUID}"></ins>
            </div>`;
            setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 500);
        }
        pool.innerHTML = htmlContent;
    }

    // --- 인터랙션 로직 ---
    window.filterSpots = (region) => { 
        document.querySelectorAll('.filter-btn').forEach(b => { 
            b.classList.remove('bg-gray-800', 'text-white'); 
            b.classList.add('bg-white', 'text-gray-600'); 
        }); 
        event.target.classList.add('bg-gray-800', 'text-white'); 
        event.target.classList.remove('bg-white', 'text-gray-600'); 
        renderSpotPool(region); 
    }

    window.addToPlan = (id) => { 
        if (userItinerary[activeDay].includes(id)) return alert('이미 일정에 있습니다.'); 
        userItinerary[activeDay].push(id); 
        renderBuilderUI(); 
        updateMapMarkers(); 
        if (userItinerary[activeDay].length % 3 === 0) triggerInterstitial(); 
    }

    window.removeFromPlan = (id) => { 
        userItinerary[activeDay] = userItinerary[activeDay].filter(itemId => itemId !== id); 
        renderBuilderUI(); 
        updateMapMarkers(); 
    }

    window.switchDay = (day) => { 
        triggerInterstitial(() => { 
            activeDay = day; 
            renderHeader(); 
            renderBuilderUI(); 
            updateMapMarkers(); 
        }); 
    }

    function updateMapMarkers() { 
        if (!map) return; 
        markers.forEach(m => m.setMap(null)); 
        markers = []; 
        const bounds = new google.maps.LatLngBounds(); 
        
        userItinerary[activeDay].forEach((id, idx) => { 
            const item = POI_DATABASE.find(p => p.id === id); 
            if (item) { 
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
        
        if (markers.length > 0) map.fitBounds(bounds); 
    }

    // --- 상세 모달 ---
    window.showDetail = function(id) {
        const item = POI_DATABASE.find(p => p.id === id); 
        if (!createModal()) return;
        const content = document.getElementById('modal-content');
        
        let affiliateBtn = '';
        if (CONFIG.MODE === 'COMMERCIAL') {
            if (item.type === 'hotel') {
                affiliateBtn = `
                    <button onclick="openAffiliate('agoda', '${item.name}')" class="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">🏨 아고다 최저가</button>
                    <button onclick="openAffiliate('trip', '${item.name}')" class="flex-1 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition">💎 트립닷컴 예약</button>`;
            } else if (item.type === 'spot' || item.type === 'transport') {
                affiliateBtn = `
                    <button onclick="openAffiliate('klook', '${item.name}')" class="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition">🎫 티켓/투어 최저가 예매</button>`;
            }
        }
        
        content.innerHTML = `
            <div class="relative h-72 bg-gray-900 group">
                <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90 transition group-hover:opacity-100 duration-700">
                <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur hover:bg-black/70 transition z-20">✕</button>
                <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                    <span class="bg-orange-600 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-2 inline-block">${item.region.toUpperCase()}</span>
                    <h2 class="text-2xl font-bold text-white leading-tight">${item.name}</h2>
                    <p class="text-sm text-gray-300 mt-1 line-clamp-1">${item.desc}</p>
                </div>
            </div>
            <div class="sticky top-0 bg-white z-10 flex border-b shadow-sm">
                <button class="flex-1 py-3 text-sm font-bold text-orange-600 border-b-2 border-orange-600 transition">정보 & 예약</button>
                <button class="flex-1 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition" onclick="alert('준비중입니다.')">리뷰</button>
            </div>
            <div class="p-5 pb-24 space-y-6">
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h3 class="font-bold text-gray-800 text-sm mb-2">💡 여행 꿀팁</h3>
                    <div class="prose text-sm text-gray-600 leading-relaxed">${item.details?.info || '정보 업데이트 중...'}</div>
                </div>
                ${item.learning ? `
                <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <h3 class="font-bold text-yellow-800 text-sm mb-2">🇯🇵 일본어 한마디 (${item.learning.situation})</h3>
                    <p class="text-lg font-bold text-gray-800">"${item.learning.phrase}"</p>
                    <p class="text-sm text-gray-500 font-mono bg-white inline-block px-2 rounded mt-1">${item.learning.pronunciation}</p>
                    <p class="text-xs text-gray-400 mt-2">${item.learning.meaning}</p>
                </div>` : ''}
                ${item.details?.transport ? `
                <div class="space-y-2">
                    <h3 class="font-bold text-gray-800 text-sm mb-1">🚦 교통 / 티켓 정보</h3>
                    ${item.details.transport}
                </div>` : ''}
                <div class="flex gap-2">${affiliateBtn}</div>
                ${CONFIG.MODE === 'COMMERCIAL' ? `
                <div class="mt-4 text-center">
                    <div class="text-[10px] text-gray-300 mb-1 tracking-widest">SPONSORED</div>
                    <ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins>
                </div>` : ''}
            </div>`;
            
        if (CONFIG.MODE === 'COMMERCIAL') {
            setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 300);
        }
    }

    // --- Helpers ---
    function renderFloatingShop() {
        const btn = document.createElement('button');
        btn.className = "fixed bottom-24 right-5 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center text-2xl z-40 border-2 border-white animate-bounce hover:scale-110 transition";
        btn.innerHTML = "🛍️";
        btn.onclick = () => {
            if (!createModal()) return;
            const content = document.getElementById('modal-content');
            let html = `
                <div class="bg-gradient-to-r from-red-500 to-pink-600 text-white p-5 sticky top-0 flex justify-between items-center shadow-md z-10">
                    <div><h2 class="font-bold text-lg">🎒 후쿠오카 여행 준비물</h2><p class="text-xs opacity-90">로켓배송으로 내일 도착</p></div>
                    <button onclick="closeModal()" class="bg-white/20 w-8 h-8 rounded-full">✕</button>
                </div>
                <div class="p-4 grid grid-cols-2 gap-3 pb-24">`;
            Object.values(COUPANG_ITEMS).forEach(cat => {
                html += `<div class="col-span-2 font-bold text-gray-700 mt-4 border-l-4 border-red-500 pl-2">${cat.title}</div>`;
                cat.items.forEach(item => {
                    html += `
                    <div onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')" class="bg-white p-3 rounded-xl border border-gray-200 text-center cursor-pointer hover:border-red-400 hover:shadow-md transition flex flex-col items-center gap-2">
                        <div class="text-3xl bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center">🎁</div>
                        <div class="text-xs text-gray-600 font-bold">${item}</div>
                    </div>`;
                });
            });
            content.innerHTML = html + `</div>`;
        };
        document.body.appendChild(btn);
    }

    function createModal() {
        let m = document.getElementById('app-modal');
        if (!m) {
            m = document.createElement('div');
            m.id = 'app-modal';
            m.className = 'fixed inset-0 z-50 hidden';
            m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div><div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform transform translate-y-0"><div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide bg-white"></div></div>`;
            document.body.appendChild(m);
        }
        m.classList.remove('hidden');
        return true;
    }

    window.closeModal = () => document.getElementById('app-modal').classList.add('hidden');
    
    window.openAffiliate = (type, query) => {
        let url = '';
        if (type === 'klook') url = `https://www.klook.com/ko/search/?query=${encodeURIComponent(query)}`;
        else if (type === 'agoda') url = `https://www.agoda.com/partners/partnersearch.aspx?cid=${CONFIG.AFFILIATE.AGODA_CID}&city=1`;
        else if (type === 'trip') url = `${CONFIG.AFFILIATE.TRIP_AID}`;
        if (url) window.open(url, '_blank');
    };

    function triggerInterstitial(cb) {
        if (CONFIG.MODE !== 'COMMERCIAL') return cb ? cb() : null;
        adClickCount++;
        if (adClickCount % 3 !== 0) return cb ? cb() : null;

        const ad = document.createElement('div');
        ad.className = "fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center";
        ad.innerHTML = `
            <div class="text-xl font-bold mb-2 animate-pulse text-gray-800">잠시 후 화면이 이동합니다...</div>
            <div class="w-[300px] h-[250px] bg-gray-50 mb-6 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden">
                <ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins>
            </div>
            <button id="skip-ad" class="px-8 py-3 bg-gray-200 rounded-full text-gray-400 font-bold cursor-not-allowed transition-all">5초 후 건너뛰기</button>
        `;
        document.body.appendChild(ad);
        setTimeout(() => { try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } }, 100);

        let sec = 5;
        const timer = setInterval(() => {
            sec--;
            const btn = document.getElementById('skip-ad');
            if (btn) {
                btn.innerText = sec > 0 ? `${sec}초 후 건너뛰기` : "건너뛰기 ⏩";
                if (sec <= 0) {
                    clearInterval(timer);
                    btn.classList.remove('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
                    btn.classList.add('bg-orange-600', 'text-white', 'hover:bg-orange-700', 'shadow-lg', 'transform', 'hover:scale-105');
                    btn.onclick = () => { ad.remove(); if (cb) cb(); };
                }
            }
        }, 1000);
    }

    function injectCSS() {
        const s = document.createElement('style');
        s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }`;
        document.head.appendChild(s);
    }

    initApp();
})();