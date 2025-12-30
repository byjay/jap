(function () {
    // ==========================================================================
    //  🐧 DONKI SYSTEM CONFIG
    // ==========================================================================
    const CONFIG = {
        MODE: 'COMMERCIAL', // FAMILY 변경 시 광고 제거
        URLS: {
            SEARCH_BASE: "https://www.donki.com/en/products/search?keyword=",
            COUPON: "https://www.djapanpass.com/coupon/0002000103", // 공식 디지털 쿠폰 링크
            STORE_MAP: "https://www.donki.com/en/store/shop_list.php"
        },
        ADSENSE: {
            CLIENT: "ca-pub-5240158357882882",
            SLOT_SIDE: "1880725743",
            SLOT_FLUID: "2808903845"
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
        console.log("🐧 Don Quijote App Loaded");
        renderFloatingButton();
        renderModalStructure();
    }

    function renderFloatingButton() {
        const btn = document.createElement('button');
        btn.className = "fixed bottom-36 right-5 w-14 h-14 bg-yellow-400 border-4 border-black rounded-full shadow-2xl flex items-center justify-center text-3xl z-40 hover:scale-110 transition animate-bounce";
        btn.innerHTML = "🐧";
        btn.onclick = openDonkiModal;
        document.body.appendChild(btn);
        
        const label = document.createElement('div');
        label.className = "fixed bottom-[185px] right-4 bg-black text-yellow-400 text-[10px] font-bold px-2 py-1 rounded border border-yellow-400 pointer-events-none z-50";
        label.innerText = "돈키호테";
        document.body.appendChild(label);
    }

    function renderModalStructure() {
        if (document.getElementById('donki-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'donki-modal';
        modal.className = 'fixed inset-0 z-50 hidden';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeDonkiModal()"></div>
            <div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[92vh] md:h-full bg-[#1a1a1a] rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform">
                <!-- Header -->
                <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 flex justify-between items-center shadow-lg z-10">
                    <div class="flex items-center gap-2">
                        <span class="text-3xl">🐧</span>
                        <div>
                            <h2 class="font-black text-xl text-black leading-none">DON QUIJOTE</h2>
                            <p class="text-xs font-bold text-black opacity-80">쇼핑 네비게이터 & 쿠폰</p>
                        </div>
                    </div>
                    <button onclick="closeDonkiModal()" class="bg-black/20 text-black w-8 h-8 rounded-full font-bold">✕</button>
                </div>

                <!-- Content -->
                <div class="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide text-white">
                    
                    <!-- 1. 할인 쿠폰 (가장 중요) -->
                    <div class="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-1 border-2 border-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                        <div class="bg-[#1a1a1a] rounded-lg p-4 text-center cursor-pointer hover:bg-gray-800 transition" onclick="window.open('${CONFIG.URLS.COUPON}')">
                            <h3 class="text-yellow-400 font-black text-2xl mb-1">면세 10% + 5% 추가할인</h3>
                            <p class="text-white text-sm mb-3">계산대에서 이 쿠폰을 보여주세요!</p>
                            <button class="bg-yellow-400 text-black font-black px-6 py-2 rounded-full w-full hover:bg-white transition">쿠폰 받기 (CLICK)</button>
                        </div>
                    </div>

                    <!-- 2. 지점별 층별 안내 -->
                    <div>
                        <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                            <span class="text-yellow-400">📍</span> 주요 지점 층별 가이드
                        </h3>
                        <select id="store-selector" onchange="updateFloorGuide()" class="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-yellow-400 outline-none mb-4">
                            <option value="mega_shibuya">도쿄 - 시부야 메가돈키</option>
                            <option value="dotonbori">오사카 - 도톤보리</option>
                            <option value="sapporo">삿포로 - 타누키코지</option>
                            <option value="okinawa">오키나와 - 기노완 메가돈키</option>
                        </select>
                        <div id="floor-guide-display" class="bg-gray-800 rounded-xl p-4 border border-gray-700">
                            <!-- JS로 내용 주입 -->
                        </div>
                    </div>

                    <!-- 3. 상품 검색 -->
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

                    <!-- 4. 광고 영역 -->
                    ${CONFIG.MODE === 'COMMERCIAL' ? `
                    <div class="bg-gray-800 p-2 rounded-lg text-center">
                        <p class="text-[10px] text-gray-500 mb-1">SPONSORED</p>
                        <ins class="adsbygoogle" style="display:block" data-ad-client="${CONFIG.ADSENSE.CLIENT}" data-ad-slot="${CONFIG.ADSENSE.SLOT_FLUID}" data-ad-format="fluid" data-ad-layout-key="-6q+e9+15-2u+4y"></ins>
                    </div>` : ''}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 초기 로드
        window.updateFloorGuide();
        if (CONFIG.MODE === 'COMMERCIAL') try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { }
    }

    // --- Logic ---
    window.openDonkiModal = () => document.getElementById('donki-modal').classList.remove('hidden');
    window.closeDonkiModal = () => document.getElementById('donki-modal').classList.add('hidden');

    window.updateFloorGuide = () => {
        const storeKey = document.getElementById('store-selector').value;
        const data = STORE_DB[storeKey];
        const display = document.getElementById('floor-guide-display');
        
        let html = `<h4 class="font-bold text-yellow-400 mb-3 border-b border-gray-600 pb-2">${data.name}</h4><ul class="space-y-3">`;
        for (const [floor, desc] of Object.entries(data.floors)) {
            html += `<li class="flex items-start gap-3"><span class="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded w-10 text-center shrink-0">${floor}</span><span class="text-sm text-gray-300">${desc}</span></li>`;
        }
        html += `</ul><div class="mt-4 pt-3 border-t border-gray-600"><span class="text-xs text-gray-400">🔥 인기상품: ${data.hot_items.join(', ')}</span></div>`;
        display.innerHTML = html;
    };

    window.searchDonkiItem = () => {
        const keyword = document.getElementById('donki-search-input').value;
        if (!keyword) return alert('검색어를 입력해주세요.');
        window.open(CONFIG.URLS.SEARCH_BASE + encodeURIComponent(keyword), '_blank');
    };

    initDonki();
})();