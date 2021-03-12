const playerChoicesSection = document.getElementsByClassName(
  "player-choices"
)[0];
const computerChoiceButton = document.getElementById("computer-choice");

const result = document.getElementsByClassName("result")[0];
const playAgainSection = document.getElementsByClassName("play-again")[0];

const player = document.getElementById("player");
const computer = document.getElementById("computer");

computerChoiceButton.style.display = "none";

const choices = ["rock", "paper", "Scissors"];

for (let i = 0; i < choices.length; i++) {
  const playerChoice = document.createElement("button");
  playerChoice.id = choices[i];
  playerChoice.textContent = choices[i];
  playerChoicesSection.appendChild(playerChoice);
  playAgainSection.addEventListener("click", function () {
    playerChoice.style.backgroundImage = "";
    computerChoiceButton.style.display = "none";
    result.textContent = "";
  });
  playerChoice.addEventListener("click", function () {
    computer.textContent = '^^'
    computerChoiceButton.style.display = "block";
    const compChoiceVal = computerChoice(choices);

    switch (playerChoice.textContent) {
      case "rock":
        playerChoice.style.backgroundImage = "url('images/player-rock.png')";
        break;
      case "paper":
        playerChoice.style.backgroundImage = "url('images/player-paper.png')";
        break;
      default:
        playerChoice.style.backgroundImage =
          "url('images/player-scissors.png')";
    }
    switch (computerChoiceButton.textContent) {
      case "rock":
        computerChoiceButton.style.backgroundImage =
          "url('images/computer-rock.png')";
        break;
      case "paper":
        computerChoiceButton.style.backgroundImage =
          "url('images/computer-paper.png')";
        break;
      default:
        computerChoiceButton.style.backgroundImage =
          "url('images/computer-scissors.png')";
    }
    playerChoice.style.backgroundRepeat = "no-repeat";
    playerChoice.style.backgroundPosition = "center center";
    computerChoiceButton.style.backgroundRepeat = "no-repeat";
    computerChoiceButton.style.backgroundPosition = "center center";

    if (playerChoice.textContent == "rock" && compChoiceVal == "Scissors") {
      computerChoiceButton.textContent = "Scissors";
      result.textContent = "You Winn";
      player.style.fontSize = "50px";
    } else if (
      playerChoice.textContent == "Scissors" &&
      compChoiceVal == "paper"
    ) {
      computerChoiceButton.textContent = "paper";
      result.textContent = "You Winn";
      player.style.fontSize = "50px";
    } else if (playerChoice.textContent == "paper" && compChoiceVal == "rock") {
      computerChoiceButton.textContent = "rock";
      result.textContent = "You Winn";
      player.style.fontSize = "50px";
    } else {
      computerChoiceButton.textContent = computerChoice(choices);
      result.textContent = "HAHAHAHAH LOSER";
      player.style.fontSize = "20px";
    }
  });
}

function whoIsTheWinner(playerChoice = "", computerChoice = "") {
  console.log("The Winner");
}
function computerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}
