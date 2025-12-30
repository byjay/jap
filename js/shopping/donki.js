
(function () {
    // ==========================================================================
    //  🐧 DONKI SYSTEM (FAMILY MODE)
    // ==========================================================================
    const CONFIG = {
        URLS: {
            SEARCH_BASE: "https://www.donki.com/en/products/search?keyword=",
            STORE_MAP: "https://www.donki.com/en/store/shop_list.php"
        }
    };

    // ==========================================================================
    //  🏬 STORE DATABASE (주요 관광지 층별 안내)
    // ==========================================================================
    const STORE_DB = {
        'mega_shibuya': {
            name: '메가 돈키호테 시부야 본점',
            floors: {
                'B1': '식료품, 주류, 음료',
                '1F': '계절 상품, 기념품, 면세 카운터',
                '2F': '화장품, 건강식품, 의약품',
                '3F': '의류, 스포츠 용품',
                '4F': '명품, 시계, 가방',
                '5F': '가전, 인테리어, 파티용품'
            },
            hot_items: ['산토리 위스키', '퍼펙트휩', '킷캣 녹차맛']
        },
        'dotonbori': {
            name: '돈키호테 도톤보리점 (관람차)',
            floors: {
                '1F': '식품, 과자, 면세 카운터',
                '2F': '화장품, 의약품, 일용품',
                '3F': '기념품, 캐릭터 굿즈, 관람차 입구',
                '4F': '가전, 명품, 시계'
            },
            hot_items: ['동전 파스', '휴족시간', '이치란 라멘 키트']
        },
        'sapporo': {
            name: '메가 돈키호테 삿포로 타누키코지',
            floors: {
                'B2': '신선 식품, 고기, 야채',
                'B1': '과자, 주류, 약국',
                '1F': '화장품, 컬러렌즈',
                '2F': '의류, 잡화',
                '3F': '가전, 장난감',
                '4F': '명품, 브랜드'
            },
            hot_items: ['시로이 코이비토', '유바리 멜론 젤리', '홋카이도 한정판']
        },
        'fukuoka': {
            name: '돈키호테 후쿠오카 텐진 본점',
            floors: {
                'B1': '식품, 주류, 음료',
                '1F': '화장품, 의약품, 면세 카운터',
                '2F': '일용품, 펫 용품',
                '3F': '의류, 브랜드, 가전',
                '4F': '장난감, 파티용품, 코스프레'
            },
            hot_items: ['이치란 라멘', '명란 마요네즈', '츠쿠시 모찌']
        },
        'okinawa': {
            name: '메가 돈키호테 기노완점',
            floors: {
                '1F': '식품, 의약품, 화장품, 캠핑',
                '2F': '가전, 의류, 명품, 장난감'
            },
            hot_items: ['자색고구마 타르트', '스노쿨링 장비', '오리온 맥주 굿즈']
        }
    };

    // ==========================================================================
    //  🚀 CORE ENGINE
    // ==========================================================================
    function initDonki() {
        console.log("🐧 Don Quijote App Loaded (Family Mode)");
        // 버튼은 japan_travel.js에서 생성하므로 여기서는 모달 구조만 준비
        renderModalStructure();
    }

    // 외부에서 호출 가능하도록 전역 노출
    window.openDonkiModal = () => {
        const modal = document.getElementById('donki-modal');
        if (modal) modal.classList.remove('hidden');
        else initDonki(); // 혹시 초기화 안됐으면 초기화
    };

    window.closeDonkiModal = () => {
        const modal = document.getElementById('donki-modal');
        if (modal) modal.classList.add('hidden');
    };

    function renderModalStructure() {
        if (document.getElementById('donki-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'donki-modal';
        modal.className = 'fixed inset-0 z-[80] hidden'; // z-index 높임
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeDonkiModal()"></div>
            <div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[92vh] md:h-full bg-[#1a1a1a] rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform">
                <!-- Header -->
                <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 flex justify-between items-center shadow-lg z-10">
                    <div class="flex items-center gap-2">
                        <span class="text-3xl">🐧</span>
                        <div>
                            <h2 class="font-black text-xl text-black leading-none">DON QUIJOTE</h2>
                            <p class="text-xs font-bold text-black opacity-80">쇼핑 네비게이터</p>
                        </div>
                    </div>
                    <button onclick="closeDonkiModal()" class="bg-black/20 text-black w-8 h-8 rounded-full font-bold">✕</button>
                </div>

                <!-- Content -->
                <div class="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide text-white">
                    
                    <!-- 1. 지점별 층별 안내 -->
                    <div>
                        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                            <span class="text-yellow-400">📍</span> 주요 지점 층별 가이드
                        </h3>
                        <select id="store-selector" onchange="updateFloorGuide()" class="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-yellow-400 outline-none mb-4">
                            <option value="mega_shibuya">도쿄 - 시부야 메가돈키</option>
                            <option value="dotonbori">오사카 - 도톤보리</option>
                            <option value="sapporo">삿포로 - 타누키코지</option>
                            <option value="fukuoka">후쿠오카 - 텐진 본점</option>
                            <option value="okinawa">오키나와 - 기노완 메가돈키</option>
                        </select>
                        <div id="floor-guide-display" class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                            <!-- JS로 내용 주입 -->
                        </div>
                    </div>

                    <!-- 2. 상품 검색 -->
                    <div>
                        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                            <span class="text-yellow-400">🔍</span> 상품 재고/가격 확인
                        </h3>
                        <div class="flex gap-2">
                            <input type="text" id="donki-search-input" placeholder="상품명 (예: 퍼펙트휩)" class="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-lg border border-gray-600 focus:border-yellow-400 outline-none">
                            <button onclick="searchDonkiItem()" class="bg-yellow-400 text-black font-bold px-6 rounded-r-lg hover:bg-yellow-300">검색</button>
                        </div>
                        <p class="text-xs text-gray-400 mt-2">* 공식 웹사이트 실시간 카탈로그로 연결됩니다.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 초기 로드
        window.updateFloorGuide();
    }

    window.updateFloorGuide = () => {
        const selector = document.getElementById('store-selector');
        if (!selector) return;

        const storeKey = selector.value;
        const data = STORE_DB[storeKey];
        const display = document.getElementById('floor-guide-display');

        let html = `<h4 class="font-bold text-yellow-400 mb-3 border-b border-gray-600 pb-2">${data.name}</h4><ul class="space-y-3">`;
        for (const [floor, desc] of Object.entries(data.floors)) {
            html += `<li class="flex items-start gap-3"><span class="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded w-10 text-center shrink-0">${floor}</span><span class="text-sm text-gray-300">${desc}</span></li>`;
        }
        html += `</ul><div class="mt-4 pt-3 border-t border-gray-600"><span class="text-xs text-gray-400">🔥 지점 인기상품: ${data.hot_items.join(', ')}</span></div>`;
        display.innerHTML = html;
    };

    // ==========================================================================
    //  🇰🇷 -> 🇯🇵 TRANSLATION DICTIONARY
    // ==========================================================================
    const KOREAN_TO_JAPANESE = {
        '산토리': 'サントリー',
        '위스키': 'ウイスキー',
        '퍼펙트휩': 'パーフェクトホイップ',
        '킷캣': 'キットカット',
        '녹차': '抹茶',
        '동전파스': 'ロイヒつぼ膏',
        '샤론파스': 'サロンパス',
        '휴족시간': '休足時間',
        '이치란': '一蘭',
        '라멘': 'ラーメン',
        '명란': '明太子',
        '마요네즈': 'マヨネーズ',
        '시로이코이비토': '白い恋人',
        '유바리멜론': '夕張メロン',
        '곤약젤리': '蒟蒻畑',
        '오타이산': '太田胃散',
        '카베진': 'キャベジン',
        '이브': 'EVE',
        '진통제': '鎮痛剤',
        '안약': '目薬',
        '비오레': 'ビオレ',
        '선크림': '日焼け止め',
        '우마이봉': 'うまい棒',
        '호로요이': 'ほろよい',
        '복숭아물': '桃の天然水',
        '니베아': 'ニベア',
        '하다라보': '肌ラボ',
        '센카': '専科',
        '마유크림': '馬油',
        '포키': 'ポッキー',
        '자가비': 'Jagabee',
        '가루비': 'カルビー'
    };

    function translateToJapanese(keyword) {
        // 1. 정확히 일치하는 단어 확인
        if (KOREAN_TO_JAPANESE[keyword]) return KOREAN_TO_JAPANESE[keyword];

        // 2. 포함된 단어 치환 (간단한 구현)
        let translated = keyword;
        for (const [kr, jp] of Object.entries(KOREAN_TO_JAPANESE)) {
            translated = translated.replace(kr, jp);
        }
        return translated;
    }

    window.searchDonkiItem = () => {
        const input = document.getElementById('donki-search-input');
        const keyword = input.value.trim();
        if (!keyword) return alert('검색어를 입력해주세요.');

        const jpKeyword = translateToJapanese(keyword);

        // 사용자에게 번역된 검색어 알림 (선택 사항)
        if (keyword !== jpKeyword) {
            console.log(`Translating search: ${keyword} -> ${jpKeyword}`);
            // alert(`일본어로 검색합니다: ${jpKeyword}`); // 너무 방해될 수 있으므로 생략
        }

        window.open(CONFIG.URLS.SEARCH_BASE + encodeURIComponent(jpKeyword), '_blank');
    };

    initDonki();
})();
