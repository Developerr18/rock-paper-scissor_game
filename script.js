function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "scissor";
    else return "paper";
}

function getHumanChoice() {
    const humanChoice = prompt(
        'Choose any one: "rock","paper","scissor"'
    ).toLowerCase();
    return humanChoice;
}

// humanChoice = getHumanChoice().toLowerCase();
// ComputerChoice = getComputerChoice();

function playRound(humanChoice, ComputerChoice) {
    if (humanChoice === ComputerChoice) {
        return "It's draw!";
    }

    if (
        (humanChoice === "rock" && ComputerChoice === "scissor") ||
        (humanChoice === "scissor" && ComputerChoice === "paper") ||
        (humanChoice === "paper" && ComputerChoice === "rock")
    ) {
        return "human won";
    } else {
        return "computer won";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const ComputerChoice = getComputerChoice();

        const result = playRound(humanChoice, ComputerChoice);
        console.log(
            `Round ${i}: You chose ${humanChoice}, computer chose ${ComputerChoice}. Result: ${result}`
        );

        if (result === "human won") humanScore++;
        else if (result === "computer won") computerScore++;
    }

    console.log(`Final score: You ${humanScore} and computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won! congrats");
    } else if (computerScore > humanScore) {
        console.log("Computer won! better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
