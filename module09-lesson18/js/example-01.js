/* Example 1- Creating and Consuming a Promise */

// Promise -> is an object representing the current state of an asynchronous operation

// Promise has Three States:
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Promise is Settled -> either fulfilled/ rejected

// ----------------------------------------------------------

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

// Creating a Promise
// Promise class - has function(executor) - (resolve, reject)
const promise = new Promise((resolve, reject) => {
	// async operation
	setTimeout(() => {
		if (isSuccess) {
			resolve("Success! Value passed to resolve function");
		} else {
			reject("Error! Error passed to reject function");
		}
	}, 2000);
});

// Consuming a Promise (.then, .catch, .finally)
promise
	.then((value) => console.log(value)) // promise is fulfilled/success
	.catch((error) => console.log(error)) // promise is rejected/error
	.finally(() => console.log("Promise settled")); // promise is settled (fullfilled/rejected)

// then() -> also returns a promise

// fetch()
fetch("https://jsonplaceholder.typicode.com/posts") //fetch
	.then((response) => response.json()) //decode
	.then((json) => console.log(json)) //get the actual data
	.catch((error) => console.log(error)); //if something went wrong / promise is rejected
