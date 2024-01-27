/* 
Example 3 - User

Write a class User which creates an object with properties username and email. 

Declare private properties #login and #email, which can be accessed via getter and setter of login and email.
*/

class User {
    #username;
    #email;
    #tax = 20;
    constructor(username, email) {
        this.#username = username;
        this.#email = email;
    }

    //to access something private you should create a method that is public
    get getEmail() {
        return this.#email;
    }

    set setEmail(email) {
        this.#email = email;
    }

    static helloWorld() {
        console.log("hello world");
    }
}

// let userOne = new User("johndoe123", "johndoe@gmail.com");
// console.log(userOne.getEmail);

// userOne.setEmail = "janedoe@gmail.com";
// console.log(userOne.getEmail);
// userOne.helloWorld();
User.helloWorld();
