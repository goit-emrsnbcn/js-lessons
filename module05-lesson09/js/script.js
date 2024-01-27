// "use strict";

let x = 5;
console.log(x);
// 1. this in global scope ->  window without "use strict" and undefined with "use strict"
function foo() {
    console.log(this);
}
foo();

// 2. this in object method -> object calling the method(petya object)
const petya = {
    username: "Petya",
    age: 35,
    showThis() {
        console.log(this);
    },
};
//it will always give you the object itself
petya.showThis(); //{username: 'Petya',age: 35, showThis: f}

// 3. this in arrow functions
const arrowThis = () => console.log(this);
arrowThis(); //this would always give you the window object.
