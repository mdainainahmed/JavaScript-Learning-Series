const display = document.querySelector("#clock")

setInterval( () => {
  let date = new Date()
  display.innerHTML = `${date.toLocaleTimeString()}`
}, 1000)