/* 
Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?". 
If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"

const answer = prompt('What is the official name of JavaScript?');
const rightAnswer = 'ECMAScript';
// Write if else code below this line
*/

const answer = prompt("What is the official name of JavaScript?");
const rightAnswer = "ECMAScript";

if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
    alert("Correct!");
} else {
    alert("Do not know? ECMAScript!");
}
