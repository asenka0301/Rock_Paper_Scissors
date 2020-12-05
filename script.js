function computerPlay() {
  let moves = ["rock", "paper", "scissors"];
  let computerMove = Math.floor(Math.random()*3);
  return moves[computerMove];
}


function playRound(playerSelection, computerSelection){

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


function game(){

  let userScore = 0;
  let computerScore = 0;

  for(let i = 0; i <= 5; i++){
    let playerMove = window.prompt("RockPaperScissors").toLocaleLowerCase();
    let computerMove = computerPlay();
    let oneMoveResult = playRound(playerSelection=playerMove, computerSelection=computerMove);
    if(oneMoveResult == "It's a tie!"){
      continue;
    }
    else if(oneMoveResult[4]=="w"){
      userScore += 1;
    }
    else if(oneMoveResult[4]=="l"){
      computerScore += 1;
		}
	}
  if(userScore > computerScore){
    winner = "You win!";
  } 
  else if(userScore < computerScore) {
    winner = "Computer win!"
  } else {
    winner = "Tie";
  }
  console.log(`${winner} ${userScore}, ${computerScore}`);
}

        
game();       
    

  

