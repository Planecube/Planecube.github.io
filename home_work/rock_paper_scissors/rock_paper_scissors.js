// this app relies on the 'prompt' node module
var prompt = require('prompt');

// initializes game; prompts user for rock, paper, or scissors input
function init () {
	prompt.get('choice', function (err, result) {
		var choice = result.choice;

		// error handling - will run prompt again if user does not enter rock, paper, or scissors
		if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
			return init();
		}

		console.log('The user selected: ' + choice + '!')

		// triggers game
		startGame(choice)
	});
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
	var cpuChoice = generateCPUChoice();
	var winner = compare(userChoice, cpuChoice);
	console.log(winner + ' is the winner!');
}

// YOUR CODE BELOW!

// 1. The function generateCPUChoice should randomly generate and return one of the following values: 'rock', 'paper', or 'scissors'
// Start by creating an array containing: ['rock', 'paper', 'scissors']
// Then, randomly generate a whole number between 0 and 2
// Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
// Ensure you return this value!
function generateCPUChoice () {
	var choices = ['rock', 'paper', 'scissors'];
	var randomNumber = Math.floor(Math.random() * 3);

	return choices[randomNumber];
}


// 2. The function compare takes two strings (userChoice and cpuChoice) that represent the user's and cpu's respective choices: 'rock', 'paper', or 'scissors'
// This function should compare the two choices, and return a winner
// For example, if userChoice === 'rock' and cpuChoice === 'scissors', then 'user' should be returned
// Hint: use if/else/else if logic to compare the values and return a winner

function compare(userChoice, cpuChoice){
//if (true) {    why true?
	if (userChoice === cpuChoice) { 
		return 'Nobodaddy';
	}	else if (userChoice === 'rock' && cpuChoice === 'scissors') {
		return 'user';
	} 
		else if (userChoice === 'rock'&& cpuChoice === 'paper') {
		return 'CPU';
	} 
		else if (userChoice === 'scissors'&& cpuChoice === 'paper') {
		return 'user';
	}
		else if (userChoice === 'scissors'&& cpuChoice === 'rock') {
		return 'CPU';
	} else if (userChoice === 'paper' && cpuChoice === 'rock') {
	  return 'user';
  } else if (userChoice === 'paper' && cpuChoice === 'scissors') {
	  return 'user';
  }
  }
	
/* second arrangement to include lossing rounds, not working?
	if (userChoice === cpuChoice) {
			return 'Tie!'
	} else if (userChoice === 'rock'){
			if (cpuChoice ==='paper'){
				return 'loser';
  	}	else (cpuChoice === 'scissors'){
				return 'winner';
	}	else if (userChoice === 'paper'){
			if (cpuChoice ==='scissors'){
			return 'loser';
		}	else {cpuChoice === 'rock'
		return 'winner';
	} else if (userChoice === 'scissors'){
			if (cpuChoice ==='rock'){
				return 'loser';
  	}	else (cpuChoice === 'paper'){
				return 'winner';
	}
}; 
*/


