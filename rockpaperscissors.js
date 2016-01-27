function gamerNow(){
	var userChoice = prompt("Let's play a game of rock-paper-scissors","Enter: 'rock', 'paper' or scissors");
	var computerChoice = Math.random();
		if(computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} alert("Me: " + computerChoice);
		var compare = function(choice1,choice2) {
			if (choice1 === choice2) {
				return alert("It's a tie! Good job to both of us!");
			}
			else if (choice1 === "rock") {
				if (choice2 === "scissors") {
					return alert("Rock wins!");
				}
			else {
				return alert("Paper wins!");
			}
			}
				else if (choice1 === "paper") {
				if (choice2 === "rock") {
				return alert("Paper wins!");
				}
					else {
						return alert("Scissors wins!");
					}
				}
			else if (choice1 === "scissors") {
				if (choice2 === "paper") {
				return "Scissors wins!"
				}
				else {
						return alert("Rock wins!");
				}
			}
		};
compare(userChoice, computerChoice);
}