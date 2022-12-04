let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(evt) {
    output.textContent = "Anonymous";
    console.dir(input.value);
    if (evt.currentTarget.value !== "") {
    output.textContent = evt.currentTarget.value;
    } 
}
