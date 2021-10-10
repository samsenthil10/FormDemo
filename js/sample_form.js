const NAME_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const EMAIL_PATTERN = RegExp("^[a-z0-9]+([+._-][a-z0-9]+){0,1}@[a-z0-9]+[.][a-z]{2,4}([.][a-z]{2,4}){0,1}$");
const PHONE_NUMBER_PATTERN = RegExp("^[0-9]{2}[ ][0-9]{10}$");
const PASSWORD_PATERN = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.{8,}$)[0-9a-zA-Z]*[@#$%][0-9a-zA-Z]*$");

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    if (NAME_PATTERN.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Name is Incorrect";
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    if (EMAIL_PATTERN.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email is Incorrect";
    }
});

const PHONE_NUMBER_PATTERN = RegExp("^[0-9]{2}[ ][0-9]{10}$");

const telephoneNumberError = document.querySelector('.tel-error');
telephoneNumber.addEventListener('input', function() {
    if (PHONE_NUMBER_PATTERN.test(telephoneNumber.value)) {
        telephoneNumberError.textContent = "";
    } else {
        telephoneNumberError.textContent = "telephone number is Incorrect";
    }
});

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_PATERN.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password is Incorrect";
    }
});

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_PATERN.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password is Incorrect";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})