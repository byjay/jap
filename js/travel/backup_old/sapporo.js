
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 삿포로 도착 & 스스키노의 밤 ] =================
        'airport_in': {
            name: '신치토세 공항 (도착)',
            lat: 42.7874, lng: 141.6813,
            type: 'transport',
            rating: 4.3,
            desc: '일본에서 가장 맛있는 공항! 라멘 도장과 로이즈 초콜릿 월드',
            openHours: '국제선 07:00~20:00',
            tips: '💡 꿀팁: 공항이 하나의 테마파크입니다. "키노토야" 치즈타르트와 소프트 아이스크림은 꼭 드세요. JR 쾌속 에어포트 타면 삿포로역까지 37분!',
            info: [
                { label: 'JR 쾌속(삿포로)', val: '37분, 1,150엔 (지정석 +840엔)' },
                { label: '공항버스', val: '80분, 1,300엔 (스스키노 직행)' },
                { label: '택시', val: '약 15,000엔 (60분) *비추천*' }
            ],
            links: [
                { name: 'JR 홋카이도', url: 'https://www.jrhokkaido.co.jp/global/korean/index.html' }
            ],
            recommend: [
                {
                    name: '도라에몽 파크',
                    type: '볼거리',
                    desc: '공항 3층, 아이들이 좋아함',
                    icon: '🐱',
                    menus: [{ name: '입장료', price: '800엔', desc: '유료존/무료존 있음', photo: '🐱' }]
                },
                {
                    name: '라멘 도장',
                    type: '식당',
                    desc: '홋카이도 유명 라멘집 10곳이 모여있음',
                    icon: '🍜',
                    menus: [{ name: '에비소바 이치겐', price: '900엔', desc: '새우 국물 라멘', photo: '🦐' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=600',
                'https://images.unsplash.com/photo-1542304388-752181512395?w=600'
            ]
        },

        'hotel_checkin': {
            name: '더 놋 삿포로 (숙소)',
            lat: 43.0568, lng: 141.3535,
            type: 'hotel',
            rating: 4.4,
            desc: '스스키노와 오도리 공원 사이, 힙한 감성의 호텔',
            openHours: '체크인 15:00 / 체크아웃 11:00',
            tips: '💡 꿀팁: 지하상가(폴타운)와 연결되어 있어 눈 오는 날 이동이 정말 편해요. 1층 "세이코마트" 이용 필수.',
            info: [
                { label: '위치', val: '다누키코지 상점가 바로 앞' },
                { label: '택시', val: '삿포로역에서 기본요금 거리' },
                { label: '편의점', val: '1층 세이코마트 (핫셰프 도시락)' }
            ],
            links: [
                { name: '호텔 공식 홈페이지', url: 'https://hotel-the-knot.jp/sapporo/' }
            ],
            recommend: [
                {
                    name: '메가 돈키호테',
                    type: '쇼핑',
                    desc: '바로 맞은편, 24시간 운영',
                    icon: '🛍️',
                    menus: [{ name: '쇼핑', price: '다양', desc: '면세 가능', photo: '🛍️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600'
            ]
        },

        'susukino': {
            name: '스스키노 & 니카상',
            lat: 43.0555, lng: 141.3533,
            type: 'tour',
            rating: 4.5,
            desc: '삿포로 최대 유흥가, 니카상 간판 앞 인증샷 필수 🥃',
            openHours: '24시간',
            tips: '💡 꿀팁: 니카상 배경 사진은 교차로 횡단보도 중간이나 맞은편 건물 2층에서 찍으면 잘 나와요. 저녁엔 "징기스칸(양고기)" 필수!',
            info: [
                { label: '맛집', val: '징기스칸, 미소라멘, 스프카레' },
                { label: '관람차', val: '노르베사 관람차 (야경 추천)' }
            ],
            menus: [
                { name: '징기스칸 (다루마)', price: '1,200엔~', desc: '양고기 구이, 잡내 없고 부드러움', photo: '🥩' },
                { name: '미소 라멘 (케야키)', price: '900엔', desc: '버터 콘 추가 필수, 진한 국물', photo: '🍜' },
                { name: '시메 파르페', price: '1,500엔', desc: '술 마시고 파르페로 해장하는 문화', photo: '🍨' }
            ],
            links: [
                { name: '스스키노 관광협회', url: 'http://www.susukino-ta.jp/' }
            ],
            recommend: [
                {
                    name: '라멘 요코초',
                    type: '식당',
                    desc: '원조 라멘 골목, 좁지만 분위기 좋음',
                    icon: '🍜',
                    menus: [{ name: '콘버터 라멘', price: '1,000엔', desc: '홋카이도 명물', photo: '🌽' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=600',
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=600'
            ]
        },

        // ================= [ 2일차: 오타루 낭만 여행 ] =================
        'otaru_canal': {
            name: '오타루 운하',
            lat: 43.1994, lng: 141.0016,
            type: 'tour',
            rating: 4.6,
            desc: '영화 "러브레터"의 배경, 로맨틱한 항구 도시 ❄️',
            openHours: '24시간',
            tips: '💡 꿀팁: 삿포로역에서 기차로 40분. 낮에도 예쁘지만 가스등 켜지는 해 질 녘이 진짜입니다. 운하 크루즈(1,500엔) 타면 설명도 해주고 사진도 찍어줘요.',
            info: [
                { label: '이동', val: 'JR 쾌속 에어포트 (750엔)' },
                { label: '크루즈', val: '낮 1,500엔 / 밤 1,800엔' }
            ],
            menus: [
                { name: '카이센동', price: '2,500엔~', desc: '삼각시장 타키나미 식당 추천', photo: '🍚' },
                { name: '나루토 치킨', price: '1,200엔', desc: '영계 반마리 튀김, 겉바속촉', photo: '🍗' }
            ],
            links: [
                { name: '오타루 관광협회', url: 'https://otaru.gr.jp/' }
            ],
            recommend: [
                {
                    name: '오르골당',
                    type: '쇼핑',
                    desc: '세계 최대 규모 오르골, 입구 증기시계 구경',
                    icon: '🎵',
                    menus: [{ name: '오르골', price: '3,000엔~', desc: '기념품으로 최고', photo: '🎵' }]
                },
                {
                    name: '르타오 본점',
                    type: '카페',
                    desc: '더블 프로마쥬 치즈케이크 시식 가능',
                    icon: '🍰',
                    menus: [{ name: '치즈케이크', price: '400엔', desc: '입에서 녹음', photo: '🍰' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1548834764-d8d475545a4d?w=600',
                'https://images.unsplash.com/photo-1612347366838-89c025076639?w=600'
            ]
        },

        // ================= [ 3일차: 삿포로 클래식 ] =================
        'sapporo_beer': {
            name: '삿포로 맥주 박물관',
            lat: 43.0713, lng: 141.3695,
            type: 'tour',
            rating: 4.5,
            desc: '붉은 벽돌 건물에서 즐기는 갓 만든 맥주 🍺',
            openHours: '11:00~20:00 (월요일 휴관)',
            tips: '💡 꿀팁: 박물관 구경은 무료! 1층 스타홀에서 "3종 샘플러(1,000엔)" 꼭 드세요. 홋카이도 한정 "삿포로 클래식" 생맥주가 진짜 맛있습니다.',
            info: [
                { label: '입장료', val: '무료 (프리미엄 투어 유료)' },
                { label: '시음', val: '맥주 1잔 400엔 / 3종 세트 1,000엔' }
            ],
            menus: [
                { name: '3종 샘플러', price: '1,000엔', desc: '블랙라벨, 클래식, 개척사 맥주 비교 시음', photo: '🍻' }
            ],
            links: [
                { name: '박물관 예약', url: 'https://www.sapporobeer.jp/brewery/s_museum/' }
            ],
            recommend: [
                {
                    name: '아리오 삿포로',
                    type: '쇼핑',
                    desc: '바로 옆 대형 마트, 식료품 쇼핑 좋음',
                    icon: '🛒',
                    menus: [{ name: '식료품', price: '저렴', desc: '맥주, 과자', photo: '🛒' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600',
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600'
            ]
        },

        'odori_park': {
            name: '오도리 공원 & TV타워',
            lat: 43.0600, lng: 141.3500,
            type: 'tour',
            rating: 4.4,
            desc: '삿포로 도심을 가로지르는 시민들의 쉼터 🌳',
            openHours: '24시간',
            tips: '💡 꿀팁: TV타워 전망대에서 보는 야경도 좋지만, 공원에서 TV타워를 배경으로 찍는 게 더 예뻐요. 겨울엔 눈축제, 여름엔 맥주축제가 열립니다.',
            info: [
                { label: 'TV타워', val: '전망대 입장료 1,000엔' },
                { label: '명물', val: '옥수수 구이 (여름 한정)' }
            ],
            menus: [
                { name: '스프카레 (스아게+)', price: '1,300엔', desc: '도보 5분, 꼬치에 꽂아 나오는 야채가 일품', photo: '🥘' },
                { name: '스프카레 (가라쿠)', price: '1,300엔', desc: '진한 국물, 대기표 뽑고 오도리 공원 산책 추천', photo: '🍲' }
            ],
            links: [
                { name: '오도리 공원 정보', url: 'https://odori-park.jp/' }
            ],
            recommend: [
                {
                    name: '시계탑',
                    type: '관광',
                    desc: '일본 3대 실망 명소라지만 사진은 잘 나옴',
                    icon: '🕰️',
                    menus: [{ name: '입장료', price: '200엔', desc: '역사관', photo: '🏛️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=600',
                'https://images.unsplash.com/photo-1612347366838-89c025076639?w=600'
            ]
        },

        // ================= [ 4일차: 달콤한 이별 ] =================
        'shiroi_koibito': {
            name: '시로이 코이비토 파크',
            lat: 43.0886, lng: 141.2706,
            type: 'tour',
            rating: 4.5,
            desc: '쿠키 공장이 이렇게 예뻐도 되나요? 동화 속 세상 🍪',
            openHours: '10:00~17:00',
            tips: '💡 꿀팁: 입장료 내고 공장 견학 안 해도, 무료 구역(정원, 샵)만 봐도 충분히 예뻐요. 쿠키 만들기 체험은 미리 예약 필수!',
            info: [
                { label: '입장료', val: '성인 800엔 / 어린이 400엔' },
                { label: '체험', val: '쿠키 꾸미기 1,000엔~' }
            ],
            menus: [
                { name: '시로이 코이비토 소프트', price: '400엔', desc: '화이트 초콜릿 맛 아이스크림, 존맛탱', photo: '🍦' },
                { name: '초콜릿 음료', price: '350엔', desc: '진한 초콜릿 드링크', photo: '🍫' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.shiroikoibitopark.jp/' }
            ],
            recommend: [
                {
                    name: '포토존',
                    type: '사진',
                    desc: '정원 시계탑 앞에서 매시 정각 인형극 열림',
                    icon: '📸',
                    menus: [{ name: '인형극', price: '무료', desc: '매시 정각', photo: '🕰️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1612347366838-89c025076639?w=600',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 삿포로 도착 & 스스키노 🌃',
            items: ['airport_in', 'hotel_checkin', 'susukino'],
            summary: '공항 라멘 도장 → 호텔 체크인 → 징기스칸 저녁'
        },
        2: {
            title: '2일차: 오타루 낭만 산책 ❄️',
            items: ['otaru_canal'],
            summary: '오타루 운하 → 오르골당 → 르타오 디저트'
        },
        3: {
            title: '3일차: 삿포로 맥주와 공원 🍺',
            items: ['sapporo_beer', 'odori_park'],
            summary: '맥주 박물관 시음 → 스프카레 점심 → 오도리 공원'
        },
        4: {
            title: '4일차: 달콤한 마무리 🍪',
            items: ['shiroi_koibito', 'airport_in'],
            summary: '시로이 코이비토 파크 → 공항 쇼핑 → 귀국'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initSapporoTrip() {
        try {
            console.log('❄️ 삿포로 여행 가이드 시작!');
            renderTabs();
            renderSchedule(activeDay);
            loadFlightInfo();
            loadAccommodation();
            initHotelSearch();
            createModal();

            if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
                try {
                    initMap();
                    directionsService = new google.maps.DirectionsService();
                    directionsRenderer = new google.maps.DirectionsRenderer({
                        map: map,
                        suppressMarkers: true,
                        polylineOptions: { strokeColor: '#00BFFF', strokeWeight: 5 }
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Sapporo Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 43.0618, lng: 141.3545 },
            zoom: 12,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true
        });

        updateMarkers(activeDay);
    }

    // ==================== UI 렌더링 ====================
    function renderTabs() {
        const container = document.getElementById('day-tabs');
        if (!container) return;

        container.innerHTML = Object.keys(schedule).map(day =>
            `<button onclick="changeSapporoDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-600 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeSapporoDay(day) {
        activeDay = day;
        renderTabs();
        renderSchedule(day);
        if (map) updateMarkers(day);
        if (directionsRenderer) directionsRenderer.setDirections({ routes: [] });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateMarkers(day) {
        if (!map || typeof google === 'undefined') return;

        markers.forEach(m => m.setMap(null));
        markers = [];
        const bounds = new google.maps.LatLngBounds();

        schedule[day].items.forEach((key, idx) => {
            const item = getPlace(key);
            if (!item) return;

            const marker = new google.maps.Marker({
                position: { lat: item.lat, lng: item.lng },
                map: map,
                label: { text: (idx + 1).toString(), color: "white", fontWeight: "bold" },
                title: item.name,
                animation: google.maps.Animation.DROP
            });

            marker.addListener('click', () => {
                const listElement = document.getElementById(`place-item-${idx}`);
                if (listElement) {
                    listElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const panel = document.getElementById(`detail-${idx}`);
                    if (panel && panel.classList.contains('hidden')) toggleDetail(idx, item.lat, item.lng);
                }
            });

            markers.push(marker);
            bounds.extend(marker.getPosition());
        });

        if (markers.length > 0) {
            map.fitBounds(bounds);
        }
    }

    function renderSchedule(day) {
        const container = document.getElementById('itinerary-content');
        if (!container) return;

        const summaryDiv = document.createElement('div');
        summaryDiv.className = "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 mb-6 border-l-4 border-cyan-500";
        summaryDiv.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-bold text-lg text-gray-800 mb-2">📍 ${schedule[day].title}</h3>
                    <p class="text-sm text-gray-600">${schedule[day].summary}</p>
                </div>
                <button onclick="editItinerary()" class="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50 text-gray-600">
                    <i class="fas fa-edit"></i> 일정 편집
                </button>
            </div>
        `;
        container.innerHTML = '';
        container.appendChild(summaryDiv);

        schedule[day].items.forEach((key, idx) => {
            const item = getPlace(key);
            if (!item) return;

            let iconClass = 'fa-map-marker-alt';
            let typeColor = 'text-gray-400';
            let bgColor = 'bg-gray-50';

            if (item.type === 'food') { iconClass = 'fa-utensils'; typeColor = 'text-orange-500'; bgColor = 'bg-orange-50'; }
            if (item.type === 'hotel') { iconClass = 'fa-bed'; typeColor = 'text-blue-500'; bgColor = 'bg-blue-50'; }
            if (item.type === 'transport') { iconClass = 'fa-plane'; typeColor = 'text-purple-500'; bgColor = 'bg-purple-50'; }
            if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-cyan-600'; bgColor = 'bg-cyan-50'; }

            const div = document.createElement('div');
            div.id = `place-item-${idx}`;
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-cyan-300 mb-3";
            div.innerHTML = `
                <div class="click-trigger p-3 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition" onclick="toggleDetail(${idx}, ${item.lat}, ${item.lng})">
                    <div class="flex items-center gap-2 overflow-hidden flex-1">
                        <span class="flex-none w-8 h-8 rounded-full ${bgColor} ${typeColor} flex items-center justify-center font-bold text-sm border border-current">${idx + 1}</span>
                        <div class="flex flex-col min-w-0 flex-1">
                            <h4 class="font-bold text-gray-800 text-sm break-words line-clamp-2">${item.name}</h4>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <i class="fas ${iconClass} ${typeColor} text-xs"></i>
                                <span class="text-xs text-gray-500 truncate">${item.desc}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-none ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                         <i id="chevron-${idx}" class="fas fa-chevron-down ${typeColor} text-xs transition-transform duration-300"></i>
                    </div>
                </div>
                <div id="detail-${idx}" class="hidden border-t-2 border-gray-100 bg-gradient-to-b from-gray-50 to-white">
                    ${generateDetailHTML(item, idx)}
                </div>
            `;
            container.appendChild(div);
        });
    }

    function generateDetailHTML(item, idx) {
        const photosHTML = item.photos ? `<div class="grid grid-cols-2 gap-2 p-4">${item.photos.slice(0, 2).map(url => `<div class="aspect-video rounded-xl overflow-hidden shadow-md"><img src="${url}" class="w-full h-full object-cover"></div>`).join('')}</div>` : '';

        const menusHTML = item.menus ? `
            <div class="px-4 mb-4">
                <h5 class="font-bold text-gray-700 text-sm mb-2">🍽️ 추천 메뉴</h5>
                <div class="space-y-2">
                    ${item.menus.map(menu => `
                        <div class="flex items-center justify-between bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                            <div class="flex items-center gap-2">
                                <span class="text-lg">${menu.photo || '🍽️'}</span>
                                <div>
                                    <div class="text-sm font-bold text-gray-800">${menu.name}</div>
                                    <div class="text-xs text-gray-500">${menu.desc}</div>
                                </div>
                            </div>
                            <div class="text-sm font-bold text-orange-500">${menu.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        const infoHTML = item.info ? `
            <div class="px-4 mb-4 grid grid-cols-2 gap-2">
                ${item.info.map(inf => `
                    <div class="bg-gray-50 p-2 rounded-lg">
                        <div class="text-xs text-gray-400 font-bold">${inf.label}</div>
                        <div class="text-xs text-gray-700 font-medium">${inf.val}</div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        const recommendHTML = item.recommend && item.recommend.length > 0 ? `
            <div class="px-4 mb-4">
                <h5 class="font-bold text-gray-700 text-sm mb-2">👍 주변 추천 (클릭하여 상세 보기)</h5>
                <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    ${item.recommend.map((rec, i) => `
                        <div onclick="showPlaceDetailModal('p_${idx}_r_${i}')" 
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-cyan-300 hover:bg-cyan-50 transition">
                            <div class="text-xl mb-1">${rec.icon}</div>
                            <div class="text-xs font-bold text-gray-800 truncate">${rec.name}</div>
                            <div class="text-[10px] text-gray-500 truncate">${rec.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        if (item.recommend) {
            item.recommend.forEach((rec, i) => {
                const recKey = `p_${idx}_r_${i}`;
                window.placeRecommendations = window.placeRecommendations || {};
                window.placeRecommendations[recKey] = rec;
            });
        }

        return `
            ${photosHTML}
            ${infoHTML}
            ${menusHTML}
            <div class="px-4 mb-4">
                <div class="bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                    <p class="text-sm text-gray-700 leading-relaxed">${item.tips || ''}</p>
                </div>
            </div>
            ${recommendHTML}
            <div class="px-4 pb-6">
                 <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="block w-full bg-gray-800 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg">구글맵 보기</a>
            </div>
        `;
    }

    function keyToSafeId(str) {
        return str.replace(/[^a-zA-Z0-9]/g, '_');
    }

    // ==================== 모달 관련 ====================
    function createModal() {
        if (document.getElementById('place-detail-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'place-detail-modal';
        modal.className = 'fixed inset-0 z-[100] hidden';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closePlaceDetailModal()"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto animate-slide-up">
                <div class="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                    <h3 id="modal-title" class="font-bold text-lg text-gray-800">상세 정보</h3>
                    <button onclick="closePlaceDetailModal()" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div id="modal-content" class="pb-8"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    window.showPlaceDetailModal = function (recKey) {
        const rec = window.placeRecommendations[recKey];
        if (!rec) return;

        const modal = document.getElementById('place-detail-modal');
        const content = document.getElementById('modal-content');
        const title = document.getElementById('modal-title');

        title.textContent = rec.name;
        modal.classList.remove('hidden');

        const photosHTML = rec.photos ? `<div class="grid grid-cols-2 gap-2 p-4">${rec.photos.map(url => `<div class="aspect-video rounded-xl overflow-hidden shadow-md"><img src="${url}" class="w-full h-full object-cover"></div>`).join('')}</div>` : '';

        const menusHTML = rec.menus ? `
            <div class="px-4 mb-4">
                <h5 class="font-bold text-gray-700 text-sm mb-2">🍽️ 메뉴 정보</h5>
                <div class="space-y-2">
                    ${rec.menus.map(menu => `
                        <div class="flex items-center justify-between bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                            <div class="flex items-center gap-2">
                                <span class="text-lg">${menu.photo || '🍽️'}</span>
                                <div>
                                    <div class="text-sm font-bold text-gray-800">${menu.name}</div>
                                    <div class="text-xs text-gray-500">${menu.desc}</div>
                                </div>
                            </div>
                            <div class="text-sm font-bold text-orange-500">${menu.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        content.innerHTML = `
            ${photosHTML}
            <div class="px-4 mb-4">
                <div class="bg-blue-50 p-3 rounded-xl border border-blue-100">
                    <p class="text-sm text-gray-700">${rec.desc}</p>
                </div>
            </div>
            ${menusHTML}
            <div class="px-4">
                 <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rec.name)}" target="_blank" class="block w-full bg-gray-800 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg">구글맵 보기</a>
            </div>
        `;
    };

    window.closePlaceDetailModal = function () {
        document.getElementById('place-detail-modal').classList.add('hidden');
    };

    // ==================== 인터랙션 & 유틸리티 ====================
    function toggleDetail(idx, lat, lng) {
        const detailPanel = document.getElementById(`detail-${idx}`);
        const chevron = document.getElementById(`chevron-${idx}`);
        if (detailPanel.classList.contains('hidden')) {
            detailPanel.classList.remove('hidden');
            chevron.classList.add('rotate-180');
            if (map) { map.panTo({ lat, lng }); map.setZoom(15); }
        } else {
            detailPanel.classList.add('hidden');
            chevron.classList.remove('rotate-180');
        }
    }

    function getPlace(key) {
        const override = localStorage.getItem(`sapporo_place_${key}`);
        return override ? { ...placesDB[key], ...JSON.parse(override) } : placesDB[key];
    }

    // ==================== 사용자 입력 (호텔/항공) ====================
    let hotelAutocomplete;
    function initHotelSearch() {
        const input = document.getElementById('hotel-search-input');
        if (!input || typeof google === 'undefined') return;
        hotelAutocomplete = new google.maps.places.Autocomplete(input, { types: ['lodging'] });
        hotelAutocomplete.addListener('place_changed', () => {
            const place = hotelAutocomplete.getPlace();
            if (!place.geometry) return alert("장소 정보 없음");
            updateAccommodation(place);
        });
    }

    function toggleHotelSearch() {
        const input = document.getElementById('hotel-search-input');
        const btn = document.getElementById('hotel-edit-btn');
        if (input.classList.contains('hidden')) {
            input.classList.remove('hidden');
            input.focus();
            btn.innerHTML = '취소';
            initHotelSearch();
        } else {
            input.classList.add('hidden');
            btn.innerHTML = '숙소 변경';
        }
    }

    function updateAccommodation(place) {
        const data = { name: place.name, lat: place.geometry.location.lat(), lng: place.geometry.location.lng(), desc: place.formatted_address };
        localStorage.setItem('sapporo_place_hotel_checkin', JSON.stringify(data));
        loadAccommodation();
        toggleHotelSearch();
        if (activeDay == 1) { renderSchedule(activeDay); updateMarkers(activeDay); }
        setupSchedule();
    }

    function loadAccommodation() {
        const item = getPlace('hotel_checkin');
        const display = document.getElementById('hotel-info-display');
        if (display && item) display.innerHTML = `<span class="font-bold">${item.name}</span><br><span class="text-xs">${item.desc}</span>`;
    }

    let flightInfo = { departure: '', arrival: '', number: '' };
    function loadFlightInfo() {
        const saved = localStorage.getItem('sapporo_flight_info');
        if (saved) { flightInfo = JSON.parse(saved); updateFlightInfoUI(); }
    }

    function updateFlightInfoUI() {
        const display = document.getElementById('flight-info-display');
        const btn = document.getElementById('flight-edit-btn');
        if (!display) return;
        if (flightInfo.departure) {
            display.innerHTML = `🛫 ${flightInfo.departure} <br> 🛬 ${flightInfo.arrival}`;
            display.classList.remove('hidden');
            btn.innerHTML = '정보 수정';
        } else {
            display.classList.add('hidden');
            btn.innerHTML = '항공권 정보 입력';
        }
    }

    function editFlightInfo() {
        const dep = prompt("가는편 (예: 11/25 09:00)", flightInfo.departure);
        if (!dep) return;
        const arr = prompt("오는편 (예: 11/28 18:00)", flightInfo.arrival);
        const num = prompt("편명", flightInfo.number);
        flightInfo = { departure: dep, arrival: arr, number: num };
        localStorage.setItem('sapporo_flight_info', JSON.stringify(flightInfo));
        updateFlightInfoUI();
        setupSchedule();
    }

    // ==================== 일정 관리 (New) ====================
    function setupSchedule() {
        console.log("일정 재설정: 항공/호텔 정보 업데이트됨");
    }

    function editItinerary() {
        const day = prompt("편집할 일차를 입력하세요 (1-4):", activeDay);
        if (!day || !schedule[day]) return alert("올바른 일차를 입력해주세요.");

        const action = prompt(`[${day}일차 편집]\n1. 일정 초기화\n2. 장소 추가 (키 입력)\n3. 장소 삭제 (순서 번호)\n번호를 입력하세요:`);

        if (action === '1') {
            if (confirm(`${day}일차 일정을 초기화하시겠습니까?`)) {
                schedule[day].items = [];
                renderSchedule(day);
                updateMarkers(day);
            }
        } else if (action === '2') {
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: sapporo_beer, otaru_canal):");
            if (key && placesDB[key]) {
                schedule[day].items.push(key);
                renderSchedule(day);
                updateMarkers(day);
            } else {
                alert("존재하지 않는 장소 키입니다.");
            }
        } else if (action === '3') {
            const idx = prompt(`삭제할 장소의 순서 번호를 입력하세요 (1~${schedule[day].items.length}):`);
            if (idx && idx > 0 && idx <= schedule[day].items.length) {
                schedule[day].items.splice(idx - 1, 1);
                renderSchedule(day);
                updateMarkers(day);
            } else {
                alert("잘못된 번호입니다.");
            }
        }
    }

    // ==================== 전역 노출 ====================
    window.initSapporoTrip = initSapporoTrip;
    window.changeSapporoDay = changeSapporoDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
