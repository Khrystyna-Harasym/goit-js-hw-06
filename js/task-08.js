const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const info= { email: email.value, password: password.value };

    if (email.value === '' || password.value === '') {
        const message = `Введіть усі значення у  нижче вказані поля `;
        alert(message);
    } 
        
    console.log(info);
    evt.currentTarget.reset();
}

