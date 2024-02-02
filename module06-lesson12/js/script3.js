document.addEventListener("keyup", (event) => {
    console.log(event);
    console.log("you pressed any key on your keyboard");
});

let btn = document.querySelector(".js-btn");
btn.addEventListener("click", () => {
    window.location.reload();
});
