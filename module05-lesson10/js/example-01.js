/*
Write a Blogger class to create a blogger object with the following properties:

email - mail, line
age - age, number
numberOfPosts - number of posts, number
topics - an array of topics the blogger specializes in

The class expects one parameter - object of settings with the same name properties.

Add a getInfo() method that returns string: User ${email} is ${age} years old and has ${number of posts} posts.

Add the updatePostCount(value) method, which in the value parameter takes number of posts to add to the value parameter.
*/

class Blogger {
    //Write your code below this line
    constructor(email, age, numberOfPosts, topics) {
        this.email = email;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
        this.topics = topics;
    }

    getInfo() {
        return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
    }

    updatedPostCount(value) {
        this.numberOfPosts += value;
    }

    addTopic(topic) {
        this.topics.push(topic);
    }

    deleteTopic(topic) {
        let idx = this.topics.indexOf(topic);

        if (this.topics.includes(topic)) {
            this.topics.splice(idx, 1);
            return this.topics;
        }
        console.log(`Topic doesn't exist`);
    }
}
let poly = new Blogger("poly@gmail.com", 50, 100, ["Tech", "Nature"]);
console.log(poly);
console.log(poly.getInfo());
poly.updatedPostCount(100);
console.log(poly);
poly.addTopic("Fitness");
poly.deleteTopic("Gaming");
// console.log(poly.deleteTopic("Gaming"));
// console.log(poly); //['Tech', 'Nature', 'Fitness']
// console.log(poly); //[Tech, Nature]
