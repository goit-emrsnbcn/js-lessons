// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     },
// };

// console.log(employee.getWage());

// const employee2 = {
//     baseSalary: 35000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     },
// };

// console.log(employee2.getWage());

// class Employee {
//     constructor(baseSalary, overtime, rate, fullname) {
//         this.baseSalary = baseSalary;
//         this.overtime = overtime;
//         this.rate = rate;
//         this.fullname = fullname;
//     }

//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }
// //Encapsulation
// let employeeOne = new Employee(30000, 10, 20, "John Doe");
// let employeeTwo = new Employee(40000, 10, 20, "Marvin A");
// let employeeThree = new Employee(50000, 10, 20, "Regine V");
// employeeThree.skill = "Dancing";

// console.log(employeeOne);
// console.log(employeeTwo);
// console.log(employeeThree);

// console.log(employeeOne.getWage());
// console.log(employeeTwo.getWage());
// console.log(employeeThree.getWage());
//DRY - dont repeat yourself
class User {
    constructor(fullname, age, address) {
        this.fullname = fullname;
        this.age = age;
        this.address = address;
    }

    login() {
        console.log("You are logged in");
    }

    logout() {
        console.log("You are logged out");
    }
}

let userOne = new User("John Doe", 35, "Manila");
console.log(userOne);
//Inheritance
class Admin extends User {
    addProduct() {
        console.log("Adding a product");
    }
}
//instantiation - you are creating a new object
let adminOne = new Admin("Admin Doe", 42, "Quezon City");
console.log(adminOne);

userOne.login();
adminOne.login();

adminOne.addProduct();
userOne.addProduct();
