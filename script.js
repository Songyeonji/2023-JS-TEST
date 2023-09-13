const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 50,
    y: 50,
    width: 32,
    height: 32,
    speed: 5,
};

function gameLoop() {
    requestAnimationFrame(gameLoop);

    // 게임 로직 업데이트
    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }
    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }
    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }

    // 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

gameLoop();
