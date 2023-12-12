/* 
Example 9 - Default value and null merge operator

Refactor the code so that the value is assigned to the value variable variable incomingValue
if it is not equal to undefined or null.Otherwise, defaultValue must be assigned.
Check work script for the following values of the incomingValue variable: null, undefined, 0, false.
Use operator ?? (nullish coalescing operator).

const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
*/

// ?? nullish coalescing operator
// works like || but only for null/undefined
