document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".number, .operator");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            if (button.value === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (button.value === "C") {
                display.value = "";
            } else if (button.value === "sqrt") {
                display.value = Math.sqrt(eval(display.value));
            } else if (button.value === "^") {
                display.value += "**";
            } else {
                display.value += button.value;
            }
        });
    });
});
