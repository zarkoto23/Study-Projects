const computerChoices = ["Камък", "Ножица", "Хартия"];
const computerChoice = document.getElementById("computer");
const playerChoice = document.getElementById("player");
const winnerChek = document.getElementById("winner");

const playerScoreDisplay = document.getElementById("playerPoints");
const coputerScoreDisplay = document.getElementById("computerPoints");
const tieScoreDisplay = document.getElementById("tiePoints");

let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;

let computerTurn;
let playerTurn;
let result = "";

function playLogic(playerTurn) {
  computerTurn = computerChoices[Math.floor(Math.random() * 3)];

  if (playerTurn === computerTurn) {
    result = "Равенство!";
    tieCounter++;
    tieScoreDisplay.textContent = tieCounter;
  } else if (playerTurn === "Камък") {
    result = computerTurn === "Ножица" ? "Победа !" : "Загуба !";
  } else if (playerTurn === "Ножица") {
    result = computerTurn === "Хартия" ? "Победа !" : "Загуба !";
  } else if (playerTurn === "Хартия") {
    result = computerTurn === "Камък" ? "Победа !" : "Загуба !";
  }

  playerChoice.textContent = `Играч: ${playerTurn}`;
  computerChoice.textContent = `Компютър: ${computerTurn}`;
  winnerChek.textContent = result;

  winnerChek.classList.remove("greenTxt", "redTxt");

  switch (result) {
    case "Победа !":
      winnerChek.classList.add("greenTxt");
      playerCounter++;
      playerScoreDisplay.textContent = playerCounter;
      break;
    case "Загуба !":
      winnerChek.classList.add("redTxt");
      computerCounter++;
      coputerScoreDisplay.textContent = computerCounter;
      break;
  }
}

