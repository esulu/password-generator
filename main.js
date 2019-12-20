
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
 * Handler that parses the user specifications when generate button is clicked
 */
generateBtn.addEventListener('click', function () {
    var length = parseInt(lengthField.value);
    var hasUpper = uppercaseBtn.checked;
    var hasLower = lowercaseBtn.checked;
    var hasNumber = numberBtn.checked;
    var hasSymbol = symbolBtn.checked;

    // Sets bounds for the length of the password
    if (length > 20) { 
        length = 20;
    } else if (length < 4) { 
        length = 4;
    }

    resultBox.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});

// Copy password to clipboard
clipboard.addEventListener('click', function() {
    var textarea = document.createElement('textarea');
    const password = result.innerText; // password contained in the inner text

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied to clipboard');

});

/**
 * Function that generates the password
 */
function generatePassword(length, upper, lower, number, symbol) {
    let passwordString = '';

    const checkedItems = upper + lower + number + symbol;

    // Parses the elements into an array containing only those that are checked 
    const itemsArr = [ { upper }, { lower }, { number }, { symbol } ].filter(item => Object.values(item)[0]);

    // No fields selected
    if (checkedItems === 0) {
        return '';
    }

    // Constructs the password string
    for(let i = 0; i < length; i++) {
        var functionIndex = Object.keys( itemsArr[Math.floor(Math.random() * checkedItems)] )[0]; // selects one of the available queries 

        passwordString += randomFunction[functionIndex](); // appends the string
    }

    return passwordString;
}

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
