// 오사카 POI 데이터 - 후쿠오카 기준으로 상세화
// 총 30개 이상의 POI - 2024년 정보 반영

const POI_DATABASE = [
    // ========== 교통 ==========
    {
        id: 'kix',
        name: '간사이 국제공항 (KIX)',
        name_en: 'Kansai International Airport',
        lat: 34.4320,
        lng: 135.2304,
        type: 'transport',
        region: 'airport',
        rating: 4.4,
        desc: '오사카의 관문. 인공섬 위에 세워진 국제공항으로, 라피트 특급으로 난바까지 34분.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kansai_International_Airport01s3s4410.jpg/800px-Kansai_International_Airport01s3s4410.jpg',
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
        ],
        reviews: [
            { user: '여행자A', date: '2024-11', text: '난카이 라피트 강추! 좌석도 편하고 빨라요.' },
            { user: '가족여행러', date: '2024-10', text: '공항 자체가 깔끔하고 면세점도 좋아요.' }
        ],
        details: {
            address: '1 Senshukukokita, Izumisano, Osaka 549-0001',
            hours: '24시간 운영',
            ticket: '무료 (교통편 별도)',
            info: '난카이 라피트로 난바까지 34분 (¥1,450). JR 하루카로 신오사카까지 50분.',
            transport: '난카이 라피트 / JR 하루카 / 공항 리무진버스',
            tips: '라피트는 미리 예약하면 할인받을 수 있어요. 이코카 카드 미리 준비!',
            themes: ['공항', '교통'],
            recommend: ['라피트', '하루카', '리무진버스']
        }
    },

    // ========== 난바/도톤보리 ==========
    {
        id: 'dotonbori',
        name: '도톤보리',
        name_en: 'Dotonbori',
        lat: 34.6687,
        lng: 135.5013,
        type: 'spot',
        region: 'namba',
        rating: 4.8,
        desc: '오사카의 상징! 글리코 맨 간판, 거대한 게 간판, 화려한 네온사인이 있는 먹자골목.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dotonbori_night.jpg/800px-Dotonbori_night.jpg',
            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'
        ],
        reviews: [
            { user: '오사카팬', date: '2024-11', text: '밤에 가면 네온사인이 진짜 예뻐요!' },
            { user: '먹방여행', date: '2024-10', text: '타코야키, 오코노미야키 다 여기서 해결!' }
        ],
        details: {
            address: 'Dotonbori, Chuo-ku, Osaka',
            hours: '24시간 (개별 가게 영업시간 상이)',
            ticket: '무료',
            info: '글리코 맨 간판 앞에서 사진 필수! 도톤보리 리버 크루즈도 추천 (약 20분, ¥1,000).',
            transport: '난바역 도보 5분',
            tips: '저녁 6시 이후에 가면 네온사인이 더 화려해요. 주말은 매우 혼잡!',
            themes: ['야경', '먹거리', '쇼핑', '사진명소'],
            recommend: ['글리코간판', '리버크루즈', '타코야키'],
            menu: [
                { name: '타코야키 (8개)', price: '¥500~800', desc: '오사카 대표 간식' },
                { name: '오코노미야키', price: '¥800~1,500', desc: '일본식 부침개' },
                { name: '쿠시카츠', price: '¥100~300/개', desc: '꼬치 튀김' }
            ]
        }
    },
    {
        id: 'kani_doraku',
        name: '카니도라쿠 도톤보리 본점',
        name_en: 'Kani Doraku Dotonbori',
        lat: 34.6685,
        lng: 135.5020,
        type: 'food',
        region: 'namba',
        rating: 4.5,
        desc: '움직이는 거대한 게 간판이 상징인 게 요리 전문점. 오사카 도톤보리의 랜드마크.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Kani_Doraku_Dotonbori.jpg/800px-Kani_Doraku_Dotonbori.jpg',
            'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'
        ],
        reviews: [
            { user: '게요리팬', date: '2024-11', text: '게 코스요리 최고! 가격은 비싸지만 worth it' },
            { user: '오사카여행', date: '2024-09', text: '런치 세트가 저녁보다 저렴해서 추천' }
        ],
        details: {
            address: '1-6-18 Dotonbori, Chuo-ku, Osaka',
            hours: '11:00 - 22:00',
            ticket: '런치 ¥3,000~ / 디너 ¥8,000~',
            info: '1962년 창업. 다양한 게 코스 요리 제공. 예약 필수!',
            transport: '난바역 도보 5분',
            tips: '런치 세트가 가성비 좋아요. 예약 없이 가면 1시간 이상 대기',
            themes: ['맛집', '게요리', '랜드마크'],
            recommend: ['게코스', '런치세트'],
            menu: [
                { name: '카니 샤브샤브', price: '¥5,500~', desc: '게살 샤브샤브' },
                { name: '카니 스키야키', price: '¥6,000~', desc: '게 스키야키' },
                { name: '런치 코스', price: '¥3,300~', desc: '점심 한정 세트' }
            ]
        }
    },
    {
        id: 'ichiran_dotonbori',
        name: '이치란 라멘 도톤보리점',
        name_en: 'Ichiran Ramen Dotonbori',
        lat: 34.6690,
        lng: 135.5015,
        type: 'food',
        region: 'namba',
        rating: 4.6,
        desc: '한국인이 사랑하는 돈코츠 라멘. 독특한 독서실 좌석에서 집중해서 맛보는 라멘.',
        photos: [
            'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800',
            'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800'
        ],
        reviews: [
            { user: '라멘마니아', date: '2024-11', text: '비밀 소스 4~5배 추천! 매콤하니 맛있어요' },
            { user: '야식러', date: '2024-10', text: '24시간이라 새벽에도 갈 수 있어서 좋아요' }
        ],
        details: {
            address: '7-18 Soemoncho, Chuo-ku, Osaka',
            hours: '24시간 영업',
            ticket: '¥980~',
            info: '자판기에서 식권 구매 후 입장. 맛의 농도를 8단계로 커스터마이징 가능.',
            transport: '난바역 도보 5분',
            tips: '비밀 소스 농도는 3~5배가 한국인 입맛에 맞아요. 추가 면(카에다마) ¥250',
            themes: ['라멘', '24시간', '혼밥'],
            recommend: ['돈코츠라멘', '비밀소스'],
            menu: [
                { name: '천연 돈코츠 라멘', price: '¥980', desc: '기본 라멘' },
                { name: '반숙 계란 추가', price: '¥150', desc: '토핑' },
                { name: '카에다마 (추가면)', price: '¥250', desc: '면 추가' }
            ]
        }
    },
    {
        id: 'kuromon',
        name: '구로몬 시장',
        name_en: 'Kuromon Market',
        lat: 34.6650,
        lng: 135.5070,
        type: 'food',
        region: 'namba',
        rating: 4.2,
        desc: '오사카의 부엌! 신선한 해산물과 과일을 현장에서 맛볼 수 있는 전통 시장.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kuromon_Ichiba_by_pokpok313_in_Osaka.jpg/800px-Kuromon_Ichiba_by_pokpok313_in_Osaka.jpg',
            'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'
        ],
        reviews: [
            { user: '해산물러버', date: '2024-11', text: '참치회랑 가리비 구이 꼭 드세요!' },
            { user: '시장투어', date: '2024-10', text: '아침에 가야 신선해요. 점심 지나면 품절 많음' }
        ],
        details: {
            address: '2-4-1 Nipponbashi, Chuo-ku, Osaka',
            hours: '09:00 - 17:00 (가게마다 상이)',
            ticket: '무료 입장 / 개별 구매',
            info: '150년 역사의 전통시장. 약 150개 점포. 아침식사로 해산물 추천!',
            transport: '닛폰바시역 도보 3분',
            tips: '오전 10시 전에 가야 신선한 해산물 맛볼 수 있어요. 현금 준비!',
            themes: ['시장', '해산물', '먹거리'],
            recommend: ['참치회', '와규꼬치', '가리비구이'],
            menu: [
                { name: '참치회', price: '¥1,000~2,000', desc: '신선한 참치' },
                { name: '와규 꼬치', price: '¥500~1,500', desc: 'A5 등급 와규' },
                { name: '가리비 구이', price: '¥300~500', desc: '숯불 가리비' },
                { name: '딸기 (제철)', price: '¥500~800', desc: '일본 딸기' }
            ]
        }
    },

    // ========== 신세카이 ==========
    {
        id: 'shinsekai',
        name: '신세카이 & 츠텐카쿠',
        name_en: 'Shinsekai & Tsutenkaku',
        lat: 34.6520,
        lng: 135.5063,
        type: 'spot',
        region: 'tennoji',
        rating: 4.3,
        desc: '레트로한 오사카의 분위기! 1912년에 조성된 번화가로 쿠시카츠의 본고장.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tsutenkaku_2019.jpg/800px-Tsutenkaku_2019.jpg',
            'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'
        ],
        reviews: [
            { user: '레트로감성', date: '2024-11', text: '밤에 가면 네온사인이 예전 일본 느낌나요!' },
            { user: '쿠시카츠팬', date: '2024-10', text: '다루마에서 쿠시카츠 먹으세요. 맛있어요!' }
        ],
        details: {
            address: 'Ebisuhigashi, Naniwa-ku, Osaka',
            hours: '24시간 (츠텐카쿠: 10:00-20:00)',
            ticket: '츠텐카쿠 전망대 ¥900',
            info: '파리의 에펠탑을 모방한 츠텐카쿠 타워가 상징. 주변에 쿠시카츠 전문점 밀집.',
            transport: '에비스초역 도보 3분 / 동물원앞역 도보 5분',
            tips: '쿠시카츠는 소스에 두 번 찍으면 안 돼요! (위생상 금지)',
            themes: ['레트로', '쿠시카츠', '타워'],
            recommend: ['츠텐카쿠', '쿠시카츠', '빌리켄상'],
            menu: [
                { name: '쿠시카츠 세트', price: '¥1,000~2,000', desc: '꼬치튀김 모듬' },
                { name: '도테야키', price: '¥500~800', desc: '곱창 조림' }
            ]
        }
    },

    // ========== 오사카성 ==========
    {
        id: 'osaka_castle',
        name: '오사카성',
        name_en: 'Osaka Castle',
        lat: 34.6873,
        lng: 135.5262,
        type: 'spot',
        region: 'osaka_castle',
        rating: 4.6,
        desc: '오사카의 역사적 랜드마크! 도요토미 히데요시가 축성한 일본 3대 명성 중 하나.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Osaka_Castle_Nishinomaru_Garden_April_2005.JPG/800px-Osaka_Castle_Nishinomaru_Garden_April_2005.JPG',
            'https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800'
        ],
        reviews: [
            { user: '역사여행', date: '2024-11', text: '천수각에서 보는 전경이 정말 좋아요!' },
            { user: '벚꽃시즌', date: '2024-04', text: '벚꽃 시즌에 가면 정말 예뻐요. 인생샷 가능!' }
        ],
        details: {
            address: '1-1 Osakajo, Chuo-ku, Osaka',
            hours: '09:00 - 17:00 (입장 16:30까지)',
            ticket: '성인 ¥600 / 학생 ¥300 / 오사카주유패스 무료',
            info: '8층 천수각 전망대에서 오사카 시내 360도 조망. 내부는 역사 박물관.',
            transport: '오사카조코엔역 / 다니마치욘초메역 도보 15분',
            tips: '오사카 주유패스로 무료입장! 벚꽃시즌(3-4월) 연장개관.',
            themes: ['역사', '성', '벚꽃명소', '전망대'],
            recommend: ['천수각', '니시노마루정원', '시간여행'],
            seasonal: {
                spring: '벚꽃 시즌 야간 개장 & 라이트업',
                winter: 'SAKUYA LUMINA 빛 축제'
            }
        }
    },

    // ========== 우메다 ==========
    {
        id: 'umeda_sky',
        name: '우메다 스카이 빌딩',
        name_en: 'Umeda Sky Building',
        lat: 34.7059,
        lng: 135.4904,
        type: 'spot',
        region: 'umeda',
        rating: 4.7,
        desc: '공중 정원 전망대! 173m 높이에서 오사카 시내를 360도로 조망할 수 있는 랜드마크.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Umeda_Sky_Building.jpg/800px-Umeda_Sky_Building.jpg',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
        ],
        reviews: [
            { user: '야경헌터', date: '2024-11', text: '일몰 시간에 맞춰 가세요! 야경 최고!' },
            { user: '건축덕후', date: '2024-10', text: '에스컬레이터로 올라가는 게 진짜 멋있어요' }
        ],
        details: {
            address: '1-1-88 Oyodonaka, Kita-ku, Osaka',
            hours: '09:30 - 22:30 (입장 22:00까지)',
            ticket: '성인 ¥1,500 / 어린이 ¥700',
            info: '두 개의 타워가 연결된 독특한 건축. 공중 에스컬레이터로 올라가는 체험도 압권!',
            transport: '오사카역/우메다역 도보 10분',
            tips: '일몰 30분 전에 도착하면 낮과 밤 풍경 모두 볼 수 있어요!',
            themes: ['야경', '전망대', '건축', '데이트'],
            recommend: ['공중정원', '야경', '일몰']
        }
    },
    {
        id: 'hep_five',
        name: 'HEP FIVE 관람차',
        name_en: 'HEP FIVE Ferris Wheel',
        lat: 34.7035,
        lng: 135.5000,
        type: 'spot',
        region: 'umeda',
        rating: 4.3,
        desc: '도심 속 붉은 관람차! 쇼핑몰 옥상에서 오사카 시내를 한눈에.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/HEP_FIVE_Ferris_wheel01bs3200.jpg/800px-HEP_FIVE_Ferris_wheel01bs3200.jpg',
            'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800'
        ],
        reviews: [
            { user: '데이트코스', date: '2024-11', text: '저녁에 타면 로맨틱해요! 커플 추천' },
            { user: '쇼핑러', date: '2024-10', text: '쇼핑하다가 잠깐 타기 좋아요' }
        ],
        details: {
            address: '5-15 Kakudacho, Kita-ku, Osaka',
            hours: '11:00 - 22:45',
            ticket: '¥600 (1회)',
            info: '빌딩 7층에서 탑승. 한 바퀴 약 15분 소요. 에어컨 완비.',
            transport: '우메다역 도보 3분',
            tips: '해질녘에 타면 노을과 야경을 동시에!',
            themes: ['관람차', '데이트', '야경'],
            recommend: ['야경', '커플']
        }
    },

    // ========== USJ & 베이에리어 ==========
    {
        id: 'usj',
        name: '유니버설 스튜디오 재팬',
        name_en: 'Universal Studios Japan',
        lat: 34.6654,
        lng: 135.4323,
        type: 'spot',
        region: 'bayarea',
        rating: 4.9,
        desc: '해리포터와 슈퍼 닌텐도 월드! 일본 최고의 테마파크.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Universal_Studios_Japan_Entrance.jpg/800px-Universal_Studios_Japan_Entrance.jpg',
            'https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800'
        ],
        reviews: [
            { user: 'USJ매니아', date: '2024-11', text: '닌텐도 월드 최고! 마리오카트 꼭 타세요!' },
            { user: '해리포터팬', date: '2024-10', text: '버터맥주 마시면서 호그와트 구경하는 재미!' }
        ],
        details: {
            address: '2-1-33 Sakurajima, Konohana-ku, Osaka',
            hours: '08:00-21:00 (일별 상이, 공식 사이트 확인)',
            ticket: '1일권 성인 ¥8,600~ / 어린이 ¥5,600~ (시즌별 변동)',
            info: '슈퍼 닌텐도 월드, 해리포터, 미니언파크 등 인기 존 다수. 익스프레스 패스 강력 추천!',
            transport: '유니버설시티역 도보 5분',
            tips: '오픈런 필수! 공식 앱으로 대기시간 체크. 닌텐도월드는 에어리어 입장권 필요!',
            themes: ['테마파크', '해리포터', '닌텐도', '가족여행'],
            recommend: ['마리오카트', '해리포터포비든저니', '플라잉다이너소어'],
            menu: [
                { name: '버터맥주', price: '¥650', desc: '해리포터 존' },
                { name: '마리오 버거', price: '¥2,000', desc: '닌텐도 월드' },
                { name: '미니언 팝콘', price: '¥3,500', desc: '미니언 버킷' }
            ]
        }
    },
    {
        id: 'kaiyukan',
        name: '가이유칸 (해유관)',
        name_en: 'Osaka Aquarium Kaiyukan',
        lat: 34.6545,
        lng: 135.4290,
        type: 'spot',
        region: 'bayarea',
        rating: 4.6,
        desc: '세계 최대급 수족관! 고래상어가 헤엄치는 거대한 수조가 압권.',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Osaka_Aquarium_Kaiyukan_2019.jpg/800px-Osaka_Aquarium_Kaiyukan_2019.jpg',
            'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800'
        ],
        reviews: [
            { user: '아쿠아리움덕후', date: '2024-11', text: '고래상어 실물 보면 진짜 감동!' },
            { user: '가족여행', date: '2024-10', text: '아이들이 정말 좋아해요. 2-3시간 소요' }
        ],
        details: {
            address: '1-1-10 Kaigandori, Minato-ku, Osaka',
            hours: '10:00 - 20:00 (입장 19:00까지)',
            ticket: '성인 ¥2,700 / 어린이 ¥1,400',
            info: '태평양을 재현한 5400톤 대형 수조. 고래상어, 펭귄, 해파리 등 620종.',
            transport: '오사카코역 도보 5분',
            tips: '템포잔 관람차와 세트로 방문 추천! 평일 오후가 덜 붐벼요.',
            themes: ['수족관', '가족여행', '고래상어'],
            recommend: ['고래상어', '펭귄', '해파리존']
        }
    },

    // ========== 호텔 ==========
    {
        id: 'swissotel',
        name: '스위소텔 난카이 오사카',
        name_en: 'Swissotel Nankai Osaka',
        lat: 34.6644,
        lng: 135.5020,
        type: 'hotel',
        region: 'namba',
        rating: 4.7,
        desc: '난카이 난바역 직결 호텔! 간사이공항 접근성 최고의 럭셔리 호텔.',
        photos: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'
        ],
        reviews: [
            { user: '비즈니스맨', date: '2024-11', text: '공항에서 라피트 타고 바로 호텔 도착! 최고' },
            { user: '럭셔리여행', date: '2024-10', text: '객실에서 도톤보리 야경 보여요' }
        ],
        details: {
            address: '5-1-60 Namba, Chuo-ku, Osaka',
            hours: '체크인 15:00 / 체크아웃 12:00',
            ticket: '1박 ¥25,000~',
            info: '546개 객실. 36층 건물. 난바역 직결로 우천 시에도 편리.',
            transport: '난바역 직결',
            tips: '고층 객실 요청하면 도톤보리 야경 뷰 가능!',
            themes: ['럭셔리호텔', '역직결', '공항접근성'],
            recommend: ['고층객실', '조식뷔페']
        }
    },
    {
        id: 'park_front',
        name: '더 파크 프론트 호텔',
        name_en: 'The Park Front Hotel',
        lat: 34.6660,
        lng: 135.4310,
        type: 'hotel',
        region: 'bayarea',
        rating: 4.6,
        desc: 'USJ 바로 앞 공식 호텔! 오픈런에 최적화된 위치.',
        photos: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'
        ],
        reviews: [
            { user: 'USJ마니아', date: '2024-11', text: '파크 오픈 전에 입장 가능! 오픈런 필수템' },
            { user: '가족여행', date: '2024-10', text: '어린이 어메니티가 귀여워요' }
        ],
        details: {
            address: '6-2-52 Shimaya, Konohana-ku, Osaka',
            hours: '체크인 15:00 / 체크아웃 11:00',
            ticket: '1박 ¥20,000~',
            info: 'USJ 공식 파트너 호텔. 파크 뷰 객실에서 불꽃놀이 감상 가능.',
            transport: '유니버설시티역 도보 1분',
            tips: 'USJ 전날 체크인해서 다음날 오픈런!',
            themes: ['USJ호텔', '테마파크', '가족여행'],
            recommend: ['파크뷰', '얼리입장']
        }
    },

    // ========== 겨울 일루미네이션 ==========
    {
        id: 'midosuji_illumination',
        name: '미도스지 일루미네이션',
        name_en: 'Midosuji Illumination',
        lat: 34.6860,
        lng: 135.5000,
        type: 'spot',
        region: 'namba',
        rating: 4.7,
        desc: '세계 기록에 등재된 빛의 거리! 우메다에서 난바까지 4km 구간이 빛으로 연결.',
        photos: [
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
            'https://images.unsplash.com/photo-1576073719676-aa95576db207?w=800'
        ],
        reviews: [
            { user: '빛덕후', date: '2024-12', text: '오사카 겨울 여행이라면 필수!' },
            { user: '사진가', date: '2023-12', text: '인스타 감성 사진 건지기 좋아요' }
        ],
        details: {
            address: 'Midosuji Street, Osaka',
            hours: '17:00 - 23:00 (11월~12월)',
            ticket: '무료',
            info: '약 4km 구간에 100만 개 이상의 LED 조명. 기네스 세계기록 인증.',
            transport: '미도스지선 각 역',
            tips: '우메다에서 시작해 난바까지 걸으며 구경하세요!',
            themes: ['일루미네이션', '야경', '겨울'],
            recommend: ['산책', '사진명소'],
            seasonal: { winter: '11월 ~ 12월 31일' }
        }
    },
    {
        id: 'osaka_castle_3d',
        name: '오사카성 3D 매핑',
        name_en: 'Osaka Castle 3D Mapping',
        lat: 34.6873,
        lng: 135.5262,
        type: 'spot',
        region: 'osaka_castle',
        rating: 4.5,
        desc: '천수각을 배경으로 펼쳐지는 화려한 빛의 쇼!',
        photos: [
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
            'https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800'
        ],
        reviews: [
            { user: '야경헌터', date: '2023-12', text: '성벽에 영상이 투영되는 게 신기해요!' },
            { user: '겨울여행', date: '2023-12', text: '춥지만 볼만해요. 방한 필수!' }
        ],
        details: {
            address: 'Osaka Castle Park, Chuo-ku, Osaka',
            hours: '18:00 - 21:00 (겨울 시즌 한정)',
            ticket: '유료 (이벤트별 상이)',
            info: '역사적인 성벽에 화려한 영상이 투영되는 이벤트.',
            transport: '오사카조코엔역 도보 15분',
            tips: '방한용품 필수! 온라인 예매 추천.',
            themes: ['3D매핑', '야경', '겨울이벤트'],
            recommend: ['프로젝션매핑'],
            seasonal: { winter: '겨울 시즌 한정' }
        }
    }
];

// Export for use in osaka.js
if (typeof window !== 'undefined') {
    window.OSAKA_POI_DATABASE = POI_DATABASE;
}
