const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer");
const platforms = document.querySelectorAll(".platform"); // 발판 선택
let isJumping = false;
let jumpHeight = 0;
let jumpDirection = 1;
let isFalling = false;
let platformBottom = 100; // 초기 플랫폼의 아래 위치

// Enter 키로 점프 활성화
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !isJumping && !isFalling) {
        jump();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    }
});


function jump() {
    isJumping = true;
    const jumpInterval = setInterval(() => {
        if (jumpHeight < 200 && jumpDirection === 1) {
            jumpHeight += 5;
            player.style.bottom = jumpHeight + "px";
        } else {
            jumpDirection = -1;
        }

        if (jumpHeight > 0 && jumpDirection === -1) {
            jumpHeight -= 5;
            player.style.bottom = jumpHeight + "px";
        } else {
            clearInterval(jumpInterval);
            isJumping = false;
            isFalling = true;
            fall();
        }
    }, 20);
}

function fall() {
    const fallInterval = setInterval(() => {
        let currentPosition = parseInt(player.style.bottom);
        if (currentPosition > 0) {
            currentPosition -= 5;
            player.style.bottom = currentPosition + "px";
        } else {
            clearInterval(fallInterval);
            isFalling = false;
        }
    }, 20);
}

function moveLeft() {
    const currentLeft = parseInt(player.style.left) || 0;
    const newLeft = currentLeft - 10;
    player.style.left = newLeft + "px";
}

function moveRight() {
    const currentLeft = parseInt(player.style.left) || 0;
    const newLeft = currentLeft + 10;
    player.style.left = newLeft + "px";
}


// 플랫폼을 생성하는 함수
function createPlatform() {
    const platform = document.createElement("div");
    platform.classList.add("platform");
    platform.style.bottom = platformBottom + "px";
    platform.style.left = Math.random() * (gameContainer.offsetWidth - 50) + "px"; // 랜덤한 가로 위치
    gameContainer.appendChild(platform);
    platformBottom += 100; // 다음 플랫폼의 아래 위치
}


// 발판 충돌 감지 및 떨어지기 처리
function checkPlatformCollision() {
    platforms.forEach((platform) => {
        const playerRect = player.getBoundingClientRect();
        const platformRect = platform.getBoundingClientRect();

        if (
            playerRect.bottom >= platformRect.top &&
            playerRect.bottom <= platformRect.bottom &&
            playerRect.right >= platformRect.left &&
            playerRect.left <= platformRect.right
        ) {
            // 플랫폼을 밟았을 때
            jumpHeight = 0;
            player.style.bottom = jumpHeight + "px";
            isFalling = false;
        } else {
            // 플랫폼을 밟지 않았을 때
            if (!isJumping) {
                isFalling = true;
                fall();
            }
        }
    });
}

    // 플랫폼이 화면 위로 사라지면 새로운 플랫폼 생성
    const topPlatform = document.querySelector(".platform");
    if (topPlatform && topPlatform.getBoundingClientRect().bottom <= 0) {
        gameContainer.removeChild(topPlatform);
        createPlatform();
    }

// 주기적으로 충돌 감지 및 플랫폼 관리
setInterval(() => {
    checkPlatformCollision();
}, 20);