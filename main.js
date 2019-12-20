
/**
 * Generates a random lower case letter
 * Uses the ASCII codes from 97-122 which are a-z respectively
 */
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLower());