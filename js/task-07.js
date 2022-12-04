const sizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

sizeControl.addEventListener('input', onChangeSize);

function onChangeSize(evt) {
    spanText.style.fontSize = `${evt.currentTarget.value}px`;
}