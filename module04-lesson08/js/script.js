// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i] * value;
//     }
//     return array;
// };

const dirtyMultiply = (array, value) => {
    const newArray = [];

    // array.forEach(function (num) {
    //     newArray.push(num * value);
    // });
    array.forEach((num) => newArray.push(num * value));

    return newArray;
};
const numbers = [1, 2, 3, 4, 5];
console.log(dirtyMultiply(numbers, 2));
