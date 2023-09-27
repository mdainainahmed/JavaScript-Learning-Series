const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // const color = event.target.id
    // or
    const color = btn.id;
    body.style.backgroundColor = color;
  });
});
