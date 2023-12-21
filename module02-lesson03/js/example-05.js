/* 
Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the first and the last one.
The resulting string must not start or end whitespace character.The script should work for any line.

const string = 'Welcome to the future';
*/

const string = "Welcome to the future";
let words = string.split(" ");
console.log(words);

// words = words.slice(1, 3);
// console.log(words.join(" "));

words.shift();
words.pop();
console.log(words.join(" "));
