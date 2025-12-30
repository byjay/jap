/**
 * japan_travel.js - 일본 여행 지역 관리 및 잠금 시스템
 */

// 일본 여행 지역 정보
const japanRegions = {
    // --- TIER 1: 기본 제공 (바로 여행 가능) ---
    fukuoka: { id: 'fukuoka', name: '후쿠오카', nameJp: '福岡', icon: '🏯', color: 'red', unlockCondition: 'default', description: '규슈 최대 도시', scriptFile: 'js/travel/fukuoka.js', mission: '기본 제공 (바로 여행 가능)' },
    nagoya: { id: 'nagoya', name: '나고야', nameJp: '名古屋', icon: '🏯', color: 'yellow', unlockCondition: 'default', description: '히츠마부시와 지브리', scriptFile: 'js/travel/nagoya.js', mission: '기본 제공 (바로 여행 가능)' },
    kobe: { id: 'kobe', name: '고베', nameJp: '神戸', icon: '🥩', color: 'red', unlockCondition: 'default', description: '고베규와 디저트', scriptFile: 'js/travel/kobe.js', mission: '기본 제공 (바로 여행 가능)' },

    // --- TIER 2: 글자 퀴즈 90점 이상 2회 ---
    osaka: { id: 'osaka', name: '오사카', nameJp: '大阪', icon: '🍜', color: 'orange', unlockCondition: 'quiz_90_2times', description: '맛의 도시', scriptFile: 'js/travel/osaka.js', mission: '글자 퀴즈 90점 이상 2회 달성' },
    nara: { id: 'nara', name: '나라', nameJp: '奈良', icon: '🦌', color: 'green', unlockCondition: 'quiz_90_2times', description: '사슴공원과 대불', scriptFile: 'js/travel/nara.js', mission: '글자 퀴즈 90점 이상 2회 달성' },
    kyoto: { id: 'kyoto', name: '교토', nameJp: '京都', icon: '⛩️', color: 'purple', unlockCondition: 'quiz_90_2times', description: '전통과 문화의 도시', scriptFile: 'js/travel/kyoto.js', mission: '글자 퀴즈 90점 이상 2회 달성' },

    // --- TIER 3: 3일 연속 학습 ---
    yokohama: { id: 'yokohama', name: '요코하마', nameJp: '横浜', icon: '🎡', color: 'blue', unlockCondition: 'streak_3days', description: '항구도시와 야경', scriptFile: 'js/travel/yokohama.js', mission: '3일 연속 학습 달성' },
    hakone: { id: 'hakone', name: '하코네', nameJp: '箱根', icon: '♨️', color: 'indigo', unlockCondition: 'streak_3days', description: '온천과 후지산', scriptFile: 'js/travel/hakone.js', mission: '3일 연속 학습 달성' },
    sendai: { id: 'sendai', name: '센다이', nameJp: '仙台', icon: '🐮', color: 'lime', unlockCondition: 'streak_3days', description: '규탄과 숲의 도시', scriptFile: 'js/travel/sendai.js', mission: '3일 연속 학습 달성' },

    // --- TIER 4: 학습 시간 10분 (단어/회화) ---
    sapporo: { id: 'sapporo', name: '삿포로', nameJp: '札幌', icon: '⛷️', color: 'cyan', unlockCondition: 'study_10mins', description: '설경과 자연', scriptFile: 'js/travel/sapporo.js', mission: '학습(단어/회화) 10분 이상 달성' },
    kanazawa: { id: 'kanazawa', name: '가나자와', nameJp: '金沢', icon: '🍂', color: 'amber', unlockCondition: 'study_10mins', description: '작은 교토', scriptFile: 'js/travel/kanazawa.js', mission: '학습(단어/회화) 10분 이상 달성' },

    // --- TIER 5: 경험치 500XP ---
    tokyo: { id: 'tokyo', name: '도쿄', nameJp: '東京', icon: '🗼', color: 'blue', unlockCondition: 'xp_500', description: '일본의 수도', scriptFile: 'js/travel/tokyo.js', mission: '총 경험치 500XP 달성' },
    okinawa: { id: 'okinawa', name: '오키나와', nameJp: '沖縄', icon: '🏖️', color: 'teal', unlockCondition: 'xp_500', description: '아열대 해변 리조트', scriptFile: 'js/travel/okinawa.js', mission: '총 경험치 500XP 달성' },
    hiroshima: { id: 'hiroshima', name: '히로시마', nameJp: '広島', icon: '⛩️', color: 'orange', unlockCondition: 'xp_500', description: '평화와 미야지마', scriptFile: 'js/travel/hiroshima.js', mission: '총 경험치 500XP 달성' },
    nagasaki: { id: 'nagasaki', name: '나가사키', nameJp: '長崎', icon: '⛪', color: 'rose', unlockCondition: 'xp_500', description: '짬뽕과 야경', scriptFile: 'js/travel/nagasaki.js', mission: '총 경험치 500XP 달성' },
    nikko: { id: 'nikko', name: '닛코', nameJp: '日光', icon: '🙈', color: 'emerald', unlockCondition: 'xp_500', description: '세계유산과 자연', scriptFile: 'js/travel/nikko.js', mission: '총 경험치 500XP 달성' }
};

// Load Route Helper
const routeScript = document.createElement('script');
routeScript.src = 'js/travel/route_helper.js';
document.head.appendChild(routeScript);

let currentRegion = null;
let loadedScripts = {};

// 일본 여행 초기화
function initJapanTravel() {
    // 항상 지역 선택 화면으로 시작
    backToRegionSelection();
}

// 필수 어플 데이터
const essentialApps = [
    {
        name: "Google Maps",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png",
        desc: "일본 여행의 필수품! 길 찾기, 전철 시간표, 맛집 검색까지 모든 것을 해결해줍니다. 특히 복잡한 일본 지하철 환승 정보를 정확하게 알려주어 길을 잃을 걱정이 없습니다.",
        link: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
    },
    {
        name: "Papago",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw",
        desc: "네이버가 만든 AI 번역기. 텍스트 번역뿐만 아니라 이미지 번역 기능이 강력하여, 일본어 메뉴판이나 안내문을 사진 찍어 바로 한국어로 확인할 수 있습니다. 음성 대화 모드도 지원합니다.",
        link: "https://play.google.com/store/apps/details?id=com.naver.labs.translator"
    },
    {
        name: "Japan Transit Planner (Navitime)",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "일본 철도 여행의 최강자. JR 패스 사용자라면 필수! 정확한 열차 시간표와 플랫폼 번호, 지연 정보까지 실시간으로 확인할 수 있습니다. 외국인 관광객을 위한 재팬 레일 패스 옵션도 설정 가능합니다.",
        link: "https://play.google.com/store/apps/details?id=com.navitime.inbound.walk"
    },
    {
        name: "Payke",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "쇼핑 필수 앱! 드럭스토어나 마트에서 상품의 바코드를 스캔하면 한국어로 상세한 상품 정보를 보여줍니다. 화장품 성분이나 의약품 복용법을 확인할 때 매우 유용합니다.",
        link: "https://play.google.com/store/apps/details?id=jp.co.payke.payke"
    },
    {
        name: "XE Currency",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "실시간 환율 계산기. 엔화 가격을 입력하면 바로 원화로 얼마인지 계산해줍니다. 오프라인 모드도 지원하여 데이터가 없어도 대략적인 금액을 확인할 수 있습니다.",
        link: "https://play.google.com/store/apps/details?id=com.xe.currency"
    },
    {
        name: "Uber / GO",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "일본 택시 호출 앱. 일본 택시는 길에서 잡기 어려울 때가 많습니다. 카카오택시처럼 출발지와 목적지를 설정하여 택시를 부를 수 있고, 예상 요금도 미리 알 수 있어 바가지 요금 걱정이 없습니다.",
        link: "https://play.google.com/store/apps/details?id=com.ubercab"
    },
    {
        name: "Disney Resort / USJ App",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "테마파크 방문 예정이라면 필수! 대기 시간 확인, 쇼 스케줄, 지도, 그리고 DPA(유료 패스) 구매까지 앱 하나로 가능합니다. 도쿄 디즈니랜드나 오사카 유니버설 스튜디오 방문 시 꼭 설치하세요.",
        link: "https://play.google.com/store/apps/details?id=jp.co.usj.android.guide"
    },
    {
        name: "Tabelog (타베로그)",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "일본 현지인들이 쓰는 진짜 맛집 어플. 별점 3.5 이상이면 실패 없는 맛집입니다. 한국어 번역은 완벽하지 않지만, 현지 찐맛집을 찾고 싶다면 구글맵과 함께 교차 검증용으로 추천합니다.",
        link: "https://tabelog.com/"
    },
    {
        name: "Suica / Pasmo (Apple Wallet)",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "아이폰 사용자라면 지갑 앱에 교통카드를 넣어 다니세요. 실물 카드 없이 개찰구를 통과하고, 편의점이나 자판기에서도 결제할 수 있습니다. 잔액 확인과 충전도 폰에서 바로 가능합니다.",
        link: "https://www.jreast.co.jp/e/pass/suica.html"
    },
    {
        name: "Visit Japan Web",
        icon: "https://play-lh.googleusercontent.com/M6yE-Wq-7Wq_pZ6-gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU_gqU=w240-h480-rw", // Placeholder
        desc: "입국 수속을 빠르게! 일본 입국 시 필요한 검역, 입국 심사, 세관 신고를 미리 웹으로 등록하고 QR코드만 보여주면 됩니다. 공항에서의 대기 시간을 획기적으로 줄여줍니다.",
        link: "https://vjw-lp.digital.go.jp/en/"
    },
    {
        name: "Payke (페이크)",
        icon: "https://play-lh.googleusercontent.com/fJJ8m5_o5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j=w240-h480-rw",
        desc: "상품의 바코드를 스캔하면 한국어로 상품 정보를 보여줍니다. 쇼핑할 때 아주 유용합니다.",
        link: "https://play.google.com/store/apps/details?id=jp.co.payke.payke"
    }
];

// 필수 어플 모달 열기
function showEssentialApps() {
    const modalHtml = `
        <div id="apps-modal" class="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 animate-fade-in p-4">
            <div class="bg-white rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col relative overflow-hidden shadow-2xl">
                <!-- Header -->
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-center shrink-0">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <i class="fas fa-mobile-alt text-2xl text-white"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-black text-white">일본 여행 필수 앱 TOP 10</h2>
                            <p class="text-blue-100 text-sm">이것만 있으면 일본 여행 준비 끝!</p>
                        </div>
                    </div>
                    <button onclick="document.getElementById('apps-modal').remove()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <!-- Content -->
                <div class="flex-1 overflow-y-auto custom-scrollbar p-6 bg-gray-50">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${essentialApps.map(app => `
                            <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex gap-4 group">
                                <div class="shrink-0">
                                    <div class="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 group-hover:border-blue-200 transition-colors">
                                        <!-- 실제 아이콘 대신 폰트어썸 사용하거나 이미지 URL 사용 -->
                                        <div class="w-full h-full flex items-center justify-center bg-white text-3xl text-gray-400">
                                            <i class="fas fa-cube"></i> 
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="font-bold text-lg text-gray-800 mb-1 truncate">${app.name}</h3>
                                    <p class="text-xs text-gray-500 line-clamp-3 mb-3 leading-relaxed">${app.desc}</p>
                                    <a href="${app.link}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">
                                        <i class="fab fa-google-play"></i> 설치하러 가기
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}


// 쇼핑 모듈 정보
const shoppingModules = {
    donki: { script: 'js/shopping/donki.js', init: 'openDonkiModal' },
    drugstore: { script: 'js/shopping/drugstore.js', init: 'openDrugstoreModal' }
};

// 쇼핑 모듈 열기
function openShopping(type) {
    const module = shoppingModules[type];
    if (!module) return;

    // 이미 로드되었는지 확인
    if (document.querySelector(`script[src="${module.script}"]`)) {
        if (typeof window[module.init] === 'function') {
            window[module.init]();
        }
        return;
    }

    // 스크립트 로드
    const script = document.createElement('script');
    script.src = module.script;
    script.onload = () => {
        if (typeof window[module.init] === 'function') {
            window[module.init]();
        }
    };
    document.head.appendChild(script);
}

// 지역 선택 그리드 렌더링
function renderRegionSelection() {
    const container = document.getElementById('region-selection');
    if (!container) return;

    // 헤더 업데이트 (현재 위치 없음)
    updateTravelHeader('일본 여행 지역 선택');

    let html = `
        <!-- 쇼핑 섹션 (상단 고정) -->
        <div class="col-span-2 grid grid-cols-2 gap-3 mb-2">
             <button onclick="openShopping('donki')" class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-2 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition flex items-center justify-center gap-2 border border-black">
                <span class="text-lg">🐧</span> 돈키호테
             </button>
             <button onclick="openShopping('drugstore')" class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-xl font-bold text-sm shadow-sm hover:scale-105 transition flex items-center justify-center gap-2 border border-blue-600">
                <span class="text-lg">💊</span> 드럭스토어
             </button>
        </div>

        <!-- Transportation Guide Button -->
        <div class="col-span-2 mb-4">
            <button onclick="initTransportationGuide()" 
                class="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <i class="fas fa-subway text-sm"></i>
                </div>
                <div class="text-left">
                    <div class="font-bold text-sm">일본 교통 완전 정복</div>
                    <div class="text-[10px] text-green-100">지하철/버스 패스, 구매법, 에티켓 총정리</div>
                </div>
                <i class="fas fa-chevron-right ml-auto opacity-70 text-xs"></i>
            </button>
        </div>
    `;

    Object.values(japanRegions).forEach(region => {
        const isUnlocked = checkRegionUnlock(region);
        const lockIcon = isUnlocked ? '' : '<i class="fas fa-lock text-3xl text-gray-300 mb-2"></i>';
        const opacity = isUnlocked ? '' : 'opacity-50';
        const cursor = isUnlocked ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed';
        const onClick = `onclick="handleRegionClick('${region.id}')"`;

        html += `
            <div id="region-card-${region.id}" ${onClick} class="group bg-white p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-${region.color}-400 flex flex-col items-center transition-all duration-200 transform ${cursor} ${opacity} relative overflow-hidden">
                <div class="text-5xl mb-3 transform transition-transform group-hover:scale-110">${lockIcon || region.icon}</div>
                <h3 class="text-xl font-bold text-gray-800 mb-1">${region.name}</h3>
                <p class="text-sm text-${region.color}-600 font-medium mb-1">${region.nameJp}</p>
                <p class="text-xs text-gray-500 text-center">${region.description}</p>
                ${!isUnlocked ? `<p class="text-xs text-red-500 mt-2 font-bold mission-text">🔒 ${region.mission}</p>` : ''}
                <div class="absolute inset-0 bg-${region.color}-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 헤더 업데이트 함수
function updateTravelHeader(title) {
    // japan_travel 탭 내부의 h2 태그를 찾음
    const headerTitle = document.querySelector('#japan_travel h2');
    if (headerTitle) {
        // 아이콘 유지하면서 텍스트만 변경하거나, 전체 변경
        if (title.includes('지역 선택')) {
            headerTitle.innerHTML = '✈️ 일본 여행';
        } else {
            headerTitle.innerHTML = `✈️ ${title} 여행`;
        }
    }
}

// 지역 클릭 핸들러
function handleRegionClick(regionId) {
    const region = japanRegions[regionId];
    const isUnlocked = checkRegionUnlock(region);

    if (isUnlocked) {
        // 이미 열려있으면 바로 이동
        selectRegion(regionId);
    } else {
        // 잠겨있으면 맛보기(Preview) 모드로 이동
        // 단, 이미 미션을 달성했는지 한 번 더 체크 (방금 달성했을 수도 있음)
        if (checkRegionUnlock(region)) {
            playLevelUpEffect(region);
        } else {
            // 맛보기 모드 실행
            selectRegion(regionId, true);
        }
    }
}

// 레벨업 효과 (잠금 해제)
function playLevelUpEffect(region) {
    // 1. 사운드 재생 (성공음)
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'); // 예시 효과음
    audio.volume = 0.5;
    audio.play().catch(() => { }); // 자동재생 정책 등으로 실패시 무시

    // 2. 축하 모달 표시
    const modalHtml = `
        <div id="level-up-modal" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 animate-fade-in">
            <div class="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 text-center transform scale-0 animate-pop-in relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-${region.color}-50 to-white -z-10"></div>
                <div class="text-6xl mb-4 animate-bounce">🎉</div>
                <h2 class="text-3xl font-black text-${region.color}-600 mb-2">LEVEL UP!</h2>
                <h3 class="text-xl font-bold text-gray-800 mb-4">${region.name} 지역 오픈!</h3>
                <p class="text-gray-600 mb-6">축하합니다! 미션을 달성하여<br>새로운 여행지가 열렸습니다.</p>
                <button onclick="closeLevelUpModal('${region.id}')" class="w-full py-3 bg-${region.color}-500 hover:bg-${region.color}-600 text-white font-bold rounded-xl shadow-lg transform transition-transform active:scale-95">
                    여행 떠나기 ✈️
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // 3. 폭죽 효과
    createEmojiConfetti();
}

function closeLevelUpModal(regionId) {
    const modal = document.getElementById('level-up-modal');
    if (modal) modal.remove();

    // UI 갱신 (잠금 아이콘 제거 등)
    renderRegionSelection();

    // 지역 이동
    selectRegion(regionId);
}

// 간단한 이모지 폭죽 효과
function createEmojiConfetti() {
    const emojis = ['🎉', '✨', '⭐', '🎈', '✈️'];
    for (let i = 0; i < 50; i++) {
        const el = document.createElement('div');
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.position = 'fixed';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = '-50px';
        el.style.fontSize = (Math.random() * 20 + 20) + 'px';
        el.style.zIndex = '70';
        el.style.pointerEvents = 'none';
        el.style.transition = `top ${Math.random() * 2 + 1}s ease-in, transform ${Math.random() * 2 + 1}s linear`;

        document.body.appendChild(el);

        setTimeout(() => {
            el.style.top = '110vh';
            el.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 100);

        setTimeout(() => el.remove(), 3000);
    }
}

// 지역 잠금 해제 체크
function checkRegionUnlock(region) {
    // 아빠는 모든 지역 접근 가능
    if (currentUser && currentUser.id === 'dad') {
        return true;
    }

    // 후쿠오카는 기본 오픈
    if (region.unlockCondition === 'default') {
        return true;
    }

    if (!currentUser) return false;

    const history = JSON.parse(
        localStorage.getItem(`learning_history_${currentUser.id}`) || '{"daily":[]}'
    );

    switch (region.unlockCondition) {
        case 'characterQuiz100x3':
            const perfectCharQuizDays = history.daily.filter(day =>
                day.characterQuiz.total > 0 &&
                day.characterQuiz.correct === day.characterQuiz.total
            ).length;
            return perfectCharQuizDays >= 3;

        case 'conversation10min7days':
            const convDays = history.daily.filter(day =>
                (day.conversation.minutes || 0) >= 10
            ).length;
            return convDays >= 7;

        case 'vocabularyQuiz100x3':
            const perfectVocabQuizDays = history.daily.filter(day =>
                day.vocabularyQuiz.total > 0 &&
                day.vocabularyQuiz.correct === day.vocabularyQuiz.total
            ).length;
            return perfectVocabQuizDays >= 3;

        case 'conversation10min14days':
            const convDays14 = history.daily.filter(day =>
                (day.conversation.minutes || 0) >= 10
            ).length;
            return convDays14 >= 14;

        case 'quizAverage90':
            const allQuizzes = history.daily.flatMap(day => [
                day.characterQuiz.total > 0 ? (day.characterQuiz.correct / day.characterQuiz.total * 100) : null,
                day.vocabularyQuiz.total > 0 ? (day.vocabularyQuiz.correct / day.vocabularyQuiz.total * 100) : null
            ]).filter(score => score !== null);

            if (allQuizzes.length === 0) return false;
            const average = allQuizzes.reduce((a, b) => a + b, 0) / allQuizzes.length;
            return average >= 90;

        default:
            return false;
    }
}

// 잠금 해제 조건 표시
function showUnlockRequirement(regionId) {
    const region = japanRegions[regionId];
    alert(`🔒 ${region.name}은(는) 잠겨있습니다!\n\n미션: ${region.mission}\n\n미션을 완료하면 이 지역을 방문할 수 있습니다!`);
}

// 지역 선택
function selectRegion(regionId, isPreview = false) {
    const region = japanRegions[regionId];

    // Preview 모드가 아니고 잠겨있으면 차단
    if (!isPreview && !checkRegionUnlock(region) && !(currentUser && currentUser.id === 'dad')) {
        showUnlockRequirement(regionId);
        return;
    }

    currentRegion = regionId;
    updateTravelHeader(region.name); // 헤더 업데이트

    // 해당 지역 초기화 함수 이름 생성
    const initFuncName = `init${regionId.charAt(0).toUpperCase() + regionId.slice(1)}Trip`;

    // 이미 함수가 정의되어 있는지 확인 (정적으로 로드된 경우)
    const initializeRegion = () => {
        // 지역 선택 숨기고 상세 정보 표시
        document.getElementById('region-selection').style.display = 'none';
        const detailView = document.getElementById('region-detail');
        detailView.style.display = 'block';

        // 뒤로가기 버튼 주입 (항상 상단에 표시)
        const existingBackBtn = document.getElementById('travel-back-btn');
        if (existingBackBtn) existingBackBtn.remove();

        const backBtnHtml = `
            <div id="travel-back-btn" class="mb-4">
                <button onclick="backToRegionSelection()" class="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200">
                    <i class="fas fa-arrow-left"></i> 목록으로
                </button>
            </div>
        `;
        detailView.insertAdjacentHTML('afterbegin', backBtnHtml);

        // 해당 지역 초기화 함수 호출
        if (typeof window[initFuncName] === 'function') {
            window[initFuncName]();
        } else {
            console.error(`Initialization function ${initFuncName} not found for ${regionId}`);
        }

        // Preview 모드일 경우: 1.5초 후 모달 표시
        if (isPreview) {
            setTimeout(() => {
                showPreviewModal(region);
            }, 1500);
        }
    };

    // 함수가 이미 있으면 바로 실행, 없으면 스크립트 로드 후 실행
    if (typeof window[initFuncName] === 'function') {
        initializeRegion();
    } else {
        loadRegionScript(region).then(initializeRegion);
    }
}

// 맛보기 모드 종료 모달
function showPreviewModal(region) {
    const modalHtml = `
        <div id="preview-modal" class="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div class="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 text-center relative overflow-hidden shadow-2xl animate-slide-up">
                <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    🔒
                </div>
                <h2 class="text-2xl font-black text-gray-800 mb-2">맛보기 종료!</h2>
                <p class="text-gray-600 mb-6 text-sm">
                    <strong>${region.name}</strong> 여행 정보를 계속 보려면<br>
                    아래 미션을 완료해야 합니다.
                </p>
                
                <div class="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
                    <h3 class="text-red-600 font-bold text-xs uppercase mb-1">Mission</h3>
                    <p class="text-red-800 font-bold text-sm">${region.mission}</p>
                </div>

                <button onclick="closePreviewModal()" class="w-full py-3 bg-gray-800 text-white font-bold rounded-xl shadow-lg hover:bg-gray-900 transition-colors">
                    확인 (목록으로 돌아가기)
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    if (modal) modal.remove();
    backToRegionSelection();
}

// 지역 스크립트 동적 로드
function loadRegionScript(region) {
    return new Promise((resolve, reject) => {
        if (loadedScripts[region.id]) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = region.scriptFile;
        script.onload = () => {
            loadedScripts[region.id] = true;
            resolve();
        };
        script.onerror = () => {
            console.error(`Failed to load script: ${region.scriptFile}`);
            // 스크립트 로드 실패해도 UI는 띄워주되, 데이터가 없을 수 있음
            resolve();
        };
        document.head.appendChild(script);
    });
}

// 지역 선택으로 돌아가기
function backToRegionSelection() {
    document.getElementById('region-selection').style.display = 'grid';
    document.getElementById('region-detail').style.display = 'none';
    currentRegion = null;
    renderRegionSelection();
}

// 전역 노출
window.initJapanTravel = initJapanTravel;
window.selectRegion = selectRegion;
window.backToRegionSelection = backToRegionSelection;
window.handleRegionClick = handleRegionClick;
window.closeLevelUpModal = closeLevelUpModal;
window.showEssentialApps = showEssentialApps;
window.openShopping = openShopping;

console.log('japan_travel.js loaded');
