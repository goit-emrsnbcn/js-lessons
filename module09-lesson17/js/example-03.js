let startBtn = document.querySelector(".js-start");
let stopBtn = document.querySelector(".js-stop");

let timerId = null;

startBtn.addEventListener("click", () => {
	timerId = setInterval(() => console.log("I love async JS!"), 1000);
});

stopBtn.addEventListener("click", () => {
	clearInterval(timerId);
	console.log(`Interval with id ${timerId} has stopped!`);
});

//setInterval - it will keep calling or execute the function again and again after the set time.
