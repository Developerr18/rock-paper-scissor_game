const resultDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.textContent);
    });
});

function playRound(playerChoice) {
    const ComputerChoice = getComputerChoice();

    let result = "";

    if (playerChoice === ComputerChoice) {
        result = `It's a tie! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === "Rock" && ComputerChoice === "Scissor") ||
        (playerChoice === "Scissor" && ComputerChoice === "Paper") ||
        (playerChoice === "Paper" && ComputerChoice === "Rock")
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${ComputerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${ComputerChoice} beats ${playerChoice}`;
    }

    // display result and score
    resultDiv.textContent = result;
    scoreDiv.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;

    // check for game over
    if (playerScore === 5) {
        resultDiv.textContent = "Congratulations! you won the game!";
        disableButton();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Game over! computer won!";
        disableButton();
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "Rock";
    else if (randomNumber === 1) return "Scissor";
    else return "Paper";
}

function disableButton() {
    buttons.forEach((button) => (button.disabled = true));
}
