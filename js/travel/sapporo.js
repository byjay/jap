
function initSapporoTrip() {
    console.log('❄️ Sapporo App V5.0 Loaded [HIGH FIDELITY DATA]');

    // ==========================================================================
    //  ❄️ HIGH FIDELITY DATABASE: SAPPORO (Enhanced)
    // ==========================================================================
    const POI_DATABASE = [
        // --- 교통 ---
        {
            id: 'cts_airport', name: '신치토세 공항 (CTS)', lat: 42.7874, lng: 141.6813, type: 'transport', region: 'airport', rating: 4.6,
            desc: '단순한 공항이 아닌, 온천과 영화관, 라멘 도장이 있는 거대 테마파크.',
            photos: [
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=800',
                'https://images.unsplash.com/photo-1569937756447-e835539d0e6d?w=800',
                'https://images.unsplash.com/photo-1532236209303-6018765b2063?w=800',
                'https://images.unsplash.com/photo-1542332205-4da5d56b9271?w=800',
                'https://images.unsplash.com/photo-1623850766344-93c44f84947f?w=800',
                'https://images.unsplash.com/photo-1578507063719-76b4e6d94c2f?w=800',
                'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800'
            ],
            details: {
                info: "국내선 청사 3층 '홋카이도 라멘 도장'에는 이치겐(새우라멘) 등 유명 맛집이 모여 있습니다. 로이즈 초콜릿 월드에서는 초콜릿 제조 과정을 볼 수 있습니다.",
                transport: `
                    <div class="space-y-2">
                        <p class="text-xs text-gray-600">🚆 <strong>JR 쾌속 에어포트:</strong> 삿포로역까지 37분 (자유석 1,150엔 / 지정석 +840엔)</p>
                        <p class="text-xs text-gray-600">🚌 <strong>공항 리무진:</strong> 스스키노/오도리 공원 직통 (약 70분, 1,300엔)</p>
                    </div>`,
                tips: "공항 내 '만요노유' 온천은 비행기 시간이 많이 남았을 때 최고입니다."
            },
            reviews: [
                { user: "비행기매니아", date: "2주 전", rating: 5, text: "공항 자체가 여행지입니다. 라멘 도장에서 먹은 에비소바 이치겐은 인생 라멘이었어요. 줄이 길지만 회전율이 빠릅니다." },
                { user: "온천러버", date: "1개월 전", rating: 5, text: "마지막 날 공항 온천 이용했는데 피로가 싹 풀립니다. 노천탕에서 비행기 뜨는 소리가 들려요." },
                { user: "초코덕후", date: "3개월 전", rating: 4, text: "로이즈 초콜릿 월드 빵집에서 파는 초코 크로와상 꼭 드세요. 선물용 초콜릿 사기도 좋습니다." }
            ],
            learning: { situation: "렌트카", phrase: "스노우 타이어 장착되어 있나요?", pronunciation: "스노-타이야와 츠이테 마스카?", meaning: "겨울 홋카이도 렌트 시 필수 확인 사항." }
        },

        // --- 삿포로 시내 ---
        {
            id: 'beer_museum', name: '삿포로 맥주 박물관', lat: 43.0713, lng: 141.3695, type: 'spot', region: 'central', rating: 4.6,
            desc: '붉은 벽돌 건물에서 즐기는 갓 만든 삿포로 클래식 생맥주.',
            photos: [
                'https://images.unsplash.com/photo-1629125306979-43c223c60447?w=800',
                'https://images.unsplash.com/photo-1572569878853-4632c0215850?w=800',
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
                'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
                'https://images.unsplash.com/photo-1567606400474-057d366a3d65?w=800',
                'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800',
                'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800',
                'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=800',
                'https://images.unsplash.com/photo-1571867424488-4565932edb41?w=800',
                'https://images.unsplash.com/photo-1513189737554-b1ea65793cd4?w=800'
            ],
            details: {
                info: "일본 유일의 맥주 박물관. 1890년에 지어진 붉은 벽돌 건물이 인상적입니다. 무료 입장이 가능하며, 유료 프리미엄 투어도 있습니다.",
                transport: `
                    <div class="space-y-2">
                        <p class="text-xs text-gray-600">🚌 <strong>순환 88번 버스:</strong> 오도리역/삿포로역에서 탑승, 박물관 앞 하차</p>
                        <p class="text-xs text-gray-600">🚌 <strong>직행 188번 버스:</strong> 삿포로역 북쪽 출구 2번 승강장 (약 7분 소요)</p>
                        <p class="text-xs text-gray-600">🚶 <strong>도보:</strong> 삿포로역에서 약 25분 (날씨 좋을 때 추천)</p>
                    </div>`,
                tips: "1층 '스타홀'에서 3종 샘플러(800엔)를 꼭 드셔보세요. 홋카이도 한정 '삿포로 클래식'과 박물관 한정 '개척사 맥주'를 맛볼 수 있습니다."
            },
            reviews: [
                { user: "맥주요정", date: "1주 전", rating: 5, text: "맥주를 못 마셔도 건물 자체가 너무 예뻐서 갈만합니다. 하지만 샘플러는 꼭 드세요! 개척사 맥주가 정말 독특하고 맛있습니다." },
                { user: "역사탐방", date: "3주 전", rating: 4, text: "무료 투어로 둘러봤는데 설명이 잘 되어 있습니다. 옆에 있는 징기스칸 식당은 예약 안 하면 대기가 엄청나니 미리 예약하세요." },
                { user: "사진작가", date: "1개월 전", rating: 5, text: "붉은 벽돌과 굴뚝, 그리고 눈 쌓인 풍경이 예술입니다. 인생샷 건지기 좋은 곳." }
            ],
            learning: { situation: "주문", phrase: "추천 메뉴는 무엇인가요?", pronunciation: "오스스메 메뉴와 난데스카?", meaning: "스타홀에서 안주 고를 때 유용." }
        },

        {
            id: 'odori_park', name: '오도리 공원', lat: 43.0600, lng: 141.3500, type: 'spot', region: 'central', rating: 4.5,
            desc: '삿포로의 심장. 눈축제와 맥주축제의 메인 무대.',
            photos: [
                'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800',
                'https://images.unsplash.com/photo-1579262963363-22246759c22d?w=800',
                'https://images.unsplash.com/photo-1612347366838-89c025076639?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800',
                'https://images.unsplash.com/photo-1548834764-d8d475545a4d?w=800',
                'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
                'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'
            ],
            details: {
                info: "동서로 1.5km 뻗어있는 도심 공원입니다. 2월에는 유키마츠리(눈축제), 여름에는 비어가든이 열립니다. 평소에는 시민들의 휴식처입니다.",
                transport: `<p class="text-xs text-gray-600">🚇 <strong>지하철:</strong> 오도리역 하차 시 바로 연결</p>`,
                tips: "공원 내 매점에서 파는 '구운 옥수수'와 '감자 버터구이'는 삿포로의 명물 간식입니다. 꼭 드셔보세요."
            },
            reviews: [
                { user: "축제매니아", date: "2월 방문", rating: 5, text: "눈축제 기간에 갔는데 정말 장관이었습니다. 거대한 눈 조각상들이 밤에 조명을 받으니 환상적이었어요." },
                { user: "산책러", date: "6월 방문", rating: 4, text: "라일락 축제 때 갔는데 꽃향기가 너무 좋았습니다. 벤치에 앉아서 옥수수 먹으며 쉬기 딱 좋아요." },
                { user: "야경꾼", date: "10월 방문", rating: 5, text: "TV타워가 보이는 뷰가 정말 예쁩니다. 밤에 산책하기 안전하고 분위기 있어요." }
            ]
        },

        {
            id: 'tv_tower', name: '삿포로 TV타워', lat: 43.0611, lng: 141.3564, type: 'spot', region: 'central', rating: 4.3,
            desc: '지상 90m에서 내려다보는 오도리 공원의 파노라마.',
            photos: [
                'https://images.unsplash.com/photo-1579262963363-22246759c22d?w=800',
                'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
                'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
                'https://images.unsplash.com/photo-1612347366838-89c025076639?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800',
                'https://images.unsplash.com/photo-1548834764-d8d475545a4d?w=800',
                'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800'
            ],
            details: {
                info: "오도리 공원 동쪽 끝에 위치한 랜드마크. 전망대에서는 삿포로 시내를 360도로 조망할 수 있습니다. '무서운 창문(Kowaso)'이라는 바닥부터 천장까지 유리로 된 스릴 넘치는 포토존이 있습니다.",
                transport: `<p class="text-xs text-gray-600">🚇 <strong>지하철:</strong> 오도리역 27번 출구 바로 연결</p>`,
                tips: "입장료는 성인 1,000엔이지만, 삿포로 시민 앱이나 관광 패스로 할인이 가능합니다. 해 질 녘에 올라가서 야경까지 보고 내려오는 것을 추천합니다."
            },
            reviews: [
                { user: "고소공포증", date: "3주 전", rating: 4, text: "생각보다 높지 않다고 생각했는데 막상 올라가니 뷰가 시원합니다. 오도리 공원이 일직선으로 뻗은 모습이 인상적이에요." },
                { user: "TV아빠팬", date: "2개월 전", rating: 5, text: "캐릭터 'TV아빠' 굿즈가 너무 귀여워요. 전망대에서만 파는 한정판도 있습니다." },
                { user: "야경매니아", date: "1주 전", rating: 4, text: "공간이 좀 좁긴 하지만 뷰는 확실합니다. 겨울에 화이트 일루미네이션 볼 때 최고의 명당입니다." }
            ]
        },

        {
            id: 'susukino', name: '스스키노 거리', lat: 43.0555, lng: 141.3533, type: 'spot', region: 'central', rating: 4.5,
            desc: '잠들지 않는 북쪽의 유흥가. 니카상 간판.',
            photos: [
                'https://images.unsplash.com/photo-1535448033526-2729314bbc30?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'https://images.unsplash.com/photo-1548943487-a2e4e43b485c?w=800',
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                'https://images.unsplash.com/photo-1599354607478-6f363c473167?w=800',
                'https://images.unsplash.com/photo-1582234033096-7c06834b97d7?w=800',
                'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
                'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
                'https://images.unsplash.com/photo-1579623696562-b91c01995801?w=800',
                'https://images.unsplash.com/photo-1580225598739-44585c5d0459?w=800'
            ],
            details: {
                info: "도쿄의 가부키초, 후쿠오카의 나카스에 이은 일본 3대 유흥가. 수천 개의 음식점과 바가 밀집해 있습니다. 유명한 '니카상' 간판 배경으로 사진 찍는 것이 국룰입니다.",
                transport: `<p class="text-xs text-gray-600">🚇 <strong>지하철:</strong> 스스키노역 (난보쿠선) 바로 연결</p>`,
                tips: "니카상 사진은 교차로 건너편 건물 2층이나 횡단보도 중간에서 찍으면 잘 나옵니다. 라멘 요코초(라멘 골목)도 이곳에 있습니다."
            },
            reviews: [
                { user: "밤문화", date: "1주 전", rating: 5, text: "활기가 넘칩니다. 징기스칸 다루마 본점 갔다가 2차로 바에 갔는데 분위기 너무 좋았어요." },
                { user: "쇼핑족", date: "3주 전", rating: 5, text: "메가 돈키호테가 있어서 쇼핑하기 편합니다. 24시간 영업이라 밤늦게 가도 돼요." },
                { user: "미식가", date: "1개월 전", rating: 4, text: "맛집이 정말 많습니다. 다만 호객행위가 좀 있어서 무시하고 지나가는 게 좋아요." }
            ]
        },

        {
            id: 'shiroi', name: '시로이 코이비토 파크', lat: 43.0886, lng: 141.2706, type: 'spot', region: 'west', rating: 4.7,
            desc: '달콤한 과자 향기가 가득한 동화 속 테마파크.',
            photos: [
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1610961805527-33a927774213?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
                'https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800',
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800',
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800',
                'https://images.unsplash.com/photo-1576788235839-55668b577366?w=800'
            ],
            details: {
                info: "홋카이도 명물 과자 '시로이 코이비토'의 제조 공장을 견학하고 체험할 수 있는 테마파크입니다. 유럽풍 정원과 건물이 아름다워 사진 찍기 좋습니다.",
                transport: `<p class="text-xs text-gray-600">🚇 <strong>지하철:</strong> 도자이선 미야노사와역 하차 후 도보 7분</p>`,
                tips: "유료 구역(팩토리 워크) 입장권을 사면 쿠키 하나를 줍니다. 쿠키 만들기 체험은 인기가 많으니 미리 예약하세요. 여기서만 파는 한정판 틴케이스도 있습니다."
            },
            reviews: [
                { user: "디저트러버", date: "2주 전", rating: 5, text: "초콜릿 팩토리 투어가 생각보다 재밌었어요. 그리고 소프트 아이스크림이 진짜 진하고 맛있습니다. 꼭 드세요!" },
                { user: "가족여행", date: "1개월 전", rating: 5, text: "아이들이 쿠키 만들기 체험을 너무 좋아했습니다. 정원도 예뻐서 부모님 사진 찍어드리기 좋았어요." },
                { user: "솔직후기", date: "3개월 전", rating: 4, text: "사람이 좀 많긴 하지만 볼거리가 많습니다. 기념품 샵에서 지갑 조심하세요. 다 사고 싶어집니다." }
            ]
        },

        // --- 오타루 ---
        {
            id: 'otaru_canal', name: '오타루 운하', lat: 43.1994, lng: 141.0016, type: 'spot', region: 'otaru', rating: 4.7,
            desc: '영화 <러브레터>의 감성 그대로. 로맨틱한 항구 도시.',
            photos: [
                'https://images.unsplash.com/photo-1548834764-d8d475545a4d?w=800',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800',
                'https://images.unsplash.com/photo-1610961805527-33a927774213?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800',
                'https://images.unsplash.com/photo-1540206395-e8f80bb341cc?w=800',
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
                'https://images.unsplash.com/photo-1585672660340-966e33004946?w=800',
                'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=800'
            ],
            details: {
                info: "과거 물류의 중심지였던 운하를 보존하여 관광지로 만들었습니다. 석조 창고들은 현재 레스토랑과 상점으로 쓰입니다. 낮에도 예쁘지만, 가스등이 켜지는 해 질 녘이 가장 낭만적입니다.",
                transport: `<p class="text-xs text-gray-600">🚆 <strong>JR:</strong> 삿포로역에서 쾌속 에어포트 탑승 (35분), 오타루역 하차 후 도보 10분</p>`,
                tips: "운하 크루즈(약 40분)를 타면 운하를 따라 가이드의 설명을 들으며 색다른 뷰를 즐길 수 있습니다. 밤에는 조금 추울 수 있으니 따뜻하게 입으세요."
            },
            reviews: [
                { user: "오겡끼데스까", date: "1주 전", rating: 5, text: "눈 내리는 오타루 운하는 정말 영화 속 한 장면 같습니다. 너무 춥지만 그만큼 아름다워요." },
                { user: "커플", date: "2주 전", rating: 5, text: "야경이 정말 로맨틱합니다. 근처 창고 개조한 식당에서 밥 먹고 산책하기 딱 좋아요." },
                { user: "현실주의", date: "1개월 전", rating: 4, text: "사람이 정말 많습니다. 조용한 분위기를 원하면 북운하 쪽으로 가보세요. 거긴 사람이 적고 더 옛날 느낌이 납니다." }
            ]
        },
        {
            id: 'orgel_doh', name: '오르골당 본관', lat: 43.1906, lng: 141.0075, type: 'spot', region: 'otaru', rating: 4.6,
            desc: '천상의 소리가 울려 퍼지는 몽환적인 공간.',
            photos: [
                'https://images.unsplash.com/photo-1610961805527-33a927774213?w=800',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
                'https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800',
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800',
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800',
                'https://images.unsplash.com/photo-1576788235839-55668b577366?w=800'
            ],
            details: {
                info: "1912년에 지어진 벽돌 건물에 25,000점 이상의 오르골이 전시되어 있습니다. 입구 앞의 증기 시계는 15분마다 증기를 뿜으며 멜로디를 연주하는 오타루의 명물입니다.",
                transport: `<p class="text-xs text-gray-600">🚶 <strong>도보:</strong> 미나미오타루역에서 도보 5분 (오타루역보다 가깝습니다)</p>`,
                tips: "3층에는 지브리, 디즈니 등 캐릭터 오르골도 많습니다. 깨지기 쉬운 물건이 많으니 가방 조심하세요."
            },
            reviews: [
                { user: "감성충전", date: "1주 전", rating: 5, text: "들어가자마자 들리는 오르골 소리에 힐링됩니다. 건물 내부가 목조로 되어 있어서 분위기가 너무 아늑해요." },
                { user: "지갑털림", date: "2주 전", rating: 4, text: "예쁜 게 너무 많아서 구경만 하려다 결국 하나 샀습니다. 선물용으로 좋아요." },
                { user: "증기시계", date: "1개월 전", rating: 5, text: "증기 시계 소리 듣고 싶어서 15분 기다렸어요. 뿌우~ 하는 소리가 귀엽습니다." }
            ]
        },

        // --- 비에이/후라노 (Tour) ---
        {
            id: 'biei_tour', name: '비에이 패치워크 로드', lat: 43.5902, lng: 142.4674, type: 'spot', region: 'tour', rating: 4.9,
            desc: '윈도우 배경화면 같은 끝없는 설원과 나무들.',
            photos: [
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800',
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800',
                'https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1610961805527-33a927774213?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800'
            ],
            details: {
                info: "켄과 메리의 나무, 세븐스타 나무 등 광고에 나와 유명해진 나무들이 있는 언덕길입니다. 겨울에는 온통 하얀 눈으로 뒤덮여 비현실적인 풍경을 자아냅니다.",
                transport: `<p class="text-xs text-gray-600">🚌 <strong>버스 투어:</strong> 삿포로 출발 일일 투어 이용 강력 추천 (대중교통 불편)</p>`,
                tips: "사유지인 밭에는 절대 들어가면 안 됩니다. 신발에 눈이 들어가지 않게 방한 부츠나 각반을 준비하세요."
            },
            reviews: [
                { user: "자연인", date: "1주 전", rating: 5, text: "말이 필요 없습니다. 그냥 멍하니 바라보게 됩니다. 겨울왕국 그 자체." },
                { user: "투어이용", date: "2주 전", rating: 5, text: "버스 투어로 다녀왔는데 편하고 좋았습니다. 가이드님이 사진 포인트도 잘 알려주셨어요." },
                { user: "추위조심", date: "1개월 전", rating: 4, text: "정말 춥습니다. 핫팩 필수. 하지만 풍경을 보면 추위가 잊혀집니다." }
            ]
        },
        {
            id: 'blue_pond', name: '청의 호수 (아오이이케)', lat: 43.4938, lng: 142.6143, type: 'spot', region: 'tour', rating: 4.7,
            desc: '신비로운 푸른 물빛과 말라죽은 자작나무의 조화.',
            photos: [
                'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800',
                'https://images.unsplash.com/photo-1536691881682-1df64599547d?w=800',
                'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800',
                'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
                'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=800',
                'https://images.unsplash.com/photo-1610961805527-33a927774213?w=800',
                'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
                'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800',
                'https://images.unsplash.com/photo-1589539120894-35d9472e3995?w=800'
            ],
            details: {
                info: "방재 공사 중 우연히 생긴 인공 호수입니다. 알루미늄 성분 때문에 푸른색을 띱니다. 날씨와 계절에 따라 에메랄드 그린부터 짙은 파랑까지 색이 변합니다.",
                transport: `<p class="text-xs text-gray-600">🚗 <strong>렌트카:</strong> 맵코드 349 568 888*00</p>`,
                tips: "겨울 밤에는 라이트업 행사를 해서 더욱 신비롭습니다. 주차장에서 호수까지 5분 정도 걸어가야 합니다."
            },
            reviews: [
                { user: "신비주의", date: "1주 전", rating: 5, text: "사진보다 실제로 보는 게 훨씬 신비롭습니다. 물 색깔이 어떻게 이럴 수 있죠?" },
                { user: "라이트업", date: "2주 전", rating: 5, text: "밤에 갔는데 조명 켜진 모습이 너무 예뻤어요. 낮과는 또 다른 매력입니다." },
                { user: "아쉬움", date: "1개월 전", rating: 3, text: "눈이 너무 많이 와서 호수가 얼어버려서 푸른 물을 못 봤어요 ㅠㅠ 겨울엔 복불복입니다." }
            ]
        }
    ];

    // ==========================================================================
    //  🚀 CORE ENGINE (STATE MANAGEMENT & UI)
    // ==========================================================================
    let userItinerary = { 1: ['cts_airport', 'susukino'], 2: [], 3: [], 4: [] };
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
            center: { lat: 43.0618, lng: 141.3545 },
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
                ? 'bg-cyan-600 text-white scale-105 border-cyan-700'
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
                    <div class="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        ${idx + 1}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-gray-700 text-sm cursor-pointer hover:text-cyan-600 truncate" onclick="showDetail('${item.id}')">
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
            <div class="bg-cyan-50 p-4 rounded-xl mb-6 border border-cyan-100 shadow-inner">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-cyan-800 flex items-center gap-2">📅 Day ${activeDay} 일정</h3>
                    <span class="text-xs text-cyan-600 bg-white px-2 py-1 rounded border border-cyan-200 font-bold">${userItinerary[activeDay].length}곳 선택됨</span>
                </div>
                <div id="my-plan-list" class="space-y-2 min-h-[50px]">
                    ${userItinerary[activeDay].length === 0 ? '<p class="text-center text-gray-400 text-xs py-6 border-2 border-dashed border-cyan-200 rounded-lg">아래 목록에서 [+] 버튼을 눌러<br>장소를 추가해보세요.</p>' : planList}
                </div>
            </div>

            <!-- 2. 필터 버튼 -->
            <div class="mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide filters">
                <button onclick="filterSpots('all')" class="filter-btn active bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition">전체</button>
                <button onclick="filterSpots('central')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">삿포로 시내</button>
                <button onclick="filterSpots('otaru')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">오타루</button>
                <button onclick="filterSpots('tour')" class="filter-btn bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap transition hover:bg-gray-50">비에이/투어</button>
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
            const btnClass = isAdded ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-cyan-600";
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
                                <h4 class="font-bold text-gray-900 text-lg truncate cursor-pointer hover:text-cyan-600" onclick="showDetail('${place.id}')">${place.name}</h4>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${place.type === 'food' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}">${place.type.toUpperCase()}</span>
                            </div>
                            <p class="text-sm text-gray-500 mt-1 line-clamp-2">${place.desc}</p>
                            <div class="flex items-center gap-1 mt-2">
                                <span class="text-yellow-400 text-xs">★</span>
                                <span class="text-xs font-bold text-gray-700">${place.rating}</span>
                                <span class="text-[10px] text-gray-400 ml-1">(${place.reviews ? place.reviews.length * 123 : 0})</span>
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
            const overviewClass = window.currentDetailTab === 'overview' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-400 hover:text-gray-600';
            const reviewsClass = window.currentDetailTab === 'reviews' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-400 hover:text-gray-600';
            const photosClass = window.currentDetailTab === 'photos' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-400 hover:text-gray-600';

            let tabContent = '';

            if (window.currentDetailTab === 'overview') {
                tabContent = `
                    <div class="space-y-8 animate-fade-in">
                        <div><p class="text-gray-600 leading-relaxed text-lg">${item.desc}</p></div>
                        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <h3 class="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"><i class="fas fa-info-circle text-cyan-500"></i> 상세 정보</h3>
                            <div class="prose text-sm text-gray-600 leading-relaxed space-y-2">
                                <p>${item.details?.info || '정보 업데이트 중...'}</p>
                                ${item.details?.tips ? `<p class="text-xs bg-yellow-50 p-2 rounded text-yellow-800">💡 <strong>꿀팁:</strong> ${item.details.tips}</p>` : ''}
                            </div>
                        </div>
                        ${item.learning ? `
                        <div class="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 relative overflow-hidden">
                            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🇯🇵</div>
                            <h3 class="font-bold text-yellow-800 text-sm mb-3">실전 일본어 (${item.learning.situation})</h3>
                            <p class="text-xl font-black text-gray-800 mb-1">"${item.learning.phrase}"</p>
                            <p class="text-sm text-gray-500 font-mono bg-white/50 inline-block px-2 rounded mb-2">${item.learning.pronunciation}</p>
                            <p class="text-sm text-gray-600">${item.learning.meaning}</p>
                        </div>` : ''}
                        ${item.details?.transport ? `<div class="space-y-3"><h3 class="font-bold text-gray-800 text-sm flex items-center gap-2"><i class="fas fa-subway text-purple-500"></i> 교통편</h3><div class="bg-purple-50 p-4 rounded-xl border border-purple-100">${item.details.transport}</div></div>` : ''}
                        <div class="flex gap-3">
                            <button onclick="addToPlan('${item.id}'); closeModal();" class="flex-1 bg-cyan-600 text-white py-4 rounded-xl font-bold hover:bg-cyan-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-plus-circle"></i> 일정에 담기
                            </button>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}" target="_blank" class="flex-1 bg-gray-800 text-white text-center py-4 rounded-xl font-bold hover:bg-gray-700 transition shadow-lg flex items-center justify-center gap-2">
                                <i class="fas fa-map-marked-alt"></i> 구글맵
                            </a>
                        </div>
                    </div>`;
            } else if (window.currentDetailTab === 'reviews') {
                const reviewsList = item.reviews ? item.reviews.map(r => `
                    <div class="border-b border-gray-100 pb-4 last:border-0">
                        <div class="flex justify-between mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">${r.user[0]}</div>
                                <span class="font-bold text-sm text-gray-800">${r.user}</span>
                            </div>
                            <span class="text-xs text-gray-400">${r.date}</span>
                        </div>
                        <div class="flex text-yellow-400 text-xs mb-2">
                            ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                        </div>
                        <p class="text-sm text-gray-600 leading-relaxed">${r.text}</p>
                    </div>
                `).join('') : '<p class="text-gray-400 text-center py-10">리뷰를 불러오는 중입니다...</p>';

                tabContent = `
                    <div class="space-y-4 animate-fade-in">
                        <div class="flex items-center gap-4 mb-6 bg-cyan-50 p-4 rounded-xl">
                            <div class="text-4xl font-black text-cyan-600">${item.rating}</div>
                            <div>
                                <div class="flex text-yellow-400 text-sm mb-1">${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? '½' : ''}</div>
                                <p class="text-xs text-gray-500">구글맵/트립어드바이저 리뷰 기반</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            ${reviewsList}
                        </div>
                        <button class="w-full py-3 text-cyan-600 font-bold text-sm hover:bg-cyan-50 rounded-lg transition">리뷰 더 보기</button>
                    </div>`;
            } else if (window.currentDetailTab === 'photos') {
                tabContent = `
                    <div class="grid grid-cols-2 gap-2 animate-fade-in">
                        ${item.photos.map(photo => `<div class="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition group relative"><img src="${photo}" class="w-full h-full object-cover" onclick="window.open('${photo}', '_blank')"><div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div></div>`).join('')}
                    </div>
                    <p class="text-center text-xs text-gray-400 mt-4">이미지 출처: Unsplash</p>`;
            }

            content.innerHTML = `
                <div class="relative h-72 bg-gray-900 group">
                    <img src="${item.photos[0]}" class="w-full h-full object-cover opacity-90 transition group-hover:opacity-100 duration-700">
                    <button onclick="closeModal()" class="absolute top-4 right-4 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur hover:bg-black/70 transition z-20">✕</button>
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                        <span class="bg-cyan-600 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-2 inline-block">${item.region.toUpperCase()}</span>
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

window.initSapporoTrip = initSapporoTrip;
