let btn = document.getElementById("showCT");
console.log(btn); //<button id="showCT">Click me</button>

// btn.addEventListener("click", function () {
//     console.log("hello world");
// });

btn.addEventListener("click", (event) => {
    console.log(event); //this is the details of the event
    console.log(event.target); //this is the actual html element
    console.log(event.target.innerText); //Click Me
    console.log(event.target.getAttribute("id")); //showCT
    console.log(event.type); //click
});
