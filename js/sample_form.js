const NAME_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    if (NAME_PATTERN.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Name is Incorrect";
    }
});