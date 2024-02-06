let maskBtn = document.getElementById("mask-btn");
let maskedValue = document.getElementById("masked-value");
maskBtn.addEventListener("click", (e) => {
    let text = document.getElementById("mask-input").value;
    //Write your code below here

    text = text.split(""); //['h', 'e', 'l', 'l', 'o']
    for (let i = 0; i < text.length - 4; i++) {
        if (text[i] !== " ") text[i] = "#";
    }

    //[#, e, l, l, o]
    maskedValue.innerText = text.join("");

    //hello -> #ello
    //ironman -> ###nman
    //123456789 -> #####6789

    //hello world -> ##### #orld
});

let halfInput = document.getElementById("half-input");
let halfBtn = document.getElementById("half-btn");
let halfOutput = document.getElementById("half-output");

halfBtn.addEventListener("click", () => {
    let num = parseInt(halfInput.value);
    let result = parseInt(num);
    while (num !== 1) {
        let half = Math.floor(num / 2);
        result += half;
        num = half;
    }
    halfOutput.innerText = result;
});
