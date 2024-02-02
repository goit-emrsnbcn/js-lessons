// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");
// let box6 = document.getElementById("box6");
// let box7 = document.getElementById("box7");
// let box8 = document.getElementById("box8");
// let box9 = document.getElementById("box9");

// box1.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box1.style.backgroundColor = color.toLowerCase();
// });

// box2.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box2.style.backgroundColor = color.toLowerCase();
// });

// box3.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box3.style.backgroundColor = color.toLowerCase();
// });

// box4.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box4.style.backgroundColor = color.toLowerCase();
// });

// box5.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box5.style.backgroundColor = color.toLowerCase();
// });

// box6.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box6.style.backgroundColor = color.toLowerCase();
// });

// box7.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box7.style.backgroundColor = color.toLowerCase();
// });
// box8.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box8.style.backgroundColor = color.toLowerCase();
// });
// box9.addEventListener("click", () => {
//     let color = prompt("Type a color");
//     box9.style.backgroundColor = color.toLowerCase();
// });

// let tds = document.querySelectorAll('td')

let tds = document.getElementsByTagName("td");
for (let td of tds) {
    td.addEventListener("click", () => {
        let color = prompt("Type a color");
        td.style.backgroundColor = color.toLowerCase();
    });
}
