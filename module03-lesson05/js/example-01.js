/* 
Example 1 - Object Basics

Write a script for the user object, successively:

1. Adds a mood field with value 'happy' using dot notation
2. Replaces the value hobby to 'skydiving' using dot notation
3. Replaces premium to false using bracket notation
4. Prints the contents of the user object in <key> - <value> format using Object.keys() and for...of loop
5. Prints the contents of the user object in <key> - <value> format using for...in loop
*/

const user = {
    name: "Mango",
    age: 20,
    hobby: ["html", "css", "javascript"],
    premium: true,
};

//1
user.mood = "happy";

//2
user.hobby = "skydiving";

//3
user["premium"] = false;

//4
const userKeys = Object.keys(user);
for (let key of userKeys) {
    console.log(key, ":", user[key]);
}

//5
for (let key in user) {
    console.log(key, ":", user[key]);
}

console.log(user);
