/* 
Example 2 - Time display (if...else)

Write a script to display hours and minutes in the browser console as a string format "14 hours 26 minutes.". 
If the value of the minutes variable is 0, then output the string "14 o'clock", without minutes.

const hours = 14;
const minutes = 26;
let timestring;
// Write if else code below this line
console.log(timestring);
*/

const hours = 14;
const minutes = 0;
let timestring;
// Write if else code below this line
if (minutes > 0) {
    timestring = `${hours} hours ${minutes} minutes.`;
} else {
    timestring = `${hours} o'clock`;
}
console.log(timestring);
