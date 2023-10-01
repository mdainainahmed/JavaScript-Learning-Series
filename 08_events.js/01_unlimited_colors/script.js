const start = document.getElementById('start')
const stop = document.getElementById('stop')
const body = document.querySelector('body')
const result = document.getElementById('result')

const color = ['red', 'green', 'blue', 'yellow', 'gray', 'purple', 'orange' ]

let index;
let changeMe;

let play = true

if( play ){
  start.addEventListener('click', startChange)
}

function startChange() {
  if( !index ) 
    index = parseInt(Math.random()*(color.length))
  changeMe = setInterval( () => {
    index = parseInt(Math.random()*(color.length))
    body.style.backgroundColor = color[index]
    result.innerHTML = `${color[index]}`
  }, 1000 )

  stop.addEventListener('click', stopChange)
}

function stopChange() {
  clearInterval(changeMe)
  result.innerHTML = `Game Stopped: Press Start to play`
  index = null
}
