// Created a variable for what we want to change
const myList = document.getElementsByTagName('li');

// We looped over all the element in our list and we want to change the color to purple
for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

// After the entire list has turned purple, we select all of the elements with a class name 'error-not-purple
const errorNotPurple = document.getElementsByClassName('error-not-purple');
// Then we loop through the entire list for elements with that class name and turn them red;
for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';

}