/**
 * vocabulary.js - 단어 학습 모듈
 */

// 전역 변수
let vocabModuleData = {};
let currentCategory = '';
let currentWordIndex = 0;
let currentWords = [];

// 단어 데이터 로드 및 처리
function processVocabularyData() {
    if (typeof wordList !== 'undefined') {
        // wordList(words_data.js)를 카테고리별로 그룹화
        vocabModuleData = wordList.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push({
                word: item.japanese_word,
                pronunciation: item.reading + ' ' + item.pronunciation,
                translation: item.korean_meaning,
                romaji: item.reading
            });
            return acc;
        }, {});
        console.log('단어 데이터 처리 완료:', Object.keys(vocabModuleData));
    } else {
        console.error('wordList가 정의되지 않았습니다. js/words_data.js를 확인하세요.');
    }
}

// HTML 구조 주입
function injectVocabularyHTML() {
    const container = document.getElementById('vocabulary');
    if (!container) return;

    container.innerHTML = `
        <div id="vocabulary-categories" class="container mx-auto px-3">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-900">📚 단어장</h2>
            </div>
            <!-- 모바일에서 더 많은 카테고리가 한 화면에 보이도록 3열 + 작은 간격 적용 -->
            <div id="vocabulary-category-grid" class="grid grid-cols-3 md:grid-cols-4 gap-3"></div>
        </div>
        
        <div id="vocabulary-word-section" style="display: none;" class="container mx-auto px-4 max-w-2xl">
            <div class="flex justify-between items-center mb-6">
                <button onclick="backToVocabularyCategories()" class="text-gray-600 hover:text-gray-900 font-medium">
                    <i class="fas fa-arrow-left mr-2"></i>목록으로
                </button>
                <h3 id="current-category-title" class="text-xl font-bold text-gray-800"></h3>
                <button id="vocab-autoplay-btn" onclick="startVocabularyAutoPlay()" class="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-bold text-sm">
                    <i class="fas fa-play mr-2"></i>자동 재생
                </button>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                <div id="vocabulary-word" class="text-6xl font-bold mb-4 text-gray-800 tracking-wider"></div>
                <div id="vocabulary-pronunciation" class="text-2xl text-gray-500 mb-6 font-medium"></div>
                <div id="vocabulary-translation" class="text-3xl text-blue-600 font-bold mb-10"></div>
                
                <div class="flex justify-between items-center mb-8 px-4">
                    <button id="vocab-prev-btn" onclick="previousVocabulary()" class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                        <i class="fas fa-chevron-left text-xl"></i>
                    </button>
                    <button onclick="playVocabularyAudio()" class="w-20 h-20 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 shadow-sm hover:shadow-md transition-all transform hover:scale-105 flex items-center justify-center">
                        <i class="fas fa-volume-up text-3xl"></i>
                    </button>
                    <button id="vocab-next-btn" onclick="nextVocabulary()" class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                        <i class="fas fa-chevron-right text-xl"></i>
                    </button>
                </div>
                
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                Progress
                            </span>
                        </div>
                        <div class="text-right">
                            <span id="vocabulary-progress-text" class="text-xs font-semibold inline-block text-blue-600">
                                0 / 0
                            </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div id="vocabulary-progress" style="width:0%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 단어 학습 초기화
function initVocabulary() {
    processVocabularyData();
    injectVocabularyHTML();
    createVocabularyCategories();
}

// 카테고리 카드 생성
function createVocabularyCategories() {
    const grid = document.getElementById('vocabulary-category-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const categoryIcons = {
        '가족': 'fas fa-users',
        '음식': 'fas fa-utensils',
        '동물': 'fas fa-paw',
        '색깔': 'fas fa-palette',
        '숫자': 'fas fa-calculator',
        '시간': 'fas fa-clock',
        '인사': 'fas fa-hand-paper',
        '기타': 'fas fa-star'
    };

    Object.keys(vocabModuleData).forEach(category => {
        const card = document.createElement('div');
        // 모바일 한 화면에 여러 개가 들어오도록 더 작고 컴팩트한 카드로 조정 (동물 포함 모든 카테고리 공통)
        card.className = 'bg-white rounded-md shadow-sm p-2 hover:shadow-md transition-all cursor-pointer border border-gray-100 transform hover:-translate-y-0.5';
        card.innerHTML = `
            <div class="flex flex-col items-center">
                <div class="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center mb-1.5">
                    <i class="${categoryIcons[category] || 'fas fa-book'} text-base text-blue-500"></i>
                </div>
                <h3 class="text-[11px] font-bold text-gray-800 mb-0.5 text-center break-keep leading-snug">${category}</h3>
                <span class="text-[9px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">${vocabModuleData[category].length} 단어</span>
            </div>
        `;

        card.onclick = () => selectVocabularyCategory(category);
        grid.appendChild(card);
    });
}

// 카테고리 선택
function selectVocabularyCategory(category) {
    currentCategory = category;
    currentWordIndex = 0;
    currentWords = vocabModuleData[category] || [];

    if (currentWords.length === 0) {
        console.warn('선택한 카테고리에 단어가 없습니다.');
        return;
    }

    document.getElementById('vocabulary-categories').style.display = 'none';
    document.getElementById('vocabulary-word-section').style.display = 'block';

    // 카테고리 제목 설정
    const titleEl = document.getElementById('current-category-title');
    if (titleEl) titleEl.textContent = category;

    displayCurrentVocabulary();
    updateVocabularyProgress();
    updateVocabularyNavigation();
}

// 현재 단어 표시
function displayCurrentVocabulary() {
    const index = currentWordIndex;
    const word = currentWords[index];

    if (!word) return;

    const wordElement = document.getElementById('vocabulary-word');
    const pronunciationElement = document.getElementById('vocabulary-pronunciation');
    const translationElement = document.getElementById('vocabulary-translation');

    if (wordElement) wordElement.textContent = word.word;
    if (pronunciationElement) pronunciationElement.textContent = word.pronunciation;
    if (translationElement) translationElement.textContent = word.translation;
}

// 진도 업데이트
function updateVocabularyProgress() {
    const total = currentWords.length;
    const current = currentWordIndex + 1;
    const percentage = (current / total) * 100;

    const progressBar = document.getElementById('vocabulary-progress');
    const progressText = document.getElementById('vocabulary-progress-text');

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${current} / ${total}`;
}

// 네비게이션 버튼 업데이트
function updateVocabularyNavigation() {
    const prevBtn = document.getElementById('vocab-prev-btn');
    const nextBtn = document.getElementById('vocab-next-btn');

    if (prevBtn) {
        prevBtn.disabled = currentWordIndex === 0;
        prevBtn.style.opacity = currentWordIndex === 0 ? '0.3' : '1';
        prevBtn.style.cursor = currentWordIndex === 0 ? 'not-allowed' : 'pointer';
    }

    if (nextBtn) {
        nextBtn.disabled = currentWordIndex === currentWords.length - 1;
        nextBtn.style.opacity = currentWordIndex === currentWords.length - 1 ? '0.3' : '1';
        nextBtn.style.cursor = currentWordIndex === currentWords.length - 1 ? 'not-allowed' : 'pointer';
    }
}

// 이전 단어
function previousVocabulary() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayCurrentVocabulary();
        updateVocabularyProgress();
        updateVocabularyNavigation();
    }
}

// 다음 단어
function nextVocabulary() {
    if (currentWordIndex < currentWords.length - 1) {
        currentWordIndex++;
        displayCurrentVocabulary();
        updateVocabularyProgress();
        updateVocabularyNavigation();
    }
}

// 카테고리로 돌아가기
function backToVocabularyCategories() {
    document.getElementById('vocabulary-categories').style.display = 'block';
    document.getElementById('vocabulary-word-section').style.display = 'none';
    currentCategory = '';
    currentWordIndex = 0;
    currentWords = [];
}

// 발음 듣기
function playVocabularyAudio() {
    const word = currentWords[currentWordIndex];
    if (word && word.word) {
        // playAudio 함수는 index.html 또는 다른 js 파일에 정의되어 있어야 함
        if (typeof playAudio === 'function') {
            playAudio(word.word);
        } else {
            console.warn('playAudio function not found');
            // Fallback TTS
            const utterance = new SpeechSynthesisUtterance(word.word);
            utterance.lang = 'ja-JP';
            window.speechSynthesis.speak(utterance);
        }
    }
}

// loadVocabularyData 함수는 더 이상 필요 없지만 호환성을 위해 남겨두거나 빈 함수로 대체
// loadVocabularyData 함수는 더 이상 필요 없지만 호환성을 위해 남겨두거나 빈 함수로 대체
async function loadVocabularyData() {
    console.log('Using local wordList data instead of fetch');
    return Promise.resolve({});
}

// ==========================================
// 자동 재생 기능 (Auto Play)
// ==========================================
let isVocabAutoPlaying = false;
let vocabWakeLock = null;

async function startVocabularyAutoPlay() {
    if (isVocabAutoPlaying) return;
    isVocabAutoPlaying = true;

    // 화면 꺼짐 방지
    try {
        if ('wakeLock' in navigator) {
            vocabWakeLock = await navigator.wakeLock.request('screen');
        }
    } catch (err) {
        console.log('Wake Lock Error:', err);
    }

    // 버튼 상태 변경
    updateAutoPlayButton(true);

    // 루프 시작
    while (isVocabAutoPlaying && currentWordIndex < currentWords.length) {
        const word = currentWords[currentWordIndex];

        // 3회 반복
        for (let i = 0; i < 3; i++) {
            if (!isVocabAutoPlaying) break;

            // 1. 일본어
            await speakText(word.word, 'ja-JP');
            if (!isVocabAutoPlaying) break;
            await new Promise(r => setTimeout(r, 500));

            // 2. 한국어
            await speakText(word.translation, 'ko-KR');
            if (!isVocabAutoPlaying) break;
            await new Promise(r => setTimeout(r, 1000));
        }

        if (!isVocabAutoPlaying) break;

        // 3. 다음 단어로 이동
        if (currentWordIndex < currentWords.length - 1) {
            nextVocabulary();
            await new Promise(r => setTimeout(r, 1000)); // 이동 후 잠시 대기
        } else {
            // 마지막 단어면 종료
            stopVocabularyAutoPlay();
            break;
        }
    }
}

function speakText(text, lang) {
    return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = lang === 'ko-KR' ? 1.2 : 1.0; // 한국어는 조금 빠르게
        utterance.onend = resolve;
        utterance.onerror = resolve;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    });
}

function stopVocabularyAutoPlay() {
    isVocabAutoPlaying = false;

    // Wake Lock 해제
    if (vocabWakeLock) {
        vocabWakeLock.release().then(() => {
            vocabWakeLock = null;
        });
    }

    updateAutoPlayButton(false);
}

function updateAutoPlayButton(isPlaying) {
    const btn = document.getElementById('vocab-autoplay-btn');
    if (btn) {
        if (isPlaying) {
            btn.innerHTML = '<i class="fas fa-stop mr-2"></i>정지';
            btn.className = 'px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors font-bold text-sm animate-pulse';
            btn.onclick = stopVocabularyAutoPlay;
        } else {
            btn.innerHTML = '<i class="fas fa-play mr-2"></i>자동 재생';
            btn.className = 'px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-bold text-sm';
            btn.onclick = startVocabularyAutoPlay;
        }
    }
}

// 전역 노출
window.selectVocabularyCategory = selectVocabularyCategory;
window.startVocabularyAutoPlay = startVocabularyAutoPlay;
window.stopVocabularyAutoPlay = stopVocabularyAutoPlay;

console.log('vocabulary.js loaded');
