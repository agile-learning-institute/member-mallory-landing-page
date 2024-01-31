let possibleChoices = ["rock", "paper", "scissors"];
let result;
let outcome = document.querySelector("#outcome");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomNumber];
}

function playRound(playerSelection) {
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${playerSelection}`);
  console.log(`The computer chose: ${computerChoice}`);

  if (playerSelection === computerChoice) {
    outcome.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ) {
    outcome.textContent = `You win! ${playerSelection} beats ${computerChoice}!`;
    playerScore++;
  } else {
    outcome.textContent = `You lose! ${computerChoice} beats ${playerSelection}!`;
    computerScore++;
  }

  // Update the player and computer scores in the HTML
  player.textContent = playerScore;
  computer.textContent = computerScore;
}
