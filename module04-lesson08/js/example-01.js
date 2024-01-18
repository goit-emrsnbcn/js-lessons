// let fruits = ["apple", "mango", "banana"];
// let output = fruits.map((fruit) => fruit.length > 5);
// let output2 = fruits.forEach((fruit) => fruit.length > 5);

// console.log(output);
// console.log(output2);

//The foreach method cannot return back anything or the return keyword doesn't work in foreach

/* 
Example 1 - Map method

Let the getModels function return an array of models (model field) of all cars.

*/

const cars = [
    { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
    { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
    { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
    { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
    { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
    { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
    { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
    { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
    { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
    { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
];

//Get all the models of the cars inside this array of objects.
// write code below this line
const getModels = (cars) => {
    return cars.map((car) => {
        return car.model;
    });
};

console.log(getModels(cars));
console.log(cars);
