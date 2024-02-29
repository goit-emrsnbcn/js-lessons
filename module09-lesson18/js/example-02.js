/* Example 2 - Event Loop in Practice */

// 1. Scenario 1

const promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve("C"), 1);
});

console.log("A");

setTimeout(() => console.log("B"), 1);

console.log("D");

// 1 - ABCD
// 2 - ADBC
// 3 - ACBD
// 4 - ADCB

////////////////////////////////////////////////////////////////

// 2. Scenario 2: Promise Object
