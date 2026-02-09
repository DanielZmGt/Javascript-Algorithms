const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreVal = document.getElementById("player-score");
const computerScoreVal = document.getElementById("computer-score");
const resultsMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const endGameSection = document.querySelector(".end-game");
const resetBtn = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

function getRandomChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice) {
    const computerChoice = getRandomChoice();
    let result = "";

    if (playerChoice === computerChoice) {
        result = `Both chose ${playerChoice}. It's a draw.`;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;
        result = `${playerChoice} beats ${computerChoice}. You win.`;
    } else {
        computerScore++;
        result = `${computerChoice} beats ${playerChoice}. Computer wins.`;
    }

    updateUI(result);
}

function updateUI(message) {
    playerScoreVal.innerText = playerScore;
    computerScoreVal.innerText = computerScore;
    resultsMsg.innerText = message;

    if (playerScore === 3 || computerScore === 3) {
        optionsContainer.style.display = "none";
        endGameSection.style.display = "block";
        winnerMsg.innerText = playerScore === 3 ? "Victory" : "Defeat";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreVal.innerText = "0";
    computerScoreVal.innerText = "0";
    resultsMsg.innerText = "Choose your move";
    optionsContainer.style.display = "flex";
    endGameSection.style.display = "none";
}

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));
resetBtn.addEventListener("click", resetGame);
