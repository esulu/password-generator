# password-generator

Working version on [codepen](https://codepen.io/eren/pen/ExaWOaK)

Based off the generator created by [Florin Pop](https://codepen.io/FlorinPop17). The password generator in the previous implementation generates each specified character type (i.e., uppercase, lowercase, number, symbol) in order. Meaning, in the case where all fields are selected, a generated password of length 4 will contain an uppercase letter, a lowercase letter, a number, and a symbol in order. This implementation completely randomizes the ordering of these symbols and the frequency they are generated in. 

### What it does

Generates a randomized password up to 20 characters. The final password can be a mix of upper/lower case letters, numbers, and/or symbols depending on the users selection. Once you have generated a password and you would like to use it, you can press the clipboard button on the right of the output box to copy it to your clipboard. 

### How it does it

Uses ASCII indexing for the most part. The program generates a random integer and sets a proper bounds depending on the ASCII values of the field. For the symbols field the random generation is done by randomly indexing from a string of symbol characters. 

### Why

I used to use similar passwords on every site. I knew it was a bad idea but stuck with it since it was easy to remember my passwords across different sites. However, it did not go so well when one of my accounts got compromised when a company I had an account with suffered a data breach. Slowly I was receiving alerts from my other accounts getting accessed as well. The day when I was listening to Leonard Cohen on Spotify and the music suddenly started playing from a device I didn't own was the day I changed my lousy password practices. Don't do what I did. 
