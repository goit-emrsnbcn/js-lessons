/* 
Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';
//erutuf eht ot emocleW

*/

const string = "Welcome to the future";
// let words = string.split("");
// console.log(words);

// let revWords = words.reverse();
// console.log(revWords);

// let result = revWords.join("");
// console.log(result);

//alternate way -> method chaining
let result2 = string.split("").reverse().join("");
console.log(result2);

//Palindrome its a word that is spelled forward and backward and its still the same word
function isPalindrome(string) {
    let revWords = string.split("").reverse().join("");
    if (string === revWords) return true;
    return false;
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("bob")); //true
console.log(isPalindrome("car")); //false
console.log(isPalindrome("nasabayabasan")); //true

function isPalindrome2(string) {
    let revWord = "";
    //start the loop at the end of the string and stop at the starting letter and push each letter in the revWord
    for (let i = string.length - 1; i >= 0; i--) {}
    return string === revWord;
}

console.log(isPalindrome2("racecar")); //true
console.log(isPalindrome2("bob")); //true
console.log(isPalindrome2("car")); //false
console.log(isPalindrome2("nasabayabasan")); //true
