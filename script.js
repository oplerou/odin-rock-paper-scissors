//générer un nombre aléatoire entre zéro et un, puis choisir une option parmi pierre, papier et ciseaux pour l'ordinateur
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
//permettre à l'utilisateur d'entrer son choix
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

//gérer un tour de jeu, avec le choix de l'ordinateur et celui de l'utilisateur
function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  let result = "";

  console.log(
    "Player: " + playerSelection + " — Computer: " + computerSelection
  );
  if (computerSelection === playerSelection) {
    console.log("   Draw");
    result = "draw";
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    console.log("   Round won!");
    result = "won";
  } else {
    console.log("   Round lost.");
    result = "lose";
  }
  return result;
}
//gérer un jeu de 5 tours et afficher le score
function playGame() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let game = playRound();
    if (game == "won") {
      score++;
    }
  }
  console.log("Score: " + score + "/5");
  if (score >= 3) {
    console.warn("Congratulations, You won! :D");
  } else {
    console.error("Sorry, you lost. :/");
  }
}

playGame();
