let prevGuess = []
const number = parseInt(Math.random() * 100 + 1)

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const result = document.querySelector('.lowOrHi')
  const guessRemaining = document.querySelector('.lastResult')
  const previousGesses = document.querySelector('.guesses')

  // get input value
  const guessVal = document.querySelector('#guessField').value

  // check input value is valid or not
  if (guessVal === '' || guessVal < 1 || guessVal > 100 || isNaN(guessVal)) {
    result.innerHTML = `<span>Please Enter a valid Guess ${guessVal}</span>`
    result.style.backgroundColor = 'red'
    return
  } else
    result.innerHTML = ''


  // check if input value matched
  if (guessVal == number) {
    result.innerHTML = `<span>Hurray! You matched the number ${guessVal}</span>`
    result.style.backgroundColor = 'yellow'
    result.style.color = '#000'
    prevGuess = []
    previousGesses.innerHTML = '<span></span>'
    guessRemaining.innerHTML = '<span>10</span>'
    return
  }
  // check input value is already present
  if (prevGuess.includes(guessVal)) {
    result.innerHTML = `<span>Enter a Unique Value ${guessVal}</span>`
    result.style.backgroundColor = 'red'
    return
  }

  // push in prevGuess
  prevGuess.push(guessVal)

  // update Previous Gesses
  previousGesses.innerHTML = `${prevGuess.map((val) => val)}`

  // size of prevGuess
  const currSize = prevGuess.length

  // update Guesses Remaining
  const val = 10 - prevGuess.length
  guessRemaining.innerHTML = `<span>${val}</span>`

  // check if no guess left : preCheck
  if (prevGuess.length == 10) {
    result.innerHTML = `<span>All guesses completed. ${val} guesses left....</span>`
    result.style.backgroundColor = 'red'
    prevGuess = []
  }
});
