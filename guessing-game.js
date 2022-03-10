function guessingGame() {
	const luckyNum = Math.floor(Math.random() * 100);
	let beatGame = false;
	let numGuesses = 0;
	const guess = function(num) {
		if (beatGame === true) return "The game is over, you already won!";
		if (num > luckyNum) {
			numGuesses++;
			return `${num} is too high!`;
		} else if (num < luckyNum) {
			numGuesses++;
			return `${num} is too low!`;
		} else {
			beatGame = true;
			numGuesses++;
			return `You win! You found ${num} in ${numGuesses} guesses.`;
		}
	};
	return guess;
}

module.exports = { guessingGame };
