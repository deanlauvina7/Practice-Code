function getRandomNumber(params) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  return randomNumber;
};

alert(getRandomNumber());