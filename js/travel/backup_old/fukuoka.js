
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 도착 & 하카타 탐방 ] =================
        'airport_in': {
            name: '후쿠오카 공항 (도착)',
            lat: 33.5859, lng: 130.4507,
            type: 'transport',
            rating: 4.2,
            desc: '세계에서 시내 접근성이 가장 좋은 공항. 지하철로 5분이면 하카타역!',
            openHours: '24시간 운영 (국제선)',
            tips: '💡 꿀팁: 공항 2층 면세점에서 로이즈 초콜릿 미리 사두면 귀국 때 편해요! 지하철 타려면 무료 셔틀로 국내선 이동 필수.',
            info: [
                { label: '지하철', val: '하카타역까지 5분 (260엔)' },
                { label: '택시', val: '하카타역까지 약 15분 (약 1,500엔)' },
                { label: '버스', val: '하카타역 직행 버스 (270엔)' },
                { label: 'WiFi', val: 'Fukuoka City Wi-Fi 무료 (30분)' }
            ],
            links: [
                { name: '공항 공식 홈페이지', url: 'https://www.fukuoka-airport.jp/korea/' },
                { name: '지하철 노선도', url: 'https://subway.city.fukuoka.lg.jp/kor/index.html' }
            ],
            recommend: [
                {
                    name: '후쿠오카 공항 면세점',
                    type: '쇼핑',
                    desc: '귀국 전 마지막 쇼핑 찬스! 히요코, 멘타이코 필수',
                    icon: '🛍️',
                    menus: [
                        { name: '로이즈 초콜릿', price: '800엔', desc: '입에서 녹는 생초콜릿', photo: '🍫' },
                        { name: '히요코 만쥬', price: '1,000엔', desc: '귀여운 병아리 모양 빵', photo: '🐣' }
                    ],
                    photos: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600']
                },
                {
                    name: '공항 라멘 활주로',
                    type: '식당',
                    desc: '이치란 공항점 - 탑승 전 마지막 라멘',
                    icon: '🍜',
                    menus: [
                        { name: '이치란 라멘', price: '980엔', desc: '돈코츠 라멘의 정석', photo: '🍜' }
                    ],
                    photos: ['https://images.unsplash.com/photo-1552611052-33e04de081de?w=600']
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=600',
                'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
                'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600'
            ]
        },

        'hotel_checkin': {
            name: '몬탄 하카타 (숙소)',
            lat: 33.5878, lng: 130.4285,
            type: 'hotel',
            rating: 4.5,
            desc: '가족 여행객 최애 호텔! 넓고 깨끗한 객실, 하카타역 도보 8분',
            openHours: '체크인 15:00 / 체크아웃 11:00',
            tips: '💡 꿀팁: 1층 라운지 무료 커피 24시간! 체크인 전/후 짐 보관 무료. 세탁기(200엔) 완비.',
            info: [
                { label: '주소', val: '후쿠오카시 하카타구 하카타역 마에 2-18-1' },
                { label: '택시', val: '공항에서 약 15분 (약 1,600엔)' },
                { label: '조식', val: '07:00~09:30 (일식/양식 뷔페)' },
                { label: '편의시설', val: '무료 WiFi, 냉장고, 전자레인지, 세탁실' }
            ],
            links: [
                { name: '호텔 예약 (Booking.com)', url: 'https://www.booking.com/hotel/jp/montan-hakata.html' },
                { name: '호텔 예약 (Agoda)', url: 'https://www.agoda.com/ko-kr/' }
            ],
            recommend: [
                {
                    name: '로손 하카타역앞점',
                    type: '편의점',
                    desc: '호텔에서 도보 1분, 24시간 영업',
                    icon: '🏪',
                    menus: [
                        { name: '모찌롤', price: '350엔', desc: '쫀득한 식감의 롤케이크', photo: '🍰' },
                        { name: '가라아게군', price: '220엔', desc: '한입 치킨, 레드맛 추천', photo: '🍗' }
                    ]
                },
                {
                    name: '코메다 커피',
                    type: '카페',
                    desc: '아침 모닝세트 맛집 (07:00~)',
                    icon: '☕',
                    menus: [
                        { name: '모닝 세트', price: '음료값', desc: '음료 시키면 토스트 무료', photo: '🍞' }
                    ]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600',
                'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600'
            ]
        },

        'lunch_hakata': {
            name: '하카타 우동 하가쿠레',
            lat: 33.5855, lng: 130.4250,
            type: 'food',
            rating: 4.6,
            desc: '백종원도 극찬한 부들부들 우동 맛집! 현금만 가능',
            openHours: '10:00~21:00 (브레이크타임 15:30~17:00)',
            priceRange: '500~800엔',
            tips: '💡 꿀팁: 11:30 오픈런 추천! 피크타임엔 1시간 대기. 현금만 받으니 미리 준비하세요. 우엉튀김(고보텐) 꼭 추가!',
            info: [
                { label: '위치', val: '하카타역 지하 고메 스트리트 (B1층)' },
                { label: '결제', val: '현금만 가능 (자판기 주문)' },
                { label: '대기', val: '평일 30분, 주말 1시간 (회전율 빠름)' }
            ],
            menus: [
                { name: '니쿠 우동 (고기 우동)', price: '650엔', desc: '달달한 소고기 육수가 예술! 면발이 쫄깃함의 끝판왕', photo: '🍜' },
                { name: '고보텐 (우엉튀김)', price: '100엔', desc: '바삭고소! 우동에 넣어 먹으면 국물이 더 진해짐', photo: '🍤' },
                { name: '유부초밥', price: '200엔', desc: '우동 국물에 찍어먹는 꿀조합', photo: '🍣' },
                { name: '마루텐 (어묵튀김)', price: '120엔', desc: '현지인 필수템, 부드러움', photo: '🍢' }
            ],
            links: [
                { name: '구글맵으로 보기', url: 'https://maps.app.goo.gl/hakata-hagakure' }
            ],
            recommend: [
                {
                    name: '하카타 잇소우',
                    type: '식당',
                    desc: '돈코츠 라멘 원조! 거품 라멘으로 유명',
                    icon: '🍜',
                    menus: [
                        { name: '돈코츠 라멘', price: '800엔', desc: '진한 국물, 카푸치노 같은 거품', photo: '🍜' },
                        { name: '교자', price: '400엔', desc: '한입 크기 만두', photo: '🥟' }
                    ],
                    photos: ['https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600']
                },
                {
                    name: 'Rec Coffee',
                    type: '카페',
                    desc: '하카타역 마루이 6층 루프탑 뷰 카페',
                    icon: '☕',
                    menus: [
                        { name: '카페라떼', price: '550엔', desc: '바리스타 챔피언의 커피', photo: '☕' }
                    ],
                    photos: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600']
                }
            ],
            reviews: [
                { user: '면발요정', text: '면발이 정말 독특해요. 부들부들하면서도 쫄깃함이 살아있어요!', score: 5 },
                { user: '대기1시간도OK', text: '줄 서도 먹을 가치 있음. 고보텐 꼭 추가하세요!', score: 4.5 }
            ],
            photos: [
                'https://images.unsplash.com/photo-1618841557871-b9a1c1b8a8d4?w=600',
                'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600',
                'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600'
            ]
        },

        'canal_city': {
            name: '캐널시티 하카타',
            lat: 33.5898, lng: 130.4108,
            type: 'tour',
            rating: 4.4,
            desc: '쇼핑·엔터·맛집이 한곳에! 분수쇼는 저녁 8시가 베스트',
            openHours: '10:00~21:00 (음식점 ~23:00)',
            tips: '💡 꿀팁: 분수쇼는 B1층 선플라자 스테이지가 정면뷰! 저녁 8시 3D 매핑쇼가 가장 예쁩니다. 5층 라멘 스타디움 추천!',
            info: [
                { label: '분수쇼', val: '매시 정각/30분 (야간 조명쇼 포함)' },
                { label: '쇼핑', val: '무인양품, 유니클로, 디즈니, 프랑프랑' },
                { label: '면세', val: '5,500엔 이상 구매 시 면세 가능' }
            ],
            links: [
                { name: '캐널시티 공식 홈페이지', url: 'https://canalcity.co.jp/korea' }
            ],
            recommend: [
                {
                    name: '라멘 스타디움',
                    type: '식당',
                    desc: '5층, 전국 유명 라멘집 8곳 집결!',
                    icon: '🍜',
                    menus: [{ name: '다양한 라멘', price: '800엔~', desc: '취향대로 골라 드세요', photo: '🍜' }]
                },
                {
                    name: '긴타코',
                    type: '간식',
                    desc: '1층, 겉바속촉 타코야키',
                    icon: '🐙',
                    menus: [{ name: '타코야키(8알)', price: '580엔', desc: '기본 소스맛 추천', photo: '🐙' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
                'https://images.unsplash.com/photo-1567449303183-e3422c0b7975?w=600'
            ]
        },

        'dinner_motsu': {
            name: '모츠나베 라쿠텐치',
            lat: 33.5905, lng: 130.4200,
            type: 'food',
            rating: 4.3,
            desc: '후쿠오카 3대 명물! 부추 산더미 곱창전골 맛집',
            openHours: '17:00~23:00 (L.O. 22:00)',
            priceRange: '2,500~4,000엔',
            tips: '💡 꿀팁: 저녁 6시 이후 예약 필수! 다 먹고 짬뽕면 추가는 국룰. 국물 짜면 육수 추가 요청하세요(무료).',
            info: [
                { label: '예약', val: '전화 예약 추천 (구글 번역 사용)' },
                { label: '인원', val: '2인부터 주문 가능 (1인분 1,300엔)' }
            ],
            menus: [
                { name: '모츠나베 코스', price: '2,600엔~', desc: '곱창전골 + 두부 + 야채 + 짬뽕면', photo: '🍲' },
                { name: '스모츠', price: '세트포함', desc: '새콤달콤 곱창무침', photo: '🥗' }
            ],
            links: [
                { name: '구글맵 위치', url: 'https://maps.app.goo.gl/rakutenchi' }
            ],
            recommend: [
                {
                    name: '하카타 텐진 포장마차',
                    type: '분위기',
                    desc: '나카스 강변 포장마차 거리 (도보 10분)',
                    icon: '🏮',
                    menus: [{ name: '야키라멘', price: '900엔', desc: '볶음 라멘, 포장마차 별미', photo: '🍝' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1583325701194-48e8b847d1fa?w=600',
                'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=600'
            ]
        },

        // ================= [ 2일차: 유후인 & 벳푸 버스 투어 ] =================
        'tour_meet': {
            name: '🚩 투어 집결 - 하카타역',
            lat: 33.5902, lng: 130.4225,
            type: 'transport',
            rating: 5.0,
            desc: '[라이카 사진 촬영] 유후인·벳푸 일일 버스투어 출발!',
            openHours: '미팅 시간: 08:10 하카타역 치쿠시구치 출구',
            tips: '💡 꿀팁: 투어 바우처 필수 지참! 하카타역 치쿠시구치(筑紫口) 출구에서 가이드 미팅. 점심은 유후인에서 자유식.',
            info: [
                { label: '출발', val: '08:10 하카타역 / 08:30 텐진역' },
                { label: '투어시간', val: '약 9시간 (17:00~17:30 복귀)' },
                { label: '포함사항', val: '전문 사진작가 동행, 라이카 촬영' }
            ],
            links: [
                { name: '투어 상세정보', url: 'https://smartstore.naver.com/1gn1t3' }
            ],
            recommend: [],
            photos: [
                'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
                'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600'
            ]
        },

        'yufuin': {
            name: '유후인 - 긴린코 호수 & 상점가',
            lat: 33.2655, lng: 131.3600,
            type: 'tour',
            rating: 4.9,
            desc: '규슈의 보석! 동화 같은 온천마을과 신비로운 긴린코 호수 ✨📸',
            openHours: '자유시간 약 1시간 30분',
            tips: '💡 꿀팁: 긴린코 호수는 물안개가 신비로운 포토존! 유노츠보거리에서 금상고로케, B-speak 롤케이크 필수.',
            info: [
                { label: '관광코스', val: '긴린코 호수 → 유노츠보 상점가' },
                { label: '자유시간', val: '약 1시간 30분 (점심 포함)' }
            ],
            menus: [
                { name: '금상고로케', price: '200엔', desc: '겉바속촉 감자+고기 고로케', photo: '🥔' },
                { name: 'B-speak 롤케이크', price: '1,500엔', desc: '부드러운 생크림 롤케이크', photo: '🍰' },
                { name: '유후인 버거', price: '800엔', desc: '와규 패티 수제 버거', photo: '🍔' }
            ],
            links: [
                { name: '유후인 관광협회', url: 'https://www.yufuin.gr.jp/' }
            ],
            recommend: [
                {
                    name: '플로랄 빌리지',
                    type: '포토존',
                    desc: '해리포터 느낌 나는 유럽풍 마을',
                    icon: '🏰',
                    menus: [{ name: '동물 먹이주기', price: '100엔', desc: '염소, 토끼 먹이주기 체험', photo: '🥕' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',
                'https://images.unsplash.com/photo-1576487503401-173fea862428?w=600'
            ]
        },

        'beppu': {
            name: '벳푸 지옥온천 순례',
            lat: 33.3150, lng: 131.4750,
            type: 'tour',
            rating: 4.8,
            desc: '세계적 온천 도시 벳푸! 7가지 색다른 지옥온천 체험 🔥♨️',
            openHours: '투어 시간 약 1시간~1시간 30분',
            tips: '💡 꿀팁: 바다지옥(우미지고쿠)의 코발트블루 온천수가 압권! 온천 달걀은 꼭 먹어보세요.',
            info: [
                { label: '관람지옥', val: '바다지옥, 가마도지옥 등' },
                { label: '체험', val: '족욕, 온천 달걀 시식, 지옥 푸딩' }
            ],
            menus: [
                { name: '온천 달걀', price: '80엔', desc: '지옥 온천수로 삶은 명물 달걀', photo: '🥚' },
                { name: '지옥 푸딩', price: '350엔', desc: '온천 증기로 찐 부드러운 푸딩', photo: '🍮' },
                { name: '라무네', price: '200엔', desc: '구슬 사이다, 온천 후 필수', photo: '🥤' }
            ],
            links: [
                { name: '벳푸 지옥온천 공식', url: 'http://www.beppu-jigoku.com/' }
            ],
            recommend: [
                {
                    name: '가마도지옥',
                    type: '먹거리',
                    desc: '온천 달걀, 지옥 푸딩 판매. 족욕장도 있어요',
                    icon: '🍮',
                    menus: [{ name: '족욕', price: '무료', desc: '수건 챙겨가세요', photo: '♨️' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600',
                'https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=600'
            ]
        },

        // ================= [ 3일차: 후쿠오카 시내 투어 ] =================
        'ohori': {
            name: '오호리 공원',
            lat: 33.5861, lng: 130.3764,
            type: 'tour',
            rating: 4.6,
            desc: '도심 속 거대 호수 공원! 현지인 힐링 스팟 🌳',
            openHours: '24시간 개방',
            tips: '💡 꿀팁: 스타벅스 창가 자리 경쟁 치열! 오전 9시 오픈런 추천. 호수 한바퀴 산책 40분.',
            info: [
                { label: '입장료', val: '무료 (일본정원 250엔)' },
                { label: '시설', val: '오리배 대여, 자전거 대여, 카페' }
            ],
            links: [
                { name: '오호리공원 가이드', url: 'https://www.ohorikouen.jp/' }
            ],
            recommend: [
                {
                    name: '스타벅스 오호리공원점',
                    type: '카페',
                    desc: '호수 뷰 최고! 테라스 자리 강추',
                    icon: '☕',
                    menus: [{ name: '말차 프라푸치노', price: '600엔', desc: '일본 스벅 필수 메뉴', photo: '🍵' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600',
                'https://images.unsplash.com/photo-1568849676085-51415703900f?w=600'
            ]
        },

        'lunch_sushi': {
            name: '효탄 스시 (텐진 솔라리아점)',
            lat: 33.5900, lng: 130.3980,
            type: 'food',
            rating: 4.6,
            desc: '텐진 최고의 가성비 회전초밥! 신선도 미쳤다 🍣',
            openHours: '11:00~22:00 (L.O. 21:30)',
            priceRange: '380~800엔',
            tips: '💡 꿀팁: 본점보다 솔라리아점이 덜 붐벼요! 점심시간 피해 14시쯤 가면 웨이팅 없음.',
            info: [
                { label: '위치', val: '텐진 솔라리아 플라자 B2층' },
                { label: '대기', val: '점심 30분, 오후 웨이팅 거의 없음' }
            ],
            menus: [
                { name: '활고등어 초밥', price: '480엔', desc: '비리지 않고 고소함 끝판왕!', photo: '🐟' },
                { name: '오늘의 특선', price: '380엔~', desc: '그날 가장 신선한 생선', photo: '⭐' },
                { name: '구운 붕장어', price: '580엔', desc: '한 마리가 통째로! 달콤한 소스', photo: '🦎' }
            ],
            links: [
                { name: '구글맵 위치', url: 'https://maps.app.goo.gl/hyotan-sushi' }
            ],
            recommend: [
                {
                    name: 'BAKE 치즈타르트',
                    type: '디저트',
                    desc: '텐진 지하상가, 갓 구운 치즈타르트',
                    icon: '🧀',
                    menus: [{ name: '치즈타르트', price: '240엔', desc: '겉바속촉 진한 치즈맛', photo: '🧀' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600',
                'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600'
            ]
        },

        'momochi': {
            name: '모모치 해변 & 후쿠오카 타워',
            lat: 33.5932, lng: 130.3515,
            type: 'tour',
            rating: 4.5,
            desc: '인공 해변과 후쿠오카 랜드마크! 일몰이 예술 🌅',
            openHours: '타워 09:30~22:00',
            tips: '💡 꿀팁: 일몰 30분 전에 가세요! 타워 야경과 석양을 동시에 볼 수 있는 골든타임.',
            info: [
                { label: '타워 입장료', val: '성인 800엔 (여권 제시 시 640엔)' },
                { label: '일몰 시간', val: '계절별 다름 (여름 19:00, 겨울 17:30)' }
            ],
            links: [
                { name: '후쿠오카 타워 공식', url: 'https://www.fukuokatower.co.jp/kr/' }
            ],
            recommend: [
                {
                    name: '마리존 카페',
                    type: '카페',
                    desc: '해변가 테라스 카페, 바다 뷰 맛집',
                    icon: '☕',
                    menus: [{ name: '아이스 커피', price: '600엔', desc: '바다 보며 한잔', photo: '☕' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
                'https://images.unsplash.com/photo-1566024287689-4da8b58db77e?w=600'
            ]
        },

        'dinner_yakiniku': {
            name: '야키니쿠 바쿠로 (하카타점)',
            lat: 33.5920, lng: 130.4150,
            type: 'food',
            rating: 4.8,
            desc: '자체 농장 와규! 합리적 가격의 고기 천국 🥩',
            openHours: '11:30~15:00 / 17:00~22:00',
            priceRange: '3,000~6,000엔',
            tips: '💡 꿀팁: 예약 필수! 특수부위 "메가 죠"는 일찍 품절되니 입장하자마자 주문하세요.',
            info: [
                { label: '예약', val: 'Tabelog 온라인 예약 가능' },
                { label: '메뉴', val: '한국어 메뉴판 있음' }
            ],
            menus: [
                { name: '바쿠로 모듬', price: '5,800엔', desc: '다양한 부위 300g (2~3인분)', photo: '🥩' },
                { name: '특상 우설', price: '1,500엔', desc: '두툼하고 쫄깃한 식감', photo: '👅' },
                { name: '메가 죠', price: '1,800엔', desc: '하루 한정! 희귀 부위', photo: '💎' }
            ],
            links: [
                { name: '구글맵 위치', url: 'https://maps.app.goo.gl/bakuro' }
            ],
            recommend: [
                {
                    name: '니쿠이치',
                    type: '식당',
                    desc: '또 다른 야키니쿠 맛집, 한우 전문점',
                    icon: '🥩',
                    menus: [{ name: '상갈비', price: '980엔', desc: '가성비 좋은 갈비살', photo: '🥩' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1558030006-450675393462?w=600',
                'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600'
            ]
        },

        'airport_out': {
            name: '후쿠오카 공항 (귀국)',
            lat: 33.5859, lng: 130.4507,
            type: 'transport',
            rating: 4.0,
            desc: '아쉬운 이별... 다음에 또 만나요 후쿠오카! 👋',
            openHours: '국제선 24시간 운영',
            tips: '💡 꿀팁: 보안검색 후 면세점 줄 깁니다! 로이즈 초콜릿, 히요코 만쥬는 보이면 바로 사세요.',
            info: [
                { label: '체크인', val: '출발 2시간 전' },
                { label: '면세점', val: '화장품, 과자, 술, 담배 판매' }
            ],
            links: [
                { name: '공항 실시간 정보', url: 'https://www.fukuoka-airport.jp/korea/' }
            ],
            recommend: [
                {
                    name: '히요코 만쥬',
                    type: '선물',
                    desc: '병아리 모양 과자, 후쿠오카 대표 기념품',
                    icon: '🐣',
                    menus: [{ name: '히요코 9개입', price: '1,000엔', desc: '선물용으로 딱', photo: '🎁' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600',
                'https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 도착 & 하카타 먹방 투어 🍜',
            items: ['airport_in', 'hotel_checkin', 'lunch_hakata', 'canal_city', 'dinner_motsu'],
            summary: '공항 도착 → 호텔 체크인 → 하카타 우동 → 캐널시티 쇼핑 → 곱창전골'
        },
        2: {
            title: '2일차: 유후인·벳푸 버스투어 (라이카 사진 촬영) 📸',
            items: ['tour_meet', 'yufuin', 'beppu'],
            summary: '하카타역 집결 → 유후인 긴린코호수 & 상점가 → 벳푸 지옥온천 순례'
        },
        3: {
            title: '3일차: 후쿠오카 시내 관광 🏙️',
            items: ['ohori', 'lunch_sushi', 'momochi', 'dinner_yakiniku'],
            summary: '오호리공원 산책 → 회전초밥 → 모모치해변 일몰 → 야키니쿠'
        },
        4: {
            title: '4일차: 마지막 쇼핑 & 귀국 ✈️',
            items: ['hotel_checkin', 'airport_out'],
            summary: '호텔 체크아웃 → 면세점 쇼핑 → 귀국'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initFukuokaTrip() {
        try {
            console.log('🎌 후쿠오카 여행 가이드 시작!');
            renderTabs();
            renderSchedule(activeDay);
            loadFlightInfo();
            loadAccommodation();
            initHotelSearch();
            createModal(); // 모달 생성

            if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
                try {
                    initMap();
                    directionsService = new google.maps.DirectionsService();
                    directionsRenderer = new google.maps.DirectionsRenderer({
                        map: map,
                        suppressMarkers: true,
                        polylineOptions: { strokeColor: '#4285F4', strokeWeight: 5 }
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Fukuoka Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 33.5902, lng: 130.4207 },
            zoom: 13,
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
            `<button onclick="changeFukuokaDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-600 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeFukuokaDay(day) {
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
        summaryDiv.className = "bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6 border-l-4 border-blue-500";
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
            if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-green-500'; bgColor = 'bg-green-50'; }

            const div = document.createElement('div');
            div.id = `place-item-${idx}`;
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-300 mb-3";
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

        // 추천 장소 (클릭 가능하도록 수정)
            <div class="px-4 mb-4">
                <h5 class="font-bold text-gray-700 text-sm mb-2">👍 주변 추천 (클릭하여 상세 보기)</h5>
                <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    ${item.recommend.map((rec, i) => `
                        <div onclick="showPlaceDetailModal('p_${idx}_r_${i}')" 
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition">
                            <div class="text-xl mb-1">${rec.icon}</div>
                            <div class="text-xs font-bold text-gray-800 truncate">${rec.name}</div>
                            <div class="text-[10px] text-gray-500 truncate">${rec.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        // 추천 장소 데이터 저장을 위한 숨겨진 스크립트
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

    // ==================== 모달 관련 (New) ====================
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

        // 모달 내용 생성 (generateDetailHTML 재사용 불가하므로 간소화된 버전 생성)
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
        const override = localStorage.getItem(`fukuoka_place_${key}`);
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
        localStorage.setItem('fukuoka_place_hotel_checkin', JSON.stringify(data));
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
        const saved = localStorage.getItem('fukuoka_flight_info');
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
        localStorage.setItem('fukuoka_flight_info', JSON.stringify(flightInfo));
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
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: canal_city, dinner_motsu):");
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
    window.initFukuokaTrip = initFukuokaTrip;
    window.changeFukuokaDay = changeFukuokaDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
