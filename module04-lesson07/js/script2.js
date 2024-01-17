let person = {
    firstName: "John",
    lastName: "Doe",
    //a function inside an object is what we call a method.
    // getFullName: function() {
    // }
    // getFullName() {
    //     console.log(this);
    // },
    getFullName2: function () {
        console.log(this);
    },
    getFullName: () => console.log(this),

    //You cannot use the arrow function with the 'this' keyword as it would not point you to the object itself. Instead you would be pointed at the window object.
};

person.getFullName2();
person.getFullName();
