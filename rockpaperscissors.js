//variable initialized to hold value of the getComputerChoice function
let computerChoice;
//variable to hold the result of each round of play
let result;

//A function that will randomly return either 'Rock', 'Paper', or 'Scissors' - use Math.random() that generates a number between 0 and 1
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Rock";
  } else if (randomNumber > 0.33 && randomNumber < 0.67) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
//set to the value of the randomizing function to use as computer's choice
computerChoice = getComputerChoice();

//plays a single round of the game and returns the winner or a tie
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(`You chose: ${playerSelection}`);
  console.log(`The computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

//starts a game and calculates the score to a minimum of five rounds
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      "Enter your choice: (Rock, Paper, or Scissors):"
    );
    const computerSelection = computerChoice;

    const result = playRound(playerSelection, computerSelection);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }
    console.log(`Round ${round}: ${result}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!!");
  } else if (computerScore > playerScore) {
    console.log("You lose! Computer wins the game!");
  } else {
    console.log("It's a tie! Try again!");
  }
}

playGame();
