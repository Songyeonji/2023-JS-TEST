document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const result = document.querySelector(".result");

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const playerChoice = choice.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            const gameResult = determineWinner(playerChoice, computerChoice);

            result.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${gameResult}`;
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }

        switch (playerChoice) {
            case "rock":
                return computerChoice === "scissors" ? "You win!" : "Computer wins!";
            case "paper":
                return computerChoice === "rock" ? "You win!" : "Computer wins!";
            case "scissors":
                return computerChoice === "paper" ? "You win!" : "Computer wins!";
            default:
                return "Invalid choice";
        }
    }
});
