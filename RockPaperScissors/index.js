let possibleChoices = ["rock", "paper", "scissors"];
let result;
let outcome = document.querySelector("#outcome");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
const buttons =document.querySelector('#buttons');
const score = document.querySelector('#score');

outcome.style.cssText = ('padding: 50px; text-align: center;');
score.style.cssText = ('padding: 50px; text-align: center;');
buttons.style.cssText = "padding: 50px; text-align: center;"

const rock = document.createElement('button');
rock.textContent = 'rock';
buttons.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'paper';
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'scissors';
buttons.appendChild(scissors);

const eachButton = document.querySelector('.eachButton');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomNumber];
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  let playerSelection = e;
  console.log(playerSelection)
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

rock.addEventListener('click', () => {
  let playerSelection = 'rock';
  playRound(playerSelection);
});

paper.addEventListener('click', () => {
  let playerSelection = 'paper';
  playRound(playerSelection);
});

scissors.addEventListener('click', () => {
  let playerSelection = 'scissors';
  playRound(playerSelection);
});

