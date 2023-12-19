/*
Example 9 - Project submission deadline (if...else)

Write a script to display the project deadline time. 

Use if...else construction.
    - If there are 0 days before the deadline - output the string "Today"
    - If it's 1 day before the deadline - output the string "Tomorrow"
    - If it's 2 days before the deadline - output the string "The day after tomorrow"
    - If it's 3+ days before the deadline - print the string "Date in the future"

const daysUntilDeadline = 5;
// Write code below this line
 */
const daysUntilDeadline = 0;
if (daysUntilDeadline === 0) console.log("Today");
else if (daysUntilDeadline === 1) console.log("Tomorrow");
else if (daysUntilDeadline === 2) console.log("The day after tomorrow");
else console.log("Date in the future");
