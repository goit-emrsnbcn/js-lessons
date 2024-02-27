const button = document.querySelector("button");

//setTimeout(callback, delay)

const onClick = () => {
	const timerID = setTimeout(() => console.log("I love AsyncJS"), 2000);
	console.log(timerID);

	//cancels the timeout
	// clearTimeout(timerID);
};

button.addEventListener("click", onClick);

//setTimeout will execute a function once after the delay.
