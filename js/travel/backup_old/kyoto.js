
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 교토 도착 & 기온의 밤 ] =================
        'airport_in': {
            name: '간사이 국제공항 (도착)',
            lat: 34.4320, lng: 135.2304,
            type: 'transport',
            rating: 4.0,
            desc: '교토 여행의 관문. 하루카 특급열차로 교토역까지 80분!',
            openHours: '24시간 운영',
            tips: '💡 꿀팁: "하루카 편도 티켓"을 미리 예매하면 저렴해요(약 1,800엔). 교토역에 도착하면 "교토 타워" 야경부터 보세요.',
            info: [
                { label: '하루카(교토)', val: '80분, 약 1,800엔 (외국인 할인)' },
                { label: '리무진버스', val: '90분, 약 2,600엔 (짐 많을 때 추천)' },
                { label: '택시', val: '약 30,000엔 (90분) *비추천*' }
            ],
            links: [
                { name: '하루카 시간표', url: 'https://www.westjr.co.jp/global/kr/timetable/' }
            ],
            recommend: [
                {
                    name: '551 호라이 만두',
                    type: '간식',
                    desc: '공항/교토역 필수 간식, 부타만(고기만두) 강추',
                    icon: '🥟',
                    menus: [{ name: '부타만(2개)', price: '380엔', desc: '육즙 가득 고기만두', photo: '🥟' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600',
                'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600'
            ]
        },

        'hotel_checkin': {
            name: '호텔 그란비아 교토 (숙소)',
            lat: 34.9858, lng: 135.7588,
            type: 'hotel',
            rating: 4.4,
            desc: '교토역 직결! 최고의 위치와 럭셔리한 시설',
            openHours: '체크인 15:00 / 체크아웃 12:00',
            tips: '💡 꿀팁: 역과 연결되어 있어 비 오는 날도 이동이 편해요. 교토 타워 뷰 객실을 요청해보세요.',
            info: [
                { label: '위치', val: 'JR 교토역 직결' },
                { label: '택시', val: '역 앞 승강장 이용 편리' },
                { label: '조식', val: '06:30~10:00 (일식/양식)' }
            ],
            links: [
                { name: '호텔 공식 홈페이지', url: 'https://www.granviakyoto.com/' }
            ],
            recommend: [
                {
                    name: '교토역 스카이웨이',
                    type: '전망',
                    desc: '역 건물 10층 공중 통로, 무료 야경 명소',
                    icon: '🌃',
                    menus: [{ name: '야경', price: '무료', desc: '교토 타워 뷰', photo: '🌃' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600'
            ]
        },

        'gion_pontocho': {
            name: '기온 거리 & 폰토초',
            lat: 35.0034, lng: 135.7710,
            type: 'tour',
            rating: 4.6,
            desc: '게이샤의 추억, 교토의 옛 정취가 흐르는 거리 🏮',
            openHours: '상점별 상이 (보통 10:00~22:00)',
            tips: '💡 꿀팁: 해 질 녘에 가면 붉은 등불이 켜져 분위기 깡패. 폰토초 좁은 골목의 이자카야에서 한잔 추천.',
            info: [
                { label: '분위기', val: '전통적, 로맨틱, 고급 요정 많음' },
                { label: '주의', val: '사유지 촬영 금지 구역 확인 필수' }
            ],
            menus: [
                { name: '교토 오반자이', price: '3,000엔~', desc: '교토 가정식 반찬 요리', photo: '🍱' },
                { name: '말차 파르페', price: '1,200엔', desc: '사료 츠지리 등 유명 카페', photo: '🍵' }
            ],
            links: [
                { name: '기온 관광 가이드', url: 'https://kyoto.travel/en/areas/gion.html' }
            ],
            recommend: [
                {
                    name: '야사카 신사',
                    type: '관광',
                    desc: '기온 거리 끝에 위치, 밤에 조명이 예쁨',
                    icon: '⛩️',
                    menus: [{ name: '입장료', price: '무료', desc: '24시간 개방', photo: '⛩️' }]
                },
                {
                    name: '카모가와 강변',
                    type: '산책',
                    desc: '강변에 앉아 맥주 한잔하기 좋은 곳',
                    icon: '🌊',
                    menus: [{ name: '맥주', price: '300엔', desc: '편의점 맥주', photo: '🍺' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
                'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=600'
            ]
        },

        // ================= [ 2일차: 교토의 상징, 청수사와 이나리 ] =================
        'kiyomizudera': {
            name: '기요미즈데라 (청수사)',
            lat: 34.9949, lng: 135.7850,
            type: 'tour',
            rating: 4.8,
            desc: '절벽 위의 사찰, 교토 여행의 필수 코스 🍁',
            openHours: '06:00~18:00 (계절별 야간 개장 있음)',
            tips: '💡 꿀팁: 아침 7시 이전에 가야 사람 없이 사진 찍을 수 있어요. 내려올 때 산넨자카/니넨자카 계단 조심하세요.',
            info: [
                { label: '입장료', val: '성인 400엔 / 초중학생 200엔' },
                { label: '소요시간', val: '약 1시간 30분' }
            ],
            menus: [
                { name: '두부 정식 (유두부)', price: '2,000엔~', desc: '오카베야 등 근처 두부 맛집', photo: '🍲' },
                { name: '멘치카츠', price: '300엔', desc: '내려오는 길 간식으로 최고', photo: '🍖' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.kiyomizudera.or.jp/' }
            ],
            recommend: [
                {
                    name: '산넨자카',
                    type: '쇼핑',
                    desc: '아기자기한 기념품 가게와 찻집이 가득',
                    icon: '🛍️',
                    menus: [{ name: '기념품', price: '다양', desc: '부채, 손수건', photo: '🎁' }]
                },
                {
                    name: '스타벅스 니넨자카',
                    type: '카페',
                    desc: '다다미방이 있는 세계 유일의 스타벅스',
                    icon: '☕',
                    menus: [{ name: '말차 라떼', price: '500엔', desc: '교토 한정', photo: '🍵' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600',
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600'
            ]
        },

        'fushimi_inari': {
            name: '후시미 이나리 신사',
            lat: 34.9671, lng: 135.7727,
            type: 'tour',
            rating: 4.7,
            desc: '천 개의 붉은 도리이 터널, 여우 신사 🦊',
            openHours: '24시간 개방',
            tips: '💡 꿀팁: 정상까지는 왕복 2시간 등산 코스입니다. 힘들면 중간 "요쓰쓰지" 전망대까지만 가도 충분히 멋져요.',
            info: [
                { label: '입장료', val: '무료' },
                { label: '소요시간', val: '1시간 30분 ~ 2시간' }
            ],
            menus: [
                { name: '이나리 스시', price: '150엔~', desc: '여우가 좋아한다는 유부초밥', photo: '🍣' },
                { name: '참새 구이', price: '600엔~', desc: '이곳의 명물... 도전?', photo: '🐦' }
            ],
            links: [
                { name: '신사 정보', url: 'http://inari.jp/' }
            ],
            recommend: [
                {
                    name: '도리이 길',
                    type: '포토존',
                    desc: '사람 없는 타이밍을 노려 인생샷 도전',
                    icon: '📸',
                    menus: [{ name: '인생샷', price: '무료', desc: '붉은 터널', photo: '📸' }]
                },
                {
                    name: '오모카루이시',
                    type: '체험',
                    desc: '돌을 들어 예상보다 가벼우면 소원 성취!',
                    icon: '🪨',
                    menus: [{ name: '소원 빌기', price: '무료', desc: '재미로 해보세요', photo: '🙏' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600',
                'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600'
            ]
        },

        // ================= [ 3일차: 아라시야마의 자연 ] =================
        'arashiyama': {
            name: '아라시야마 대나무숲',
            lat: 35.0169, lng: 135.6713,
            type: 'tour',
            rating: 4.6,
            desc: '치쿠린, 바람에 흔들리는 대나무 소리 🎋',
            openHours: '24시간',
            tips: '💡 꿀팁: 무조건 아침 일찍(9시 전) 가야 합니다. 낮에는 사람 반 대나무 반. 텐류지 북문으로 나가면 바로 연결됩니다.',
            info: [
                { label: '입장료', val: '무료 (텐류지는 유료)' },
                { label: '교통', val: '란덴 열차 타고 아라시야마역 하차' }
            ],
            menus: [
                { name: '% 아라비카 커피', price: '500엔~', desc: '응커피. 도게츠교 보며 라떼 한잔', photo: '☕' },
                { name: '유바 치즈 어묵', price: '400엔', desc: '길거리 간식으로 딱 좋음', photo: '🍢' }
            ],
            links: [
                { name: '관광 정보', url: 'https://kyoto.travel/en/areas/arashiyama.html' }
            ],
            recommend: [
                {
                    name: '텐류지',
                    type: '관광',
                    desc: '세계문화유산 정원이 정말 아름다움',
                    icon: '🏯',
                    menus: [{ name: '입장료', price: '500엔', desc: '정원 관람', photo: '🌳' }]
                },
                {
                    name: '도게츠교',
                    type: '포토존',
                    desc: '달이 건너는 다리, 배경이 그림 같음',
                    icon: 'Bridge',
                    menus: [{ name: '산책', price: '무료', desc: '강변 산책', photo: '🚶' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1505337147969-00d472216207?w=600',
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600'
            ]
        },

        'kinkakuji': {
            name: '킨카쿠지 (금각사)',
            lat: 35.0394, lng: 135.7292,
            type: 'tour',
            rating: 4.5,
            desc: '화려함의 극치, 금박으로 덮인 사찰 ✨',
            openHours: '09:00~17:00',
            tips: '💡 꿀팁: 해가 쨍할 때 가야 금빛이 번쩍번쩍해서 예뻐요. 연못에 비친 반영 사진이 포인트.',
            info: [
                { label: '입장료', val: '성인 400엔 / 초중학생 300엔' },
                { label: '소요시간', val: '약 40분' }
            ],
            menus: [
                { name: '금박 아이스크림', price: '950엔~', desc: '금박을 입힌 럭셔리 소프트 아이스크림', photo: '🍦' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.shokoku-ji.jp/kinkakuji/' }
            ],
            recommend: [
                {
                    name: '료안지',
                    type: '관광',
                    desc: '버스 10분 거리, 돌의 정원(가레산스이)이 유명',
                    icon: '🪨',
                    menus: [{ name: '입장료', price: '500엔', desc: '명상하기 좋음', photo: '🧘' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',
                'https://images.unsplash.com/photo-1576788235839-55668b577366?w=600'
            ]
        },

        // ================= [ 4일차: 교토의 부엌 & 귀국 ] =================
        'nishiki_market': {
            name: '니시키 시장',
            lat: 35.0050, lng: 135.7649,
            type: 'food',
            rating: 4.3,
            desc: '400년 역사의 교토의 부엌, 먹거리 천국 🐙',
            openHours: '10:00~18:00 (가게별 상이)',
            tips: '💡 꿀팁: "타코타마고(쭈꾸미 꼬치)"는 꼭 먹어보기! 스누피 차야 등 캐릭터 샵도 많아요.',
            info: [
                { label: '먹거리', val: '두유 도넛, 어묵, 쭈꾸미 꼬치' },
                { label: '쇼핑', val: '교토 절임 반찬, 칼, 젓가락' }
            ],
            menus: [
                { name: '타코타마고', price: '300엔~', desc: '머리에 메추리알이 들어간 쭈꾸미', photo: '🐙' },
                { name: '두유 도넛', price: '300엔(10개)', desc: '담백하고 고소한 한입 도넛', photo: '🍩' }
            ],
            links: [
                { name: '시장 정보', url: 'https://www.kyoto-nishiki.or.jp/' }
            ],
            recommend: [
                {
                    name: '다이마루 백화점',
                    type: '쇼핑',
                    desc: '시장 끝과 연결, 지하 식품관 털기 좋음',
                    icon: '🏢',
                    menus: [{ name: '식품관', price: '다양', desc: '도시락, 디저트', photo: '🍱' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1583561366116-2911477d94f2?w=600',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 교토 도착 & 기온의 밤 🏮',
            items: ['airport_in', 'hotel_checkin', 'gion_pontocho'],
            summary: '공항 도착 → 호텔 체크인 → 기온 거리 산책 → 폰토초 저녁'
        },
        2: {
            title: '2일차: 천년의 고도 산책 🍁',
            items: ['kiyomizudera', 'fushimi_inari'],
            summary: '청수사 아침 산책 → 산넨자카 쇼핑 → 후시미 이나리 신사'
        },
        3: {
            title: '3일차: 아라시야마 대나무 숲 🎋',
            items: ['arashiyama', 'kinkakuji'],
            summary: '치쿠린 대나무숲 → 텐류지 → 금각사 화려함 감상'
        },
        4: {
            title: '4일차: 니시키 시장 & 귀국 🐙',
            items: ['nishiki_market', 'airport_in'],
            summary: '니시키 시장 먹방 → 기념품 쇼핑 → 공항 이동'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initKyotoTrip() {
        try {
            console.log('⛩️ 교토 여행 가이드 시작!');
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
                        polylineOptions: { strokeColor: '#8B4513', strokeWeight: 5 }
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Kyoto Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 35.0116, lng: 135.7681 },
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
            `<button onclick="changeKyotoDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white border-amber-800 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeKyotoDay(day) {
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
        summaryDiv.className = "bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 mb-6 border-l-4 border-amber-600";
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
            if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-amber-600'; bgColor = 'bg-amber-50'; }

            const div = document.createElement('div');
            div.id = `place-item-${idx}`;
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-amber-300 mb-3";
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
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-amber-300 hover:bg-amber-50 transition">
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
        const override = localStorage.getItem(`kyoto_place_${key}`);
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
        localStorage.setItem('kyoto_place_hotel_checkin', JSON.stringify(data));
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
        const saved = localStorage.getItem('kyoto_flight_info');
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
        localStorage.setItem('kyoto_flight_info', JSON.stringify(flightInfo));
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
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: kiyomizudera, arashiyama):");
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
    window.initKyotoTrip = initKyotoTrip;
    window.changeKyotoDay = changeKyotoDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
