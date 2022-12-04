const input = document.querySelector("#validation-input");

input.addEventListener('blur', onIntup);

function onIntup(evt) {
    if (evt.currentTarget.value.length < Number(evt.currentTarget.dataset.length)) {
        evt.currentTarget.classList.add("invalid");
        
        console.log(input.value);
    } else {
      evt.currentTarget.classList.replace('invalid', 'valid');
        console.dir(input.value);
    }
} 