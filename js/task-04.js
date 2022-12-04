

let counterValue = 0;


const dekrBtn = document.querySelector('#counter [data-action="decrement"]');
const incrBtn = document.querySelector('#counter [data-action="increment"]');
const value =document.querySelector('#value')

dekrBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.dir(value.textContent);
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
    value.textContent = counterValue;
     console.dir(value.textContent);
});