const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    bars.forEach(bar => bar.classList.toggle("change"));
});

// 초기에 메뉴를 열기
menu.classList.add("show");
bars.forEach(bar => bar.classList.add("change"));

const memoTextarea = document.getElementById("memo");

memoTextarea.addEventListener("input", (event) => {
    const memoContent = event.target.value;
    localStorage.setItem("memo", memoContent);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
        memoTextarea.value = savedMemo;
    }
});