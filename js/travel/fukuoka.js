function initFukuokaTrip() {
    // ==========================================================================
    //  ✨ POI_DATABASE: 외부 fukuoka_poi_data.js에서 로드됨
    //  (window.POI_DATABASE 사용 - 133개 POI, JSON 원본 데이터 기반)
    // ==========================================================================

    // 외부 파일에서 로드된 POI_DATABASE 사용 (없으면 빈 배열)
    const POI_DATABASE = window.POI_DATABASE || [];

    // 4-Day Itinerary Structure
    let userItinerary = {
        "1": ["fukuoka_airport", "oriental_hotel", "shinshin_ramen", "ohori_park", "momochi_seaside", "fukuoka_tower", "motsunabe_rakutenchi", "nakasu_yatai"],
        "2": ["yufuin_tour_start", "dazaifu", "yufuin_village", "kinrin_lake", "yufumabushi_shin", "kamado_jigoku"],
        "3": ["sumiyoshi_shrine", "canal_city", "beef_tongue_lunch", "kushida_shrine", "tenjin_underground", "yakiniku_dinner", "don_quijote"],
        "4": ["tanya_hakata", "amu_plaza", "ekiben_lunch"]
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
        const centerSpot = POI_DATABASE.find(p => p.id === userItinerary[1][0]) || POI_DATABASE[0];
        if (!centerSpot) {
            console.warn('POI_DATABASE가 비어있습니다.');
            return;
        }
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
            <div class="bg-blue-50 p-4 rounded-xl mb-4 border border-blue-100 shadow-inner">
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

            <!-- 🔍 검색 바 -->
            <div class="mb-4">
                <div class="relative">
                    <input type="text" id="poi-search" placeholder="장소 검색... (예: 라멘, 타워)" 
                        class="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition"
                        oninput="filterPOIs()">
                    <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>

            <!-- 🏷️ 카테고리 필터 -->
            <div class="flex gap-2 mb-4 overflow-x-auto scrollbar-hide pb-2">
                <button onclick="filterByCategory('all')" id="filter-all" class="category-btn active flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition bg-gray-900 text-white">
                    전체
                </button>
                <button onclick="filterByCategory('food')" id="filter-food" class="category-btn flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600">
                    🍜 맛집
                </button>
                <button onclick="filterByCategory('spot')" id="filter-spot" class="category-btn flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600">
                    📍 관광지
                </button>
                <button onclick="filterByCategory('shopping')" id="filter-shopping" class="category-btn flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                    🛍️ 쇼핑
                </button>
                <button onclick="filterByCategory('temple')" id="filter-temple" class="category-btn flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600">
                    ⛩️ 신사/사찰
                </button>
            </div>

            <!-- 📊 결과 카운트 -->
            <div class="flex justify-between items-center mb-3">
                <span id="result-count" class="text-sm text-gray-500">총 ${POI_DATABASE.length}개 장소</span>
            </div>

            <div id="spot-pool" class="grid grid-cols-1 gap-4 pb-24"></div>`;

        window.currentCategory = 'all';
        window.searchQuery = '';
        renderSpotPool();
    }

    window.filterByCategory = function (category) {
        window.currentCategory = category;
        // 버튼 스타일 업데이트
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-gray-900', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-600');
        });
        const activeBtn = document.getElementById(`filter-${category}`);
        if (activeBtn) {
            activeBtn.classList.remove('bg-gray-100', 'text-gray-600');
            activeBtn.classList.add('bg-gray-900', 'text-white');
        }
        renderSpotPool();
    };

    window.filterPOIs = function () {
        window.searchQuery = document.getElementById('poi-search')?.value?.toLowerCase() || '';
        renderSpotPool();
    };

    window.verifyRoute = () => {
        if (window.startPreviewTravel) {
            window.startPreviewTravel(userItinerary[activeDay], POI_DATABASE);
        } else {
            alert('미리여행 기능을 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
        }
    };

    window.renderSpotPool = function () {
        const pool = document.getElementById('spot-pool');
        if (!pool) return;

        const category = window.currentCategory || 'all';
        const query = window.searchQuery || '';

        // 필터링
        let filtered = POI_DATABASE;
        if (category !== 'all') {
            filtered = filtered.filter(p => p.type === category);
        }
        if (query) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.desc.toLowerCase().includes(query) ||
                (p.name_en && p.name_en.toLowerCase().includes(query)) ||
                (p.details?.menu && p.details.menu.toLowerCase().includes(query))
            );
        }

        // 결과 카운트 업데이트
        const countEl = document.getElementById('result-count');
        if (countEl) countEl.textContent = `검색 결과: ${filtered.length}개`;

        let htmlContent = filtered.map((place, idx) => {
            const isAdded = Object.values(userItinerary).flat().includes(place.id);
            const photos = place.photos || [];

            // 타입별 아이콘 & 색상
            const typeConfig = {
                food: { icon: '🍜', color: 'orange', label: '맛집' },
                spot: { icon: '📍', color: 'blue', label: '관광' },
                shopping: { icon: '🛍️', color: 'purple', label: '쇼핑' },
                temple: { icon: '⛩️', color: 'green', label: '신사' },
                museum: { icon: '🏛️', color: 'amber', label: '박물관' }
            };
            const config = typeConfig[place.type] || { icon: '📌', color: 'gray', label: place.type };

            // 사진 슬라이더 HTML 생성
            const sliderId = `slider-${place.id}`;
            const photoSlides = photos.map((p, i) => `
                <div class="slide w-full flex-shrink-0">
                    <img src="${p}" class="w-full h-full object-cover" 
                        onerror="this.src='https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800'" alt="${place.name}">
                </div>
            `).join('');

            // 영업시간에서 시간만 추출
            const hours = place.details?.hours || '';
            const menu = place.details?.menu || '';
            const transport = place.details?.transport || '';

            return `
            <div class="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <!-- 📸 사진 슬라이더 영역 -->
                <div class="relative h-48 bg-gray-200 overflow-hidden group" onclick="showDetail('${place.id}')">
                    <div id="${sliderId}" class="flex h-full transition-transform duration-300 ease-out" style="width: ${photos.length * 100}%">
                        ${photoSlides || '<div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-4xl">📷</div>'}
                    </div>
                    
                    <!-- 사진 인디케이터 -->
                    ${photos.length > 1 ? `
                    <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                        ${photos.map((_, i) => `<div class="slider-dot w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}" data-slider="${sliderId}" data-index="${i}"></div>`).join('')}
                    </div>
                    <button onclick="event.stopPropagation(); slidePhoto('${sliderId}', -1)" class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <i class="fas fa-chevron-left text-sm"></i>
                    </button>
                    <button onclick="event.stopPropagation(); slidePhoto('${sliderId}', 1)" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <i class="fas fa-chevron-right text-sm"></i>
                    </button>
                    ` : ''}

                    <!-- 타입 뱃지 -->
                    <div class="absolute top-3 left-3 bg-${config.color}-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        ${config.icon} ${config.label}
                    </div>

                    <!-- 별점 뱃지 -->
                    <div class="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        ⭐ ${place.rating}
                    </div>

                    <!-- 상세보기 오버레이 -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4">
                        <span class="text-white font-bold text-sm bg-blue-600 px-4 py-2 rounded-full shadow-lg">
                            <i class="fas fa-eye mr-1"></i> 상세보기
                        </span>
                    </div>
                </div>

                <!-- 📄 정보 영역 -->
                <div class="p-4">
                    <h4 class="font-black text-lg text-gray-900 mb-1 line-clamp-1">${place.name}</h4>
                    ${place.name_en ? `<p class="text-xs text-gray-400 mb-2">${place.name_en}</p>` : ''}
                    <p class="text-sm text-gray-600 line-clamp-2 mb-3">${place.desc}</p>

                    <!-- 핵심 정보 그리드 -->
                    <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                        ${hours ? `<div class="flex items-center gap-1.5 text-gray-500"><i class="far fa-clock text-blue-400"></i><span class="truncate">${hours}</span></div>` : ''}
                        ${transport ? `<div class="flex items-center gap-1.5 text-gray-500"><i class="fas fa-subway text-purple-400"></i><span class="truncate">${transport}</span></div>` : ''}
                    </div>

                    ${menu ? `<div class="bg-orange-50 px-3 py-2 rounded-lg text-xs text-orange-800 mb-4 line-clamp-1"><i class="fas fa-utensils mr-1"></i>${menu}</div>` : ''}

                    <!-- 구글 이미지 검색 (실제 사진 보기) -->
                    ${place.details?.photoLink ?
                    `<a href="${place.details.photoLink}" target="_blank" onclick="event.stopPropagation()" class="block w-full mb-3 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 text-center transition shadow-sm">
                            <i class="fab fa-google text-red-500 mr-1"></i> 구글에서 실제 사진 더보기
                        </a>` : ''}

                    <!-- 액션 버튼 -->
                    <div class="flex gap-2">
                        ${isAdded ?
                    `<button class="flex-1 py-3 rounded-xl font-bold text-sm bg-gray-100 text-gray-400 cursor-not-allowed flex items-center justify-center gap-2">
                                <i class="fas fa-check-circle"></i> 일정 포함됨
                            </button>` :
                    `<button onclick="addToPlan('${place.id}')" class="flex-1 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transition flex items-center justify-center gap-2 active:scale-95">
                                <i class="fas fa-plus-circle"></i> 일정에 담기
                            </button>`
                }
                        <button onclick="showDetail('${place.id}')" class="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition active:scale-95">
                            <i class="fas fa-info-circle text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');

        pool.innerHTML = htmlContent || '<p class="text-center text-gray-400 py-10">검색 결과가 없습니다.</p>';

        // 슬라이더 인덱스 초기화
        POI_DATABASE.forEach(p => {
            window[`sliderIndex_slider-${p.id}`] = 0;
        });
    };

    // 사진 슬라이더 함수
    window.slidePhoto = function (sliderId, direction) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const slideCount = slider.children.length;
        const indexKey = `sliderIndex_${sliderId}`;
        let index = window[indexKey] || 0;

        index += direction;
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;

        window[indexKey] = index;
        slider.style.transform = `translateX(-${index * (100 / slideCount)}%)`;

        // 인디케이터 업데이트
        document.querySelectorAll(`[data-slider="${sliderId}"]`).forEach((dot, i) => {
            dot.classList.toggle('bg-white', i === index);
            dot.classList.toggle('bg-white/50', i !== index);
        });
    };

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
        if (!item) return;
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
                const seasonalInfo = item.details?.seasonal ? Object.entries(item.details.seasonal).map(([k, v]) => `<li class="text-xs text-gray-600"><span class="font-bold text-blue-500">${k.toUpperCase()}:</span> ${v}</li>`).join('') : '';
                const recommendTags = item.details?.recommend ? item.details.recommend.map(r => `<span class="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold">#${r}</span>`).join('') : '';

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
                            ${item.details?.menu ? `<p class="text-xs bg-orange-50 p-2 rounded text-orange-800">🍽️ <strong>추천 메뉴:</strong> ${item.details.menu}</p>` : ''}
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
                tabContent = `<div class="grid grid-cols-2 gap-2 animate-fade-in">${item.photos.map(p => `<div class="aspect-square rounded-lg overflow-hidden bg-gray-100"><img src="${p}" class="w-full h-full object-cover" onclick="window.open('${p}','_blank')" onerror="this.src='images/travel/fukuoka/placeholder.jpg'"></div>`).join('')}</div>`;
            }

            content.innerHTML = `<div class="relative h-72 bg-gray-900 group"><img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90" onerror="this.src='images/travel/fukuoka/placeholder.jpg'"><button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center">✕</button><div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"><h2 class="text-3xl font-black text-white mb-1">${item.name}</h2><div class="flex gap-2 mt-2">${item.details?.themes ? item.details.themes.map(t => `<span class="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">${t}</span>`).join('') : ''}</div></div></div><div class="sticky top-0 bg-white z-10 flex border-b shadow-sm"><button class="flex-1 py-4 text-sm font-bold transition ${overviewClass}" onclick="window.switchDetailTab('overview')">개요</button><button class="flex-1 py-4 text-sm font-bold transition ${reviewsClass}" onclick="window.switchDetailTab('reviews')">리뷰</button><button class="flex-1 py-4 text-sm font-bold transition ${photosClass}" onclick="window.switchDetailTab('photos')">사진</button></div><div class="p-6 pb-24">${tabContent}</div>`;
        }
        window.switchDetailTab = (tab) => { window.currentDetailTab = tab; renderModalContent(); };
        renderModalContent();
    }

    function createModal() {
        let m = document.getElementById('app-modal');
        if (!m) { m = document.createElement('div'); m.id = 'app-modal'; m.className = 'fixed inset-0 z-50 hidden'; m.innerHTML = `<div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div><div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[90vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl"><div id="modal-content" class="flex-1 overflow-y-auto scrollbar-hide bg-white"></div></div>`; document.body.appendChild(m); }
        m.classList.remove('hidden'); return true;
    }
    window.closeModal = () => document.getElementById('app-modal')?.classList.add('hidden');
    function injectCSS() { const s = document.createElement('style'); s.textContent = `.scrollbar-hide::-webkit-scrollbar { display: none; } .animate-fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`; document.head.appendChild(s); }

    initApp();
}
window.initFukuokaTrip = initFukuokaTrip;
