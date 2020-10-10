/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let questionOne = prompt('What is the name of your mom?');
if (questionOne.toUpperCase() === "NEVA") {
  correctAnswers++;
}

let questionTwo = prompt('What is the name of your dad?');
if (questionTwo.toUpperCase() === "RUBI") {
  correctAnswers++;
}

let questionThree = prompt('What is the name of your brother?');
if (questionThree.toUpperCase() === "NATE") {
  correctAnswers++;
}

let questionFour = prompt('What is the name of your girlfriend?');
if (questionFour.toUpperCase() === "CHEENIE") {
  correctAnswers++;
}

let questionFive = prompt('What is your name?');
if (questionFive.toUpperCase() === "DEAN") {
  correctAnswers++;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
  rank = "Gold";
} else if (correctAnswers >= 3) {
  rank = "Silver";
} else if (correctAnswers >= 1) {
  rank = "Bronze";
} else {
  rank = "Sorry no crown";
}

document.querySelector('main').innerHTML = `<h2>${rank}</h2>`;


// 6. Output results to the <main> element