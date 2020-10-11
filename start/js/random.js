// Collect input from a user
let userInput = prompt('Please provide a number');
// Convert the input to a number
let userInputNumber = parseInt(userInput);
// Use math.random() and the user's number to generate a random number
let ranNum = Math.floor(Math.random() * userInputNumber) + 1;
// Create a message displaying the random number
document.querySelector('main').innerHTML = `<h2>${ranNum} is a number between 0 and ${userInputNumber}</h2>`;

if (userInputNumber <= 0) {
  alert('Sorry, please provide a number higher than 0');
}