/* 
Example 8 - if...else and logical operators

Write a script that will output a string to the browser console depending on hours variable values.

If the value of the variable hours:
    - less than 17, output the string "Pending"
    - greater than or equal to 17 and less than or equal to 24, output the string "Expires"
    - greater than 24 , output the string "Overdue"

const hours = 24;
// Write if, else if, else code below this line
*/

const hours = 15;

if (hours < 17) console.log("Pending");
else if (hours >= 17 && hours <= 24) console.log("Expires");
else console.log("Overdue");
