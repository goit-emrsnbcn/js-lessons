let car = {
    brand: "toyota",
    color: "red",
    type: "automatic",
    0: "hello world",
    //method - is a function inside an object
    move: function () {
        console.log("car is moving");
    },
};

//Object literal {}
//property: value
//key: value
let person = new Object(); // {}
console.log(car.brand);
car.brand = "Honda";
console.log(car.brand);
console.log(person);

//how to add properties in an object
person.name = "John Doe";
person.age = 35;
person.address = "Manila";
console.log(person);

car.move();

delete person.name;
console.log(person);

let microwave = {
    brand: "samsung",
    color: "black",
    sayBrand: function () {
        console.log(this.brand);
    },
};

microwave.sayBrand();

const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
        country: "Jamaica",
        city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
};
console.log();
console.log(user.hobbies[0], user.hobbies[1], " singit ng string");

//creating object using class
class Computer {
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }
}

let laptopOne = new Computer("lenovo", 2020, "black");
let laptopTwo = new Computer("asus", 2021, "red");

console.log(laptopOne);
console.log(laptopTwo);

const fullname = "Henry Cibola";
const age = 25;

const userTwo = {
    fullname,
    age,
};

console.log(userTwo);

const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    // This is an object method
    getBooks() {
        console.log(this.books);
    },
    // This is an object method
    addBook(bookName) {
        this.books.push(bookName);
    },

    removeBook(bookName) {
        this.books.splice(this.books.indexOf(bookName), 1);
    },
};

bookShelf.getBooks();
bookShelf.addBook("Rich Dad Poor Dad");
bookShelf.getBooks();
bookShelf.removeBook("Dream Guardian");
bookShelf.getBooks();
