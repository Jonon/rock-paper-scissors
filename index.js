let humanScore = 0;
let computerScore = 0;

let gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	// Randomly retrieves a number between 0-2
	let choice = Math.round(Math.random() * 2);
	// Returns a string from the GameChoices array with a specific index from the choice variable
	return gameChoices[choice];
}

function getHumanChoice() {
	// Get a prompt and choose either Rock, paper oor scissors
	let choice = prompt("Chose Rock, Paper or Scissors");
	// Check if the choice is incorrect
	if (
		choice != gameChoices[0] &&
		choice != gameChoices[1] &&
		choice != gameChoices[2]
	) {
		console.log("This is incorrect");
	} else {
		console.log(choice);
		// return your choice
		return choice;
	}
}
