const outputResizeDefault = document.getElementById("outputResizeDefault");
const outputResizeThrottling = document.getElementById("outputResizeThrottling");

const resizeCounter = {
	default: 0,
	throttling: 0,
};

window.addEventListener("resize", () => {
	resizeCounter.default += 1;
	outputResizeDefault.innerText = resizeCounter.default;
});

window.addEventListener(
	"resize",
	_.throttle(() => {
		resizeCounter.throttling += 1;
		outputResizeThrottling.innerText = resizeCounter.throttling;
	}, 1500)
);
