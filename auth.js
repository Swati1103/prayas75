const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const numberInput = document.getElementById('number_input');
const passwordInput = document.getElementById('password_input');
const signUpButton = document.getElementById('sign_up_button');
const form = document.getElementById('form');
const array = [];

signUpButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameInput.value && emailInput.value && numberInput.value && passwordInput.value){
        const user = {
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value,
            password: passwordInput.value
        };
    
        const userExists = array.some(element => element.email === user.email || element.password === user.password);
    
        if (userExists) {
            window.alert('Email or password already exists');
        } else {
            array.push(user);
            window.alert("sign up successfully, click ok to continue")
            window.location.href = "index.html"
        }
    }else{
        window.alert('Please fill in all fields');
    }

});
