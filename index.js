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
	// Make choice case-insensitive
	choice = choice.toLocaleLowerCase();
	// Check if the choice is incorrect
	if (
		choice != gameChoices[0] &&
		choice != gameChoices[1] &&
		choice != gameChoices[2]
	) {
		console.log("This is incorrect");
	} else {
		// return your choice
		return choice;
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	const section = document.querySelector("body");
	const textMessage = document.createElement("div");

	function playRound(humanChoice, computerChoice) {
		let message = "";
		textMessage.textContent = message;
		section.appendChild(textMessage);
		// rules
		if (humanChoice === computerChoice) {
			message = "It's a tie";
		} else if (humanChoice == "rock") {
			if (computerChoice == "paper") {
				message = "You lose! Paper beats Rock.";
				computerScore++;
			} else if (computerChoice == "scissors") {
				message = "You win! Rock beats Scissors.";
				humanScore++;
			}
		} else if (humanChoice == "paper") {
			if (computerChoice == "rock") {
				message = "You win! Paper beats Rock.";
				humanScore++;
			} else if (computerChoice == "scissors") {
				message = "You lose! Scissors beats Paper.";
				computerScore++;
			}
		} else if (humanChoice == "scissors") {
			if (computerChoice == "rock") {
				message = "You lose! Rock beats scissors.";
				computerScore++;
			} else if (computerChoice == "paper") {
				message = "You win! Scissors beats Paper.";
				humanScore++;
			}
		}
		console.log(message);
		textMessage.textContent = message;
	}

	const buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", (e) =>
			playRound(e.target.innerText.toLowerCase(), getComputerChoice())
		);
	});

	let message = "";

	if (humanScore > computerScore) {
		message =
			"Congratulations you won! " +
			"Your score: " +
			humanScore +
			" Computer score: " +
			computerScore;
	} else if (humanScore < computerScore) {
		message =
			"You lost. " +
			"Your score: " +
			humanScore +
			" Computer score: " +
			computerScore;
	} else {
		message =
			"It's a tie. " +
			"Your score: " +
			humanScore +
			" Computer score: " +
			computerScore;
	}

	console.log(message);
}

playGame();
