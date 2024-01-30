// document.getElementById("heading").style.color = "red";

// document.getElementById("heading1").style.color = "red";

// document.getElementById("heading2").style.color = "red";

//html collection is a live collection
//nodelist is a static collection

let headings = document.getElementsByClassName("heading");
// console.log(headings);

let headings2 = document.querySelectorAll(".heading");
// console.log(headings2);

// headings.forEach((heading) => {
//     heading.style.color = "red";
// });

// for (let i = 0; i < headings.length; i++) {
//     headings[i].style.color = "red";
// }

//html collection is live
//node list is a static collection

let addCarBtn = document.getElementById("addCar");
let cars = document.getElementById("cars");
let allTheCars = document.querySelectorAll(".car");
addCarBtn.onclick = () => {
    let li = document.createElement("li"); //<li></li>
    li.innerText = "Nissan"; //<li>Nissan</li>
    li.classList.add("car"); //<li class='car'>Nissan</li>
    cars.appendChild(li);
    console.log(allTheCars);
};

console.log(cars.firstElementChild.nextElementSibling.nextElementSibling);

//querySelector is you can target elements like a css selector
// let msg = document.querySelector("#message::first-letter");
// // console.log(msg);
// msg.style.color = "blue";
// msg.style.fontSize = "40px";
