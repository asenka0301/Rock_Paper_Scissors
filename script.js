
const userButtons = document.querySelectorAll('.userField button');
const computerButtons = document.querySelectorAll('.computerField button');
const playAgain = document.querySelector('#reset');


let userScore = document.querySelector('#userScore');
let computerScore = document.querySelector('#computerScore');
let comments = document.querySelector('#comments p');
let computerScoreCounter = 0;
let userScoreCounter = 0;
let winningScore = 5;

// computer choice
function getComputerMove() {
  let moves = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random()*3);
  
  return moves[num];
}

// one round
function oneRoundResult(playerSelection, computerSelection){

  let result;  

  if(playerSelection == computerSelection){
    result = "It's a tie!";
  }
  else if(playerSelection == "rock" && computerSelection == "paper"){
    result = "You lose! Paper beats rock";
  }
  else if(playerSelection == "rock" && computerSelection == "scissors"){
    result = "You win! Rock beats scissors";
  }
  else if(playerSelection == "paper" && computerSelection == "rock"){
    result = "You win! Paper beats rock";
  }
  else if(playerSelection == "paper" && computerSelection == "scissors"){
    result = "You lose! Scissors beats paper";
  }
  else if(playerSelection == "scissors" && computerSelection == "rock"){
    result = "You lose! Rock beats scissors";
  }
  else if(playerSelection == "scissors" && computerSelection == "paper"){
    result = "You win! Scissors beats paper";
  }
  return result;
}


function roundScore(results){

  if(results[4] =="w"){
    userScoreCounter += 1;
    userScore.textContent = userScoreCounter;
    if(userScoreCounter === winningScore){
      playAgain.style.visibility = 'visible';
      comments.textContent = "You won!"
      userButtons.forEach((button) => {
        button.disabled = true;
      });
    }
  }
  else if(results[4] =="l"){
    computerScoreCounter += 1;
    computerScore.textContent = computerScoreCounter;
    if(computerScoreCounter === winningScore){
      playAgain.style.visibility = 'visible';
      comments.textContent = "You lost!"
      userButtons.forEach((button) => {
        button.disabled = true;
      });
    }
  }
}


function compBtn(result){
  if(result === 'rock'){
    return 0;
  }
  else if(result === 'paper'){
    return 1;
  }
  else if(result === 'scissors'){
    return 2;
  }
}


function colorizeUser(results){
  if(results === "It's a tie!"){
    return "tie";
  }
  else if(results[4] =="w"){
    return "winner";
  }
  else if(results[4] =="l"){
    return "loser";
  }
}


function colorizeComputer(results){
  if(results === "It's a tie!"){
    return "tie";
  }
  else if(results[4] =="l"){
    return "winner";
  }
  else if(results[4] =="w"){
    return "loser";
  }
}


userButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerMove = button.id;
    let computerMove = getComputerMove();
    let round = oneRoundResult(playerMove, computerMove);
    comments.textContent = round;
    roundScore(round);
    let computerBTn = compBtn(computerMove);
    button.classList.add(`${colorizeUser(round)}`);
    computerButtons[computerBTn].classList.add(`${colorizeComputer(round)}`);
  });
});


function removeTransition() {
  this.classList.remove('winner');
  this.classList.remove('loser');
  this.classList.remove('tie');
}


userButtons.forEach((button) => {
  button.addEventListener('transitionend', removeTransition)
});


computerButtons.forEach((button) => {
  button.addEventListener('transitionend', removeTransition)
});


function reset(){
  computerScoreCounter = 0;
  userScoreCounter = 0;
  userScore.textContent = userScoreCounter;
  computerScore.textContent = computerScoreCounter;
  comments.textContent = "";
  playAgain.style.visibility = 'hidden';
  userButtons.forEach((button) => {
    button.disabled = false;
  });
}


playAgain.addEventListener('click', reset);