/**
 * word_study.js - 다국어(JP-Kana-KR-EN) 단어 암기 플래시카드 시스템
 * * [업데이트 사항]
 * 1. 데이터 구조 강화: Kanji(한자)와 Kana(히라가나/가타카나) 분리 저장
 * 2. 디스플레이 순서 변경: 순번 -> 한자 -> 히라가나 -> 한글발음 -> 의미(한/영) -> 품사
 * 3. UI 개선: 가독성을 위한 타이포그래피 계층 구조 재설계
 */

// ==========================================
// 1. 단어 데이터 (Vocabulary Data with Kana & Numbering)
// ==========================================
// Migrated to Backend API, but keeping structure for now to avoid breaking UI until fully switched
// For now, we initialize an empty object which will be populated by loadWordData
let wordData = {};

async function loadWordData() {
    try {
        const categories = await ApiClient.getWordCategories();
        if (categories) {
            wordData = categories;
            renderVocabCategories();
        }
    } catch (e) {
        console.error("Failed to load word data", e);
    }
}

// Hook into init
let currentWordIndex = 0;
let isCardFlipped = false;
let isShuffled = false;
let activeWordList = [];

// ==========================================
// 3. 초기화 및 유틸리티
// ==========================================
function initWordStudy() {
    renderWordCategories();
    document.addEventListener('keydown', handleKeyboardInput);
    console.log('단어 학습 모듈(Kana Enhanced) 초기화 완료');
}

function handleKeyboardInput(e) {
    const lessonView = document.getElementById('word-lesson');
    if (!lessonView || lessonView.style.display === 'none') return;

    if (e.code === 'Space') {
        e.preventDefault();
        flipCard();
    } else if (e.code === 'ArrowRight') {
        nextWord();
    } else if (e.code === 'ArrowLeft') {
        prevWord();
    } else if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        const currentWord = activeWordList[currentWordIndex];
        playWordAudio(currentWord.kanji);
    }
}

function playWordAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('이 브라우저는 음성 재생을 지원하지 않습니다.');
    }
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ==========================================
// 4. 카테고리 렌더링
// ==========================================
function renderWordCategories() {
    const container = document.getElementById('word-grid');
    if (!container) return;

    container.innerHTML = '';

    Object.keys(wordData).forEach(key => {
        const data = wordData[key];
        const card = document.createElement('div');

        card.className = `bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 group relative overflow-hidden`;

        const colorClass = data.color === 'blue' ? 'border-blue-500' :
            data.color === 'red' ? 'border-red-500' :
                data.color === 'green' ? 'border-green-500' :
                    data.color === 'orange' ? 'border-orange-500' :
                        data.color === 'purple' ? 'border-purple-500' :
                            data.color === 'teal' ? 'border-teal-500' :
                                data.color === 'brown' ? 'border-yellow-700' :
                                    data.color === 'indigo' ? 'border-indigo-500' :
                                        data.color === 'pink' ? 'border-pink-500' : 'border-gray-500';

        card.classList.add(colorClass);

        card.innerHTML = `
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <i class="${data.icon} text-6xl text-gray-800"></i>
            </div>
            <div class="relative z-10">
                <div class="flex items-center justify-between mb-3">
                    <i class="${data.icon} text-${data.color}-500 text-3xl group-hover:scale-110 transition-transform"></i>
                    <span class="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase">Word Book</span>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-1 truncate">${data.title}</h3>
                <p class="text-sm text-gray-500 mb-4">${data.words.length} Words</p>
                <div class="flex items-center text-xs font-medium text-${data.color}-600 group-hover:underline">
                    학습 시작하기 <i class="fas fa-arrow-right ml-1"></i>
                </div>
            </div>
        `;

        card.onclick = () => openWordLesson(key);
        container.appendChild(card);
    });
}

// ==========================================
// 5. 학습 화면 진입
// ==========================================
function openWordLesson(category) {
    currentWordCategory = category;
    currentWordIndex = 0;
    isCardFlipped = false;
    isShuffled = false;

    activeWordList = [...wordData[category].words];

    document.getElementById('word-categories').style.display = 'none';
    const lessonView = document.getElementById('word-lesson');
    lessonView.style.display = 'block';

    const data = wordData[category];
    document.getElementById('word-lesson-title').innerHTML = `
        <span class="flex items-center gap-2">
            <i class="${data.icon}"></i> ${data.title}
        </span>
    `;

    renderCard();
    updateWordNavigation();
}

function toggleShuffle() {
    isShuffled = !isShuffled;
    currentWordIndex = 0;
    isCardFlipped = false;

    const shuffleBtn = document.getElementById('btn-shuffle');

    if (isShuffled) {
        activeWordList = shuffleArray([...wordData[currentWordCategory].words]);
        if (shuffleBtn) {
            shuffleBtn.classList.add('bg-indigo-100', 'text-indigo-700');
            shuffleBtn.innerHTML = '<i class="fas fa-random mr-1"></i> 셔플 켜짐';
        }
    } else {
        activeWordList = [...wordData[currentWordCategory].words]; // ID 순서 복구
        if (shuffleBtn) {
            shuffleBtn.classList.remove('bg-indigo-100', 'text-indigo-700');
            shuffleBtn.innerHTML = '<i class="fas fa-random mr-1"></i> 셔플 끄기';
        }
    }

    renderCard();
    updateWordNavigation();
}

// ==========================================
// 5-1. 단어 정렬 기능 (NEW)
// ==========================================
let currentSortMode = 'id'; // 'id', 'kana', 'kr', 'shuffle'

function sortWords(mode) {
    currentSortMode = mode;
    currentWordIndex = 0;
    isCardFlipped = false;
    
    const originalWords = [...wordData[currentWordCategory].words];
    
    switch(mode) {
        case 'id':
            // ID 순 (기본)
            activeWordList = originalWords.sort((a, b) => a.id - b.id);
            break;
        case 'kana':
            // 일본어 가나 순 정렬
            activeWordList = originalWords.sort((a, b) => 
                (a.kana || a.kanji).localeCompare(b.kana || b.kanji, 'ja')
            );
            break;
        case 'kr':
            // 한글 순 정렬
            activeWordList = originalWords.sort((a, b) => 
                a.kr.localeCompare(b.kr, 'ko')
            );
            break;
        case 'shuffle':
            // 랜덤 셔플
            activeWordList = shuffleArray(originalWords);
            break;
        default:
            activeWordList = originalWords;
    }
    
    // UI 버튼 상태 업데이트
    updateSortButtons(mode);
    renderCard();
    updateWordNavigation();
}

function updateSortButtons(activeMode) {
    const sortButtons = document.querySelectorAll('[data-sort-mode]');
    sortButtons.forEach(btn => {
        const mode = btn.dataset.sortMode;
        if (mode === activeMode) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-gray-100', 'text-gray-600');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-600');
        }
    });
}

// 전역 노출
window.sortWords = sortWords;


// ==========================================
// 6. 플래시카드 렌더링 (순서: 한자 -> 히라가나 -> 발음 -> 뜻 -> 품사)
// ==========================================
function renderCard() {
    const word = activeWordList[currentWordIndex];
    const container = document.getElementById('word-card-container');

    let contentHtml = '';

    if (!isCardFlipped) {
        // [앞면] 번호 + 한자(메인)
        contentHtml = `
            <div class="w-full h-[500px] flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl border-2 border-gray-100 cursor-pointer hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group" onclick="flipCard()">
                
                <!-- 상단 번호 뱃지 -->
                <div class="absolute top-6 left-6">
                    <span class="px-3 py-1 rounded-full bg-gray-800 text-white text-sm font-bold tracking-widest shadow-md">
                        #${String(word.id).padStart(2, '0')}
                    </span>
                </div>
                
                <!-- 오디오 버튼 -->
                <button onclick="event.stopPropagation(); playWordAudio('${word.kanji}')" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors shadow-sm z-10">
                    <i class="fas fa-volume-up text-lg"></i>
                </button>

                <!-- 메인 한자 -->
                <div class="text-center z-0 px-4">
                    <div class="text-xs text-gray-400 font-bold uppercase mb-4 tracking-widest">Japanese (Kanji)</div>
                    <div class="text-6xl md:text-8xl font-black text-gray-800 mb-6 tracking-tight group-hover:scale-105 transition-transform duration-300">
                        ${word.kanji}
                    </div>
                </div>

                <!-- 하단 힌트 -->
                <div class="absolute bottom-10 text-gray-400 font-medium text-sm animate-bounce">
                    Click to flip
                </div>
                <div class="absolute bottom-0 w-full h-3 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </div>
        `;
    } else {
        // [뒷면] 히라가나 -> 한글발음 -> 뜻 -> 품사 순서 배치
        // 뒷면은 직접 onclick을 제거하고 명시적 버튼으로 처리하여 이벤트 충돌 방지
        contentHtml = `
            <div class="w-full h-[500px] flex flex-col bg-blue-50 rounded-2xl shadow-xl border-2 border-blue-200 relative overflow-hidden">
                
                <!-- 상단: 한자 작게 (참고용) -->
                <div class="w-full py-4 bg-white/50 border-b border-blue-100 text-center relative">
                    <span class="text-gray-400 text-sm font-bold mr-2">#${String(word.id).padStart(2, '0')}</span>
                    <span class="text-2xl font-bold text-gray-600">${word.kanji}</span>
                    <button onclick="playWordAudio('${word.kanji}')" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>

                <!-- 메인 내용 영역 (Flex Column) -->
                <div class="flex-1 flex flex-col items-center justify-center p-6 space-y-4 overflow-y-auto">
                    
                    <!-- 1. 히라가나 (가장 강조) -->
                    <div class="text-center w-full">
                        <div class="text-[10px] text-blue-400 font-bold uppercase mb-1">1. Reading (Kana)</div>
                        <div class="text-5xl font-bold text-blue-600 font-serif">
                            ${word.kana}
                        </div>
                    </div>

                    <!-- 2. 한글 발음 -->
                    <div class="text-center w-full bg-white rounded-lg py-2 shadow-sm border border-blue-100">
                        <div class="text-[10px] text-gray-400 font-bold uppercase mb-1">2. Pronunciation</div>
                        <div class="text-xl font-medium text-gray-700">
                            [ ${word.kr_pron} ]
                        </div>
                    </div>

                    <!-- 3. 의미 (한글/영어) -->
                    <div class="text-center w-full grid grid-cols-2 gap-4">
                        <div class="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                            <div class="text-[10px] text-gray-400 font-bold uppercase mb-1">3. Korean</div>
                            <div class="text-2xl font-bold text-gray-800 break-keep">${word.kr}</div>
                        </div>
                        <div class="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                            <div class="text-[10px] text-indigo-400 font-bold uppercase mb-1">4. English</div>
                            <div class="text-lg font-medium text-indigo-700 leading-tight flex items-center justify-center h-full">${word.en}</div>
                        </div>
                    </div>

                    <!-- 4. 품사 (뱃지) -->
                    <div class="text-center">
                        <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-bold uppercase">
                            ${word.type}
                        </span>
                    </div>

                    <!-- 5. AI 기능 버튼들 -->
                    <div class="w-full space-y-2">
                        <button onclick="openConversationModal('${word.kanji}')" class="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition transform active:scale-95">
                            <i class="fas fa-comments"></i> 이 단어로 회화 만들기
                        </button>
                        <button onclick="openSentenceModal('${word.kanji}')" class="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition transform active:scale-95">
                            <i class="fas fa-pen-fancy"></i> 이 단어로 문장 만들기
                        </button>
                    </div>

                    <!-- 6. 앞면으로 돌아가기 버튼 -->
                    <button onclick="flipCard()" class="w-full py-2 mt-2 bg-gray-100 text-gray-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition">
                        <i class="fas fa-undo"></i> 앞면 보기
                    </button>

                </div>
            </div>
        `;
    }

    container.innerHTML = contentHtml;

    if (isCardFlipped) {
        playWordAudio(word.kanji);
    }
}

// ==========================================
// 7. 네비게이션
// ==========================================
function flipCard() {
    isCardFlipped = !isCardFlipped;
    renderCard();
}

function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        isCardFlipped = false;
        renderCard();
        updateWordNavigation();
    }
}

function nextWord() {
    if (currentWordIndex < activeWordList.length - 1) {
        currentWordIndex++;
        isCardFlipped = false;
        renderCard();
        updateWordNavigation();
    }
}

function updateWordNavigation() {
    const prevBtn = document.getElementById('word-prev-btn');
    const nextBtn = document.getElementById('word-next-btn');
    const counter = document.getElementById('word-counter');

    if (counter) {
        counter.innerText = `${currentWordIndex + 1} / ${activeWordList.length}`;
    }

    if (prevBtn) {
        prevBtn.disabled = currentWordIndex === 0;
        prevBtn.className = currentWordIndex === 0
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:text-blue-600 transition-colors';
    }

    if (nextBtn) {
        nextBtn.disabled = currentWordIndex === activeWordList.length - 1;
        nextBtn.className = currentWordIndex === activeWordList.length - 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:text-blue-600 transition-colors';
    }

    const progressBar = document.getElementById('word-progress-bar');
    if (progressBar) {
        const percent = ((currentWordIndex + 1) / activeWordList.length) * 100;
        progressBar.style.width = `${percent}%`;
    }
}

function backToWordCategories() {
    document.getElementById('word-categories').style.display = 'block';
    document.getElementById('word-lesson').style.display = 'none';
    isShuffled = false;

    const shuffleBtn = document.getElementById('btn-shuffle');
    if (shuffleBtn) {
        shuffleBtn.classList.remove('bg-indigo-100', 'text-indigo-700');
        shuffleBtn.innerHTML = '<i class="fas fa-random mr-1"></i> 셔플 끄기';
    }
}

console.log('word_study.js (Kana Enhanced) 로드 완료');

// ==========================================
// 8. AI 회화 모달 (NEW)
// ==========================================
async function openConversationModal(word) {
    const modal = document.getElementById('ai-conversation-modal');
    const content = document.getElementById('ai-conversation-content');
    const targetText = document.getElementById('ai-modal-word-target');

    if (!modal) return;

    // Reset state
    modal.classList.remove('hidden');
    targetText.innerText = `단어: ${word}`;
    content.innerHTML = `
        <div class="text-center py-10" id="ai-loading-state">
            <i class="fas fa-spinner fa-spin text-4xl text-indigo-500 mb-4"></i>
            <p class="text-gray-500 font-medium">AI가 '${word}'(으)로 회화를 만들고 있어요...</p>
        </div>
    `;

    try {
        const data = await ApiClient.generateWordConversation(word);

        if (!data || !data.dialogue) {
            throw new Error('데이터 생성 실패');
        }

        // Render Dialogue
        let html = `<div class="bg-indigo-50 p-3 rounded-lg text-center mb-4 text-indigo-800 font-bold text-sm border border-indigo-100">${data.title || 'AI 회화'}</div>`;
        html += '<div class="space-y-4">';

        data.dialogue.forEach(line => {
            const isA = line.speaker === 'A';
            html += `
                <div class="flex ${isA ? 'justify-start' : 'justify-end'}">
                    <div class="max-w-[85%] ${isA ? 'bg-white border-gray-200 text-gray-800' : 'bg-indigo-600 text-white'} rounded-2xl px-4 py-3 shadow-sm border">
                        <div class="font-bold text-xs mb-1 opacity-70">${line.speaker}</div>
                        <div class="text-lg font-bold mb-1 leading-snug">${line.jp}</div>
                        <div class="text-xs opacity-70 mb-2 font-mono">${line.romaji}</div>
                        <div class="text-sm font-medium border-t ${isA ? 'border-gray-100' : 'border-indigo-500'} pt-2 opacity-95">${line.kr}</div>
                    </div>
                </div>
             `;
        });

        html += '</div>';
        content.innerHTML = html;

    } catch (e) {
        console.error(e);
        content.innerHTML = `
            <div class="text-center py-10 text-red-500">
                <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
                <p>회화 생성에 실패했습니다.<br>잠시 후 다시 시도해주세요.</p>
            </div>
        `;
    }
}

function closeConversationModal() {
    document.getElementById('ai-conversation-modal').classList.add('hidden');
}

// ==========================================
// AI 문장 생성 기능
// ==========================================
async function openSentenceModal(word) {
    const modal = document.getElementById('ai-sentence-modal');
    const content = document.getElementById('ai-sentence-content');
    const wordTarget = document.getElementById('ai-sentence-word-target');

    if (!modal || !content) {
        console.error('Sentence modal not found');
        alert('문장 생성 모달을 찾을 수 없습니다.');
        return;
    }

    modal.classList.remove('hidden');
    wordTarget.textContent = `단어: ${word}`;
    content.innerHTML = `
        <div class="text-center py-10">
            <i class="fas fa-spinner fa-spin text-4xl text-emerald-500 mb-4"></i>
            <p class="text-gray-500 font-medium">AI가 '${word}'(으)로 예문을 만들고 있어요...</p>
        </div>
    `;

    try {
        const data = await ApiClient.generateWordSentences(word);

        if (!data || !data.sentences) {
            throw new Error('데이터 생성 실패');
        }

        let html = `<div class="bg-emerald-50 p-3 rounded-lg text-center mb-4 text-emerald-800 font-bold text-sm border border-emerald-100">
            <i class="fas fa-lightbulb mr-2"></i>'${word}' 활용 예문
        </div>`;
        html += '<div class="space-y-4">';

        data.sentences.forEach((s, idx) => {
            html += `
                <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">${idx + 1}</div>
                        <div class="flex-1">
                            <div class="text-lg font-bold text-gray-800 mb-1">${s.jp}</div>
                            <div class="text-xs text-gray-400 font-mono mb-2">${s.romaji}</div>
                            <div class="text-sm text-emerald-700 font-medium">${s.kr}</div>
                        </div>
                        <button onclick="playWordAudio('${s.jp.replace(/'/g, "\\'")}')" class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        content.innerHTML = html;

    } catch (e) {
        console.error(e);
        content.innerHTML = `
            <div class="text-center py-10 text-red-500">
                <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
                <p>문장 생성에 실패했습니다.<br>잠시 후 다시 시도해주세요.</p>
            </div>
        `;
    }
}

function closeSentenceModal() {
    document.getElementById('ai-sentence-modal').classList.add('hidden');
}

// Export logic
window.openConversationModal = openConversationModal;
window.closeConversationModal = closeConversationModal;
window.openSentenceModal = openSentenceModal;
window.closeSentenceModal = closeSentenceModal;