/* 
Example 5 - Spread Operator

Extend the createContact(partialContact) function so that it returns a new contact object with id and createdAt properties added, as well as list with value "default" if there is no such property in partialContact.
*/

function createContact(partialContact) {
    return {
        list: "default",
        // write code below this line
        ...partialContact,
        // write code above this line
        id: Math.random(),
        createdAt: Date.now(),
    };
}

console.log(
    createContact({
        name: "Mango",
        email: "mango@mail.com",
        list: "friends", // 'friends' overrides the 'default' value because ...partialContact was declared after
    })
);
console.log(
    createContact({
        name: "Poly",
        email: "poly@hotmail.com",
        list: "any",
    })
);
