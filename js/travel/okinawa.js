
function initOkinawaTrip() {
    console.log('🏝️ Okinawa App V5.0 Loaded [HIGH FIDELITY DATA]');

    // ==========================================================================
    //  🏝️ HIGH FIDELITY DATABASE: OKINAWA (Enhanced)
    // ==========================================================================
    const POI_DATABASE = [
        // --- 북부 (츄라우미) ---
        {
            id: 'churaumi', name: '츄라우미 수족관', lat: 26.6943, lng: 127.8779, type: 'spot', region: 'north', rating: 4.8,
            desc: '세계 최대급 수조에서 헤엄치는 고래상어의 압도적 위엄.',
            photos: [
                'https://images.unsplash.com/photo-1580795479214-396813052e3e?w=800',
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
                'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?w=800',
                'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800',
                'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800',
                'https://images.unsplash.com/photo-1571211919320-1c953097f1a6?w=800',
                'https://images.unsplash.com/photo-1566982829230-a6e790949321?w=800',
                'https://images.unsplash.com/photo-1585672660340-966e33004946?w=800',
                'https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=800',
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'
            ],
            details: {
                info: "오키나와 여행의 필수 코스. 메인 수조 '쿠로시오의 바다'에서는 8.8m 길이의 고래상어와 만타 가오리가 유영합니다. 야외의 오키짱 극장(돌고래쇼)은 무료로 관람 가능합니다.",
                transport: `
                    <div class="space-y-2">
                        <p class="text-xs text-gray-600">🚗 <strong>렌트카:</strong> 나하 공항에서 약 2시간 (고속도로 이용 시). P7 주차장이 수족관과 가장 가깝습니다.</p>
                        <p class="text-xs text-gray-600">🚌 <strong>얀바루 급행버스:</strong> 공항/시내에서 직통 운행 (약 2시간 20분)</p>
                    </div>`,
                tips: "오후 4시 이후 입장 시 티켓이 할인됩니다. 수조 바로 옆 카페 '오션 블루' 창가 자리는 예약이나 대기가 필수지만 인생샷 명당입니다."
            },
            reviews: [
                { user: "바다탐험대", date: "1주 전", rating: 5, text: "고래상어 크기에 압도당했습니다. 멍하니 보고만 있어도 힐링돼요. 돌고래쇼도 무료인데 퀄리티가 좋습니다." },
                { user: "가족여행객", date: "3주 전", rating: 5, text: "아이들이 너무 좋아합니다. 터치풀에서 불가사리 만져보는 체험도 유익했어요. 주말엔 사람이 많으니 아침 일찍 가세요." },
                { user: "솔직리뷰", date: "1개월 전", rating: 4, text: "식당 밥은 비싸고 맛이 평범합니다. 도시락을 싸가거나 근처 맛집을 찾아보세요." }
            ],
            learning: { situation: "매표소", phrase: "어른 2장, 어린이 1장 주세요.", pronunciation: "오토나 니마이, 코도모 이치마이 쿠다사이.", meaning: "가족 입장권 구매 시 필수." }
        },
        {
            id: 'kouri_bridge', name: '코우리 대교', lat: 26.6950, lng: 128.0220, type: 'spot', region: 'north', rating: 4.7,
            desc: '바다 위를 달리는 듯한 1,960m의 절경 드라이브 코스.',
            photos: [
                'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800',
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800',
                'https://images.unsplash.com/photo-1599940824399-b87987ce0799?w=800',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
                'https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800',
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800',
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800',
                'https://images.unsplash.com/photo-1576788235839-55668b577366?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800'
            ],
            details: {
                info: "에메랄드빛 바다를 가로지르는 다리로, 오키나와 최고의 드라이브 코스입니다. 다리 건너편 코우리 섬에는 '하트 바위'가 있어 연인들의 성지로 불립니다.",
                transport: `<p class="text-xs text-gray-600">🚗 <strong>렌트카:</strong> 츄라우미 수족관에서 차로 약 20분</p>`,
                tips: "다리 입구 전망대보다 다리 위를 달릴 때 뷰가 더 좋습니다. 쉬림프 웨건(새우 트럭)이 유명 맛집입니다."
            },
            reviews: [
                { user: "드라이버", date: "2주 전", rating: 5, text: "날씨 좋은 날 달리면 천국이 따로 없습니다. 물 색깔이 비현실적이에요." },
                { user: "새우킬러", date: "1개월 전", rating: 4, text: "쉬림프 웨건 갈릭 새우 맛있습니다. 다만 웨이팅이 좀 있어요." },
                { user: "커플", date: "2개월 전", rating: 5, text: "하트락에서 사진 찍으면 예쁘게 나옵니다. 아라시 광고 촬영지래요." }
            ]
        },

        // --- 중부 (아메리칸 빌리지) ---
        {
            id: 'american_village', name: '아메리칸 빌리지', lat: 26.3167, lng: 127.7577, type: 'spot', region: 'central', rating: 4.5,
            desc: '미국 서부 해안을 옮겨놓은 듯한 이국적인 테마 타운.',
            photos: [
                'https://images.unsplash.com/photo-1599354607478-6f363c473167?w=800',
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800',
                'https://images.unsplash.com/photo-1572569878853-4632c0215850?w=800',
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                'https://images.unsplash.com/photo-1582234033096-7c06834b97d7?w=800',
                'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
                'https://images.unsplash.com/photo-1579623696562-b91c01995801?w=800',
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=800',
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800'
            ],
            details: {
                info: "미군 기지 근처에 조성된 대형 쇼핑 & 엔터테인먼트 단지입니다. 알록달록한 건물들이 사진 찍기 좋으며, 바로 옆 선셋 비치에서 보는 석양이 일품입니다. 매주 토요일 저녁에는 불꽃놀이도 합니다.",
                transport: `<p class="text-xs text-gray-600">🚌 <strong>버스:</strong> 나하에서 120번 버스 탑승, '구와에' 정류장 하차</p>`,
                tips: "대관람차는 2022년에 철거되었으니 참고하세요. '포케제닉'이라고 해서 포켓몬 벽화가 곳곳에 숨겨져 있어 찾는 재미가 있습니다."
            },
            reviews: [
                { user: "사진쟁이", date: "1주 전", rating: 5, text: "낮에도 예쁘지만 밤에 조명 켜지면 분위기 깡패입니다. 미니 디즈니랜드 같아요." },
                { user: "쇼핑족", date: "3주 전", rating: 4, text: "구제 옷 가게나 미국 잡화점이 많아서 구경하는 재미가 쏠쏠합니다. 스테이크 맛집도 많아요." },
                { user: "선셋", date: "1개월 전", rating: 5, text: "선셋 비치에서 맥주 한 캔 하면서 노을 보면 최고입니다." }
            ]
        },
        {
            id: 'manzamo', name: '만좌모', lat: 26.5049, lng: 127.8502, type: 'spot', region: 'central', rating: 4.2,
            desc: '코끼리 코 모양의 절벽과 만 명이 앉을 수 있는 들판.',
            photos: [
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
                'https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=800',
                'https://images.unsplash.com/photo-1585672660340-966e33004946?w=800',
                'https://images.unsplash.com/photo-1566982829230-a6e790949321?w=800',
                'https://images.unsplash.com/photo-1571211919320-1c953097f1a6?w=800',
                'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800',
                'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800',
                'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?w=800',
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
                'https://images.unsplash.com/photo-1580795479214-396813052e3e?w=800'
            ],
            details: {
                info: "류큐 왕이 '만 명이 앉아도 충분하다'고 칭송한 넓은 잔디밭과 코끼리 코 모양의 침식 절벽이 유명합니다. 2020년에 깔끔한 신축 시설(입장료 100엔)이 생겼습니다.",
                transport: `<p class="text-xs text-gray-600">🚗 <strong>렌트카:</strong> 맵코드 206 312 039*17</p>`,
                tips: "관람 소요 시간은 20~30분 정도로 짧습니다. 바람이 많이 부니 모자 날라가지 않게 조심하세요."
            },
            reviews: [
                { user: "괜찮아사랑이야", date: "2주 전", rating: 5, text: "드라마 촬영지라 와봤는데 풍경이 예술입니다. 바다 색깔이 정말 딥블루예요." },
                { user: "가성비", date: "1개월 전", rating: 4, text: "입장료 100엔이면 거저죠. 시설도 깨끗해져서 화장실 이용하기도 편합니다." },
                { user: "짧고굵게", date: "3개월 전", rating: 4, text: "딱 코끼리 바위 보고 사진 찍고 오면 끝입니다. 지나가는 길에 들르기 좋아요." }
            ]
        },

        // --- 남부 (나하/공항) ---
        {
            id: 'kokusai_dori', name: '국제거리', lat: 26.2144, lng: 127.6844, type: 'spot', region: 'south', rating: 4.3,
            desc: '나하의 심장. 기념품 쇼핑과 맛집 탐방의 메카.',
            photos: [
                'https://images.unsplash.com/photo-1582234033096-7c06834b97d7?w=800',
                'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?w=800',
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                'https://images.unsplash.com/photo-1599354607478-6f363c473167?w=800',
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
                'https://images.unsplash.com/photo-1579623696562-b91c01995801?w=800',
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=800'
            ],
            details: {
                info: "약 1.6km 이어진 번화가로 '기적의 1마일'이라 불립니다. 일요일 낮(12~18시)에는 차량 통행이 금지되어 보행자 천국이 됩니다.",
                transport: `<p class="text-xs text-gray-600">🚝 <strong>유이레일:</strong> 겐초마에역 또는 마키시역 하차</p>`,
                tips: "메인 거리 뒷골목의 '헤이와 도리' 시장이 더 로컬스럽고 가격도 저렴합니다. 자색고구마 타르트(베니이모)는 꼭 사세요."
            },
            reviews: [
                { user: "쇼핑왕", date: "1주 전", rating: 4, text: "기념품 사기엔 여기만한 곳이 없습니다. 돈키호테도 있고 웬만한 건 다 있어요." },
                { user: "미식가", date: "2주 전", rating: 4, text: "스테이크 88이나 얏파리 스테이크 같은 가성비 스테이크 집이 많습니다. 포장마차촌도 분위기 좋아요." },
                { user: "뚜벅이", date: "1개월 전", rating: 5, text: "모노레일 역이랑 가까워서 접근성이 좋습니다. 밤늦게까지 시끌벅적해서 여행 온 기분 나요." }
            ]
        },
        {
            id: 'umikaji', name: '우미카지 테라스', lat: 26.1764, lng: 127.6456, type: 'spot', region: 'south', rating: 4.6,
            desc: '오키나와의 산토리니. 공항 뷰와 팬케이크.',
            photos: [
                'https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=800',
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
                'https://images.unsplash.com/photo-1585672660340-966e33004946?w=800',
                'https://images.unsplash.com/photo-1566982829230-a6e790949321?w=800',
                'https://images.unsplash.com/photo-1571211919320-1c953097f1a6?w=800',
                'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800',
                'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800',
                'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?w=800',
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
                'https://images.unsplash.com/photo-1580795479214-396813052e3e?w=800'
            ],
            details: {
                info: "나하 공항 근처 세나가섬에 위치한 하얀 계단식 쇼핑몰입니다. 바다 바로 앞에서 비행기가 이착륙하는 모습을 볼 수 있어 비행기 덕후들의 성지이기도 합니다.",
                transport: `<p class="text-xs text-gray-600">🚌 <strong>셔틀버스:</strong> 아카미네역(유이레일)에서 무료 셔틀 운행</p>`,
                tips: "'시아와세(행복) 팬케이크'는 대기가 엄청나니 도착하자마자 예약 대기 걸어두세요. 해 질 녘 테라스 자리가 명당입니다."
            },
            reviews: [
                { user: "인스타충", date: "1주 전", rating: 5, text: "사진 찍으러 가는 곳입니다. 흰 건물과 파란 바다 배경으로 찍으면 인생샷 무조건 건집니다." },
                { user: "빵순이", date: "2주 전", rating: 5, text: "팬케이크 입에서 녹아요 ㅠㅠ 1시간 기다렸지만 후회 없습니다." },
                { user: "비행기", date: "1개월 전", rating: 5, text: "비행기가 머리 위로 지나가는 느낌입니다. 공항 가기 전에 들르기 딱 좋아요." }
            ]
        }
    ];

    // ==========================================================================
    //  🚀 CORE ENGINE (STATE MANAGEMENT & UI)
    // ==========================================================================
    let userItinerary = { 1: ['churaumi', 'kouri_bridge'], 2: [], 3: [], 4: [] };
    let activeDay = 1;
    let map, markers = [];

    function initApp() {
        injectCSS();
        renderHeader();
        renderBuilderUI();
        setTimeout(initMap, 500);
    }

    function initMap() {
        const mapEl = document.getElementById('map');
        if (!mapEl) return;
        map = new google.maps.Map(mapEl, {
            center: { lat: 26.5000, lng: 127.9000 },
            zoom: 10,
            mapTypeControl: false, streetViewControl: false, fullscreenControl: true
        });
        updateMapMarkers();
    }

    function renderHeader() {
        const container = document.getElementById('day-tabs');
        if (!container) return;
        container.innerHTML = Object.keys(userItinerary).map(day =>
            `<button onclick="switchDay(${day})" 
                class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay
                ? 'bg-teal-600 text-white scale-105 border-teal-700'
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
                    <div class="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        ${idx + 1}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-teal-600 truncate" onclick="showDetail('${item.id}')">
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
            <div class="bg-teal-50 p-4 rounded-xl mb-6 border border-teal-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-teal-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <span class="text-xs text-teal-600 bg-white px-2 py-1 rounded border border-teal-200 font-bold">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-teal-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}
                </div>
            </div>

            <!-- 2. 필터 버튼 -->
            <div class="mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition">전체</button>
                <button onclick="filterSpots('north')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">북부 (츄라우미)</button>
                <button onclick="filterSpots('central')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">중부 (아메리칸빌리지)</button>
                <button onclick="filterSpots('south')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">남부 (나하/공항)</button>
            </div>

            <!-- 3. 장소 리스트 -->
            <div id="spot-pool" class="grid grid-cols-1 gap-4 pb-24"></div>`;

        renderSpotPool('all');
    }

    window.renderSpotPool = function (region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);

        let htmlContent = filtered.map(place => {
            const isAdded = userItinerary[activeDay].includes(place.id);
            const btnClass = isAdded ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-teal-600";
            const btnText = isAdded ? "✅ 일정 포함됨" : `<i class="fas fa-plus"></i> 일정에 담기`;
            const btnAction = isAdded ? "" : `onclick="addToPlan('${place.id}')"`;

            return `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div class="flex p-4 gap-4">
                    <!-- Image Section -->
                    <div class="w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden cursor-pointer group" onclick="showDetail('${place.id}')">
                        <img src="${place.photos[0]}" class="w-full h-full object-cover transition group-hover:scale-110">
                        <div class="absolute bottom-0 w-full bg-black/60 text-white text-[10px] text-center py-1">상세보기</div>
                    </div>
                    
                    <!-- Content Section -->
                    <div class="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start">
                                <h4 class="font-bold text-gray-900 text-lg truncate cursor-pointer hover:text-teal-600" onclick="showDetail('${place.id}')">${place.name}</h4>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${place.type === 'food' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}">${place.type.toUpperCase()}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-1 line-clamp-2">${place.desc}</p>
                            <div class="flex items-center gap-1 mt-2">
                                <span class="text-yellow-400 text-xs">★</span>
                                <span class="text-xs font-bold text-gray-700">${place.rating}</span>
                                <span class="text-[10px] text-gray-400 ml-1">(${place.reviews ? place.reviews.length * 152 : 0})</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Action Button -->
                <div class="px-4 pb-4">
                    <button ${btnAction} class="w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition ${btnClass}">
                        ${btnText}
                    </button>
                </div>
            </div>`;
        }).join('');

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
    }

    window.removeFromPlan = (id) => {
        userItinerary[activeDay] = userItinerary[activeDay].filter(itemId => itemId !== id);
        renderBuilderUI();
        updateMapMarkers();
    }

    window.switchDay = (day) => {
        activeDay = day;
        renderHeader();
        renderBuilderUI();
        updateMapMarkers();
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

    // --- 상세 모달 (구글맵 스타일 시뮬레이션) ---
    window.showDetail = function (id) {
        const item = POI_DATABASE.find(p => p.id === id);
        if (!createModal()) return;

        // 지도 이동 시뮬레이션
        if (map) {
            map.panTo({ lat: item.lat, lng: item.lng });
            map.setZoom(16);
        }

        const content = document.getElementById('modal-content');
        window.currentDetailTab = 'overview';

        function renderModalContent() {
            const overviewClass = window.currentDetailTab === 'overview' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-400 hover:text-gray-600';
            const reviewsClass = window.currentDetailTab === 'reviews' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-400 hover:text-gray-600';
            const photosClass = window.currentDetailTab === 'photos' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-400 hover:text-gray-600';

            let tabContent = '';

            if (window.currentDetailTab === 'overview') {
                tabContent = `
                    <div class="space-y-8 animate-fade-in">
                        <div><p class="text-gray-600 leading-relaxed text-lg">${item.desc}</p></div>
                        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 class="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"><i class="fas fa-info-circle text-teal-500"></i> 상세 정보</h3>
                            <div class="prose text-sm text-gray-600 leading-relaxed space-y-2">
                                <p>${item.details?.info || '정보 업데이트 중...'}</p>
                                ${item.details?.tips ? `<p class="text-xs bg-yellow-50 p-2 rounded text-yellow-800">💡 <strong>꿀팁:</strong> ${item.details.tips}</p>` : ''}
                            </div>
                        </div>
                        ${item.learning ? `
                        <div class="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 relative overflow-hidden">
                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🇯🇵</div>
                            <h3 class="font-bold text-yellow-800 text-sm mb-3">실전 일본어 (${item.learning.situation})</h3>
                            <p class="text-xl font-black text-gray-800 mb-1">"${item.learning.phrase}"</p>
                            <p class="text-sm text-gray-500 font-mono bg-white/50 inline-block px-2 rounded mb-2">${item.learning.pronunciation}</p>
                            <p class="text-sm text-gray-600">${item.learning.meaning}</p>
                        </div>` : ''}
                        ${item.details?.transport ? `<div class="space-y-3"><h3 class="font-bold text-gray-800 text-sm flex items-center gap-2"><i class="fas fa-car text-purple-500"></i> 교통편</h3><div class="bg-purple-50 p-4 rounded-xl border border-purple-100">${item.details.transport}</div></div>` : ''}
                        <div class="flex gap-3">
                            <button onclick="addToPlan('${item.id}'); closeModal();" class="flex-1 bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-plus-circle"></i> 일정에 담기
                            </button>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="flex-1 bg-gray-800 text-white text-center py-4 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-map-marked-alt"></i> 구글맵
                            </a>
                        </div>
                    </div>`;
            } else if (window.currentDetailTab === 'reviews') {
                const reviewsList = item.reviews ? item.reviews.map(r => `
                    <div class="border-b border-gray-100 pb-4 last:border-0">
                        <div class="flex justify-between mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">${r.user[0]}</div>
                                <span class="font-bold text-sm text-gray-800">${r.user}</span>
                            </div>
                            <span class="text-xs text-gray-400">${r.date}</span>
                        </div>
                        <div class="flex text-yellow-400 text-xs mb-2">
                            ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                        </div>
                        <p class="text-sm text-gray-600 leading-relaxed">${r.text}</p>
                    </div>
                `).join('') : '<p class="text-gray-400 text-center py-10">리뷰를 불러오는 중입니다...</p>';

                tabContent = `
                    <div class="space-y-4 animate-fade-in">
                        <div class="flex items-center gap-4 mb-6 bg-teal-50 p-4 rounded-xl">
                            <div class="text-4xl font-black text-teal-600">${item.rating}</div>
                            <div>
                                <div class="flex text-yellow-400 text-sm mb-1">${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? '½' : ''}</div>
                                <p class="text-xs text-gray-500">구글맵/트립어드바이저 리뷰 기반</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            ${reviewsList}
                        </div>
                        <button class="w-full py-3 text-teal-600 font-bold text-sm hover:bg-teal-50 rounded-lg transition">리뷰 더 보기</button>
                    </div>`;
            } else if (window.currentDetailTab === 'photos') {
                tabContent = `
                    <div class="grid grid-cols-2 gap-2 animate-fade-in">
                        ${item.photos.map(photo => `<div class="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition group relative"><img src="${photo}" class="w-full h-full object-cover" onclick="window.open('${photo}', '_blank')"><div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div></div>`).join('')}
                    </div>
                    <p class="text-center text-xs text-gray-400 mt-4">이미지 출처: Unsplash</p>`;
            }

            content.innerHTML = `
                <div class="relative h-72 bg-gray-900 group">
                    <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90 transition group-hover:opacity-100 duration-700">
                    <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur hover:bg-black/70 transition z-20">✕</button>
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                        <span class="bg-teal-600 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-2 inline-block">${item.region.toUpperCase()}</span>
                        <h2 class="text-3xl font-black text-white leading-tight mb-1">${item.name}</h2>
                        <div class="flex items-center gap-2 text-white/90 text-sm">
                            <span class="text-yellow-400">★ ${item.rating}</span>
                            <span>•</span>
                            <span>${item.type.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
                
                <div class="sticky top-0 bg-white z-10 flex border-b shadow-sm">
                    <button class="flex-1 py-4 text-sm font-bold transition ${overviewClass}" onclick="window.switchDetailTab('overview')">개요</button>
                    <button class="flex-1 py-4 text-sm font-bold transition ${reviewsClass}" onclick="window.switchDetailTab('reviews')">리뷰</button>
                    <button class="flex-1 py-4 text-sm font-bold transition ${photosClass}" onclick="window.switchDetailTab('photos')">사진</button>
                </div>

                <div class="p-6 pb-24">
                    ${tabContent}
                </div>`;
        }

        window.switchDetailTab = function (tab) {
            window.currentDetailTab = tab;
            renderModalContent();
        };

        renderModalContent();
    }

    // --- Helpers ---
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

    function injectCSS() {
        const s = document.createElement('style');
        s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } .animate-fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`;
        document.head.appendChild(s);
    }

    initApp();
}

window.initOkinawaTrip = initOkinawaTrip;
