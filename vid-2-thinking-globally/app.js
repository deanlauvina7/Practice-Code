const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.add-item-input');
const addItemButton = document.querySelector('button.add-item-btn');
const removeItemButton = document.querySelector('button.remove-item-btn');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  li.textContent = addItemInput.value;
  ul.removeChild(li);
});