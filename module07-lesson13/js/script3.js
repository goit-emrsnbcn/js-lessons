// let cars = document.querySelectorAll("li");

// cars.forEach((car) => {
//     car.addEventListener("click", (e) => {
//         console.log("You clicked: " + e.target.innerText);
//     });
// });

//EVENT DELAGATION
//We are gonna target the parent element and then once an item is clicked it should console.log the name of the car
// let cars = document.getElementById("cars");
// cars.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//         console.log("You clicked: " + e.target.innerText);
//     }
// });

const ul = document.getElementById("cars");
const cars = ["honda", "toyota", "bmw", "proton", "tesla"];

for (let car of cars) {
    let li = document.createElement("li");
    li.innerText = car;
    ul.appendChild(li);
}
let lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        console.log("You clicked: " + e.target.innerText);
    });
});
