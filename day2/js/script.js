/*
if(condition) {
    //it will execute what ever line of code is in here if the condition is true
} else {
    //this will execute if the condition is false
}
*/
let color = "blue";

if (color === "green") {
    console.log("You may go");
} else if (color === "orange") {
    console.log("You should slow down");
} else if (color === "blue") {
    console.log("You should run");
} else {
    console.log("You should stop");
}

//TERNARY OPERATOR IS BASICALLY A ONE-LINER IF ELSE

let age = 18;
// condition ? true : false
// if you have 2 options only
age >= 21 ? console.log("You can enter") : console.log("You shall not pass");
console.log("==============================");

color === "green"
    ? console.log("You may go")
    : color === "orange"
    ? console.log("You should slow down")
    : color === "blue"
    ? console.log("You should run")
    : console.log("You should stop");

console.log("==============================");

/*
    switch(condition) {
        case: 'it would do this line'
                break;
    }
*/

//days represented as 1-7
let day = 1;

switch (day) {
    case "1": //day === 1
        console.log("You should wear white");
        break;
    case 2: //day === 2
        console.log("You should wear yellow");
        break;
    case 3:
        console.log("You should wear brown");
        break;
    case 4:
    case 5:
    case 6:
        console.log("You should wear red");
        break;
    default:
        console.log("You should wear black");
        break;
}
console.log("==============================");
if (true) {
    const value = 5;
    console.log("Block scope: ", value); // 5
}

// console.log("Global scope: ", value); // 5

console.log("==============================");

/*
    for(expression1, expression2, expression3) {
        //code to run
    }
*/

let fruits = ["apple", "banana", "coconut", "grapes", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//while loop is a loop that runs as long as the condition is true it stops when its false. Or it never runs if its false at start.
/*
    while(condition) {
        //code to run
    }
*/

// while (money < 200) {
//     console.log("hahaha");
//     money += 10;
// }

let money = 500;
//do while loop is a loop that runs atleast once even if the condition is false

do {
    console.log("Haha");
} while (money < 200);

//i = 2
//j = 3
for (let i = 0; i < 3; i++) {
    console.log("Outer Loop");
    for (let j = 0; j < 3; j++) {
        console.log("===========Inner Loop===========");
    }
}
