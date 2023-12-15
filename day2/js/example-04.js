/* 
Example 4 - Nested branches

Write a script that compares the numbers in variables a and b. 

If both values greater than 100,then print the maximum of them to the console.

Otherwise, the console should show the sum of the value b and the number 512.

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    //print to the console the maximum value between a and b here
} else {
    //print to the console the sum of b and number 512 here
}
*/

const a = 20;
const b = 180;

if (a > 100 && b > 100) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
} else {
    console.log(b + 512);
}
