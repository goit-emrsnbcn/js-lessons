const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.getElementById("ingredients");

for (let ingredient of ingredients) {
    let li = document.createElement("li");
    li.innerText = ingredient;
    // li.innerText = `
    //   <div>
    //     <h5>${ingredient}</h5>
    //     <button>Click Me</button>
    //   </div>
    // `;
    ul.appendChild(li);
}
