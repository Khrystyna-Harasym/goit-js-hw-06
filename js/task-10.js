function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const btnC = document.querySelector('[data-create]');
const btnD = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnC.addEventListener('click', createBox);
btnD.addEventListener('click', destroyBox);

function createBox(sum) {
  sum = input.value;
  const items = [];
  for (let i = 0; i <= sum ; i += 1){
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    items.push(div);
    
  }

  boxes.append(...items);
  
};

function destroyBox() {
  boxes.innerHTML = '';
}
