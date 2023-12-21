/* 
Example 2 - Arrays and Strings

- Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string. 
- Values guaranteed separated by a space.

const values = '8 11';
*/

const values = "8 11";
const nums = values.split(" ");
console.log(nums);

const area = nums[0] * nums[1];
console.log(area);
