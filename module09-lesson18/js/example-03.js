// Example 3 Promise.race() , Promise.all();

const sleep = (ms) => {
	return new Promise((resolve, rejected) => {
		if (ms > 5000) {
			rejected(`Error: Sleep time ${ms} ms is too long`);
		} else {
			setTimeout(() => resolve(`Awake after ${ms} ms`), ms);
		}
	});
};

// Promise.all([sleep(2000), sleep(6000), sleep(3000)])
// 	.then((value) => console.log(value))
// 	.catch((error) => console.error("Error in Promise.all: ", error));

Promise.race([sleep(2000), sleep(1000), sleep(6000)])
	.then((value) => console.log(value))
	.catch((error) => console.error("Error in Promise.race: ", error));

// NOTE: For both Promise.race() and Promise.all()
//If one of the promise is rejected -> it will go to the rejected state -> it will throw an error
