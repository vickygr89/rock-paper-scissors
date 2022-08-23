
// Computer random Choice
function getComputerChoice () {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
// Function to play a Round
function playRound (playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
      ) {
        return "Player Wins!";
      } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
        return "Computer Wins!";
      } else {
        return "Tie";
      }
}

// Create a function to play a Game
function playGame() {
    for (let i=0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice").toLowerCase;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();