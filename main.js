function getComputerChoice() {
    let num = Math.floor(Math.random()*100);
    if (num % 3 === 0) {
        return "rock";
    } else if (num % 2 === 0) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateScores(result) {
    if (result === 1) {
        cScore++;
    } else if (result === 2) {
        hScore++;
    }
    if (cScore === 5 || hScore === 5) {
        alert("Game over. Make your next selection to restart.")
        cScore = 0;
        hScore = 0;
    }
    hScoreText.textContent = ("Player Score: " + hScore);
    cScoreText.textContent = ("Computer Score : " + cScore);

}

function playRound(humanChoice, computerChoice) {
    let result;
    display.textContent = ("You chose " + humanChoice + ". ");
    display.textContent += ("Computer chose " + computerChoice + ". ");
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    display.textContent += ("You tied - you both chose rock");
                    break;
                case "paper":
                    display.textContent += ("You lose - paper beats rock :(");
                    result = 1;
                    break;
                default:
                    display.textContent += ("You win - rock beats scissors :)");
                    result = 2;
            }
        break;
        case "paper":
            switch (computerChoice) {
                case "rock": 
                     display.textContent += ("You win - paper beats rock :)");
                     result = 2;
                     break;
                case "paper":
                     display.textContent += ("You tied - you both chose paper");
                     break;
                default:
                     display.textContent += ("You lose - scissors beats paper :(");
                     result = 1;
            }
        break;
        default:
            switch (computerChoice) {
                case "rock":
                     display.textContent = ("You lose - rock beats scissors :(");
                     result = 1;
                     break;
                case "paper":
                     display.textContent = ("You win - scissors beats paper :)");
                     result = 2;
                     break;
                default:
                     display.textContent = ("You tied - you both chose scissors");
            }
    }
    updateScores(result);
}

const buttons = document.querySelectorAll("button");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
      
const display = document.querySelector("#resultDisplay");

const hScoreText = document.querySelector("#humanScore");
const cScoreText = document.querySelector("#computerScore");

let hScore = 0;
let cScore = 0;

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

