let fruits = ["apple", "mango", "banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

fruits[1] = "kiwi";
console.log(fruits[1]);

console.log(fruits.length - 1); //the last index

console.log(fruits[fruits.length - 1]);

console.log("================ 2D ARRAY ==================");

const heroes = [
    //      0           1           2
    ["superman", "batman", "cat girl"], //0
    ["hulk", "thor", "ironman"], //1
    ["robert cop", "captain barbell", "kamen rider"], //2
];

console.log(heroes[1][2]);
console.log(heroes[2][1]);

const clients = ["Mango", "Ajax", "Poly", "Kim"]; //....1000

for (let i = 0; i < clients.length - 1; i++) {
    console.log(clients[i]);
    // if (clients[i] === "Kim") {
    //     console.log("Found it");
    // }
}

console.log("================");

//for(const singular of plural)
for (const client of clients) {
    console.log(client);
}

console.log("================");

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < threshold) {
        continue;
        console.log(numbers[i]);
    }
    console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

console.log("====ARRAY METHODS====");

//split and join
//split is used to turn a string data type into an array
let message = "hello world hi";
let words = message.split(" ");
console.log(words);

console.log(words.join("-"));

//indexOf() - it returns the index number of that item if the item doesnt exist it returns -1
console.log(numbers.indexOf(99));

//includes() - returns true or false
console.log(numbers.includes(29));
console.log(numbers.includes(99));

//push - add item at the end of the list
//pop - remove an item at the end of the list

let cars = ["honda", "toyta", "bmw", "tesla", "suzuki"];
cars.push("geely");
console.log(cars);
cars.pop();
console.log(cars);

//shift - remove item in front of the list
//unshift - add item in front of the list

cars.shift();
console.log(cars);

cars.unshift("proton");
console.log(cars); //['proton', 'toyta', 'bmw', 'tesla', 'suzuki']

console.log("==== SLICE ====");

//slice(start, finish) but not including the last item
//slice(start, howmany)
cars = cars.slice(0, 3);
console.log(cars); //['proton', 'toyta', 'bmw']

console.log("==== SPLICE =====");
//splice(index, howmany) - 2 items means you want to delete
//splice(index, howmany, item1, item2, item3)  - 3 items you want to delete and add or you just want to add items

cars.splice(2, 1);
console.log(cars);

// cars.splice(1, 0, "honda", "bmw", "kia");
cars.splice(1, 1, "honda");
console.log(cars);
