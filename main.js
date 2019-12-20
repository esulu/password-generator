
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

 console.log(getRandomSymbol());