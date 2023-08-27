const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");

        tabContents.forEach(content => {
            content.style.display = "none";
        });
        document.getElementById(targetTab).style.display = "block";
    });
});

// 초기 탭 설정
tabButtons[0].click();
