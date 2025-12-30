(function () {
    // ==========================================================================
    //  ⚙️ ULTRA CONFIGURATION (수익화 & 시스템 설정)
    // ==========================================================================
    const CONFIG = {
        MODE: 'COMMERCIAL', // 'FAMILY' 로 변경 시 광고 및 예약 링크 제거
        AFFILIATE: {
            COUPANG_BASE: "https://link.coupang.com/a/c9Vuww",
            AGODA_CID: "1922240", // 본인 아고다 CID 입력
            TRIP_AID: "12345",    // 본인 트립닷컴 AID 입력
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
    //  🗼 MASSIVE DATABASE: TOKYO (20+ Spots)
    // ==========================================================================
    const POI_DATABASE = [
        // --- 교통 ---
        {
            id: 'narita', name: '나리타 공항 (NRT)', lat: 35.7719, lng: 140.3929, type: 'transport', region: 'east', rating: 4.2,
            desc: '도쿄의 관문. 스카이라이너와 NEX의 출발점.',
            photos: ['https://images.unsplash.com/photo-1542649761-0c805c00d6b5?w=800'],
            details: {
                info: "1, 2, 3터미널로 나뉘어 있으니 항공사별 터미널을 꼭 확인하세요.",
                transport: `
                    <div class="space-y-2">
                        <button onclick="openAffiliate('klook', '스카이라이너 티켓')" class="block w-full bg-blue-600 text-white text-xs py-2 rounded font-bold">🚄 스카이라이너 할인 예매 (우에노 40분)</button>
                        <button onclick="openAffiliate('klook', '도쿄 서브웨이 티켓')" class="block w-full bg-red-500 text-white text-xs py-2 rounded font-bold">🚇 도쿄 메트로 패스 (24/48/72시간)</button>
                    </div>`
            }
        },
        {
            id: 'haneda', name: '하네다 공항 (HND)', lat: 35.5494, lng: 139.7798, type: 'transport', region: 'south', rating: 4.5,
            desc: '도심 접근성 최고. 모노레일 타고 시내로.',
            photos: ['https://images.unsplash.com/photo-1570698473651-b2de99be12f0?w=800'],
            details: { info: "에도 코지(식당가)와 야외 전망 데크가 훌륭합니다. 시내까지 30분 컷." }
        },

        // --- 신주쿠/시부야 (West) ---
        {
            id: 'shibuya_sky', name: '시부야 스카이', lat: 35.6585, lng: 139.7023, type: 'spot', region: 'west', rating: 4.8,
            desc: '도쿄에서 가장 핫한 루프탑 전망대.',
            photos: ['https://images.unsplash.com/photo-1678886364239-2e06c7d1e878?w=800'],
            shop_keyword: '셀카봉',
            details: { 
                info: "예약 필수입니다. 일몰 시간대 티켓은 한 달 전 매진되니 서두르세요.", 
                transport: `<button onclick="openAffiliate('klook', '시부야 스카이')" class="w-full bg-orange-500 text-white py-2 rounded font-bold">🎫 입장권 예매 (매진 임박)</button>` 
            }
        },
        {
            id: 'shinjuku_gyoen', name: '신주쿠 교엔', lat: 35.6852, lng: 139.7101, type: 'spot', region: 'west', rating: 4.6,
            desc: '애니메이션 "언어의 정원" 배경지.',
            photos: ['https://images.unsplash.com/photo-1586267862734-77ac3265eb40?w=800'],
            shop_keyword: '돗자리',
            details: { info: "음주 금지, 놀이 기구 반입 금지라 조용하게 힐링하기 좋습니다. 봄에는 벚꽃 명소." }
        },
        {
            id: 'omoide', name: '오모이데 요코초', lat: 35.6929, lng: 139.6995, type: 'food', region: 'west', rating: 4.4,
            desc: '꼬치 굽는 연기가 자욱한 레트로 골목.',
            photos: ['https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800'],
            details: { info: "자릿세(오토오시)가 있고 현금 결제가 대부분입니다. 좁지만 분위기는 최고." }
        },
        {
            id: 'harajuku', name: '하라주쿠 다케시타', lat: 35.6715, lng: 139.7030, type: 'spot', region: 'west', rating: 4.3,
            desc: '카와이 문화의 발상지. 크레페와 스티커사진.',
            photos: ['https://images.unsplash.com/photo-1525010660686-2775f564778b?w=800'],
            details: { info: "사람이 엄청 많습니다. 마리온 크레페나 산타모니카 크레페가 유명합니다." }
        },
        {
            id: 'meiji_jingu', name: '메이지 신궁', lat: 35.6764, lng: 139.6993, type: 'spot', region: 'west', rating: 4.5,
            desc: '도심 속 거대한 숲. 힐링 산책 코스.',
            photos: ['https://images.unsplash.com/photo-1583921820466-9f66b6c07577?w=800'],
            details: { info: "입장료 무료. 입구의 거대한 도리이는 대만산 편백나무로 만들어졌습니다." }
        },

        // --- 아사쿠사/우에노 (North/East) ---
        {
            id: 'sensoji', name: '센소지 (아사쿠사)', lat: 35.7147, lng: 139.7966, type: 'spot', region: 'east', rating: 4.7,
            desc: '도쿄 필수 코스. 붉은 제등 카미나리몬.',
            photos: ['https://images.unsplash.com/photo-1565058782068-15024b335685?w=800'],
            shop_keyword: '일본 기념품',
            details: { info: "나카미세 도리에서 '멘치카츠'와 '실크푸딩'을 꼭 드셔보세요. 기모노 체험 추천." }
        },
        {
            id: 'skytree', name: '도쿄 스카이트리', lat: 35.7100, lng: 139.8107, type: 'spot', region: 'east', rating: 4.6,
            desc: '634m 높이의 전파탑. 소라마치 쇼핑몰.',
            photos: ['https://images.unsplash.com/photo-1536768138796-12c479418521?w=800'],
            details: { 
                info: "아사쿠사에서 걸어서 갈 수 있습니다(스미다 리버 워크 이용). 해 질 녘이 가장 아름답습니다.", 
                transport: `<button onclick="openAffiliate('klook', '도쿄 스카이트리')" class="w-full bg-blue-500 text-white py-2 rounded font-bold">🎫 전망대 티켓 예매</button>` 
            }
        },
        {
            id: 'akihabara', name: '아키하바라', lat: 35.6983, lng: 139.7730, type: 'spot', region: 'east', rating: 4.4,
            desc: '오타쿠의 성지. 피규어, 게임, 메이드 카페.',
            photos: ['https://images.unsplash.com/photo-1579969399882-1e9b4647320d?w=800'],
            shop_keyword: '피규어 케이스',
            details: { info: "라디오회관, 만다라케가 유명합니다. 일요일 낮에는 차 없는 거리입니다." }
        },
        {
            id: 'ueno_park', name: '우에노 공원', lat: 35.7140, lng: 139.7741, type: 'spot', region: 'east', rating: 4.4,
            desc: '박물관, 미술관, 동물원이 모여있는 문화 지구.',
            photos: ['https://images.unsplash.com/photo-1554228965-0553d1007787?w=800'],
            details: { info: "동물원의 판다가 인기 스타입니다. 벚꽃 시즌엔 자리가 없습니다." }
        },

        // --- 긴자/도쿄역 (Central) ---
        {
            id: 'ginza_six', name: '긴자 식스', lat: 35.6696, lng: 139.7640, type: 'spot', region: 'central', rating: 4.5,
            desc: '럭셔리 쇼핑몰. 옥상 정원 뷰가 숨은 명소.',
            photos: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'],
            details: { info: "중앙 홀의 설치 미술은 쿠사마 야요이 등 유명 작가의 작품으로 주기적으로 바뀝니다." }
        },
        {
            id: 'tsukiji', name: '츠키지 장외시장', lat: 35.6655, lng: 139.7707, type: 'food', region: 'central', rating: 4.3,
            desc: '신선한 해산물 먹방. 계란말이와 호르몬동.',
            photos: ['https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800'],
            details: { info: "오전 10시~12시가 가장 붐빕니다. '키츠네야' 호르몬동은 줄이 깁니다." }
        },
        {
            id: 'teamlab', name: '팀랩 플래닛 도쿄', lat: 35.6457, lng: 139.7972, type: 'spot', region: 'central', rating: 4.7,
            desc: '물 속을 걷는 몰입형 전시. 인생샷 제조기.',
            photos: ['https://images.unsplash.com/photo-1569668106296-5ac694709d7d?w=800'],
            shop_keyword: '반바지',
            details: { 
                info: "무릎까지 물이 차오르니 반바지를 입거나 걷기 편한 옷을 입으세요.", 
                transport: `<button onclick="openAffiliate('klook', '팀랩 플래닛')" class="w-full bg-purple-600 text-white py-2 rounded font-bold">🎫 전시회 예매 (매진 빠름)</button>` 
            }
        },

        // --- 오다이바/디즈니 (Bay Area) ---
        {
            id: 'gundam', name: '오다이바 건담', lat: 35.6244, lng: 139.7755, type: 'spot', region: 'south', rating: 4.6,
            desc: '실물 크기 유니콘 건담. 변신 퍼포먼스.',
            photos: ['https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800'],
            details: { info: "다이버시티 쇼핑몰 앞에 있습니다. 정해진 시간마다 변신하고 불빛이 들어옵니다." }
        },
        {
            id: 'disney', name: '도쿄 디즈니 리조트', lat: 35.6329, lng: 139.8804, type: 'spot', region: 'east', rating: 4.9,
            desc: '꿈과 환상의 나라. 랜드와 씨 중 선택.',
            photos: ['https://images.unsplash.com/photo-1545580227-2d43cb8d234a?w=800'],
            shop_keyword: '디즈니 머리띠',
            details: { 
                info: "디즈니 씨는 전 세계 유일합니다. 미녀와 야수 어트랙션(랜드)은 DPA 필수.", 
                transport: `<button onclick="openAffiliate('klook', '도쿄 디즈니')" class="w-full bg-pink-500 text-white py-2 rounded font-bold">🎡 디즈니랜드/씨 티켓 예매</button>` 
            }
        },

        // --- 호텔 ---
        {
            id: 'gracery', name: '호텔 그레이서리 신주쿠', lat: 35.6955, lng: 139.7009, type: 'hotel', region: 'west', rating: 4.4,
            desc: '고질라가 보이는 호텔. 가부키초 중심.',
            photos: ['https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800'],
            details: { info: "위치가 정말 편리합니다. 1층에 세븐일레븐이 있고 돈키호테가 바로 옆입니다." }
        },
        {
            id: 'prince_park', name: '더 프린스 파크 타워', lat: 35.6544, lng: 139.7482, type: 'hotel', region: 'central', rating: 4.6,
            desc: '도쿄타워 뷰 끝판왕 호텔.',
            photos: ['https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'],
            details: { info: "공원 산책하기 좋고 시바 공원이 바로 앞입니다. 룸서비스 뷰가 유명합니다." }
        }
    ];

    const COUPANG_ITEMS = {
        'essentials': { title: '🧳 일본 여행 필수템', items: ['돼지코(110v)', '동전지갑', '유심/eSIM', '보조배터리', '압축파우치'] },
        'shopping': { title: '🛍️ 쇼핑 꿀템', items: ['휴족시간', '샤론파스', '퍼펙트휩', '일본 컵라면', '곤약젤리'] },
        'camera': { title: '📸 추억 기록', items: ['일회용 카메라', '셀카봉 삼각대', 'SD카드', '고프로', '짐벌'] }
    };

    let userItinerary = { 1: ['narita', 'shinjuku_gyoen', 'omoide', 'gracery'], 2: [], 3: [], 4: [] };
    let activeDay = 1, map, markers = [], adClickCount = 0;

    // ==========================================================================
    //  🚀 CORE ENGINE (모든 도시 공통 로직)
    // ==========================================================================
    function initApp() {
        console.log(`🗼 Tokyo App V4.0 Loaded`);
        injectCSS(); renderHeader(); renderBuilderUI(); setTimeout(initMap, 500);
        if (CONFIG.MODE === 'COMMERCIAL') renderFloatingShop();
    }
    
    function initMap() {
        const mapEl = document.getElementById('map'); if (!mapEl) return;
        map = new google.maps.Map(mapEl, { center: { lat: 35.6917, lng: 139.7000 }, zoom: 11, mapTypeControl: false, streetViewControl: false, fullscreenControl: true });
        updateMapMarkers();
    }

    function renderHeader() {
        const container = document.getElementById('day-tabs'); if (!container) return;
        container.innerHTML = Object.keys(userItinerary).map(day => `<button onclick="switchDay(${day})" class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay ? 'bg-indigo-600 text-white scale-105 border-indigo-700' : 'bg-white text-gray-500 hover:bg-gray-100'}">Day ${day}</button>`).join('');
    }

    function renderBuilderUI() {
        const container = document.getElementById('itinerary-content'); if (!container) return;
        container.innerHTML = `
            <div class="bg-indigo-50 p-4 rounded-xl mb-6 border border-indigo-100 shadow-inner"><div class="flex justify-between items-center mb-3"><h3 class="font-bold text-indigo-800">📅 Day ${activeDay} 일정</h3><span class="text-xs text-indigo-600 bg-white px-2 py-1 rounded border border-indigo-200">${userItinerary[activeDay].length}곳</span></div><div id="my-plan-list" class="space-y-2 min-h-[50px]">${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-4">목록에서 [+] 버튼을 눌러 추가하세요.</p>' : ''}${userItinerary[activeDay].map((id, idx) => { const item = POI_DATABASE.find(p => p.id === id); return `<div class="flex items-center bg-white p-2 rounded-lg shadow-sm border border-gray-200"><div class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mr-3">${idx + 1}</div><div class="flex-1"><div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-indigo-600" onclick="showDetail('${item.id}')">${item.name}</div><div class="text-[10px] text-gray-400">${item.region.toUpperCase()}</div></div><button onclick="removeFromPlan('${item.id}')" class="text-red-400 hover:text-red-600 p-1">⛔</button></div>`; }).join('')}</div></div>
            <div class="mb-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters"><button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">전체</button><button onclick="filterSpots('west')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">신주쿠/시부야</button><button onclick="filterSpots('east')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">아사쿠사/우에노</button><button onclick="filterSpots('central')" class="filter-btn bg-white border border-gray-300 px-3 py-1 rounded-full text-xs whitespace-nowrap">긴자/롯폰기</button></div><div id="spot-pool" class="grid grid-cols-1 gap-3 pb-20"></div>`;
        renderSpotPool('all');
    }

    window.renderSpotPool = function(region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);
        pool.innerHTML = filtered.map(place => `<div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 group hover:border-indigo-400 transition"><div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative cursor-pointer" onclick="showDetail('${place.id}')"><img src="${place.photos[0]}" class="w-full h-full object-cover"><div class="absolute bottom-0 w-full bg-black/50 text-white text-[10px] text-center p-0.5">상세보기</div></div><div class="flex-1 flex flex-col justify-between"><div><div class="flex justify-between items-start"><h4 class="font-bold text-gray-800 text-sm leading-tight cursor-pointer hover:text-indigo-600" onclick="showDetail('${place.id}')">${place.name}</h4><span class="text-[10px] font-bold ${place.type === 'food' ? 'text-orange-500 bg-orange-50' : 'text-blue-500 bg-blue-50'} px-1.5 py-0.5 rounded">${place.type.toUpperCase()}</span></div><p class="text-xs text-gray-500 mt-1 line-clamp-2">${place.desc}</p><div class="text-[10px] text-yellow-500 mt-1">★ ${place.rating}</div></div><button onclick="addToPlan('${place.id}')" class="w-full mt-2 bg-gray-100 hover:bg-indigo-500 hover:text-white text-gray-600 text-xs py-2 rounded-lg font-bold transition flex items-center justify-center gap-1"><span>➕ 일정에 담기</span></button></div></div>`).join('');
        if (CONFIG.MODE === 'COMMERCIAL') try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
    }

    window.filterSpots = function(region) { document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('bg-gray-800', 'text-white'); b.classList.add('bg-white', 'text-gray-700'); }); event.target.classList.add('bg-gray-800', 'text-white'); event.target.classList.remove('bg-white'); renderSpotPool(region); }
    window.addToPlan = function(id) { if (userItinerary[activeDay].includes(id)) return alert('이미 일정에 있습니다.'); userItinerary[activeDay].push(id); renderBuilderUI(); updateMapMarkers(); if (userItinerary[activeDay].length % 3 === 0) triggerInterstitial(); }
    window.removeFromPlan = function(id) { userItinerary[activeDay] = userItinerary[activeDay].filter(itemId => itemId !== id); renderBuilderUI(); updateMapMarkers(); }
    window.switchDay = function(day) { triggerInterstitial(() => { activeDay = day; renderHeader(); renderBuilderUI(); updateMapMarkers(); }); }
    function updateMapMarkers() { if (!map) return; markers.forEach(m => m.setMap(null)); markers = []; const bounds = new google.maps.LatLngBounds(); userItinerary[activeDay].forEach((id, idx) => { const item = POI_DATABASE.find(p => p.id === id); if (item) { const marker = new google.maps.Marker({ position: { lat: item.lat, lng: item.lng }, map: map, label: { text: (idx + 1).toString(), color: "white", fontWeight: 'bold' }, animation: google.maps.Animation.DROP }); marker.addListener('click', () => showDetail(id)); markers.push(marker); bounds.extend(marker.getPosition()); } }); if (markers.length > 0) map.fitBounds(bounds); }
    
    window.showDetail = function(id) {
        const item = POI_DATABASE.find(p => p.id === id); if (!createModal()) return;
        const content = document.getElementById('modal-content');
        let affiliateBtn = '';
        if (CONFIG.MODE === 'COMMERCIAL') {
            if (item.type === 'hotel') affiliateBtn = `<button onclick="openAffiliate('agoda', '${item.name}')" class="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">🏨 아고다 최저가</button><button onclick="openAffiliate('trip', '${item.name}')" class="flex-1 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600">💎 트립닷컴 예약</button>`;
            else if (item.type === 'spot') affiliateBtn = `<button onclick="openAffiliate('klook', '${item.name}')" class="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600">🎫 티켓/투어 예매 (클룩)</button>`;
        }
        const shopKeyword = item.shop_keyword || '여행용품';
        content.innerHTML = `<div class="relative h-64 bg-gray-900"><img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90"><button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur">✕</button><div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5"><h2 class="text-2xl font-bold text-white">${item.name}</h2><p class="text-sm text-gray-300">${item.desc}</p></div></div><div class="sticky top-0 bg-white z-10 flex border-b"><button class="flex-1 py-3 text-sm font-bold text-indigo-600 border-b-2 border-indigo-600">정보 & 예약</button><button class="flex-1 py-3 text-sm font-bold text-gray-400" onclick="alert('준비중')">리뷰</button></div><div class="p-5 pb-20"><div class="prose text-sm text-gray-600 mb-6">${item.details?.info || '정보 업데이트 중...'}</div>${item.details?.transport ? `<div class="mb-6"><h3 class="font-bold text-gray-800 mb-2">🚦 교통 & 가는 법</h3>${item.details.transport}</div>` : ''}<div class="flex gap-2 mb-4">${affiliateBtn}</div>${CONFIG.MODE === 'COMMERCIAL' ? `<div class="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200"><h4 class="text-sm font-bold text-gray-700 mb-2">🎒 ${item.name} 방문 전 필수템</h4><div class="flex gap-2 overflow-x-auto scrollbar-hide pb-2">${[1, 2, 3].map(i => `<div class="flex-none w-28 bg-white p-2 rounded border border-gray-200 cursor-pointer hover:border-red-400" onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')"><div class="h-20 bg-gray-100 rounded mb-1 flex items-center justify-center text-2xl">🎁</div><div class="text-[10px] text-gray-500 truncate">${shopKeyword} 추천 ${i}</div><div class="text-xs font-bold text-red-500">최저가 보기</div></div>`).join('')}</div></div><div class="mt-6 text-center"><div class="text-[10px] text-gray-300 mb-1">AD</div><ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins></div>` : ''}</div>`;
        if (CONFIG.MODE === 'COMMERCIAL') try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
    }

    // --- Helpers ---
    function renderFloatingShop() { const btn = document.createElement('button'); btn.className = "fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-2xl z-40 border-2 border-white animate-bounce"; btn.innerHTML = "🛍️"; btn.onclick = () => { if (!createModal()) return; const content = document.getElementById('modal-content'); let html = `<div class="bg-red-600 text-white p-4 sticky top-0 flex justify-between items-center"><h2 class="font-bold">🎒 도쿄 여행 준비물 샵</h2><button onclick="closeModal()">✕</button></div><div class="p-4 grid grid-cols-2 gap-3">`; Object.values(COUPANG_ITEMS).forEach(cat => { html += `<div class="col-span-2 font-bold text-gray-700 mt-2">${cat.title}</div>`; cat.items.forEach(item => { html += `<div onclick="window.open('${CONFIG.AFFILIATE.COUPANG_BASE}')" class="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center cursor-pointer hover:bg-red-50 hover:border-red-200"><div class="text-xl mb-1">🎁</div><div class="text-xs text-gray-600 font-bold">${item}</div></div>`; }); }); content.innerHTML = html + `</div>`; }; document.body.appendChild(btn); }
    function createModal() { let m = document.getElementById('app-modal'); if (!m) { m = document.createElement('div'); m.id = 'app-modal'; m.className = 'fixed inset-0 z-50 hidden'; m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div><div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform"><div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide"></div></div>`; document.body.appendChild(m); } m.classList.remove('hidden'); return true; }
    window.closeModal = () => document.getElementById('app-modal').classList.add('hidden');
    window.openAffiliate = (type, query) => { let url = ''; if (type === 'klook') url = `https://www.klook.com/ko/search/?query=${encodeURIComponent(query)}`; else if (type === 'agoda') url = `https://www.agoda.com/partners/partnersearch.aspx?cid=${CONFIG.AFFILIATE.AGODA_CID}&city=1`; else if (type === 'trip') url = `${CONFIG.AFFILIATE.TRIP_AID}`; if (url) window.open(url, '_blank'); };
    function triggerInterstitial(cb) { if (CONFIG.MODE !== 'COMMERCIAL') return cb ? cb() : null; adClickCount++; if (adClickCount % 3 !== 0) return cb ? cb() : null; const ad = document.createElement('div'); ad.className = "fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"; ad.innerHTML = `<div class="text-xl font-bold mb-4 animate-pulse">잠시 후 이동합니다...</div><div class="w-[300px] h-[250px] bg-gray-100 mb-4 flex items-center justify-center border"><ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_SIDE}" data-ad-format="auto" data-full-width-responsive="true"></ins></div><button id="skip-ad" class="px-6 py-2 bg-gray-200 rounded-full text-gray-400 cursor-not-allowed">5초 후 건너뛰기</button>`; document.body.appendChild(ad); try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { } let sec = 5; const timer = setInterval(() => { sec--; const btn = document.getElementById('skip-ad'); if (btn) btn.innerText = sec > 0 ? `${sec}초 후 건너뛰기` : "건너뛰기 ⏩"; if (sec <= 0) { clearInterval(timer); btn.classList.remove('bg-gray-200', 'text-gray-400', 'cursor-not-allowed'); btn.classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700'); btn.onclick = () => { ad.remove(); if (cb) cb(); }; } }, 1000); }
    function injectCSS() { const s = document.createElement('style'); s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }`; document.head.appendChild(s); }

    initApp();
})();