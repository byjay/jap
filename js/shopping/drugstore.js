
(function () {
    // ==========================================================================
    //  💊 DRUGSTORE SYSTEM (FAMILY MODE)
    // ==========================================================================

    // 드럭스토어 인기 아이템 DB
    const DRUG_ITEMS = {
        'medicine': {
            title: '💊 상비약 & 의약품',
            items: [
                { name: '이브 (EVE)', desc: '빠른 효과의 진통제', tag: '두통/생리통' },
                { name: '오타이산', desc: '가루 소화제', tag: '소화불량' },
                { name: '카베진', desc: '양배추 위장약', tag: '위장약' },
                { name: '동전 파스', desc: '로이히츠보코', tag: '근육통' },
                { name: '샤론 파스', desc: '명함 크기 파스', tag: '근육통' },
                { name: '파브론 골드', desc: '종합 감기약', tag: '감기' }
            ]
        },
        'beauty': {
            title: '💄 뷰티 & 화장품',
            items: [
                { name: '퍼펙트 휩', desc: '국민 클렌징 폼', tag: '세안' },
                { name: '비오레 선크림', desc: '가벼운 수분 제형', tag: '자외선차단' },
                { name: '키스미 마스카라', desc: '강력한 워터프루프', tag: '메이크업' },
                { name: '휴족시간', desc: '다리 쿨링 시트', tag: '피로회복' },
                { name: '메구리즘', desc: '수면 안대', tag: '수면' }
            ]
        },
        'snack': {
            title: '🍫 간식 & 식품',
            items: [
                { name: '곤약 젤리', desc: '오리히로 튜브형', tag: '간식' },
                { name: '킷캣 녹차맛', desc: '일본 한정판', tag: '초콜릿' },
                { name: '코로로 젤리', desc: '과일 식감 젤리', tag: '젤리' },
                { name: '이치란 라멘', desc: '밀키트', tag: '라면' }
            ]
        }
    };

    function initDrugstore() {
        console.log("💊 Drugstore App Loaded (Family Mode)");
        renderModalStructure();
    }

    window.openDrugstoreModal = () => {
        const modal = document.getElementById('drugstore-modal');
        if (modal) modal.classList.remove('hidden');
        else initDrugstore();
    };

    window.closeDrugstoreModal = () => {
        const modal = document.getElementById('drugstore-modal');
        if (modal) modal.classList.add('hidden');
    };

    function renderModalStructure() {
        if (document.getElementById('drugstore-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'drugstore-modal';
        modal.className = 'fixed inset-0 z-[80] hidden';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeDrugstoreModal()"></div>
            <div class="absolute bottom-0 w-full md:w-[480px] md:right-0 md:top-0 h-[92vh] md:h-full bg-white rounded-t-2xl md:rounded-none flex flex-col overflow-hidden shadow-2xl transition-transform">
                <!-- Header -->
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 flex justify-between items-center shadow-lg z-10">
                    <div class="flex items-center gap-2">
                        <span class="text-3xl">💊</span>
                        <div>
                            <h2 class="font-black text-xl text-white leading-none">DRUG STORE</h2>
                            <p class="text-xs font-bold text-blue-100">쇼핑 리스트 & 추천템</p>
                        </div>
                    </div>
                    <button onclick="closeDrugstoreModal()" class="bg-white/20 text-white w-8 h-8 rounded-full font-bold">✕</button>
                </div>

                <!-- Content -->
                <div class="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide bg-gray-50">
                    ${Object.entries(DRUG_ITEMS).map(([key, category]) => `
                        <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <h3 class="font-bold text-lg text-gray-800 mb-3 pb-2 border-b border-gray-100">
                                ${category.title}
                            </h3>
                            <div class="grid grid-cols-1 gap-3">
                                ${category.items.map(item => `
                                    <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
                                        <div>
                                            <div class="font-bold text-gray-700">${item.name}</div>
                                            <div class="text-xs text-gray-500">${item.desc}</div>
                                        </div>
                                        <span class="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                                            ${item.tag}
                                        </span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <div class="text-center text-xs text-gray-400 py-4">
                        * 가격은 매장마다 상이할 수 있습니다.
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    initDrugstore();
})();
