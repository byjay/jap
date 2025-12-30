/**
 * stroke_animation.js - 획순 애니메이션 모듈 (간소화 버전)
 * KanjiVG SVG를 사용하여 획순 애니메이션을 표시합니다.
 */

const svgCache = {};

function getCharHex(char) {
    return char.charCodeAt(0).toString(16).padStart(5, '0');
}

async function playStrokeAnimation(char) {
    const container = document.getElementById('stroke-guide-container');
    if (!container) {
        console.error('[StrokeAnim] Container not found');
        return;
    }

    // 초기화
    container.innerHTML = '';
    if (typeof clearCanvas === 'function') clearCanvas();

    // 로딩 표시
    container.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><div class="animate-spin rounded-full h-10 w-10 border-4 border-red-500 border-t-transparent"></div></div>';

    try {
        const hex = getCharHex(char);
        console.log(`[StrokeAnim] Loading: ${char} (${hex})`);

        let svgText = svgCache[hex];
        if (!svgText) {
            const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            svgText = await response.text();
            svgCache[hex] = svgText;
        }

        // SVG 파싱
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg) throw new Error('Invalid SVG');

        // 컨테이너 초기화
        container.innerHTML = '';

        // SVG 스타일 설정
        svg.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;';
        svg.setAttribute('viewBox', '0 0 109 109');

        // 숫자 제거
        const numbers = svg.querySelector('g[id^="kvg:StrokeNumbers"]');
        if (numbers) numbers.remove();

        // 모든 패스 찾기
        const paths = Array.from(svg.querySelectorAll('path'));
        console.log(`[StrokeAnim] Found ${paths.length} paths`);

        // 배경 가이드 (연한 회색) - 원본 패스들을 복제
        paths.forEach(path => {
            const bgPath = path.cloneNode(true);
            bgPath.style.cssText = 'fill:none;stroke:#d1d5db;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;opacity:0.5;';
            bgPath.removeAttribute('id'); // ID 충돌 방지
            svg.insertBefore(bgPath, path);
        });

        // 애니메이션 패스 스타일 (빨간색)
        paths.forEach(path => {
            path.style.cssText = 'fill:none;stroke:#ef4444;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;';
        });

        // DOM에 추가
        container.appendChild(svg);

        // 한 프레임 대기 후 애니메이션 시작
        await new Promise(r => setTimeout(r, 50));

        // 순차 애니메이션
        for (const path of paths) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

            // 애니메이션
            await new Promise(resolve => {
                const duration = 500;
                const start = performance.now();

                function animate(time) {
                    const progress = Math.min((time - start) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                    path.style.strokeDashoffset = length * (1 - ease);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        resolve();
                    }
                }
                requestAnimationFrame(animate);
            });

            // 획 사이 잠시 대기
            await new Promise(r => setTimeout(r, 100));
        }

        console.log('[StrokeAnim] Animation complete');

    } catch (e) {
        console.error('[StrokeAnim] Error:', e);
        // 폴백: 연한 글자 표시
        container.innerHTML = `
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-[100px] text-gray-300 font-bold opacity-30" style="font-family:'Noto Sans JP',sans-serif;">${char}</span>
                <span class="text-xs text-gray-400">따라 써보세요</span>
            </div>
        `;
    }
}

// 글로벌 등록
window.playStrokeAnimation = playStrokeAnimation;
console.log('[StrokeAnim] Module loaded');
