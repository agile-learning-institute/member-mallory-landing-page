let possibleChoices = ["Rock", "Paper", "Scissors"];
let result;
let outcome = document.querySelector("#outcome");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
const buttons =document.querySelector('#buttons');
const score = document.querySelector('#score');

outcome.style.cssText = ('padding: 30px; text-align: center;');
score.style.cssText = ('padding: 30px; text-align: center;');
buttons.style.cssText = "padding: 30px; text-align: center;";

const rock = document.createElement('button');
rock.textContent = '✊';
rock.style.cssText = ('font-size: 5rem;');
buttons.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = '✋';
paper.style.cssText = ('font-size: 5rem;')
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = '✌️';
scissors.style.cssText = ('font-size: 5rem;')
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
    (playerSelection === "Rock" && computerChoice === "Scissors") ||
    (playerSelection === "Paper" && computerChoice === "Rock") ||
    (playerSelection === "Scissors" && computerChoice === "Paper")
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
  let playerSelection = 'Rock';
  playRound(playerSelection);
});

paper.addEventListener('click', () => {
  let playerSelection = 'Paper';
  playRound(playerSelection);
});

scissors.addEventListener('click', () => {
  let playerSelection = 'Scissors';
  playRound(playerSelection);
});

