let correctGuess = false;
const number = 6;
const guess = prompt('Guess a number between 1 and 10');

if (+guess === number) {
  correctGuess = true;
}

if (correctGuess === true) {
  console.log('you guessed the correct number');
} else {
  console.log('sorry try again');
}