/* 
Example 9 - Sort method

Let the sortByModel function return a new array of cars sorted by model name in ALPHABETICAL and REVESE ALPHABETICAL order, depending on the value of the order parameter.

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

const sortByModel = (cars, order) => {
    // write code below this line
    const sortedCars = [...cars];

    if (order === "asc") {
        sortedCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    if (order === "desc") {
        sortedCars.sort((a, b) => b.model.localeCompare(a.model));
    }

    return sortedCars;

    // write code above this line
};

console.log(sortByModel(cars, "asc"));
console.log(sortByModel(cars, "desc"));
