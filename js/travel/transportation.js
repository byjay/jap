/**
 * transportation.js - 일본 교통 가이드 (지하철, 버스, 패스 등)
 */

const transportationData = {
    icCards: [
        {
            title: "Suica / Pasmo (IC 카드)",
            icon: "fas fa-id-card",
            color: "green",
            desc: "한국의 티머니와 같은 충전식 교통카드입니다. 편의점 결제도 가능!",
            details: [
                "구매처: 주요 역 발매기 (보증금 500엔)",
                "사용처: 전철, 버스, 편의점, 자판기 등 전국 호환",
                "충전: 역 발매기나 편의점에서 현금 충전",
                "팁: 아이폰 유저는 '애플 페이'로 모바일 Suica 발급 가능 (보증금 없음!)"
            ]
        },
        {
            title: "Tokyo Subway Ticket",
            icon: "fas fa-ticket-alt",
            color: "blue",
            desc: "도쿄 여행 필수품! 24/48/72시간 지하철 무제한 패스.",
            details: [
                "가격: 24시간(800엔), 48시간(1200엔), 72시간(1500엔)",
                "대상: 도쿄 메트로 + 도에이 지하철 (JR선 불가)",
                "구매: 공항, 주요 역, 빅카메라 등 (여권 필요)",
                "가성비: 하루 4~5번 이상 타면 무조건 이득!"
            ]
        },
        {
            title: "JR Pass (전국/지역)",
            icon: "fas fa-train",
            color: "red",
            desc: "신칸센을 포함한 JR 노선 무제한 이용권.",
            details: [
                "종류: 전국 패스 (비쌈), 지역 패스 (간사이 와이드 등 추천)",
                "주의: '노조미' 등 일부 고속 열차 탑승 제한 있을 수 있음",
                "구매: 한국에서 미리 바우처 구매 후 현지 교환 추천",
                "가격 인상: 2023년 10월 대폭 인상되어 꼼꼼한 계산 필요"
            ]
        }
    ],
    busGuide: {
        title: "일본 버스 타는 법 (완전 정복)",
        steps: [
            { step: 1, text: "뒷문으로 탑승합니다.", sub: "앞문은 하차 전용입니다. (일부 지역 제외)" },
            { step: 2, text: "정리권(번호표)을 뽑거나 IC 카드를 찍습니다.", sub: "시발점에서는 정리권이 안 나올 수 있습니다." },
            { step: 3, text: "전광판의 번호와 요금을 확인합니다.", sub: "내 정리권 번호 아래에 있는 금액이 내야 할 요금입니다." },
            { step: 4, text: "하차 벨을 누르고 앞문으로 이동합니다.", sub: "미리 일어나지 마세요! 버스가 멈춘 후 이동해도 됩니다." },
            { step: 5, text: "요금함에 돈을 넣거나 IC 카드를 찍고 하차합니다.", sub: "거스름돈은 안 나옵니다! 미리 동전 교환기(료가에)를 이용하세요." }
        ]
    },
    etiquette: [
        { icon: "fas fa-mobile-alt", text: "통화는 금지! 진동 모드로 설정하세요." },
        { icon: "fas fa-volume-mute", text: "이어폰 소리가 새어 나가지 않게 주의하세요." },
        { icon: "fas fa-backpack", text: "백팩은 앞으로 메거나 선반에 올리세요." },
        { icon: "fas fa-utensils", text: "지하철/버스 내 음식물 섭취는 자제하세요." }
    ],
    koreanTips: [
        {
            title: "환승 할인이 없어요!",
            content: "한국과 달리 지하철 회사(JR, 메트로, 사철)가 다르면 표를 새로 사야 해서 요금이 비쌉니다. 패스나 IC 카드를 잘 활용하세요."
        },
        {
            title: "택시는 자동문입니다!",
            content: "택시 문을 직접 열거나 닫지 마세요. 기사님이 자동으로 조작해 주십니다."
        },
        {
            title: "구글 맵이 최고!",
            content: "일본 대중교통은 구글 맵이 가장 정확합니다. 출구 번호와 플랫폼 번호까지 확인하세요."
        }
    ]
};

function initTransportationGuide() {
    // Hide region selection and show region detail
    const regionSelection = document.getElementById('region-selection');
    const regionDetail = document.getElementById('region-detail');

    if (regionSelection) regionSelection.style.display = 'none';
    if (!regionDetail) return;

    regionDetail.style.display = 'block';
    regionDetail.innerHTML = `
        <div class="max-w-4xl mx-auto pb-20 animate-fade-in">
            <!-- Header -->
            <div class="sticky top-0 bg-gray-50 z-10 py-4 mb-6 border-b border-gray-200 flex items-center justify-between">
                <button onclick="initJapanTravel()" class="text-gray-500 hover:text-gray-800 transition-colors">
                    <i class="fas fa-arrow-left text-xl"></i>
                </button>
                <h2 class="text-2xl font-black text-gray-800">🇯🇵 일본 교통 완전 정복</h2>
                <div class="w-8"></div> <!-- Spacer -->
            </div>

            <!-- 1. IC Cards & Passes -->
            <section class="mb-10">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i class="fas fa-ticket-alt text-blue-500"></i> 필수 교통 패스 & 카드
                </h3>
                <div class="grid md:grid-cols-3 gap-4">
                    ${transportationData.icCards.map(card => `
                        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 rounded-full bg-${card.color}-100 flex items-center justify-center text-${card.color}-500">
                                    <i class="${card.icon}"></i>
                                </div>
                                <h4 class="font-bold text-gray-800 text-sm">${card.title}</h4>
                            </div>
                            <p class="text-xs text-gray-500 mb-3 leading-relaxed">${card.desc}</p>
                            <ul class="text-[10px] text-gray-600 space-y-1 bg-gray-50 p-2 rounded-lg">
                                ${card.details.map(d => `<li>• ${d}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- 2. Bus Guide -->
            <section class="mb-10">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i class="fas fa-bus text-green-500"></i> 일본 버스 타는 법
                </h3>
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    ${transportationData.busGuide.steps.map((step, idx) => `
                        <div class="flex items-start p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                            <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mr-4">
                                ${step.step}
                            </div>
                            <div>
                                <p class="font-bold text-gray-800 text-sm mb-1">${step.text}</p>
                                <p class="text-xs text-gray-500">${step.sub}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- 3. Etiquette & Tips -->
            <section class="grid md:grid-cols-2 gap-6">
                <!-- Etiquette -->
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <i class="fas fa-user-check text-purple-500"></i> 대중교통 에티켓
                    </h3>
                    <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                        <ul class="space-y-3">
                            ${transportationData.etiquette.map(item => `
                                <li class="flex items-center gap-3 text-sm text-gray-700">
                                    <i class="${item.icon} text-gray-400 w-5 text-center"></i>
                                    ${item.text}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Korean Tips -->
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <i class="fas fa-lightbulb text-yellow-500"></i> 한국인을 위한 꿀팁
                    </h3>
                    <div class="space-y-3">
                        ${transportationData.koreanTips.map(tip => `
                            <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                                <h4 class="font-bold text-yellow-800 text-sm mb-1">💡 ${tip.title}</h4>
                                <p class="text-xs text-yellow-700 leading-relaxed">${tip.content}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}

// 전역 노출
window.initTransportationGuide = initTransportationGuide;
