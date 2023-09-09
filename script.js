document.addEventListener("DOMContentLoaded", () => {
    const sequenceDisplay = document.getElementById("sequence");
    const startBtn = document.getElementById("startBtn");
    const resetBtn = document.getElementById("resetBtn");

    const colors = ["red", "green", "blue", "yellow"];
    const sequence = [];
    let playerTurn = false;
    let currentIndex = 0;

    startBtn.addEventListener("click", startGame);
    resetBtn.addEventListener("click", resetGame);

    function startGame() {
        startBtn.setAttribute("disabled", "true");
        resetBtn.removeAttribute("disabled");
        generateNextMove();
    }

    function resetGame() {
        sequence.length = 0;
        playerTurn = false;
        currentIndex = 0;
        sequenceDisplay.textContent = "";
        startBtn.removeAttribute("disabled");
        resetBtn.setAttribute("disabled", "true");
    }

    function generateNextMove() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(randomColor);
        playSequence();
    }

    function playSequence() {
        let i = 0;
        const interval = setInterval(() => {
            highlightColor(sequence[i]);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
                playerTurn = true;
                currentIndex = 0;
            }
        }, 1000);
    }
    function highlightColor(color) {
        const coloredDiv = document.createElement("div");
        coloredDiv.style.backgroundColor = color;
        coloredDiv.className = "highlighted"; // 수정: 클래스 이름을 "highlighted"로 변경
        sequenceDisplay.appendChild(coloredDiv);
        setTimeout(() => {
            coloredDiv.style.backgroundColor = "transparent";
        }, 500);
    }
    

    sequenceDisplay.addEventListener("click", (event) => {
        if (playerTurn) {
            const clickedColor = event.target.style.backgroundColor;
            const expectedColor = sequence[currentIndex];
            if (clickedColor === expectedColor) {
                currentIndex++;
                if (currentIndex >= sequence.length) {
                    playerTurn = false;
                    setTimeout(() => {
                        generateNextMove();
                    }, 1000);
                }
            } else {
                alert("Wrong sequence! Game over.");
                resetGame();
            }
        }
    });
});
