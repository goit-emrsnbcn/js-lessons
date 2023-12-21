//parameter/s
function sayHello(name, age) {
    console.log(`Hello ${name}, Age: ${age}`);
}

//argument/s
sayHello("John", 42);

function add(n1, n2) {
    return n1 + n2;
}

let result1 = add(5, 10);
let result2 = add(20, 10);
console.log(result1);
console.log(result2);

//METHOD - is a function inside an object.
let person = {
    name: "Juan",
    age: 50,
    address: "Manila",
    sayHi: function () {
        return "Hi";
    },
};

console.log(person.sayHi());

function test(a = 10, b, c) {
    return [a, b, c];
}

console.log(test((b = 5), (c = 25), (a = 10)));

function multiply(n1, n2) {
    return n1 * n2;
}
console.log(multiply(5, 2));

//rest operator
function displayNames(a, ...b) {
    return [a, b];
}
console.log(displayNames("John", "Jane", "Jason", "Kyle", "Gio", "Ralph", "James"));

function sum(nums) {
    let total = 0; //5
    // for (let i = 0; i < nums.length; i++) {
    //     total += nums[i + 1];
    // }

    for (let num of nums) {
        total += num;
    }

    return total;
}

// console.log(sum([5, 23, 13, 42, 99, 10, 81, 92, 35]));
console.log(sum([11, 22, "James", 33, 44, 55]));

//To always think of your base case
//on what condition would you want this code to stop?

console.log("=======SCOPE=========");

let tax = 12;
function scoping() {
    tax = 52;
    console.log(tax); //12 or 52?
}
scoping();
// console.log(pi); //pi or undefined?

// const x = 10;
// function foo() {
//     console.log(d); //40?
//     const b = 20;
//     for (let i = 0; i < 5; i++) {
//         const c = 30;
//         if (i === 3) {
//             const d = 40;
//             console.log(x); //10
//             console.log(y); //20
//             console.log(z); //30
//         }
//     }
// }
// foo();

// console.log(fizz);
// let fizz = "hello world";

// console.log("after fizz");

//FIBONACCI SEQUENCE
//A SERIES NUMBER THAT THE NEXT NUMBER IS THE SUM OF THE PREVIOUS 2 NUMBERS

//0 1 1 2 3 5 8 13 21

function nthFib(n) {
    if (n === 2) return 1;
    if (n === 1) return 0;
    return nthFib(n - 1) + nthFib(n - 2);
}

console.log(nthFib(90)); //3

//RECURSION is a function call inside a function/ you are calling the function inside or itself.
