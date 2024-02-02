let input = document.getElementById("font-size-control");
let text = document.getElementById("text");
input.addEventListener("input", (e) => {
    let fs = e.target.value;
    text.style.fontSize = fs + "px";
});
