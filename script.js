const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 플레이어 객체
const player = {
    x: 50,
    y: 50,
    width: 32,
    height: 32,
    speed: 5,
};

// 게임 루프
function gameLoop() {
    requestAnimationFrame(gameLoop);

    // 게임 로직 업데이트

    // 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// 키보드 이벤트 처리
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        player.x += player.speed;
    } else if (event.key === "ArrowLeft") {
        player.x -= player.speed;
    }
});

// 게임 루프 시작
gameLoop();
