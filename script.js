const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer");
let isJumping = false;
let jumpHeight = 0;
let jumpDirection = 1;

player.addEventListener("click", () => {
    if (!isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    const jumpInterval = setInterval(() => {
        if (jumpHeight < 150 && jumpDirection === 1) {
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
        }
    }, 20);
}
