
function initKyotoTrip() {
    console.log('⛩️ Kyoto App V4.0 Loaded [FAMILY MODE - ULTRA UI]');

    // ==========================================================================
    //  ⛩️ MASSIVE DATABASE: KYOTO
    // ==========================================================================
    const POI_DATABASE = [
        // --- 1일차 ---
        {
            id: 'airport_in', name: '간사이 국제공항 (도착)', lat: 34.4320, lng: 135.2304, type: 'transport', region: 'transport', rating: 4.0,
            desc: '교토 여행의 관문. 하루카 특급열차로 교토역까지 80분!',
            photos: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800'],
            details: {
                info: "하루카 편도 티켓을 미리 예매하면 저렴합니다(약 1,800엔). 교토역에 도착하면 교토 타워 야경부터 보세요. 이코카(ICOCA) 카드를 구매하면 편리합니다.",
                transport: `<p class="text-xs text-gray-600">🚆 하루카 특급열차 예매 추천 (교토역 직통)</p>`
            }
        },
        {
            id: 'hotel_checkin', name: '호텔 그란비아 교토', lat: 34.9858, lng: 135.7588, type: 'hotel', region: 'central', rating: 4.4,
            desc: '교토역 직결! 최고의 위치와 럭셔리한 시설.',
            photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
            details: { info: "역과 연결되어 있어 비 오는 날도 이동이 편합니다. 교토 타워 뷰 객실을 요청해보세요. 체크인 전/후 짐 보관이 가능합니다." }
        },
        {
            id: 'gion_pontocho', name: '기온 거리 & 폰토초', lat: 35.0034, lng: 135.7710, type: 'spot', region: 'higashiyama', rating: 4.6,
            desc: '게이샤의 추억, 교토의 옛 정취가 흐르는 거리.',
            photos: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'],
            details: {
                info: "해 질 녘에 가면 붉은 등불이 켜져 분위기가 좋습니다. 폰토초 좁은 골목의 이자카야에서 한잔 추천. 운이 좋으면 마이코(게이샤 연습생)를 볼 수 있습니다.",
                transport: `<p class="text-xs text-gray-600">🚌 교토역에서 100번/206번 버스 '기온' 하차</p>
                            <p class="text-xs text-gray-600">🚆 게이한선 기온시조역 도보 5분</p>`
            },
            learning: { situation: "식당 예약", phrase: "예약하지 않았는데 괜찮나요?", pronunciation: "요야쿠 시테나인 데스까 다이조부 데스까?", meaning: "인기 맛집 방문 시 필수" }
        },

        // --- 2일차 ---
        {
            id: 'kiyomizudera', name: '기요미즈데라 (청수사)', lat: 34.9949, lng: 135.7850, type: 'spot', region: 'higashiyama', rating: 4.8,
            desc: '절벽 위의 사찰, 교토 여행의 필수 코스.',
            photos: ['https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'],
            details: {
                info: "아침 7시 이전에 가야 사람 없이 사진 찍을 수 있습니다. 내려올 때 산넨자카/니넨자카 계단에서 넘어지면 3년/2년 안에 죽는다는 전설이 있으니 조심하세요!",
                transport: `<p class="text-xs text-gray-600">🚌 교토역에서 100번/206번 버스 '고조자카' 하차 후 도보 10분</p>`
            }
        },
        {
            id: 'fushimi_inari', name: '후시미 이나리 신사', lat: 34.9671, lng: 135.7727, type: 'spot', region: 'south', rating: 4.7,
            desc: '천 개의 붉은 도리이 터널, 여우 신사.',
            photos: ['https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800'],
            details: {
                info: "정상까지는 왕복 2시간 등산 코스입니다. 힘들면 중간 '요쓰쓰지' 전망대까지만 가도 충분히 멋집니다. 입장료는 무료이며 24시간 개방입니다.",
                transport: `<p class="text-xs text-gray-600">🚆 JR 나라선 '이나리'역 바로 앞 (교토역에서 5분)</p>`
            }
        },

        // --- 3일차 ---
        {
            id: 'arashiyama', name: '아라시야마 대나무숲', lat: 35.0169, lng: 135.6713, type: 'spot', region: 'west', rating: 4.6,
            desc: '치쿠린, 바람에 흔들리는 대나무 소리.',
            photos: ['https://images.unsplash.com/photo-1505337147969-00d472216207?w=800'],
            details: {
                info: "무조건 아침 일찍(9시 전) 가야 합니다. 텐류지 북문으로 나가면 바로 연결됩니다. 도게츠교를 건너며 뒤를 돌아보면 안 된다는 전설이 있습니다.",
                transport: `<p class="text-xs text-gray-600">🚆 JR 사가노선 '사가아라시야마'역 하차 (가장 빠름)</p>
                            <p class="text-xs text-gray-600">🚃 란덴 열차 이용 시 감성 여행 가능</p>`
            }
        },
        {
            id: 'kinkakuji', name: '킨카쿠지 (금각사)', lat: 35.0394, lng: 135.7292, type: 'spot', region: 'north', rating: 4.5,
            desc: '화려함의 극치, 금박으로 덮인 사찰.',
            photos: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'],
            details: {
                info: "해가 쨍할 때 가야 금빛이 번쩍번쩍해서 예쁩니다. 연못에 비친 반영 사진이 포인트입니다. 내부는 들어갈 수 없습니다.",
                transport: `<p class="text-xs text-gray-600">🚌 교토역에서 205번 버스 '킨카쿠지미치' 하차</p>`
            }
        },

        // --- 4일차 ---
        {
            id: 'nishiki_market', name: '니시키 시장', lat: 35.0050, lng: 135.7649, type: 'food', region: 'central', rating: 4.3,
            desc: '400년 역사의 교토의 부엌, 먹거리 천국.',
            photos: ['https://images.unsplash.com/photo-1583561366116-2911477d94f2?w=800'],
            details: {
                info: "'타코타마고(쭈꾸미 꼬치)'는 꼭 먹어보세요! 두유 도넛과 어묵 꼬치도 유명합니다. 오후 5-6시면 문을 닫으니 점심에 가세요.",
                transport: `<p class="text-xs text-gray-600">🚇 지하철 가라스마선 '시조'역 도보 3분</p>`
            }
        }
    ];

    // ==========================================================================
    //  🚀 CORE ENGINE (STATE MANAGEMENT & UI)
    // ==========================================================================
    let userItinerary = {
        1: ['airport_in', 'hotel_checkin', 'gion_pontocho'],
        2: ['kiyomizudera', 'fushimi_inari'],
        3: ['arashiyama', 'kinkakuji'],
        4: ['nishiki_market']
    };
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
            center: { lat: 35.0116, lng: 135.7681 },
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
                class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay
                ? 'bg-amber-600 text-white scale-105 border-amber-700'
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
                    <div class="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        ${idx + 1}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-amber-600 truncate" onclick="showDetail('${item.id}')">
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
            <div class="bg-amber-50 p-4 rounded-xl mb-6 border border-amber-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-amber-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <span class="text-xs text-amber-600 bg-white px-2 py-1 rounded border border-amber-200 font-bold">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-amber-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}
                </div>
            </div>

            <!-- 2. 필터 버튼 -->
            <div class="mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition">전체</button>
                <button onclick="filterSpots('higashiyama')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">기온/청수사</button>
                <button onclick="filterSpots('west')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">아라시야마</button>
                <button onclick="filterSpots('south')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">후시미이나리</button>
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
            const btnClass = isAdded ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-amber-600";
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
                                <h4 class="font-bold text-gray-900 text-lg truncate cursor-pointer hover:text-amber-600" onclick="showDetail('${place.id}')">${place.name}</h4>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${place.type === 'food' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}">${place.type.toUpperCase()}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-1 line-clamp-2">${place.desc}</p>
                            <div class="flex items-center gap-1 mt-2">
                                <span class="text-yellow-400 text-xs">★</span>
                                <span class="text-xs font-bold text-gray-700">${place.rating}</span>
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
            const overviewClass = window.currentDetailTab === 'overview' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400 hover:text-gray-600';
            const reviewsClass = window.currentDetailTab === 'reviews' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400 hover:text-gray-600';
            const photosClass = window.currentDetailTab === 'photos' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400 hover:text-gray-600';

            let tabContent = '';

            if (window.currentDetailTab === 'overview') {
                tabContent = `
                    <div class="space-y-8 animate-fade-in">
                        <div><p class="text-gray-600 leading-relaxed text-lg">${item.desc}</p></div>
                        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 class="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"><i class="fas fa-info-circle text-amber-500"></i> 상세 정보</h3>
                            <div class="prose text-sm text-gray-600 leading-relaxed">${item.details?.info || '정보 업데이트 중...'}</div>
                        </div>
                        ${item.learning ? `
                        <div class="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 relative overflow-hidden">
                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🇯🇵</div>
                            <h3 class="font-bold text-yellow-800 text-sm mb-3">실전 일본어 (${item.learning.situation})</h3>
                            <p class="text-xl font-black text-gray-800 mb-1">"${item.learning.phrase}"</p>
                            <p class="text-sm text-gray-500 font-mono bg-white/50 inline-block px-2 rounded mb-2">${item.learning.pronunciation}</p>
                            <p class="text-sm text-gray-600">${item.learning.meaning}</p>
                        </div>` : ''}
                        ${item.details?.transport ? `<div class="space-y-3"><h3 class="font-bold text-gray-800 text-sm flex items-center gap-2"><i class="fas fa-ticket-alt text-purple-500"></i> 티켓 & 교통</h3><div class="bg-purple-50 p-4 rounded-xl border border-purple-100">${item.details.transport}</div></div>` : ''}
                        <div class="flex gap-3">
                            <button onclick="addToPlan('${item.id}'); closeModal();" class="flex-1 bg-amber-600 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-plus-circle"></i> 일정에 담기
                            </button>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="flex-1 bg-gray-800 text-white text-center py-4 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-map-marked-alt"></i> 구글맵
                            </a>
                        </div>
                    </div>`;
            } else if (window.currentDetailTab === 'reviews') {
                tabContent = `
                    <div class="space-y-4 animate-fade-in">
                        <div class="flex items-center gap-4 mb-6 bg-amber-50 p-4 rounded-xl">
                            <div class="text-4xl font-black text-amber-600">${item.rating}</div>
                            <div>
                                <div class="flex text-yellow-400 text-sm mb-1">${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? '½' : ''}</div>
                                <p class="text-xs text-gray-500">방문자 리뷰 150+개</p>
                            </div>
                        </div>
                        <div class="border-b border-gray-100 pb-4">
                            <div class="flex justify-between mb-2"><span class="font-bold text-sm">교토러버</span><span class="text-xs text-gray-400">3일 전</span></div>
                            <div class="text-yellow-400 text-xs mb-2">★★★★★</div>
                            <p class="text-sm text-gray-600">고즈넉한 분위기가 너무 좋았습니다. 아침 일찍 가는 걸 추천해요.</p>
                        </div>
                        <div class="border-b border-gray-100 pb-4">
                            <div class="flex justify-between mb-2"><span class="font-bold text-sm">사진작가</span><span class="text-xs text-gray-400">1주 전</span></div>
                            <div class="text-yellow-400 text-xs mb-2">★★★★☆</div>
                            <p class="text-sm text-gray-600">사람이 많아서 사진 찍기 힘들었지만 풍경은 예술입니다.</p>
                        </div>
                    </div>`;
            } else if (window.currentDetailTab === 'photos') {
                tabContent = `
                    <div class="grid grid-cols-2 gap-2 animate-fade-in">
                        ${item.photos.map(photo => `<div class="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition"><img src="${photo}" class="w-full h-full object-cover" onclick="window.open('${photo}', '_blank')"></div>`).join('')}
                        <div class="aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400"><i class="fas fa-camera text-2xl"></i></div>
                    </div>`;
            }

            content.innerHTML = `
                <div class="relative h-72 bg-gray-900 group">
                    <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90 transition group-hover:opacity-100 duration-700">
                    <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur hover:bg-black/70 transition z-20">✕</button>
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                        <span class="bg-amber-600 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-2 inline-block">${item.region.toUpperCase()}</span>
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

window.initKyotoTrip = initKyotoTrip;
