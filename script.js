const colors = [
    "#3498db", "#e74c3c", "#8e44ad", "#2ecc71", "#f39c12", "#d35400",
    "#1abc9c", "#3498db", "#9b59b6", "#27ae60", "#f39c12", "#d35400",
    "#c0392b", "#2980b9", "#16a085", "#34495e", "#f1c40f", "#e67e22"
];


const colorBtn = document.getElementById("btn");
const colorName = document.getElementById("color");

colorBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
  colorName.textContent = colors[randomIndex];
});
