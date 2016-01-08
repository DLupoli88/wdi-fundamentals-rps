////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
    } 

function getComputerMove(move) {
    return move || randomPlay();
    }
var winner;

function getWinner(playerMove,computerMove) {
    var winner;
        if (playerMove === computerMove) {
            winner = "tie";
        }
        else if (playerMove === "scissors") {
            if (computerMove === "rock") {
                winner = "computer";
            }
            else { 
                winner = "player";
            }
        }
        else if (playerMove === "rock") {
            if (computerMove === "paper") {
                winner = "computer";
            }
            else {
                winner = "player";
            }
        }
        else if (playerMove === "paper") {
            if (computerMove === "scissors") {
                winner = "computer";
            }
            else {
                winner = "player";
            }
    }
  
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
   while (playerWins < 5 && computerWins < 5) {
    console.log("Current Score is Player: " + playerWins + " to Computer: " + computerWins + "\n");
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            }
        else {
                console.log ("\n Player chose " + playerMove + " and Computer chose " + computerMove + ".");
            }
        
        if(playerWins === 5 || computerWins === 5){
            break;
            
        }else if(winner === "Tie"){
            console.log("Its a tie!");
        }
        else if(winner==="Player"){
            playerWins ++;
            console.log (winner + " wins the round!");
        }
        else if (winner === "Computer"){
            computerWins ++;
            console.log (winner + " wins the round!");
        }
        }
        if(playerWins === 5) {
            console.log("You win the game!");
        }else if (computerWins === 5) {
            console.log("Computer wins RockPaperScissors!")
        }
    return [playerWins, computerWins];
     }

playToFive();


