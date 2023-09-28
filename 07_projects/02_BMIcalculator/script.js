const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if( height === '' || height < 0 || isNaN(height) ){
    result.innerHTML = `Please Enter Valid Height ${height}`
  } else if( weight === '' || weight < 0 || isNaN(weight) ){
    result.innerHTML = `Please Enter Valid Weigth ${weigth}`
  }
  else {
    const bmiVal = (weight/(Math.pow(height,2))).toFixed(2)
    result.innerHTML = `<span>${bmiVal}</span>`
  }
})