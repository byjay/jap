
(function () {
    // ==================== 데이터베이스 ====================
    const placesDB = {
        // ================= [ 1일차: 도쿄 도착 & 신주쿠의 밤 ] =================
        'airport_in': {
            name: '나리타/하네다 공항 (도착)',
            lat: 35.7719, lng: 140.3929, // 나리타 기준
            type: 'transport',
            rating: 4.0,
            desc: '도쿄 여행의 시작! 시내로 이동 준비',
            openHours: '24시간 운영',
            tips: '💡 꿀팁: 나리타 익스프레스(NEX) 왕복 티켓(4,070엔)이 가장 저렴해요. 하네다는 모노레일 타면 하마마츠초역까지 13분 컷! 교통카드(Suica/Pasmo)는 아이폰 지갑에 등록하면 편해요.',
            info: [
                { label: '나리타→신주쿠', val: 'NEX(80분, 4070엔/왕복) / 리무진버스(3200엔)' },
                { label: '하네다→신주쿠', val: '모노레일+JR(40분, 700엔) / 리무진버스(1300엔)' },
                { label: '택시(나리타)', val: '약 25,000엔 (90분) *비추천*' },
                { label: '택시(하네다)', val: '약 8,000엔 (40분)' }
            ],
            links: [
                { name: '나리타 공항 공식', url: 'https://www.narita-airport.jp/kr' },
                { name: '스카이라이너 예매', url: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/kr/' }
            ],
            recommend: [
                {
                    name: '공항 리무진',
                    type: '교통',
                    desc: '짐이 많다면 호텔 직행 리무진 추천',
                    icon: '🚌',
                    menus: [{ name: '리무진 티켓', price: '3,200엔', desc: '편안하게 호텔 앞까지', photo: '🚌' }]
                },
                {
                    name: '웰컴 스이카',
                    type: '교통',
                    desc: '보증금 없는 단기 여행용 교통카드',
                    icon: '💳',
                    menus: [{ name: '스이카 카드', price: '1,000엔~', desc: '충전식 교통카드', photo: '💳' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542649761-0c805c00d6b5?w=600',
                'https://images.unsplash.com/photo-1570698473651-b2de99be12f0?w=600'
            ]
        },

        'hotel_checkin': {
            name: '신주쿠 그레이서리 호텔 (숙소)',
            lat: 35.6955, lng: 139.7009,
            type: 'hotel',
            rating: 4.3,
            desc: '고질라가 보이는 그 호텔! 신주쿠 가부키초의 랜드마크',
            openHours: '체크인 14:00 / 체크아웃 11:00',
            tips: '💡 꿀팁: 가부키초 한복판이라 밤에도 밝고 안전해요(호객행위는 무시하세요). 8층 테라스에서 고질라 헤드 인증샷 필수! 1층에 세븐일레븐 있어서 야식 사기 편함.',
            info: [
                { label: '주소', val: '도쿄도 신주쿠구 가부키초 1-19-1' },
                { label: '택시', val: '신주쿠역에서 기본요금 (도보 10분)' },
                { label: '조식', val: '06:30~10:30 (1층 뷔페)' }
            ],
            links: [
                { name: '호텔 공식 홈페이지', url: 'https://gracery.com/shinjuku/' },
                { name: '아고다 예약', url: 'https://www.agoda.com/' }
            ],
            recommend: [
                {
                    name: '돈키호테',
                    type: '쇼핑',
                    desc: '바로 옆 건물, 24시간 쇼핑 가능',
                    icon: '🛍️',
                    menus: [{ name: '휴족시간', price: '500엔', desc: '여행 필수품', photo: '🦶' }]
                },
                {
                    name: '이치란 라멘',
                    type: '식당',
                    desc: '도보 3분 거리, 해장 라멘으로 딱',
                    icon: '🍜',
                    menus: [{ name: '돈코츠 라멘', price: '980엔', desc: '진한 국물', photo: '🍜' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600',
                'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600'
            ]
        },

        'shinjuku_view': {
            name: '도쿄도청 전망대',
            lat: 35.6896, lng: 139.6917,
            type: 'tour',
            rating: 4.5,
            desc: '무료로 즐기는 도쿄의 파노라마 야경 🌃',
            openHours: '09:30~23:00 (입장 마감 22:30)',
            tips: '💡 꿀팁: 남쪽 전망대와 북쪽 전망대가 있어요. 보통 북쪽이 야경 보기에 더 좋음. 날씨 맑은 날 낮에는 후지산도 보입니다.',
            info: [
                { label: '입장료', val: '무료' },
                { label: '휴무일', val: '남쪽: 첫/셋째 화, 북쪽: 둘째/넷째 월' },
                { label: '높이', val: '202m (45층)' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.yokoso.metro.tokyo.lg.jp/en/tenbou/' }
            ],
            recommend: [
                {
                    name: '도청 피아노',
                    type: '볼거리',
                    desc: '쿠사마 야요이 디자인 피아노 버스킹',
                    icon: '🎹',
                    menus: [{ name: '버스킹 관람', price: '무료', desc: '자유롭게 연주 가능', photo: '🎹' }]
                },
                {
                    name: '신주쿠 중앙공원',
                    type: '산책',
                    desc: '전망대 보고 내려와서 산책하기 좋음',
                    icon: '🌳',
                    menus: [{ name: '산책', price: '무료', desc: '도심 속 휴식', photo: '🌳' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600',
                'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600'
            ]
        },

        'dinner_omoide': {
            name: '오모이데 요코초',
            lat: 35.6929, lng: 139.6995,
            type: 'food',
            rating: 4.4,
            desc: '신주쿠 꼬치 골목, 레트로 감성 폭발 🍢',
            openHours: '17:00~24:00 (가게별 상이)',
            priceRange: '2,000~4,000엔',
            tips: '💡 꿀팁: 대부분 현금만 받으니 현금 필수! "오토오시(자릿세)"가 300~500엔 정도 붙습니다. 화장실이 공용이라 미리 다녀오세요.',
            info: [
                { label: '분위기', val: '시끌벅적, 좁음, 쇼와시대 감성' },
                { label: '화장실', val: '골목 중간 공용 화장실 이용 (불편함)' }
            ],
            menus: [
                { name: '모듬 꼬치 (5종)', price: '850엔~', desc: '닭껍질, 파닭, 염통 등 인기 부위', photo: '🍢' },
                { name: '모츠니코미', price: '500엔', desc: '일본식 곱창 조림, 술안주로 최고', photo: '🥘' },
                { name: '하이볼', price: '500엔~', desc: '퇴근길 직장인들의 소울 드링크', photo: '🍺' }
            ],
            links: [
                { name: '골목 정보', url: 'http://shinjuku-omoide.com/' }
            ],
            recommend: [
                {
                    name: '기후야',
                    type: '식당',
                    desc: '중화요리 안주가 맛있는 가성비 맛집',
                    icon: '🥟',
                    menus: [{ name: '야키교자', price: '400엔', desc: '바삭한 군만두', photo: '🥟' }]
                },
                {
                    name: '알바트로스',
                    type: '바',
                    desc: '샹들리에가 있는 좁고 힙한 바',
                    icon: '🍸',
                    menus: [{ name: '칵테일', price: '1,000엔~', desc: '분위기 좋은 한잔', photo: '🍸' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600',
                'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600'
            ]
        },

        // ================= [ 2일차: 전통과 현대의 조화 ] =================
        'asakusa': {
            name: '아사쿠사 센소지',
            lat: 35.7147, lng: 139.7966,
            type: 'tour',
            rating: 4.7,
            desc: '도쿄에서 가장 오래된 절, 거대한 붉은 제등 🏮',
            openHours: '06:00~17:00 (본당), 상점가는 10시부터',
            tips: '💡 꿀팁: 나카미세 도리에서 "걸으면서 먹기"는 금지! 가게 옆 지정 장소에서 드세요. 오미쿠지(운세) 뽑아서 "흉" 나오면 묶어두고 오기.',
            info: [
                { label: '입장료', val: '무료' },
                { label: '오미쿠지', val: '100엔 (운세 뽑기)' }
            ],
            menus: [
                { name: '아사쿠사 멘치카츠', price: '350엔', desc: '육즙 팡팡 터지는 튀김 고기 만두', photo: '🍖' },
                { name: '실크 푸딩', price: '530엔~', desc: '입에서 녹는 부드러움', photo: '🍮' },
                { name: '메론빵', price: '250엔', desc: '화월당 점보 메론빵, 겉바속촉', photo: '🍞' }
            ],
            links: [
                { name: '센소지 공식', url: 'https://www.senso-ji.jp/' }
            ],
            recommend: [
                {
                    name: '카미나리몬',
                    type: '포토존',
                    desc: '입구의 거대한 제등 앞, 사람 많음 주의',
                    icon: '📸',
                    menus: [{ name: '인증샷', price: '무료', desc: '도쿄 필수 코스', photo: '📸' }]
                },
                {
                    name: '아사쿠사 문화관광센터',
                    type: '전망',
                    desc: '8층 무료 전망대에서 센소지가 한눈에 보임',
                    icon: '👀',
                    menus: [{ name: '전망대', price: '무료', desc: '스카이트리도 보임', photo: '👀' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1565058782068-15024b335685?w=600',
                'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?w=600'
            ]
        },

        'skytree': {
            name: '도쿄 스카이트리',
            lat: 35.7100, lng: 139.8107,
            type: 'tour',
            rating: 4.6,
            desc: '일본에서 가장 높은 전파탑(634m), 압도적 뷰 🗼',
            openHours: '10:00~21:00 (마지막 입장 20:00)',
            tips: '💡 꿀팁: 아사쿠사에서 "스미다 리버 워크" 걸어서 20분이면 도착. 해 질 녘(일몰 30분 전)에 가서 야경까지 보고 오세요.',
            info: [
                { label: '입장료', val: '평일 2,100엔~ / 주말 2,300엔~' },
                { label: '높이', val: '350m(덴보데크) / 450m(덴보회랑)' }
            ],
            links: [
                { name: '예약하기', url: 'https://www.tokyo-skytree.jp/kr/' }
            ],
            recommend: [
                {
                    name: '소라마치',
                    type: '쇼핑',
                    desc: '포켓몬센터, 지브리샵 등 캐릭터 천국',
                    icon: '🛍️',
                    menus: [{ name: '캐릭터 굿즈', price: '다양', desc: '선물용으로 좋음', photo: '🎁' }]
                },
                {
                    name: '스미다 수족관',
                    type: '관광',
                    desc: '타워 5-6층, 펭귄과 해파리가 유명',
                    icon: '🐠',
                    menus: [{ name: '입장권', price: '2,300엔', desc: '도심 속 수족관', photo: '🎫' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1536768138796-12c479418521?w=600',
                'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600'
            ]
        },

        'akihabara': {
            name: '아키하바라',
            lat: 35.6983, lng: 139.7730,
            type: 'tour',
            rating: 4.5,
            desc: '애니메이션과 게임의 성지, 오타쿠의 천국 🎮',
            openHours: '상점별 상이 (보통 10:00~20:00)',
            tips: '💡 꿀팁: "라디오회관"만 가도 피규어 구경 끝! 중고 피규어 득템하려면 "만다라케"나 "스루가야" 추천.',
            info: [
                { label: '쇼핑', val: '피규어, 프라모델, 전자제품' },
                { label: '일요일', val: '13:00~18:00 차 없는 거리' }
            ],
            links: [
                { name: '아키하바라 가이드', url: 'https://akihabara-japan.com/' }
            ],
            recommend: [
                {
                    name: '라디오회관',
                    type: '쇼핑',
                    desc: '역 바로 앞, 피규어/굿즈의 모든 것',
                    icon: '🤖',
                    menus: [{ name: '피규어', price: '다양', desc: '희귀템 발굴', photo: '🤖' }]
                },
                {
                    name: '메이드 카페',
                    type: '체험',
                    desc: '모에모에 큥! 이색 체험',
                    icon: '☕',
                    menus: [{ name: '오므라이스', price: '1,500엔', desc: '케찹 그림 그려줌', photo: '🍳' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1579969399882-1e9b4647320d?w=600',
                'https://images.unsplash.com/photo-1569937756447-e19c37743071?w=600'
            ]
        },

        // ================= [ 3일차: 힙한 도쿄 즐기기 ] =================
        'shibuya_crossing': {
            name: '시부야 스크램블 교차로',
            lat: 35.6595, lng: 139.7004,
            type: 'tour',
            rating: 4.8,
            desc: '도쿄의 상징! 한 번에 3천 명이 건너는 장관 🚦',
            openHours: '24시간',
            tips: '💡 꿀팁: 스타벅스 츠타야점 2층 창가 자리는 경쟁 치열! "마그넷 바이 시부야 109" 옥상 전망대(유료)도 사진 잘 나옴.',
            info: [
                { label: '포토존', val: '시부야 스카이, 츠타야 스타벅스' },
                { label: '쇼핑', val: '메가 돈키호테, 파르코 백화점' }
            ],
            links: [
                { name: '시부야 스카이 예약', url: 'https://www.shibuya-scramble-square.com/sky/' }
            ],
            recommend: [
                {
                    name: '시부야 스카이',
                    type: '전망대',
                    desc: '요즘 가장 핫한 루프탑 전망대. 예약 필수!',
                    icon: '🏙️',
                    menus: [{ name: '입장권', price: '2,000엔', desc: '도쿄 최고의 뷰', photo: '🎫' }]
                },
                {
                    name: '미야시타 파크',
                    type: '휴식',
                    desc: '옥상 공원과 1층 요코초가 힙함',
                    icon: '🛹',
                    menus: [{ name: '맥주', price: '600엔', desc: '공원에서 한잔', photo: '🍺' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600'
            ]
        },

        'harajuku': {
            name: '하라주쿠 & 오모테산도',
            lat: 35.6715, lng: 139.7030,
            type: 'tour',
            rating: 4.5,
            desc: '카와이 문화의 발상지와 명품 거리의 공존 🎀',
            openHours: '10:00~20:00',
            tips: '💡 꿀팁: 다케시타 거리에서 크레페 먹기! 오모테산도 힐즈 뒤쪽 "캣스트리트"는 힙한 편집샵과 카페가 많아요.',
            info: [
                { label: '먹거리', val: '마리온 크레페, 자쿠자쿠 슈크림' },
                { label: '쇼핑', val: '빈티지 의류, 키디랜드, 명품 브랜드' }
            ],
            menus: [
                { name: '딸기 치즈케이크 크레페', price: '650엔', desc: '달콤 상큼한 하라주쿠의 맛', photo: '🍓' },
                { name: '자쿠자쿠 슈크림', price: '250엔', desc: '겉은 바삭 속은 촉촉한 스틱 슈', photo: '🥖' }
            ],
            links: [
                { name: '오모테산도 힐즈', url: 'https://www.omotesandohills.com/' }
            ],
            recommend: [
                {
                    name: '키디랜드',
                    type: '쇼핑',
                    desc: '스누피, 치이카와 등 캐릭터 굿즈 총집합',
                    icon: '🧸',
                    menus: [{ name: '인형', price: '2,000엔~', desc: '귀여운 인형들', photo: '🧸' }]
                },
                {
                    name: '메이지 신궁',
                    type: '산책',
                    desc: '도심 속 울창한 숲, 산책하기 좋음',
                    icon: '⛩️',
                    menus: [{ name: '입장료', price: '무료', desc: '힐링 산책', photo: '🌲' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1525010660686-2775f564778b?w=600',
                'https://images.unsplash.com/photo-1583921820466-9f66b6c07577?w=600'
            ]
        },

        'dinner_sushi': {
            name: '미도리 스시 (시부야점)',
            lat: 35.6580, lng: 139.6980,
            type: 'food',
            rating: 4.6,
            desc: '가성비 최고의 스시! 웨이팅 필수 맛집 🍣',
            openHours: '11:00~21:00 (브레이크타임 15:00~17:00)',
            priceRange: '2,000~4,000엔',
            tips: '💡 꿀팁: 마크시티 4층. 번호표 뽑고 쇼핑하다 오세요(QR로 순서 확인 가능). "초특선 니기리" 세트가 가성비 최고.',
            info: [
                { label: '대기', val: '기본 1시간 이상 (오픈런 추천)' },
                { label: '포장', val: '포장은 대기 없이 바로 가능' }
            ],
            menus: [
                { name: '초특선 니기리', price: '3,630엔', desc: '우니, 연어알, 장어, 대게 등 고급 재료', photo: '🍣' },
                { name: '카니미소 샐러드', price: '880엔', desc: '게 내장 샐러드, 고소함 끝판왕', photo: '🥗' }
            ],
            links: [
                { name: '공식 홈페이지', url: 'https://www.sushinomidori.co.jp/' }
            ],
            recommend: [
                {
                    name: '시부야 요코초',
                    type: '술집',
                    desc: '미야시타 파크 1층, 전국 맛집 모음',
                    icon: '🍻',
                    menus: [{ name: '하이볼', price: '500엔', desc: '다양한 안주와 함께', photo: '🍺' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600',
                'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600'
            ]
        },

        'tsukiji': {
            name: '츠키지 장외시장',
            lat: 35.6655, lng: 139.7707,
            type: 'food',
            rating: 4.4,
            desc: '도쿄의 부엌! 신선한 해산물 먹방 투어 🐟',
            openHours: '05:00~14:00 (가게별 상이)',
            tips: '💡 꿀팁: 아침 일찍 가야 해요(10시 전). "키츠네야" 호르몬동(곱창덮밥)은 줄이 기니까 오픈런!',
            info: [
                { label: '추천', val: '스시잔마이, 호르몬동, 계란말이, 딸기모찌' },
                { label: '주의', val: '길에서 먹지 말고 가게 앞 지정 장소 이용' }
            ],
            menus: [
                { name: '호르몬동', price: '850엔', desc: '진한 된장 소스 곱창 덮밥', photo: '🍲' },
                { name: '계란말이', price: '100엔', desc: '달달하고 폭신한 계란말이 꼬치', photo: '🥚' },
                { name: '우니동', price: '4,000엔~', desc: '성게알 가득 덮밥', photo: '🍚' }
            ],
            links: [
                { name: '시장 가이드', url: 'https://www.tsukiji.or.jp/' }
            ],
            recommend: [
                {
                    name: '긴자',
                    type: '쇼핑',
                    desc: '도보 15분 거리, 주말엔 차 없는 거리',
                    icon: '💎',
                    menus: [{ name: '명품 쇼핑', price: '다양', desc: '백화점 천국', photo: '🛍️' }]
                },
                {
                    name: '긴자식스',
                    type: '쇼핑',
                    desc: '옥상 정원에서 긴자 시내 조망 가능',
                    icon: '🏢',
                    menus: [{ name: '옥상 정원', price: '무료', desc: '도심 속 휴식', photo: '🌳' }]
                }
            ],
            photos: [
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=600',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600'
            ]
        }
    };

    // 일정표
    const schedule = {
        1: {
            title: '1일차: 도쿄 도착 & 신주쿠의 밤 🌃',
            items: ['airport_in', 'hotel_checkin', 'shinjuku_view', 'dinner_omoide'],
            summary: '공항 도착 → 호텔 체크인 → 도청 야경 → 꼬치 골목'
        },
        2: {
            title: '2일차: 전통과 현대의 조화 🗼',
            items: ['asakusa', 'skytree', 'akihabara'],
            summary: '센소지 산책 → 스카이트리 전망 → 아키하바라 덕질'
        },
        3: {
            title: '3일차: 힙한 도쿄 즐기기 🚦',
            items: ['shibuya_crossing', 'harajuku', 'dinner_sushi'],
            summary: '스크램블 교차로 → 하라주쿠 쇼핑 → 스시 맛집'
        },
        4: {
            title: '4일차: 츠키지 먹방 & 귀국 🐟',
            items: ['tsukiji', 'airport_in'],
            summary: '츠키지 시장 아침 식사 → 공항 이동 → 귀국'
        }
    };

    let activeDay = 1;
    let map, markers = [];
    let directionsService, directionsRenderer;

    // ==================== 초기화 ====================
    function initTokyoTrip() {
        try {
            console.log('🗼 도쿄 여행 가이드 시작!');
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
                        polylineOptions: { strokeColor: '#FF4500', strokeWeight: 5 }
                    });
                } catch (mapErr) {
                    console.warn('Google Maps Init Failed:', mapErr);
                }
            } else {
                const mapEl = document.getElementById('map');
                if (mapEl) mapEl.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">지도 로딩 중...</div>';
            }
        } catch (error) {
            console.error('Tokyo Module Init Error:', error);
        }
    }

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        map = new google.maps.Map(mapElement, {
            center: { lat: 35.6895, lng: 139.6917 },
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
            `<button onclick="changeTokyoDay(${day})" 
                    class="day-tab flex-shrink-0 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all duration-300 whitespace-nowrap ${day == activeDay
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-600 shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }">
                ${day}일차
            </button>`
        ).join('');
    }

    function changeTokyoDay(day) {
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
        summaryDiv.className = "bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 mb-6 border-l-4 border-orange-500";
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
            div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-300 mb-3";
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
                             class="flex-none w-32 bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition">
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
        const override = localStorage.getItem(`tokyo_place_${key}`);
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
        localStorage.setItem('tokyo_place_hotel_checkin', JSON.stringify(data));
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
        const saved = localStorage.getItem('tokyo_flight_info');
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
        localStorage.setItem('tokyo_flight_info', JSON.stringify(flightInfo));
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
            const key = prompt("추가할 장소 키(key)를 입력하세요 (예: asakusa, shibuya_crossing):");
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
    window.initTokyoTrip = initTokyoTrip;
    window.changeTokyoDay = changeTokyoDay;
    window.toggleDetail = toggleDetail;
    window.editFlightInfo = editFlightInfo;
    window.toggleHotelSearch = toggleHotelSearch;
    window.editItinerary = editItinerary;

})();
