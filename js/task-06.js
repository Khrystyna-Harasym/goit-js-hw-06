const input = document.querySelector("#validation-input");

input.addEventListener('blur', onIntup);

function onIntup(evt) {
    if (evt.currentTarget.value.length < Number(evt.currentTarget.dataset.length)) {
        evt.currentTarget.classList.add("invalid");
        return;
    } else {
        evt.currentTarget.classList.remove('invalid');
        evt.currentTarget.classList.add("valid");
        return;
    }
} 