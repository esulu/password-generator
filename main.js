
const resultBox = document.getElementById('result');
const lengthField = document.getElementById('length');
const uppercaseBtn = document.getElementById('uppercase');
const lowercaseBtn = document.getElementById('lowercase');
const numberBtn = document.getElementById('numbers');
const symbolBtn = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('clipboard');

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

/**
 * Handler that parses the user specifications 
 */
generateBtn.addEventListener('click', function () {
    var length = parseInt(lengthField.value);
    var hasUpper = uppercaseBtn.checked;
    var hasLower = lowercaseBtn.checked;
    var hasNumber = numberBtn.checked;
    var hasSymbol = symbolBtn.checked;

    resultBox.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});


/**
 * Generates a random lower case letter
 * Uses the ASCII codes 97-122 which are a-z respectively
 */
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * Generates a random upper case letter
 * Uses the ASCII codes 65-90 which are A-Z respectively
 */
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * Generate a random number from 0-9
 * Uses the ASCII codes 48-57 
 * Note: returns a String, not an Integer type
 */
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/** 
 * Generate random symbol
 */
function getRandomSymbol() {
    const symbols = '!@#$%^&*?';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
