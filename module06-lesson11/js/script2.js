document.querySelector("#fruits li:last-child").style.color = "yellow";

/*
EXAMPLE 1
-create a list in HTML 
-target the list by its id using getElementById and querySelector
-console the output of the list
*/

let fruitsById = document.getElementById("fruits");
let fruitsByQuery = document.querySelector("#fruits");

console.log(fruitsById);
console.log(fruitsByQuery);

/*
EXAMPLE 2
Create a list of technologies studied in the Fullstack course using js. 
Show how it is done with the help of **map** and **reduce** 

    1. Create a container for ul tag
    2. Create a cycle for sorting array elements
    3. Create a li tag
    4. Write the text from the array into the li tag
    5. Place li inside of ul
    6. Place ul tag with items on the page
*/

let container = document.getElementById("container");
const technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
const ul = document.createElement("ul");

/*
    <ul>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
*/

for (const technology of technologies) {
    const li = document.createElement("li"); //<li></li>
    li.innerText = technology; //<li>HTML</li>
    ul.appendChild(li);
}

// container.append(ul);

/* EXAMPLE 3.
Create several buttons based on an array of objects using createElement

    1. Iterate through the array of colors using a loop
    2. Create a button
    3. Set the background color of the button
    4. Set the text of the button
    5. Add a button to the document

*/

const colors = [
    {
        label: "red",
        color: "#FF0000",
    },
    {
        label: "green",
        color: "#00FF00",
    },
    {
        label: "blue",
        color: "#0000FF",
    },
    {
        label: "yellow",
        color: "#FFFF00",
    },
];

colors.forEach(({ label, color }) => {
    const btnEl = document.createElement("button"); //<button><button>
    btnEl.innerText = label;
    btnEl.style.backgroundColor = color;
    container.appendChild(btnEl);
});
