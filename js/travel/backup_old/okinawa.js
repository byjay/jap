
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 오키나와 도착 & 국제거리 ] =================
        'airport_in': {
            name: '나하 공항 (도착)',
            lat: 26.2048, lng: 127.6458,
            type: 'transport',
            rating: 4.2,
            desc: '동양의 하와이, 오키나와 여행의 시작 🌴',
            openHours: '국제선 07:00~22:00',
            tips: '💡 꿀팁: 렌트카 수령은 공항 밖 셔틀 타고 이동해야 해서 시간 넉넉히 잡으세요(1시간 이상). 모노레일(유이레일) 타면 시내까지 15분.',
            info: [
                { label: '유이레일', val: '시내까지 15분, 270~300엔' },
                { label: '리무진버스', val: '호텔 직행 (리조트행)' },
                { label: '택시', val: '나하 시내 약 1,500엔 (20분)' }
            ],
            links: [
                { name: '유이레일 정보', url: 'https://www.yui-rail.co.jp/kr/' }
            ],
            recommend: [
                {
                    name: '블루씰 아이스크림',
                    type: '간식',
                    desc: '오키나와 필수, 자색고구마맛 추천',
                    icon: '🍦',
                    menus: [{ name: '자색고구마', price: '350엔', desc: '베스트셀러', photo: '🍠' }]
                },
                {
                    name: '수족관 티켓',
                    type: '티켓',
                    desc: '공항 관광안내소에서 츄라우미 할인 티켓 구매 가능',
                    icon: '🎫',
                    menus: [{ name: '할인티켓', price: '1,850엔', desc: '정가보다 저렴', photo: '🎫' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600',
                'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600'
            ]
        },

        'hotel_checkin': {
            name: '하얏트 리젠시 나하 (숙소)',
            lat: 26.2144, lng: 127.6867,
            type: 'hotel',
            rating: 4.6,
            desc: '국제거리 도보 3분, 럭셔리한 시티 호텔',
            openHours: '체크인 15:00 / 체크아웃 11:00',
            tips: '💡 꿀팁: 국제거리와 가까우면서도 살짝 안쪽이라 조용해요. 야외 수영장(3층)은 작지만 분위기 굿.',
            info: [
                { label: '위치', val: '마키시역 도보 7분' },
                { label: '주차', val: '타워 주차장 (1박 1,500엔)' },
                { label: '조식', val: '사쿠라자카 (뷔페 맛집)' }
            ],
            links: [
                { name: '호텔 공식 홈페이지', url: 'https://www.hyatt.com/' }
            ],
            recommend: [
                {
                    name: '츠보야 야치문 거리',
                    type: '산책',
                    desc: '도보 5분, 도자기 공방 거리',
                    icon: '🏺',
                    menus: [{ name: '도자기', price: '다양', desc: '기념품', photo: '🏺' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600'
            ]
        },

        'kokusai_dori': {
            name: '국제거리 (고쿠사이 도리)',
            lat: 26.2150, lng: 127.6850,
            type: 'tour',
            rating: 4.3,
            desc: '나하의 메인 스트리트, 쇼핑과 맛집의 천국 🛍️',
            openHours: '상점별 상이 (보통 22:00까지)',
            tips: '💡 꿀팁: 일요일 낮(12:00~18:00)은 "보행자 천국"이라 차가 안 다녀요. 포장마차 거리(야타이무라)에서 한잔 추천.',
            info: [
                { label: '쇼핑', val: '자색고구마 타르트, 시사 인형' },
                { label: '맛집', val: '스테이크 88, 샘스 스테이크' }
            ],
            menus: [
                { name: '철판 스테이크', price: '2,500엔~', desc: '미국 문화 영향으로 스테이크가 저렴', photo: '🥩' },
                { name: '타코라이스', price: '800엔', desc: '오키나와 소울푸드', photo: '🍛' },
                { name: '오리온 맥주', price: '500엔', desc: '오키나와 로컬 맥주', photo: '🍺' }
            ],
            links: [
                { name: '국제거리 가이드', url: 'https://naha-kokusaidori.okinawa/' }
            ],
            recommend: [
                {
                    name: '야타이무라',
                    type: '술집',
                    desc: '20여 개 포장마차가 모인 핫플레이스',
                    icon: '🏮',
                    menus: [{ name: '오뎅', price: '500엔', desc: '일본식 오뎅', photo: '🍢' }]
                },
                {
                    name: '마키시 공설시장',
                    type: '시장',
                    desc: '알록달록한 생선 구경, 회 떠먹기 가능',
                    icon: '🐟',
                    menus: [{ name: '회', price: '1,000엔~', desc: '신선한 회', photo: '🍣' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1589463349208-95817c97fdb6?w=600',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600'
            ]
        },

        // ================= [ 2일차: 북부 투어 & 츄라우미 ] =================
        'churaumi': {
            name: '츄라우미 수족관',
            lat: 26.6943, lng: 127.8779,
            type: 'tour',
            rating: 4.8,
            desc: '세계 최대급 수조, 고래상어의 유영 🐋',
            openHours: '08:30~18:30 (성수기 20:00)',
            tips: '💡 꿀팁: 오후 4시 이후 입장하면 티켓이 저렴해져요(4시 티켓). 고래상어 먹이주기 쇼(15:00 / 17:00) 시간 체크 필수.',
            info: [
                { label: '입장료', val: '성인 2,180엔 (4시 이후 1,510엔)' },
                { label: '돌고래쇼', val: '무료 (오키짱 극장)' }
            ],
            menus: [
                { name: '오션블루 카페', price: '600엔~', desc: '수조 바로 옆 지정석은 예약/대기 필수', photo: '☕' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://churaumi.okinawa/kr/' }
            ],
            recommend: [
                {
                    name: '비세 후쿠기 가로수길',
                    type: '산책',
                    desc: '차로 5분, 자전거 타고 힐링하기 좋음',
                    icon: '🚲',
                    menus: [{ name: '자전거 대여', price: '500엔', desc: '1시간', photo: '🚲' }]
                },
                {
                    name: '에메랄드 비치',
                    type: '해변',
                    desc: '수족관 바로 앞, 물색깔 예술',
                    icon: '🏖️',
                    menus: [{ name: '수영', price: '무료', desc: '여름 시즌', photo: '🏊' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1585672660340-966e33004946?w=600',
                'https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=600'
            ]
        },

        'manzamo': {
            name: '만좌모',
            lat: 26.5049, lng: 127.8502,
            type: 'tour',
            rating: 4.4,
            desc: '만 명이 앉을 수 있는 들판, 코끼리 바위 🐘',
            openHours: '08:00~19:00',
            tips: '💡 꿀팁: "괜찮아 사랑이야" 촬영지. 바람이 엄청 많이 부니까 모자 조심하세요. 해 질 녘 노을이 정말 아름답습니다.',
            info: [
                { label: '입장료', val: '100엔 (시설 관리비)' },
                { label: '주차', val: '무료 (넓음)' }
            ],
            menus: [
                { name: '사타안다기', price: '100엔', desc: '오키나와식 튀김 도넛', photo: '🍩' }
            ],
            links: [
                { name: '관광 정보', url: 'https://www.vill.onna.okinawa.jp/' }
            ],
            recommend: [
                {
                    name: '나카무라 소바',
                    type: '식당',
                    desc: '차로 5분, 아사(해조류) 소바 맛집',
                    icon: '🍜',
                    menus: [{ name: '아사 소바', price: '800엔', desc: '바다향 가득', photo: '🍜' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=600',
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600'
            ]
        },

        // ================= [ 3일차: 중부 아메리칸 빌리지 ] =================
        'american_village': {
            name: '아메리칸 빌리지',
            lat: 26.3165, lng: 127.7577,
            type: 'tour',
            rating: 4.6,
            desc: '미국 서부 느낌 물씬, 관람차와 선셋 비치 🎡',
            openHours: '10:00~22:00',
            tips: '💡 꿀팁: 낮보다 밤이 훨씬 예뻐요. "선셋 비치"에서 노을 보고 야경 구경하세요. 포켓몬 벽화가 곳곳에 숨어있으니 찾아보세요.',
            info: [
                { label: '주차', val: '무료 (공영 주차장 이용)' },
                { label: '분위기', val: '이국적, 힙함, 사진 맛집' }
            ],
            menus: [
                { name: '포크타마고 오니기리', price: '350엔~', desc: '스팸+계란 주먹밥', photo: '🍙' },
                { name: 'A&W 버거', price: '800엔~', desc: '미국맛 햄버거, 루트비어 도전?', photo: '🍔' },
                { name: '타코스', price: '700엔', desc: '키지무나 타코라이스 추천', photo: '🌮' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.okinawa-americanvillage.com/' }
            ],
            recommend: [
                {
                    name: '이온몰 라이카무',
                    type: '쇼핑',
                    desc: '차로 10분, 오키나와 최대 쇼핑몰',
                    icon: '🏢',
                    menus: [{ name: '쇼핑', price: '다양', desc: '수족관 있음', photo: '🐠' }]
                },
                {
                    name: '선셋 비치',
                    type: '해변',
                    desc: '빌리지 바로 앞, 일몰 명소',
                    icon: '🌅',
                    menus: [{ name: '일몰', price: '무료', desc: '인생샷', photo: '🌅' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1599577742099-0b73461461a6?w=600',
                'https://images.unsplash.com/photo-1570649237648-512c58902521?w=600'
            ]
        },

        // ================= [ 4일차: 남부 감성 & 귀국 ] =================
        'umikaji_terrace': {
            name: '우미카지 테라스',
            lat: 26.1754, lng: 127.6445,
            type: 'tour',
            rating: 4.5,
            desc: '오키나와의 산토리니, 하얀 건물과 바다 🌊',
            openHours: '10:00~21:00',
            tips: '💡 꿀팁: 공항이랑 엄청 가까워요(차로 15분). 마지막 날 공항 가기 전에 들르기 딱 좋음. 비행기 이착륙하는 게 머리 위로 보여서 사진 찍기 좋아요.',
            info: [
                { label: '주차', val: '무료 (자리 부족할 수 있음)' },
                { label: '셔틀', val: '아카미네역에서 무료 셔틀 운행' }
            ],
            menus: [
                { name: '시아와세 팬케이크', price: '1,100엔~', desc: '폭신폭신 수플레 팬케이크, 예약 필수', photo: '🥞' },
                { name: '망고 빙수', price: '1,000엔', desc: '더위 식히기에 최고', photo: '🥭' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.umikajiterrace.com/' }
            ],
            recommend: [
                {
                    name: '세나가섬 온천',
                    type: '온천',
                    desc: '호텔 내 온천, 바다 보며 노천탕 가능',
                    icon: '♨️',
                    menus: [{ name: '입욕료', price: '1,500엔', desc: '수건 포함', photo: '♨️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1621847466023-40c354031175?w=600',
                'https://images.unsplash.com/photo-1596120236172-231999844c20?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 오키나와 도착 & 국제거리 🌴',
            items: ['airport_in', 'hotel_checkin', 'kokusai_dori'],
            summary: '공항 도착 → 렌트카 수령 → 국제거리 스테이크'
        },
        2: {
            title: '2일차: 츄라우미와 북부 드라이브 🐋',
            items: ['manzamo', 'churaumi'],
            summary: '만좌모 절경 → 츄라우미 수족관 → 가로수길'
        },
        3: {
            title: '3일차: 아메리칸 빌리지의 밤 🎡',
            items: ['american_village'],
            summary: '호텔 수영장 → 아메리칸 빌리지 쇼핑 & 선셋'
        },
        4: {
            title: '4일차: 우미카지 테라스 & 귀국 ✈️',
            items: ['umikaji_terrace', 'airport_in'],
            summary: '우미카지 브런치 → 렌트카 반납 → 공항 이동'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initOkinawaTrip() {
        try {
            console.log('🏖️ 오키나와 여행 가이드 시작!');
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
                        polylineOptions: { strokeColor: '#008080', strokeWeight: 5 } // 오키나와는 청록색/바다 테마
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Okinawa Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 26.2124, lng: 127.6809 }, // 나하 중심
            zoom: 11,
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
            `<button onclick="changeOkinawaDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white border-teal-600 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeOkinawaDay(day) {
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
        summaryDiv.className = "bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-4 mb-6 border-l-4 border-teal-500";
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
            if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-teal-600'; bgColor = 'bg-teal-50'; }

            const div = document.createElement('div');
            div.id = `place-item-${idx}`;
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-teal-300 mb-3";
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
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-teal-300 hover:bg-teal-50 transition">
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
        const override = localStorage.getItem(`okinawa_place_${key}`);
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
        localStorage.setItem('okinawa_place_hotel_checkin', JSON.stringify(data));
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
        const saved = localStorage.getItem('okinawa_flight_info');
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
        localStorage.setItem('okinawa_flight_info', JSON.stringify(flightInfo));
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
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: churaumi, american_village):");
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
    window.initOkinawaTrip = initOkinawaTrip;
    window.changeOkinawaDay = changeOkinawaDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
