const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer");
let isJumping = false;

player.addEventListener("click", () => {
    if (!isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight < 100) { // 최대 점프 높이
            jumpHeight += 5; // 점프 속도 및 높이 조절 가능
            player.style.bottom = jumpHeight + "px";
        } else {
            clearInterval(jumpInterval);
            fall();
        }
    }, 20);
}

function fall() {
    const fallInterval = setInterval(() => {
        let currentPosition = parseInt(player.style.bottom);
        if (currentPosition > 0) { // 땅에 닿을 때까지 떨어지기
            currentPosition -= 5; // 낙하 속도 조절 가능
            player.style.bottom = currentPosition + "px";
        } else {
            clearInterval(fallInterval);
            isJumping = false;
        }
    }, 20);
}
