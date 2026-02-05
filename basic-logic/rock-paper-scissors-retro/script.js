const options = ["ROCK", "PAPER", "SCISSOR"];
let playerScore = 0;
let computerScore = 0;

const p1ScoreElem = document.getElementById("player-score");
const cpuScoreElem = document.getElementById("computer-score");
const msgElem = document.getElementById("results-msg");
const winnerElem = document.getElementById("winner-msg");
const controls = document.getElementById("controls");
const gameOverElem = document.getElementById("game-over");

function getCPUResult() {
    return options[Math.floor(Math.random() * options.length)];
}

function play(player) {
    const cpu = getCPUResult();
    let result = "";

    if (player === cpu) {
        result = "DRAW! TRY AGAIN.";
    } else if (
        (player === "ROCK" && cpu === "SCISSOR") ||
        (player === "PAPER" && cpu === "ROCK") ||
        (player === "SCISSOR" && cpu === "PAPER")
    ) {
        playerScore++;
        result = `${player} CRUSHES ${cpu}!`;
    } else {
        computerScore++;
        result = `${cpu} DEFEATS ${player}!`;
    }

    update(result);
}

function update(msg) {
    p1ScoreElem.innerText = playerScore;
    cpuScoreElem.innerText = computerScore;
    msgElem.innerText = msg;

    if (playerScore >= 3 || computerScore >= 3) {
        controls.style.display = "none";
        gameOverElem.style.display = "block";
        winnerElem.innerText = playerScore >= 3 ? "P1 WINS!" : "CPU WINS!";
    }
}

document.getElementById("rock-btn").addEventListener("click", () => play("ROCK"));
document.getElementById("paper-btn").addEventListener("click", () => play("PAPER"));
document.getElementById("scissors-btn").addEventListener("click", () => play("SCISSOR"));

document.getElementById("reset-game-btn").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    p1ScoreElem.innerText = "0";
    cpuScoreElem.innerText = "0";
    msgElem.innerText = "INSERT COIN...";
    controls.style.display = "flex";
    gameOverElem.style.display = "none";
});
