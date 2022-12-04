function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const color = document.querySelector('.color');



btn.addEventListener('click', changeBgdColor);

function changeBgdColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

