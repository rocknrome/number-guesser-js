let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Here I am writing a function that will pick a number from 0 to 9.
function generateTarget() {
  return Math.floor(Math.random() * 10)
} 
/* So this is basically the main function of the project.
In this function we require 3 numbers: humanGuess, computerGuess and targetGuess.
The program says that it automatically runs generateTarget function at the beginning of each round to decide on the secret number itself. So I'll not be identifying it myself. I do however need the computer to make a guess so I run the same function for the computerGuess variable and then assign it to the variable.

Basically the winner is the one who is closest to the secret number. So I run Math.abs on the distance of both computer and human guesses to the TargetGuess. If the computer's point is higher than the human, then the human wins since it is closer to the target. When tied human wins as well. Otherwise if the computer's point is lesser than the human, computer wins. The project says to return true if human wins, to return false if computer wins.
*/
function compareGuesses(humanGuess, computerGuess, targetGuess) {
  computerGuess = generateTarget();

  humanPoint = Math.abs(targetGuess - humanGuess);
  computerPoint = Math.abs(targetGuess - computerGuess);
  console.log(humanPoint);
  console.log(computerPoint);
  
  if (computerPoint >= humanPoint ) {
    return true;
  } else if (computerPoint < humanPoint) {
    return false;
  }
}
/* Project says that we need an updateScore function that takes in only one argument named winner, which will come back as either 'human' or 'computer'. So if the winner comes as 'human' I am to increase the humanScore by 1 else if it comes as 'computer' the computerScore is to increase by 1.
*/

function updateScore(winner) {
  if (winner = 'human') {
    humanScore = humanScore + 1;
  } else {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber++
}
console.log(humanScore);
console.log(computerScore);
