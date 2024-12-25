function getComputerChoice() {
  let compChoice;
  
  // Get 0, 1, or 2 and convert to Computer's choice.
  let convertChoice = Math.floor(Math.random() * 3);
  console.log(convertChoice); 
  switch (convertChoice) {
    case 0:
      const r = document.querySelector('#r');
      r.style.background = "purple";
      compChoice = 'rock';
      break;
    case 1:
      const p = document.querySelector('#p');
      p.style.background = "purple";
      compChoice = 'paper';
      break;
    case 2:
      const s = document.querySelector('#s');
      s.style.background = "purple";
      compChoice = 'scissors';
      break;
  }
  console.log(compChoice);
  return compChoice;
}

function getHumanChoice(event) {
  console.log(event.target.id);
  let humanChoice;
  if (event.target.id != 'bC') {
    switch (event.target.id) {
      case 'r':
        humanChoice = 'rock';
        break;
      case 'p':
        humanChoice = 'paper';
        break;
      case 's':
        humanChoice = 'scissors';
        break;
      }
    event.target.style.background = "green";
    return humanChoice;
  }
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
let pScore = 0, cScore = 0;

let winner, humanChoice, computerChoice, counter = 0;

let buttonContainer = document.querySelector('.buttonContainer');

buttonContainer.addEventListener('click', (e) => {
  humanChoice = getHumanChoice(e);
  computerChoice = getComputerChoice(e);
});


/*
alert(`Winner is ${winner}.\nPlayer chooses ${humanChoice}
         Computer chooses ${computerChoice}\nScore: Player-
         ${humanScore}\t Computer-${computerScore}`);
         */



  


