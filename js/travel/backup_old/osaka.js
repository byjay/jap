
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 오사카 도착 & 도톤보리 ] =================
        'airport_in': {
            name: '간사이 국제공항 (도착)',
            lat: 34.4320, lng: 135.2304,
            type: 'transport',
            rating: 4.0,
            desc: '오사카 여행의 시작! 라피트 타고 난바로 이동',
            openHours: '24시간 운영',
            tips: '💡 꿀팁: "라피트 특급열차" 왕복권을 미리 사면 저렴해요(약 2,000엔). 난바역까지 34분 컷! 공항 2층 "551 호라이" 만두는 꼭 드세요.',
            info: [
                { label: '라피트(난바)', val: '34분, 약 1,450엔 (왕복권 추천)' },
                { label: '공항급행(난바)', val: '45분, 930엔 (일반 전철)' },
                { label: '리무진버스', val: '우메다/난바행 약 1,600엔' },
                { label: '택시', val: '난바까지 약 16,000엔 (50분) *비추천*' }
            ],
            links: [
                { name: '라피트 시간표', url: 'https://www.howto-osaka.com/kr/traffic/train/timetable.html' }
            ],
            recommend: [
                {
                    name: '포켓몬 스토어',
                    type: '쇼핑',
                    desc: '공항 2층, 파일럿 피카츄 한정판 있음',
                    icon: '⚡',
                    menus: [{ name: '파일럿 피카츄', price: '2,000엔', desc: '간사이 공항 한정', photo: '⚡' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600',
                'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600'
            ]
        },

        'hotel_checkin': {
            name: '스위소텔 난카이 오사카 (숙소)',
            lat: 34.6633, lng: 135.5019,
            type: 'hotel',
            rating: 4.5,
            desc: '난바역 직결! 공항에서 비 안 맞고 도착 가능',
            openHours: '체크인 15:00 / 체크아웃 11:00',
            tips: '💡 꿀팁: 라피트 내리면 바로 엘리베이터 타고 로비로 이동 가능. 위치 깡패. 도톤보리까지 도보 5분.',
            info: [
                { label: '위치', val: '난카이 난바역 바로 위' },
                { label: '택시', val: '난바역에서 도보 이동 추천' },
                { label: '조식', val: '36층 타볼라36 (전망 굿)' }
            ],
            links: [
                { name: '호텔 공식 홈페이지', url: 'https://swissotelnankaiosaka.com/ko/' },
                { name: '아고다 예약', url: 'https://www.agoda.com/' }
            ],
            recommend: [
                {
                    name: '난바 파크스',
                    type: '쇼핑',
                    desc: '도심 속 공원 같은 쇼핑몰, 꼼데가르송 있음',
                    icon: '🛍️',
                    menus: [{ name: '꼼데가르송', price: '다양', desc: '오픈런 필수', photo: '👕' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600'
            ]
        },

        'dotonbori': {
            name: '도톤보리 & 글리코상',
            lat: 34.6687, lng: 135.5013,
            type: 'tour',
            rating: 4.7,
            desc: '오사카의 심장, 먹다 망한다는 쿠이다오레의 거리 🏃',
            openHours: '24시간',
            tips: '💡 꿀팁: 글리코상 앞 "에비스 다리"는 사람 지옥. 다리 밑으로 내려가서 찍거나, 건너편 "H&M 앞"이 숨은 명당.',
            info: [
                { label: '크루즈', val: '주유패스 무료 (매표소 예약 필수)' },
                { label: '쇼핑', val: '돈키호테 도톤보리점 (24시간)' }
            ],
            menus: [
                { name: '타코야키', price: '600엔', desc: '앗치치혼포, 줄 서서 먹는 맛집', photo: '🐙' },
                { name: '이치란 라멘', price: '980엔~', desc: '별관이 본관보다 줄이 짧음', photo: '🍜' },
                { name: '10엔빵', price: '500엔', desc: '치즈가 쭉 늘어나는 동전 모양 빵', photo: '🪙' }
            ],
            links: [
                { name: '도톤보리 상점가', url: 'http://www.dotonbori.or.jp/ko/' }
            ],
            recommend: [
                {
                    name: '신사이바시',
                    type: '쇼핑',
                    desc: '도톤보리와 연결된 거대 아케이드 쇼핑가',
                    icon: '🛍️',
                    menus: [{ name: '다이마루 백화점', price: '다양', desc: '포켓몬 센터 있음', photo: '🏬' }]
                },
                {
                    name: '호젠지 요코초',
                    type: '거리',
                    desc: '도보 5분, 옛 정취가 남은 돌길 골목',
                    icon: '🏮',
                    menus: [{ name: '야키토리', price: '다양', desc: '분위기 좋은 술집', photo: '🍶' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',
                'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?w=600'
            ]
        },

        // ================= [ 2일차: 유니버설 스튜디오 재팬 ] =================
        'usj': {
            name: '유니버설 스튜디오 재팬 (USJ)',
            lat: 34.6654, lng: 135.4323,
            type: 'tour',
            rating: 4.9,
            desc: '닌텐도 월드와 해리포터, 하루 순삭 테마파크 🌍',
            openHours: '08:30~21:30 (날짜별 상이)',
            tips: '💡 꿀팁: "닌텐도 월드" 확약권 없으면 못 들어가요! (오픈런해서 앱으로 정리권 받거나, 익스프레스 티켓 구매 필수).',
            info: [
                { label: '입장권', val: '시즌별 가격 상이 (8,600엔~)' },
                { label: '익스프레스', val: '돈으로 시간을 사는 티켓 (매진 빠름)' }
            ],
            menus: [
                { name: '칠면조 다리', price: '1,000엔', desc: '쥬라기 공원 앞, 들고 뜯는 맛', photo: '🍗' },
                { name: '키노피오 카페', price: '2,000엔~', desc: '비주얼 깡패, 대기표 받아야 입장 가능', photo: '🍄' },
                { name: '미니언 팝콘통', price: '4,000엔~', desc: '시즌별 디자인 다름', photo: '🍿' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.usj.co.jp/web/ko/kr' }
            ],
            recommend: [
                {
                    name: '시티워크',
                    type: '식당',
                    desc: '파크 앞 상점가, 놀고 나와서 저녁 먹기 좋음',
                    icon: '🍔',
                    menus: [{ name: '모스버거', price: '800엔', desc: '일본 햄버거', photo: '🍔' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1624601573012-7b319f772c74?w=600',
                'https://images.unsplash.com/photo-1528750246604-97b7e8c36942?w=600'
            ]
        },

        // ================= [ 3일차: 오사카의 과거와 미래 ] =================
        'osaka_castle': {
            name: '오사카 성',
            lat: 34.6873, lng: 135.5262,
            type: 'tour',
            rating: 4.5,
            desc: '오사카의 랜드마크, 웅장한 천수각 🏯',
            openHours: '09:00~17:00',
            tips: '💡 꿀팁: 천수각 올라가는 엘리베이터 줄이 길어요. 굳이 안 올라가고 밖에서 사진만 찍어도 충분히 예쁨. "고자부네 놀잇배" 주유패스로 무료 탑승 가능.',
            info: [
                { label: '입장료', val: '600엔 (주유패스 무료)' },
                { label: '이동', val: '공원 입구에서 로드트레인 타면 편함 (유료)' }
            ],
            menus: [
                { name: '말차 아이스크림', price: '400엔', desc: '성 앞에서 먹는 진한 녹차맛', photo: '🍦' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.osakacastle.net/' }
            ],
            recommend: [
                {
                    name: '미라이자',
                    type: '쇼핑',
                    desc: '천수각 바로 옆, 기념품과 카페 있음',
                    icon: '🎁',
                    menus: [{ name: '기념품', price: '다양', desc: '오사카 성 굿즈', photo: '🎁' }]
                },
                {
                    name: '니시노마루 정원',
                    type: '산책',
                    desc: '벚꽃 시즌 필수 코스',
                    icon: '🌸',
                    menus: [{ name: '입장료', price: '200엔', desc: '벚꽃 명소', photo: '🌸' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600'
            ]
        },

        'umeda_sky': {
            name: '우메다 공중정원',
            lat: 34.7053, lng: 135.4896,
            type: 'tour',
            rating: 4.6,
            desc: '두 건물이 연결된 360도 파노라마 전망대 🌃',
            openHours: '09:30~22:30',
            tips: '💡 꿀팁: 주유패스로 무료입장 하려면 "오후 4시(또는 6시)" 전에 들어가야 해요! 그 이후엔 할인만 됨.',
            info: [
                { label: '입장료', val: '1,500엔 (주유패스 시간 제한 무료)' },
                { label: '가는길', val: '우메다역에서 도보 15분 (지하보도 이용)' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.skybldg.co.jp/' }
            ],
            recommend: [
                {
                    name: '햅파이브',
                    type: '관람차',
                    desc: '빨간 관람차, 주유패스 무료',
                    icon: '🎡',
                    menus: [{ name: '관람차', price: '600엔', desc: '블루투스 스피커 있음', photo: '🎡' }]
                },
                {
                    name: '키디랜드 우메다',
                    type: '쇼핑',
                    desc: '한큐삼번가, 캐릭터 굿즈 천국',
                    icon: '🧸',
                    menus: [{ name: '캐릭터', price: '다양', desc: '치이카와, 스누피', photo: '🧸' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1590253230538-a26118d7e5c5?w=600',
                'https://images.unsplash.com/photo-1599666668706-03708d728617?w=600'
            ]
        },

        // ================= [ 4일차: 레트로 오사카 & 귀국 ] =================
        'shinsekai': {
            name: '신세카이 & 츠텐카쿠',
            lat: 34.6520, lng: 135.5063,
            type: 'tour',
            rating: 4.4,
            desc: '화려한 간판, 레트로한 분위기의 구시가지 🗼',
            openHours: '상점별 상이',
            tips: '💡 꿀팁: "쿠시카츠(튀김 꼬치)"의 본고장. "다루마"가 유명하지만 줄 길면 옆집 가도 다 맛있음. 소스는 두 번 찍기 금지!',
            info: [
                { label: '츠텐카쿠', val: '전망대 900엔 / 슬라이드 1,000엔' },
                { label: '분위기', val: '낮술 환영, 시끌벅적, 화려함' }
            ],
            menus: [
                { name: '쿠시카츠 세트', price: '1,500엔~', desc: '소고기, 새우, 연근 등 튀김 꼬치', photo: '🍢' },
                { name: '도테야키', price: '400엔', desc: '소 힘줄 된장 조림, 맥주 도둑', photo: '🥘' }
            ],
            links: [
                { name: '신세카이 정보', url: 'https://shinsekai.net/' }
            ],
            recommend: [
                {
                    name: '메가 돈키호테',
                    type: '쇼핑',
                    desc: '신세카이점 엄청 큼, 쇼핑하기 좋음',
                    icon: '🐧',
                    menus: [{ name: '쇼핑', price: '다양', desc: '면세 가능', photo: '🛍️' }]
                },
                {
                    name: '스파월드',
                    type: '온천',
                    desc: '세계 대온천, 여행 피로 풀기 딱',
                    icon: '♨️',
                    menus: [{ name: '입장료', price: '1,500엔~', desc: '수영장+온천', photo: '♨️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600',
                'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 오사카 도착 & 도톤보리 🏃',
            items: ['airport_in', 'hotel_checkin', 'dotonbori'],
            summary: '공항 도착 → 호텔 체크인 → 도톤보리 먹방'
        },
        2: {
            title: '2일차: 유니버설 스튜디오 재팬 🌍',
            items: ['usj'],
            summary: '하루 종일 USJ! 닌텐도 월드 & 해리포터'
        },
        3: {
            title: '3일차: 오사카의 과거와 미래 🏯',
            items: ['osaka_castle', 'umeda_sky'],
            summary: '오사카 성 산책 → 우메다 공중정원 야경'
        },
        4: {
            title: '4일차: 신세카이 & 귀국 🗼',
            items: ['shinsekai', 'airport_in'],
            summary: '신세카이 쿠시카츠 → 공항 이동 → 귀국'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initOsakaTrip() {
        try {
            console.log('🐙 오사카 여행 가이드 시작!');
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
                        polylineOptions: { strokeColor: '#FF1493', strokeWeight: 5 }
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Osaka Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 34.6937, lng: 135.5023 },
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
            `<button onclick="changeOsakaDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-600 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeOsakaDay(day) {
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
        summaryDiv.className = "bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 mb-6 border-l-4 border-pink-500";
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
            if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-pink-600'; bgColor = 'bg-pink-50'; }

            const div = document.createElement('div');
            div.id = `place-item-${idx}`;
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-pink-300 mb-3";
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
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-pink-300 hover:bg-pink-50 transition">
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
        const override = localStorage.getItem(`osaka_place_${key}`);
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
        localStorage.setItem('osaka_place_hotel_checkin', JSON.stringify(data));
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
        const saved = localStorage.getItem('osaka_flight_info');
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
        localStorage.setItem('osaka_flight_info', JSON.stringify(flightInfo));
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
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: usj, dotonbori):");
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
    window.initOsakaTrip = initOsakaTrip;
    window.changeOsakaDay = changeOsakaDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
