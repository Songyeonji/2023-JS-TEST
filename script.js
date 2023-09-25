const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start-button');

let score = 0;
let timeLeft = 60;
let isGameRunning = false;

function startGame() {
    if (!isGameRunning) {
        isGameRunning = true;
        score = 0;
        timeLeft = 60;
        scoreDisplay.textContent = `Score: ${score}`;
        timeDisplay.textContent = `Time: ${timeLeft}`;
        startButton.disabled = true;
        moleUp();
        const countdown = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                endGame();
            }
        }, 1000);
    }
}

function endGame() {
    isGameRunning = false;
    startButton.disabled = false;
    alert(`Game Over! Your score is ${score}`);
    moles.forEach(mole => {
        mole.classList.remove('up');
    });
    moles = [];
}
function moleUp() {
    if (!isGameRunning) return;

    const randomTime = Math.random() * 2000 + 500; // 0.5초 ~ 2.5초
    const randomHoleCount = Math.floor(Math.random() * 3) + 1; // 1~3개의 두더지

    for (let i = 0; i < randomHoleCount; i++) {
        const randomIndex = Math.floor(Math.random() * holes.length);
        const randomHole = holes[randomIndex];
        if (!moles.includes(randomHole)) {
            randomHole.classList.add('up');
            moles.push(randomHole);
        }
    }

    setTimeout(() => {
        moles.forEach(mole => {
            mole.classList.remove('up');
        });
        moles = moles.filter(mole => mole.parentElement); // 이미 제거된 두더지 제거
        if (isGameRunning) {
            moleUp();
        }
    }, randomTime);
}

function randomHoleIndexes() {
    const indexes = [];
    while (indexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * holes.length);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}

function bonk(e) {
    if (!e.isTrusted) return; // 가짜 클릭을 방지
    if (this.classList.contains('up')) {
        score++;
        this.classList.remove('up');
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

holes.forEach(hole => hole.addEventListener('click', bonk));
startButton.addEventListener('click', startGame);
