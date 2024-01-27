//LITERAL OBJECT
// let person = {};

// //new Object
// let personTwo = new Object(); //{}
// //let personTwo =  {}
// console.log(personTwo);

// let fruits = [];

// let fruitsTwo = new Array(); //[]

const animal = {
    legs: 4,
};

const dog = Object.create(animal); //{}
console.log(animal.isPrototypeOf(dog));
console.log(dog.hasOwnProperty("name"));
dog.name = "Mango";
console.log(dog.hasOwnProperty("name"));

dog.barks = true;

console.log(dog);

for (let key in dog) {
    console.log(key + " :" + dog[key]);
}

//Prototype - it is an object that contains properties or methods that you can use for that object

let fruits = ["apple", "mango", "banana"];
console.log(fruits);
