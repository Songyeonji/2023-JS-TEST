// script.js
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start-button');

let score = 0;
let timeLeft = 60;
let isGameRunning = false;
let moles = []; // 두더지 요소를 저장할 배열

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
        mole.remove(); // 이미지를 제거합니다.
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
            const mole = document.createElement('img');
            mole.src = 'https://cdn-icons-png.flaticon.com/128/5050/5050857.png';
            mole.alt = 'Mole';
            mole.classList.add('mole');
            randomHole.appendChild(mole);
            moles.push(mole);
        }
    }

    setTimeout(() => {
        moles.forEach(mole => {
            mole.classList.remove('up');
            mole.remove(); // 이미지를 제거합니다.
        });
        moles = moles.filter(mole => mole.parentElement); // 이미 제거된 두더지 제거
        if (isGameRunning) {
            moleUp();
        }
    }, randomTime);
}

function bonk(e) {
    if (!e.isTrusted) return; // 가짜 클릭을 방지
    if (this.classList.contains('up')) {
        score++;
        this.classList.remove('up');
        this.src = 'https://cdn-icons-png.flaticon.com/128/1695/1695590.png';
        scoreDisplay.textContent = `Score: ${score}`;
        setTimeout(() => {
            this.src = 'https://cdn-icons-png.flaticon.com/128/5050/5050857.png'; // 클릭 후 이미지 변경
        }, 300);
    }
}

holes.forEach(hole => hole.addEventListener('click', bonk));
startButton.addEventListener('click', startGame);
