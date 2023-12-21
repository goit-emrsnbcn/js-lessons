/*
Example 7 - Average value (Function Declaration and Rest Operator)

Write a calAverage() function using Function Declaration that takes an arbitrary number of arguments and returns their average. All arguments will be only numbers.

*/

function calAverage(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}

console.log(calAverage([1, 2, 3, 4])); //2.5
