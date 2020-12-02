
let playerMove = window.prompt("RockPaperScissors");

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
    } else {
        result = "Incorrect input";
    }

    return result;
}


playerMove = playerMove.toLocaleLowerCase();
console.log(playerMove);
computerMove = computerPlay();
console.log(computerMove);

console.log(playRound(playerSelection = playerMove, computerSelection =computerMove));
