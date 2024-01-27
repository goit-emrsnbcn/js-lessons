// function greetGuest(greeting) {
//     console.log(greeting, this.username);
// }

// const mango = {
//     username: "Mango123",
// };

// const poly = {
//     username: "Poly456",
// };

// greetGuest.apply(mango, ["Welcome"]);

const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    age: 42,
    getFullName() {
        // ${} template literal / string literal
        // return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old.";

        return `${this.firstName} ${this.lastName}`;

        //are you accessing a property inside an object itself.
    },
};

// console.log(customer.getFullName());
//My name is Jacob Mercer and I am 42 years old

function makeMessage(callback) {
    return console.log(`Processing request from ${callback()}`);
}

makeMessage(customer.getFullName.bind(customer));

const player = {
    username: "user123",
    level: 32,
    class: "Warrior",
    skill: ["Cleave", "Thousand Strength", "Two Handed Sword Mastery", "Slash"],
    getStats() {
        return `${this.username}, ${this.level}, ${this.class}, ${this.skill}`;
    },
};

function response(callback) {
    return console.log(`Player has stats of ${callback()}`);
}

response(player.getStats.bind(player));
