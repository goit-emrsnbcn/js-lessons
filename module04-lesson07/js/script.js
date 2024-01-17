// function hello(name, callback) {
//     callback();
//     return "Hello " + name;
// }

// function sayHi() {
//     console.log("Hi");
// }

// console.log(hello("John Doe", sayHi)); //Hi Hello John Doe or Hello John Doe Hi

let btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("hello world"));

// function registerGuest(name, callback) {
//     console.log("Registering guest " + name);
//     callback(name);
// }

// registerGuest("John Doe", function greet(name) {
//     console.log("Welcome " + name);
// });

// registerGuest("Poly", function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30mins`);
// });

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Simulating the subscriber’s availability with a random number
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable();
//         return;
//     }

//     onAvailable(recipient);
// }

// function takeCall(name) {
//     console.log(`Connecting you to ${name}, please wait...`);
// }
// function activateAnsweringMachine(name) {
//     console.log(`The subscriber ${name} is not available, please leave a message.`);
// }
// function leaveHoloMessage(name) {
//     console.log(`The subscriber ${name} is not available, recording a hologram.`);
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// // processCall("Poly", takeCall, leaveHoloMessage);

// function repeat(n, action) {
//     for (let i = 1; i <= n; i += 1) {
//         action(i);
//     }
// }

// function printValue(value) {
//     console.log(value);
// }

// function prettyPrint(value) {
//     console.log("Logging value: ", value);
// }

// // repeat(3, printValue);
// repeat(5, prettyPrint);

let fruits = ["apple", "mango", "banana"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//1 - individual item
//2 - index number
//3 - array itself
// fruits.forEach(function (fruit, i) {
//     console.log(`Index: ${i}, Value: ${fruit}`);
// });

//fruits.forEach((fruit, i) => console.log(`Index: ${i}, Value: ${fruit}`))

const logMessage = (fruit, i) => console.log(`Index: ${i}, Value: ${fruit}`);
fruits.forEach(logMessage);

function add(a, b) {
    return a + b;
}

//You only use curly brackets on arrow functions if you have more than 1 line of code.
const sum = (a, b) => a + b;

//imperative programming
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//declarative programming
// fruits.forEach((fruit, i) => console.log(`Index: ${i}, Value: ${fruit}`));

// you NEED to write parenthesis if you DONT have any parameter
// you DONT need to write parenthesis if you only have 1 parameter
// you NEED to write parenthesis if you have 2 or more parameter
// fruits.forEach((fruit) => console.log(fruit));
