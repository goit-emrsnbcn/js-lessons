/* 
Example 8 - Search for an element
    
Write a script to find the smallest number in an array. The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
*/

function getMin(array) {
    let smallest = array[0]; //1
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

console.log(getMin([2, 17, 94, 1, 23, 37])); //1
//console.log(getMin([42, 85, 11, 32, 15])); //11
