/**
 * grammar.js - AI 문장 연습 모듈
 */

const GrammarPractice = {
    init: function () {
        console.log('GrammarPractice initialized');
        this.render();
    },

    render: function () {
        const container = document.getElementById('grammar-content');
        if (!container) return;

        container.innerHTML = `
            <div class="space-y-6">
                <!-- 1. 문장 변환 연습 -->
                <div class="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
                    <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                        <i class="fas fa-magic"></i> 문장 변환기
                    </h3>
                    <div class="space-y-3">
                        <textarea id="grammar-input" 
                            class="w-full p-4 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none text-gray-700"
                            rows="3" 
                            placeholder="예: 학교에 가다 (한국어 또는 일본어 입력)"></textarea>
                        
                        <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                            <button onclick="GrammarPractice.setInput('학교에 가다')" class="px-3 py-1 bg-white text-indigo-600 text-xs rounded-full border border-indigo-200 whitespace-nowrap">학교에 가다</button>
                            <button onclick="GrammarPractice.setInput('밥을 먹다')" class="px-3 py-1 bg-white text-indigo-600 text-xs rounded-full border border-indigo-200 whitespace-nowrap">밥을 먹다</button>
                            <button onclick="GrammarPractice.setInput('친구를 만나다')" class="px-3 py-1 bg-white text-indigo-600 text-xs rounded-full border border-indigo-200 whitespace-nowrap">친구를 만나다</button>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <select id="target-form" class="p-3 rounded-xl border border-indigo-200 bg-white text-gray-700 font-medium">
                                <option value="polite">정중형 (ます/です)</option>
                                <option value="past">과거형 (た/だ)</option>
                                <option value="negative">부정형 (ない)</option>
                                <option value="te-form">연결형 (て)</option>
                                <option value="potential">가능형 (れる)</option>
                            </select>
                            <button onclick="GrammarPractice.transform()" 
                                class="bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition active:scale-95 flex items-center justify-center gap-2">
                                <span>변환하기</span> <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <!-- 결과 영역 -->
                    <div id="grammar-result" class="hidden mt-4 bg-white rounded-xl p-4 border border-indigo-100 animate-fade-in">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">결과</span>
                            <button onclick="GrammarPractice.speak()" class="text-gray-400 hover:text-indigo-600">
                                <i class="fas fa-volume-up text-lg"></i>
                            </button>
                        </div>
                        <p id="result-text" class="text-xl font-bold text-gray-800 mb-1"></p>
                        <p id="result-romaji" class="text-sm text-gray-500 mb-3 font-mono"></p>
                        <div class="bg-gray-50 rounded-lg p-3">
                            <p id="result-explanation" class="text-sm text-gray-600 leading-relaxed"></p>
                        </div>
                    </div>
                </div>

                <!-- 2. 문장 만들기 퀴즈 (추후 구현) -->
                <div class="bg-white rounded-2xl p-5 border-2 border-dashed border-gray-200 text-center opacity-75">
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                        <i class="fas fa-puzzle-piece text-xl"></i>
                    </div>
                    <h3 class="font-bold text-gray-600">문장 조립 퀴즈</h3>
                    <p class="text-xs text-gray-400 mt-1">준비 중입니다...</p>
                </div>
            </div>
        `;
    },

    setInput: function (text) {
        document.getElementById('grammar-input').value = text;
    },

    transform: async function () {
        const input = document.getElementById('grammar-input').value.trim();
        const form = document.getElementById('target-form').value;

        if (!input) {
            alert('문장을 입력해주세요!');
            return;
        }

        // UI 로딩 상태
        const btn = document.querySelector('button[onclick="GrammarPractice.transform()"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 변환 중...';
        btn.disabled = true;

        try {
            const data = await ApiClient.transformSentence(input, form);

            // 결과 표시
            const resultDiv = document.getElementById('grammar-result');
            document.getElementById('result-text').textContent = data.result;
            document.getElementById('result-romaji').textContent = data.romaji;
            document.getElementById('result-explanation').textContent = data.explanation;

            resultDiv.classList.remove('hidden');

            // TTS용 텍스트 저장
            this.currentText = data.result;

        } catch (error) {
            console.error('Transform failed:', error);
            alert('변환에 실패했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    },

    speak: function () {
        if (!this.currentText) return;

        const utterance = new SpeechSynthesisUtterance(this.currentText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
};

// 전역 노출
window.GrammarPractice = GrammarPractice;
