/* 
Example 6 - Rest Operator

Write a transformUsername(user) function to return a new object with fullName property instead of firstName and lastName.
*/

function transformUsername({ firstName, lastName, ...others }) {
    return {
        fullName: firstName + " " + lastName,
        // write code above this line
        ...others, // spread operator
    };
}

console.log(
    transformUsername({
        id: 1,
        firstName: "Jacob",
        lastName: "Mercer",
        email: "j.mercer@mail.com",
        friendCount: 40,
    })
);

console.log(
    transformUsername({
        id: 2,
        firstName: "Adrian",
        lastName: "Cross",
        email: "a.cross@hotmail.com",
        friendCount: 20,
    })
);
