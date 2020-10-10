// Declare variables to capture input
const noun = prompt('Type a "noun".');
const verb = prompt('Type a "verb".');
const adjective = prompt('Type a "adjective".');
// Comnine the input with other words to create a story
const story = `<h2>The ${noun} ${verb}ed over the ${adjective} hill to get to the owner.</h2>`
// Display the story as a <p> inside the <main> element
document.querySelector('main').innerHTML = story;