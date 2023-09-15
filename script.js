const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 50,
    y: 50,
    width: 32,
    height: 32,
    speed: 5,
};

const obstacles = [
    { x: 200, y: 100, width: 50, height: 50 },
    { x: 350, y: 250, width: 50, height: 50 },
    // Add more obstacles
];

const startPoint = { x: 50, y: 50 };
const endPoint = { x: 700, y: 350 };
let gameWon = false;

const keys = {}; // Declare keys here
function resetGame() {
    player.x = startPoint.x;
    player.y = startPoint.y;
    player.speed = 5; // 플레이어 속도 초기화
    keys = {}; // 이전 움직임 초기화
    gameWon = false;
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    // Game logic update
    if (!gameWon) {
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

        // Collision detection
        if (
            player.x < 0 ||
            player.x + player.width > canvas.width ||
            player.y < 0 ||
            player.y + player.height > canvas.height
        ) {
            gameOver();
        }

        obstacles.forEach((obstacle) => {
            if (
                player.x < obstacle.x + obstacle.width &&
                player.x + player.width > obstacle.x &&
                player.y < obstacle.y + obstacle.height &&
                player.y + player.height > obstacle.y
            ) {
                gameOver();
            }
        });

        if (
            player.x < endPoint.x + 10 &&
            player.x + player.width > endPoint.x &&
            player.y < endPoint.y + 10 &&
            player.y + player.height > endPoint.y
        ) {
            gameWon = true;
            gameWonMessage();
        }
    }

    // Rendering
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw start point
    ctx.fillStyle = "green";
    ctx.fillRect(startPoint.x, startPoint.y, 20, 20);

    // Draw end point
    ctx.fillStyle = "red";
    ctx.fillRect(endPoint.x, endPoint.y, 20, 20);

    // Draw obstacles
    ctx.fillStyle = "gray";
    obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // Draw player
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameOver() {
    alert("Game Over!");
    resetGame();
}

function gameWonMessage() {
    alert("Congratulations! You won!");
    resetGame();
}

function resetGame() {
    player.x = startPoint.x;
    player.y = startPoint.y;
    gameWon = false;
}

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

gameLoop();
