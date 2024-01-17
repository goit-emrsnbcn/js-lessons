/* 
Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.
*/

function each(array, callback) {
    const newArr = [];
    for (const el of array) {
        newArr.push(callback(el));
    }
    return newArr;
}

//change this into one line
console.log(
    each([64, 49, 36, 25, 16], (value) => {
        return value * 2;
    })
);
