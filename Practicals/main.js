// Selector
const form = document.getElementById('form')
const username = document.getElementById('username')
const password_1 = document.getElementById('password-1')
const password_2 = document.getElementById('password-2')
const email = document.getElementById('email')

// Event Handler


// Event
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkInputs();
});


// Function

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const password_1Value = password_1.value;
    const password_2Value = password_2.value;
    /*console.log(usernameValue)*/

    if (usernameValue === '') {
        showError(username, "Username can't be blank");
    } else if (!isUsernameValid(usernameValue)) {
        showError(username, "Username is not Valid");
    } else {
        showSuccess(username);
    }

    if (emailValue === '') {
        showError(email, "Email-ID can't be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email-ID is not Valid");
    } else {
        showSuccess(email);
    }

    if (password_1Value === '') {
        showError(password_1, "Password can't be blank");
    } else {
        showSuccess(password_1);
    }

    if (password_2Value === '') {
        showError(password_2, "Confirm-Password can't be blank");
    } else if (password_1Value != password_2Value) {
        showError(password_2, "Password's not Matched");
    } else {
        showSuccess(password_2);
    }
}


function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerHTML = msg;
}


function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(name) {
    return /^([a-zA-Z]+)([0-9]+)$/.test(name);
}

