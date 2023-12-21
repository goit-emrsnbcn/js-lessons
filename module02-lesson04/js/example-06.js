/* 
Example 6 - Finding the largest element (Function Declaration and Spread Operator)
Write a function findLargestNumber(numbers) using Function Declaration that looks for the largest number in array.

*/

//solution 1 - loop
// function findLargestNumber(numbers) {
//     let largest = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) largest = numbers[i];
//     }
//     return largest;
// }

//solution2 - Math.max
function findLargestNumber(numbers) {
    return Math.max(...numbers); //spread operator
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); //94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
