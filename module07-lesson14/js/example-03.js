const outputScrollDefault = document.getElementById("outputScrollDefault");
const outputScrollThrottling = document.getElementById("outputScrollThrottling");
const outputScrollDebounce = document.getElementById("outputScrollDebounce");

const eventScrollCounter = {
	default: 0,
	throttling: 0,
	debounce: 0,
};

document.addEventListener("scroll", () => {
	eventScrollCounter.default += 1;
	outputScrollDefault.innerText = eventScrollCounter.default;
});

document.addEventListener(
	"scroll",
	_.throttle(() => {
		eventScrollCounter.throttling += 1;
		outputScrollThrottling.innerText = eventScrollCounter.throttling;
	}, 300)
);

document.addEventListener(
	"scroll",
	_.debounce(() => {
		eventScrollCounter.debounce += 1;
		outputScrollDebounce.innerText = eventScrollCounter.debounce;
	}, 300)
);
