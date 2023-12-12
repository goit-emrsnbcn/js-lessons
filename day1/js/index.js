const btn = document.getElementById("btn");
btn.onclick = function () {
    alert("Hello World");
};

console.log("Hello From index.js");

/* 
    var, let, const
    var - you can redeclare the variable and reassign a value
    let - you cannot redeclare the variable name but you can reassign a value
    const - you cannot redeclare and you cannot re assign a value
*/
// var x = 5;
// var x = 10;

// let x = 5;
// x = 10;
// const x = 5;
// x = 10;
var x = "fson3";
console.log(x);

//camelCase
//snake_case
//kebab-case
let currentProfile = "John Doe";
// console.log(currentProfile);
// alert(currentProfile);

const a = 10;
const b = 5;

console.log(a + b); // 15 addition
console.log(a - b); // 5 subtraction
console.log(a * b); // 50 multiplication
console.log(a / b); // 2 division
console.log(a % b); // 0 remainder

const length = 10;
const width = 6;
const height = 5;

let area = width * height;
let volume = length * width * height;
console.log(area);
console.log(volume);

console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 5); //true
console.log(5 >= 5); //true
console.log(10 <= 5); //false
console.log(5 <= 5); //true

/*
    string - is a set of characters inside a quote "hello world"
    number - 5, 1, 10
    boolean - true / false can also be represented as the numeric value 1 and 0
*/

console.log("==============EQUALITY OPERATORS=================");
//equality operator == it only checks the value not the data type.
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(true == 1); //true
console.log(false == 0); //true

//strict equality operator === it checks the value and it aslo checks the data type
console.log(5 === "5"); //false
console.log(5 === 5); //tue
console.log(true === 1); //false
console.log(false === 0); //false

//INEQUALITY OPERATOR != (are they not equal)
console.log(5 != 5); //false
console.log(10 != 25); //true
console.log("hello" == "HELLO");

//STRICT INEQUALITY OPERATOR !== (are they strictly not equal in terms of value and data type)
console.log(10 !== 5); //true
console.log(5 !== 5); //false

let loggedIn = true;
console.log(!loggedIn);

console.log("===============NUMBERS===============");
console.log(Number("5")); //5
console.log(parseInt("5qwe")); //5
console.log(parseInt("a5b"));
console.log(parseInt("15asd5")); //15

console.log(parseFloat("12.5qwe")); //12.5
console.log(isNaN(50)); //is this not a number?
console.log(isNaN("50")); //false
let y = "50";
y = Number(y);
console.log(isNaN(y)); //false

console.log("===============MATH CLASS===============");
//Math.floor() - round down to the smallest integer
//Math.ceil() - round up to the largest integer
//Math.round() - round to the nearest integer.

console.log(Math.floor(1.3)); //1
console.log(Math.ceil(1.3)); //2
console.log(Math.round(1.3)); //1

console.log(Math.random()); //numbers between 0 and 1 but you can never get exactly 0 or 1

console.log(Math.ceil(Math.random() * 5));

//TEMPLATE LITERALS
const fullName = "John Doe";
const age = 42;

console.log("My name is " + fullName + " and I am " + age + " years old.");
console.log(`My name is ${fullName} and I am ${age} years old.`);

const names = ["john", "jane", "juan"];
const ages = [42, 35, 92];
console.log(`My name is ${names[0]} and I am ${ages[0]} years old.`);
console.log(`My name is ${names[1]} and I am ${ages[1]} years old.`);
console.log(`My name is ${names[2]} and I am ${ages[2]} years old.`);

let car = {
    //key -> value
    //property -> value
    color: "red",
    brand: "bmw",
    wheels: 4,
    "zx-5xc": "hello",
};

console.log(car.color);
console.log(car["color"]);
console.log(car["zx-5xc"]);
