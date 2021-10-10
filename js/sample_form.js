const NAME_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const EMAIL_PATTERN = RegExp("^[a-z0-9]+([+._-][a-z0-9]+){0,1}@[a-z0-9]+[.][a-z]{2,4}([.][a-z]{2,4}){0,1}$");
const PHONE_NUMBER_PATTERN = RegExp("^[0-9]{2}[ ][0-9]{10}$");

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