function getComputerChoice() {
  let compChoice;
  
  // Get 0, 1, or 2 and convert to Computer's choice.
  let convertChoice = Math.floor(Math.random() * 3);
  
  switch (convertChoice) {
    case 0:
      compChoice = 'rock';
      break;
    case 1:
      compChoice = 'paper';
      break;
    case 2:
      compChoice = 'scissors';
      break;
  }
  return compChoice;
}

function getHumanChoice() {
  let flag = true;  //Keep while loop going until rock, paper, or scissors chosen.
  let humanChoice;

  while (flag === true) {
    humanChoice = prompt("Player, type rock, paper, or scissors and press [Enter].");
    humanChoice = humanChoice.toLowerCase();  //convert input to lowercase.
    console.log(humanChoice);
    //Check for proper input
    if (humanChoice === 'rock') {
      flag = false;
    } else if (humanChoice === 'paper') {
      flag = false;
    } else if (humanChoice === 'scissors') {
      flag = false;
    } else {
      alert("Must choose rock, paper, or scissors");
    }
  }
  return humanChoice;
}

//Capitalize the choices for beauty's sake.
function toTitleCase(titled) {
  let capStart = titled[0].toUpperCase();
  titled = capStart + titled.slice(1).toLowerCase();
  return titled;
}

function playRound(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === 'rock') {
    switch (computerChoice) {
      case "paper":
        winner = "computer";
        break;
      case "scissors":
        winner = "player";
        break;
      case "rock":
        winner = "tie";
        break;
    }
  } else if (humanChoice === 'paper') {
    switch (computerChoice) {
      case "paper":
        winner = "tie";
        break;
      case "scissors":
        winner = "computer";
        break;
      case "rock":
        winner = "player";
        break;
    }
  } else {
    switch (computerChoice) {
      case "paper":
        winner = "player";
        break;
      case "scissors":
        winner = "tie";
        break;
      case "rock":
        winner = "computer";
        break;
    }
  } return winner;
}

// Start Game

let winner, humanChoice, computerChoice, counter = 0;
let humanScore = 0, computerScore = 0;

while (counter < 5) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  winner =  playRound(humanChoice, computerChoice);

  switch (winner) {
    case 'computer':
      computerScore += 1;
      break;
    case 'player':
      humanScore += 1;
    case 'tie':
      break;
  }

  winner = toTitleCase(winner);
  humanChoice = toTitleCase(humanChoice);
  computerChoice = toTitleCase(computerChoice);

  alert(`Winner is ${winner}.\nPlayer chooses ${humanChoice}
         Computer chooses ${computerChoice}\nScore: Player-
         ${humanScore}\t Computer-${computerScore}`);

  counter += 1;
}

  


