function getComputerChoice() {
  let random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?");
  playerChoice = playerChoice.toLowerCase();
  while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    playerChoice = prompt(
      'You have to choose between Rock, Paper or Scissors. \nYou wrote "' +
        playerChoice +
        '".'
    );
    playerChoice = playerChoice.toLowerCase();
  }
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();

  console.log(
    "Player: " + playerSelection + "\nComputer: " + computerSelection
  );
  if (computerSelection === playerSelection) {
    console.log("Draw");
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    console.warn("You won!");
  } else {
    console.error("You lose.");
  }
}

playRound();
