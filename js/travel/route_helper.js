
/**
 * route_helper.js
 * Google Maps Directions API & Character Animation Helper
 * "미리여행" (Preview Travel) 기능 구현
 */

let directionsService;
let directionsRenderer;
let characterMarker;
let animationFrameId;
let isAnimating = false;

function initRouteHelper(map) {
    if (!map) return;

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true, // 기본 마커 숨김 (커스텀 캐릭터 사용 위해)
        preserveViewport: true,
        polylineOptions: {
            strokeColor: '#00B4D8',
            strokeWeight: 6,
            strokeOpacity: 0.6
        }
    });

    // 스타일 주입 (캐릭터 애니메이션용)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounce-move {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.1); }
        }
        .character-marker {
            animation: bounce-move 0.5s infinite ease-in-out;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
            cursor: pointer;
        }
        .preview-mode-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); z-index: 9999;
            display: flex; flex-col; pointer-events: none;
        }
        .preview-controls {
            position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
            z-index: 10000; pointer-events: auto;
            display: flex; gap: 10px;
        }
    `;
    document.head.appendChild(style);
}

function startPreviewTravel(itineraryIds, database) {
    if (!itineraryIds || itineraryIds.length < 2) {
        alert('최소 2개 이상의 장소를 선택해야 미리여행을 떠날 수 있습니다!');
        return;
    }

    // 1. 전체 화면 모드 전환 (UI 숨김 처리 등은 각 페이지 로직에서 처리하거나 여기서 강제)
    const mapEl = document.getElementById('map');
    mapEl.style.position = 'fixed';
    mapEl.style.top = '0';
    mapEl.style.left = '0';
    mapEl.style.width = '100vw';
    mapEl.style.height = '100vh';
    mapEl.style.zIndex = '9000';
    google.maps.event.trigger(window.map, 'resize');

    // 2. 경로 계산 및 애니메이션 시작
    const waypoints = itineraryIds.map(id => {
        const item = database.find(p => p.id === id);
        return { location: { lat: item.lat, lng: item.lng }, stopover: true };
    });

    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    directionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: 'DRIVING'
    }, (response, status) => {
        if (status === 'OK') {
            directionsRenderer.setMap(window.map);
            directionsRenderer.setDirections(response);

            // 경로 데이터 추출 (Overview Path)
            const path = response.routes[0].overview_path;
            animateCharacter(path, database, itineraryIds);

            // 종료 버튼 표시
            showExitButton();
        } else {
            alert('경로를 찾을 수 없습니다.');
            exitPreviewMode();
        }
    });
}

function animateCharacter(path, database, itineraryIds) {
    if (isAnimating) return;
    isAnimating = true;

    // 캐릭터 마커 생성 (아빠 캐릭터 이미지 사용)
    // 실제 이미지 경로가 없다면 이모지로 대체하거나 플레이스홀더 사용
    // 여기서는 커스텀 오버레이 대신 간단히 MarkerLabel이나 RichMarker를 쓸 수 없으므로
    // Google Maps Marker의 icon 속성을 사용하되, GIF나 애니메이션은 제한적임.
    // 따라서 HTML Overlay를 사용하는 것이 가장 좋음.

    // 간단한 구현을 위해 기본 마커를 커스텀 아이콘으로 변경하고 위치를 업데이트
    const characterIcon = {
        url: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png', // 예시: 달리는 사람 아이콘
        scaledSize: new google.maps.Size(60, 60),
        anchor: new google.maps.Point(30, 60)
    };

    if (characterMarker) characterMarker.setMap(null);
    characterMarker = new google.maps.Marker({
        position: path[0],
        map: window.map,
        icon: characterIcon,
        zIndex: 9999,
        animation: google.maps.Animation.BOUNCE // 기본 바운스 효과
    });

    let step = 0;
    const speed = 5; // 이동 속도 (스텝 건너뛰기)

    function move() {
        if (!isAnimating) return;

        step += speed;
        if (step >= path.length) {
            step = path.length - 1;
            isAnimating = false;
            // 도착 축하 효과
            alert('🎉 여행 코스 완주! 즐거운 여행 되세요!');
            return;
        }

        const nextPos = path[step];
        characterMarker.setPosition(nextPos);
        window.map.panTo(nextPos); // 카메라가 캐릭터를 따라감

        // 중간 경유지 근처에 오면 말풍선 띄우기 (고도화 가능)

        animationFrameId = requestAnimationFrame(move);
    }

    move();
}

function showExitButton() {
    const btn = document.createElement('button');
    btn.id = 'exit-preview-btn';
    btn.innerHTML = '❌ 미리여행 종료';
    btn.className = 'fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-xl z-[10000] hover:scale-105 transition';
    btn.onclick = exitPreviewMode;
    document.body.appendChild(btn);
}

function exitPreviewMode() {
    isAnimating = false;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (characterMarker) characterMarker.setMap(null);

    // 맵 스타일 복구
    const mapEl = document.getElementById('map');
    mapEl.style.position = 'relative';
    mapEl.style.width = '100%';
    mapEl.style.height = '300px'; // 원래 높이로 복구 (CSS 클래스에 따라 다를 수 있음)
    mapEl.style.zIndex = '0';
    mapEl.style.top = 'auto';
    mapEl.style.left = 'auto';

    const btn = document.getElementById('exit-preview-btn');
    if (btn) btn.remove();

    google.maps.event.trigger(window.map, 'resize');

    // 원래 뷰포트로 복귀
    // (이 부분은 호출한 쪽에서 updateMapMarkers 등을 다시 불러주는 게 좋음)
}

// 전역 노출
window.initRouteHelper = initRouteHelper;
window.startPreviewTravel = startPreviewTravel;
