//Date and Time

// const date = new Date();

// console.log(date);

//date in ms
// console.log(Date.now());

console.log(new Date("2020-03-16"));
console.log(new Date("2020-03"));
console.log(new Date("2020"));
console.log(new Date("03/16/2030"));
console.log(new Date("2030/03/16"));
console.log(new Date("2030/3/16"));
console.log(new Date("May 12, 2030"));
console.log(new Date("May 12, 2030 13:14:00"));

const date = new Date();

//Returns day of the month from 1 to 31
console.log(date.getDate());

//Returns days of the week 0 - 6
console.log(date.getDay());

//Returns month from 0 - 11
console.log(date.getMonth());

//Returns 4 digit year
console.log(date.getFullYear());

//Returns hour
console.log(date.getHours());

//Returns minutes
console.log(date.getMinutes());

// Returns milliseconds
console.log(date.getMilliseconds());

//Subtracting dates
const start = new Date("2023-05-12");
const end = new Date("2023-07-16");

console.log(end - start);
