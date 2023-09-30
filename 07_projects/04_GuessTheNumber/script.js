let guessessArr = [];
let randomNumber;
const form = document.querySelector('form');
const inputVal = document.querySelector('#guessField');
const prevGuesses = document.querySelector('.guesses');
const guessessRemaining = document.querySelector('.lastResult');
const result = document.querySelector('.lowOrHi');

let play = true;

if (play) {
  randomNumber = generateRandom();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // check valid
    const guess = parseInt(inputVal.value);
    validationCheck(guess);
  });
}

function validationCheck(guess) {
  if (guess < 1) displayMessage('Input < 1');
  else if (guess > 100) displayMessage('Input > 100');
  else if (guess === '') displayMessage('Enter Valid Number');
  else if (isNaN(guess)) displayMessage('Input is NAN');
  else if (guessessArr.includes(guess)) displayMessage('Enter unique values');
  else if (guess === randomNumber) {
    displayMessage('Hurray! You have Matched');
    endGame();
  } else {
    displayMessage(' ');
    updateArr(guess);
  }
}

function displayMessage(message) {
  result.innerHTML = message;
}

function updateArr(guess) {
  guessessArr.push(guess);
  // update Previous Guesses Section
  updatePreviousGuesses();
}

function updatePreviousGuesses() {
  prevGuesses.innerHTML = `${guessessArr.map((val) => val)}`;
  // update remaining guesses
  updateRemainingGuesses();
}

function updateRemainingGuesses() {
  const leftGuesses = 10 - guessessArr.length;
  guessessRemaining.innerHTML = `${leftGuesses}`;
  // check if guesses left
  guessesLeft(leftGuesses);
}

function guessesLeft(count) {
  if (count == 0) {
    displayMessage('No Guesses Left');
    endGame();
  }
}

function endGame() {
  guessessArr = [];
  prevGuesses.innerHTML = '';
  guessessRemaining.innerHTML = 10;
  randomNumber = generateRandom();
}

function generateRandom() {
  return parseInt(Math.random() * 100 + 1);
}
