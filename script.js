const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveBtn = document.getElementById("saveBtn");
const memoInput = document.getElementById("memoInput");
const saveMemoBtn = document.getElementById("saveMemoBtn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

saveBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

saveMemoBtn.addEventListener("click", () => {
    const memoContent = memoInput.value;
    // 여기에서 메모 내용을 저장하거나 처리할 수 있습니다.
    console.log("Saved memo:", memoContent);
    modal.style.display = "none";
});