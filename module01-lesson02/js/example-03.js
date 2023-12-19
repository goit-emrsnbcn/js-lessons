/* 
Example 3 - Branching

Write a script that prints the string "This is a positive number" to the console, if the user entered a number greater than zero in the prompt.

If zero was entered, output to the console the string "This is zero".

If a negative number is passed, in the console should be the string "This is a negative number".

const userInput = prompt('Enter the number');
// Write if, else if , else code below this line
*/

const userInput = prompt("Enter the number");

if (Number(userInput) === 0) {
    console.log("This is zero");
} else if (Number(userInput) > 0) {
    console.log("This is a positive number");
} else if (Number(userInput) < 0) {
    console.log("This is a negative number");
} else {
    console.log("Please input a number");
}
