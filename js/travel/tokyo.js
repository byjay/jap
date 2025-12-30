
function initTokyoTrip() {
    // ==========================================================================
    //  ✨ HIGH FIDELITY DATABASE: TOKYO
    // ==========================================================================
    const POI_DATABASE = [
        {
            "id": "narita",
            "name": "나리타 국제공항 (NRT)",
            "lat": 35.7719,
            "lng": 140.3929,
            "type": "transport",
            "region": "airport",
            "rating": 4.5,
            "desc": "도쿄의 주요 국제 관문.",
            "photos": [
                "images/travel/tokyo/narita.jpg"
            ],
            "details": {
                "info": "스카이라이너로 우에노까지 40분.",
                "transport": "스카이라이너 / 넥스(N'EX)"
            }
        },
        {
            "id": "haneda",
            "name": "하네다 공항 (HND)",
            "lat": 35.5494,
            "lng": 139.7798,
            "type": "transport",
            "region": "airport",
            "rating": 4.7,
            "desc": "도심 접근성이 뛰어난 공항.",
            "photos": [
                "images/travel/tokyo/haneda.jpg"
            ],
            "details": {
                "info": "시내까지 30분 이내 도착.",
                "transport": "모노레일 / 게이큐선"
            }
        },
        {
            "id": "shibuya_sky",
            "name": "시부야 스카이",
            "lat": 35.6580,
            "lng": 139.7016,
            "type": "spot",
            "region": "shibuya",
            "rating": 4.8,
            "desc": "도쿄 최고의 360도 전망대.",
            "photos": [
                "images/travel/tokyo/shibuya_sky.jpg"
            ],
            "details": {
                "info": "일몰 시간에 방문 추천. 예약 필수.",
                "transport": "시부야역 직결 (스크램블 스퀘어)"
            }
        },
        {
            "id": "shinjuku_gyoen",
            "name": "신주쿠 교엔",
            "lat": 35.6852,
            "lng": 139.7101,
            "type": "spot",
            "region": "shinjuku",
            "rating": 4.6,
            "desc": "도심 속 거대한 정원.",
            "photos": [
                "images/travel/tokyo/shinjuku_gyoen.jpg"
            ],
            "details": {
                "info": "언어의 정원 배경지. 피크닉 명소.",
                "transport": "신주쿠교엔마에역"
            }
        },
        {
            "id": "omoide_yokocho",
            "name": "오모이데 요코초",
            "lat": 35.6929,
            "lng": 139.6995,
            "type": "food",
            "region": "shinjuku",
            "rating": 4.4,
            "desc": "꼬치구이 연기가 자욱한 골목.",
            "photos": [
                "images/travel/tokyo/omoide_yokocho.jpg"
            ],
            "details": {
                "info": "쇼와 시대 감성. 좁은 가게들.",
                "transport": "신주쿠역 서쪽 출구"
            }
        },
        {
            "id": "blue_cave",
            "name": "시부야 푸른 동굴",
            "lat": 35.6644,
            "lng": 139.6978,
            "type": "spot",
            "region": "shibuya",
            "rating": 4.7,
            "desc": "겨울 한정 푸른 빛의 일루미네이션.",
            "photos": [
                "images/travel/tokyo/shibuya_sky.jpg"
            ],
            "details": {
                "info": "요요기 공원 케야키 가로수길이 푸른색 LED로 뒤덮입니다. 환상적인 분위기.",
                "transport": "시부야역 도보 10분",
                "seasonal": { "winter": "12월 한달간 점등" }
            }
        },
        {
            "id": "harajuku",
            "name": "하라주쿠 다케시타 거리",
            "lat": 35.6716,
            "lng": 139.7030,
            "type": "shop",
            "region": "shibuya",
            "rating": 4.3,
            "desc": "카와이 문화의 발상지.",
            "photos": [
                "images/travel/tokyo/harajuku.jpg"
            ],
            "details": {
                "info": "크레페, 스티커 사진, 독특한 패션.",
                "transport": "하라주쿠역"
            }
        },
        {
            "id": "meiji_jingu",
            "name": "메이지 신궁",
            "lat": 35.6764,
            "lng": 139.6993,
            "type": "spot",
            "region": "shibuya",
            "rating": 4.6,
            "desc": "도심 속 울창한 숲과 신사.",
            "photos": [
                "images/travel/tokyo/harajuku.jpg"
            ],
            "details": {
                "info": "거대한 도리이. 산책하기 좋음.",
                "transport": "하라주쿠역"
            }
        },
        {
            "id": "sensoji",
            "name": "센소지 (아사쿠사)",
            "lat": 35.7148,
            "lng": 139.7967,
            "type": "spot",
            "region": "asakusa",
            "rating": 4.7,
            "desc": "도쿄에서 가장 오래된 절.",
            "photos": [
                "images/travel/tokyo/sensoji.jpg"
            ],
            "details": {
                "info": "가미나리몬, 나카미세 거리 군것질.",
                "transport": "아사쿠사역"
            }
        },
        {
            "id": "skytree",
            "name": "도쿄 스카이트리",
            "lat": 35.7101,
            "lng": 139.8107,
            "type": "spot",
            "region": "asakusa",
            "rating": 4.6,
            "desc": "일본에서 가장 높은 타워.",
            "photos": [
                "images/travel/tokyo/skytree.jpg"
            ],
            "details": {
                "info": "소라마치 쇼핑몰. 압도적 전망.",
                "transport": "오시아게역"
            }
        },
        {
            "id": "akihabara",
            "name": "아키하바라 전자상가",
            "lat": 35.6984,
            "lng": 139.7731,
            "type": "shop",
            "region": "akihabara",
            "rating": 4.5,
            "desc": "애니메이션과 게임의 성지.",
            "photos": [
                "images/travel/tokyo/omoide_yokocho.jpg"
            ],
            "details": {
                "info": "피규어, 메이드 카페, 전자제품.",
                "transport": "아키하바라역"
            }
        },
        {
            "id": "ueno_park",
            "name": "우에노 공원",
            "lat": 35.7140,
            "lng": 139.7741,
            "type": "spot",
            "region": "ueno",
            "rating": 4.4,
            "desc": "박물관과 동물원이 있는 공원.",
            "photos": [
                "images/travel/tokyo/shinjuku_gyoen.jpg"
            ],
            "details": {
                "info": "판다(우에노 동물원), 국립박물관.",
                "transport": "우에노역"
            }
        },
        {
            "id": "monja_street",
            "name": "츠키시마 몬자 거리",
            "lat": 35.6640,
            "lng": 139.7850,
            "type": "food",
            "region": "odaiba",
            "rating": 4.5,
            "desc": "도쿄 명물 몬자야키 전문점 거리.",
            "photos": [
                "images/travel/tokyo/monja_street.jpg"
            ],
            "details": {
                "info": "직접 철판에 구워먹는 재미. 명란 치즈 몬자가 인기.",
                "transport": "츠키시마역 7번 출구",
                "tips": "작은 헤라로 긁어 먹으세요."
            }
        },
        {
            "id": "ginza_six",
            "name": "긴자 식스",
            "lat": 35.6696,
            "lng": 139.7640,
            "type": "shop",
            "region": "ginza",
            "rating": 4.6,
            "desc": "긴자의 럭셔리 쇼핑몰.",
            "photos": [
                "images/travel/tokyo/skytree.jpg"
            ],
            "details": {
                "info": "옥상 정원, 츠타야 서점.",
                "transport": "긴자역"
            }
        },
        {
            "id": "roppongi_illumination",
            "name": "롯폰기 힐즈 일루미네이션",
            "lat": 35.6604,
            "lng": 139.7292,
            "type": "spot",
            "region": "roppongi",
            "rating": 4.8,
            "desc": "도쿄 타워가 보이는 로맨틱한 야경.",
            "photos": [
                "images/travel/tokyo/skytree.jpg"
            ],
            "details": {
                "info": "케야키자카 거리가 은백색 빛으로 물듭니다. 도쿄 타워와 함께 사진 찍기 좋은 명소.",
                "transport": "롯폰기역 도보 5분",
                "seasonal": { "winter": "11월 초 ~ 12월 25일" }
            }
        },
        {
            "id": "tsukiji",
            "name": "츠키지 장외시장",
            "lat": 35.6655,
            "lng": 139.7707,
            "type": "food",
            "region": "ginza",
            "rating": 4.5,
            "desc": "신선한 해산물과 길거리 음식.",
            "photos": [
                "images/travel/tokyo/tsukiji.jpg"
            ],
            "details": {
                "info": "계란말이, 스시, 해산물 덮밥.",
                "transport": "츠키지시조역"
            }
        },
        {
            "id": "teamlab",
            "name": "팀랩 플래닛",
            "lat": 35.6491,
            "lng": 139.7898,
            "type": "spot",
            "region": "odaiba",
            "rating": 4.7,
            "desc": "물과 꽃의 디지털 아트 미술관.",
            "photos": [
                "images/travel/tokyo/teamlab.jpg"
            ],
            "details": {
                "info": "맨발로 체험. 인생샷 명소.",
                "transport": "신토요스역"
            }
        },
        {
            "id": "oden_bar",
            "name": "오뎅바 거리",
            "lat": 35.6600,
            "lng": 139.7300,
            "type": "food",
            "region": "roppongi",
            "rating": 4.3,
            "desc": "따뜻한 국물과 정겨운 분위기.",
            "photos": [
                "images/travel/tokyo/oden_bar.jpg"
            ],
            "details": {
                "info": "무, 곤약, 한펜 등 다양한 재료. 겨울철 별미.",
                "transport": "롯폰기/아카사카 주변",
                "tips": "겨자 소스와 함께 드세요."
            }
        },
        {
            "id": "odaiba_gundam",
            "name": "오다이바 건담",
            "lat": 35.6244,
            "lng": 139.7755,
            "type": "spot",
            "region": "odaiba",
            "rating": 4.6,
            "desc": "실물 크기 유니콘 건담.",
            "photos": [
                "images/travel/tokyo/teamlab.jpg"
            ],
            "details": {
                "info": "변신 쇼(낮/밤). 다이버시티 도쿄 앞.",
                "transport": "다이바역"
            }
        },
        {
            "id": "disney",
            "name": "도쿄 디즈니 리조트",
            "lat": 35.6329,
            "lng": 139.8804,
            "type": "spot",
            "region": "nearby",
            "rating": 4.9,
            "desc": "꿈과 환상의 나라.",
            "photos": [
                "images/travel/tokyo/disney.jpg"
            ],
            "details": {
                "info": "랜드(클래식) vs 씨(바다 테마).",
                "transport": "마이하마역"
            }
        },
        {
            "id": "hotel_gracery",
            "name": "호텔 그레이스리 신주쿠",
            "lat": 35.6946,
            "lng": 139.7027,
            "type": "hotel",
            "region": "shinjuku",
            "rating": 4.4,
            "desc": "고질라 헤드가 있는 호텔.",
            "photos": [
                "images/travel/tokyo/omoide_yokocho.jpg"
            ],
            "details": {
                "info": "가부키초 중심. 위치 최상.",
                "transport": "신주쿠역 도보 5분"
            }
        },
        {
            "id": "prince_park_tower",
            "name": "더 프린스 파크 타워",
            "lat": 35.6554,
            "lng": 139.7483,
            "type": "hotel",
            "region": "roppongi",
            "rating": 4.7,
            "desc": "도쿄 타워 뷰가 환상적인 호텔.",
            "photos": [
                "images/travel/tokyo/skytree.jpg"
            ],
            "details": {
                "info": "시바 공원 옆. 럭셔리.",
                "transport": "아카바네바시역"
            }
        }
    ];
    let userItinerary = { "1": ["narita", "shinjuku_gyoen", "omoide_yokocho", "hotel_gracery"], "2": ["meiji_jingu", "harajuku", "shibuya_sky", "blue_cave"], "3": ["sensoji", "skytree", "akihabara", "ueno_park"], "4": ["tsukiji", "teamlab", "odaiba_gundam", "haneda"] };
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
        const centerSpot = POI_DATABASE.find(p => p.id === userItinerary[1][0]) || POI_DATABASE[0];
        map = new google.maps.Map(mapEl, {
            center: { lat: centerSpot.lat, lng: centerSpot.lng },
            zoom: 12,
            mapTypeControl: false, streetViewControl: false, fullscreenControl: true
        });
        if (window.initRouteHelper) window.initRouteHelper(map);
        updateMapMarkers();
    }

    function renderHeader() {
        const container = document.getElementById('day-tabs');
        if (!container) return;
        container.innerHTML = Object.keys(userItinerary).map(day =>
            `<button onclick="switchDay(${day})" 
                class="px-4 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${day == activeDay
                ? 'bg-blue-600 text-white scale-105 border-blue-700'
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
            if (!item) return '';
            return `
                <div class="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 transition hover:shadow-md">
                    <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        ${idx + 1}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-blue-600 truncate" onclick="showDetail('${item.id}')">
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
            <div class="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-blue-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <div class="flex gap-2">
                         <button onclick="verifyRoute()" class="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none px-3 py-1.5 rounded-full font-bold hover:scale-105 transition flex items-center gap-1 shadow-md animate-pulse">
                            <i class="fas fa-plane-departure"></i> 미리여행
                        </button>
                        <span class="text-xs text-blue-600 bg-white px-2 py-1 rounded border border-blue-200 font-bold">${userItinerary[activeDay].length}곳</span>
                    </div>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-blue-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}
                </div>
            </div>
            <div id="spot-pool" class="grid grid-cols-1 gap-4 pb-24"></div>`;

        renderSpotPool('all');
    }

    window.verifyRoute = () => {
        if (window.startPreviewTravel) {
            window.startPreviewTravel(userItinerary[activeDay], POI_DATABASE);
        } else {
            alert('미리여행 기능을 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
        }
    };

    window.renderSpotPool = function (region) {
        const pool = document.getElementById('spot-pool');
        const filtered = region === 'all' ? POI_DATABASE : POI_DATABASE.filter(p => p.region === region);

        let htmlContent = filtered.map(place => {
            const isAdded = Object.values(userItinerary).flat().includes(place.id);
            const btnClass = isAdded ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600";
            const btnText = isAdded ? "✅ 일정 포함됨" : `<i class="fas fa-plus"></i> 일정에 담기`;
            const btnAction = isAdded ? "" : `onclick="addToPlan('${place.id}')"`;
            const themeTags = place.details.themes ? place.details.themes.map(t => `<span class="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">${t}</span>`).join('') : '';

            return `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div class="flex p-4 gap-4">
                    <div class="w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden cursor-pointer group" onclick="showDetail('${place.id}')">
                        <img src="${place.photos[0]}" class="w-full h-full object-cover transition group-hover:scale-110">
                        <div class="absolute bottom-0 w-full bg-black/60 text-white text-[10px] text-center py-1">상세보기</div>
                    </div>
                    <div class="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start">
                                <h4 class="font-bold text-gray-900 text-lg truncate cursor-pointer hover:text-blue-600" onclick="showDetail('${place.id}')">${place.name}</h4>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${place.type === 'food' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}">${place.type.toUpperCase()}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-1 line-clamp-2">${place.desc}</p>
                            <div class="flex flex-wrap gap-1 mt-2">${themeTags}</div>
                            <div class="flex items-center gap-1 mt-2">
                                <span class="text-yellow-400 text-xs">★</span>
                                <span class="text-xs font-bold text-gray-700">${place.rating}</span>
                                <span class="text-[10px] text-gray-400 ml-1">(${place.reviews ? place.reviews.length * 123 : 0})</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4 pb-4">
                    <button ${btnAction} class="w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition ${btnClass}">
                        ${btnText}
                    </button>
                </div>
            </div>`;
        }).join('');

        pool.innerHTML = htmlContent;
    }

    window.addToPlan = (id) => {
        if (Object.values(userItinerary).flat().includes(id)) return alert('이미 일정에 있습니다.');
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
        if (window.drawRoute) window.drawRoute(userItinerary[activeDay], POI_DATABASE);
    }

    window.showDetail = function (id) {
        const item = POI_DATABASE.find(p => p.id === id);
        if (!createModal()) return;
        if (map) { map.panTo({ lat: item.lat, lng: item.lng }); map.setZoom(16); }
        const content = document.getElementById('modal-content');
        window.currentDetailTab = 'overview';

        function renderModalContent() {
            const overviewClass = window.currentDetailTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600';
            const reviewsClass = window.currentDetailTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600';
            const photosClass = window.currentDetailTab === 'photos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600';

            let tabContent = '';
            if (window.currentDetailTab === 'overview') {
                const seasonalInfo = item.details.seasonal ? Object.entries(item.details.seasonal).map(([k, v]) => `<li class="text-xs text-gray-600"><span class="font-bold text-blue-500">${k.toUpperCase()}:</span> ${v}</li>`).join('') : '';
                const recommendTags = item.details.recommend ? item.details.recommend.map(r => `<span class="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">#${r}</span>`).join('') : '';

                tabContent = `
                <div class="space-y-6 animate-fade-in">
                    <div>
                        <p class="text-gray-600 leading-relaxed text-lg">${item.desc}</p>
                        <div class="flex gap-2 mt-3">${recommendTags}</div>
                    </div>
                    
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h3 class="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"><i class="fas fa-info-circle text-blue-500"></i> 상세 정보</h3>
                        <div class="prose text-sm text-gray-600 leading-relaxed space-y-2">
                            <p>${item.details?.info || '정보 업데이트 중...'}</p>
                            ${item.details?.tips ? `<p class="text-xs bg-yellow-50 p-2 rounded text-yellow-800">💡 <strong>꿀팁:</strong> ${item.details.tips}</p>` : ''}
                        </div>
                    </div>

                    ${seasonalInfo ? `
                    <div class="bg-green-50 p-5 rounded-2xl border border-green-100">
                        <h3 class="font-bold text-green-800 text-sm mb-2 flex items-center gap-2"><i class="fas fa-leaf"></i> 계절별 포인트</h3>
                        <ul class="space-y-1">${seasonalInfo}</ul>
                    </div>` : ''}

                    ${item.details?.transport ? `<div class="space-y-2"><h3 class="font-bold text-gray-800 text-sm flex items-center gap-2"><i class="fas fa-subway text-purple-500"></i> 교통편</h3><div class="bg-purple-50 p-3 rounded-xl border border-purple-100 text-xs">${item.details.transport}</div></div>` : ''}
                    
                    <div class="flex gap-3 pt-4">
                        <button onclick="addToPlan('${item.id}'); closeModal();" class="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2"><i class="fas fa-plus-circle"></i> 일정에 담기</button>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="flex-1 bg-gray-800 text-white text-center py-4 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg flex items-center justify-center gap-2"><i class="fas fa-map-marked-alt"></i> 구글맵</a>
                    </div>
                </div>`;
            } else if (window.currentDetailTab === 'reviews') {
                tabContent = `<div class="space-y-4 animate-fade-in"><div class="flex items-center gap-4 mb-6 bg-blue-50 p-4 rounded-xl"><div class="text-4xl font-black text-blue-600">${item.rating}</div><div><div class="flex text-yellow-400 text-sm mb-1">${'★'.repeat(Math.floor(item.rating))}</div><p class="text-xs text-gray-500">실제 여행객 리뷰 요약</p></div></div><div class="space-y-4">${item.reviews ? item.reviews.map(r => `<div class="border-b border-gray-100 pb-4"><div class="flex justify-between mb-2"><span class="font-bold text-sm text-gray-800">${r.user}</span><span class="text-xs text-gray-400">${r.date}</span></div><p class="text-sm text-gray-600">${r.text}</p></div>`).join('') : '<p class="text-sm text-gray-500">리뷰가 없습니다.</p>'}</div></div>`;
            } else if (window.currentDetailTab === 'photos') {
                tabContent = `<div class="grid grid-cols-2 gap-2 animate-fade-in">${item.photos.map(p => `<div class="aspect-square rounded-lg overflow-hidden bg-gray-100"><img src="${p}" class="w-full h-full object-cover" onclick="window.open('${p}','_blank')"></div>`).join('')}</div>`;
            }

            content.innerHTML = `<div class="relative h-72 bg-gray-900 group"><img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90"><button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center">✕</button><div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"><h2 class="text-3xl font-black text-white mb-1">${item.name}</h2><div class="flex gap-2 mt-2">${item.details.themes ? item.details.themes.map(t => `<span class="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">${t}</span>`).join('') : ''}</div></div></div><div class="sticky top-0 bg-white z-10 flex border-b shadow-sm"><button class="flex-1 py-4 text-sm font-bold transition ${overviewClass}" onclick="window.switchDetailTab('overview')">개요</button><button class="flex-1 py-4 text-sm font-bold transition ${reviewsClass}" onclick="window.switchDetailTab('reviews')">리뷰</button><button class="flex-1 py-4 text-sm font-bold transition ${photosClass}" onclick="window.switchDetailTab('photos')">사진</button></div><div class="p-6 pb-24">${tabContent}</div>`;
        }
        window.switchDetailTab = (tab) => { window.currentDetailTab = tab; renderModalContent(); };
        renderModalContent();
    }

    function createModal() {
        let m = document.getElementById('app-modal');
        if (!m) { m = document.createElement('div'); m.id = 'app-modal'; m.className = 'fixed inset-0 z-50 hidden'; m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div><div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl"><div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide bg-white"></div></div>`; document.body.appendChild(m); }
        m.classList.remove('hidden'); return true;
    }
    window.closeModal = () => document.getElementById('app-modal').classList.add('hidden');
    function injectCSS() { const s = document.createElement('style'); s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .animate-fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`; document.head.appendChild(s); }

    initApp();
}
window.initTokyoTrip = initTokyoTrip;
