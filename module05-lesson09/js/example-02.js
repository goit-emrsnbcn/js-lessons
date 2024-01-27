/* 
Example 2 - Phone book
Make methods' refactoring of the phonebook object to make the code work.

Adding a contact should work and should show the updated contacts added with the properties: id and createdAt by using the generateId and getDate methods inside the object..

*/
const phonebook = {
    contacts: [],
    add(contact) {
        //write code below this line.
        const newContact = {
            ...contact,
            id: this.generateId(),
            createdAt: this.getDate(),
        };
        this.contacts.push(newContact);
        return this.contacts;
        //write code above this line.
    },
    generateId() {
        return "_" + Math.random().toString(36).substr(2, 9);
    },
    getDate() {
        return Date.now();
    },
};

console.log(
    phonebook.add({
        name: "Mango",
        email: "mango@mail.com",
        list: "friends",
    })
);
console.log(
    phonebook.add({
        name: "Poly",
        email: "poly@hotmail.com",
    })
);
