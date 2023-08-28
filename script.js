const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

generateBtn.addEventListener("click", event => {
    event.preventDefault();

    const linesInput = document.getElementById("lines");
    const lines = parseInt(linesInput.value);

    if (!isNaN(lines) && lines > 0) {
        const generatedText = generateLoremIpsum(lines);
        resultDiv.textContent = generatedText;
    } else {
        resultDiv.textContent = "Please enter a valid number of lines.";
    }
});

function generateLoremIpsum(lines) {
    const loremIpsum = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Praesent volutpat elit nec libero fringilla, at feugiat ligula dictum.",
        "Quisque ac libero ac diam consectetur venenatis.",
        "Integer at urna convallis, consequat sapien ut, ultrices tellus.",
        "Proin cursus felis ut feugiat fringilla.",
        
    ];

    let generatedText = "";
    for (let i = 0; i < lines; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsum.length);
        generatedText += loremIpsum[randomIndex] + "\n";
    }

    return generatedText;
}
