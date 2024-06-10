const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const lengthInput = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const strengthIndicator = document.querySelector('.strength-indicator').children;

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

lengthInput.addEventListener('input', () => {
    lengthVal.textContent = lengthInput.value;
});

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
});

function generatePassword() {
    let charset = '';
    let password = '';

    if (uppercaseCheckbox.checked) charset += uppercaseLetters;
    if (lowercaseCheckbox.checked) charset += lowercaseLetters;
    if (numbersCheckbox.checked) charset += numbers;
    if (symbolsCheckbox.checked) charset += symbols;

    if (charset === '') return;

    const passwordLength = parseInt(lengthInput.value);

    for (let i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    passwordInput.value = password;
    updateStrengthIndicator(passwordLength);
}

function updateStrengthIndicator(length) {
    for (let i = 0; i < strengthIndicator.length; i++) {
        strengthIndicator[i].style.backgroundColor = '#3c3c3c';
    }

    if (length > 4) strengthIndicator[0].style.backgroundColor = '#ff5555';
    if (length > 8) strengthIndicator[1].style.backgroundColor = '#f1fa8c';
    if (length > 12) strengthIndicator[2].style.backgroundColor = '#50fa7b';
    if (length > 16) strengthIndicator[3].style.backgroundColor = '#50fa7b';
}
