//variable initialized to hold value of the getComputerChoice function
let computerChoice;
//A function that will randomly return either 'Rock', 'Paper', or 'Scissors' - use Math.random() that generates a number between 0 and 1
let result;

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

computerChoice = getComputerChoice();
console.log("Computer: " + computerChoice);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper")  {
      return "You win!";
    } else {
      return "You lose!";
    }
   }
console.log(playRound("Scissors", computerChoice));





