// const { log } = require("console");

// const std1 = {
//     name: "sakib",
//     age: 17,
//     marks: 67,
//     getMarks: function () {
//         console.log(this.marks);
//     }
// }
// const std2 = {
//     name: "Ansari",
//     age: 17,
//     marks: 67,
//     getMarks: function () {
//         console.log(this.marks);
//     }
// }
// const std3 = {
//     name: "Gari",
//     age: 17,
//     marks: 67,
//     getMarks: function () {
//         console.log(this.marks);
//     }
// }




// ============== //
// OOPS Prototype //
// ============== //
// Prototype are the machanism by which JS object inherit feature from one another

// It is likes a single template obejct that all object inherit method and properties frmo without having their own copy.

let arr = [12, 32, 3, 4];
arr.sayHello = () => {
    console.log("Hello");
}

// console.log(arr.__proto__);
// arr.__proto__.push = (n) => {
//     console.log("Number push : ", n);
// }

// console.log(Array.prototype);
// console.log(String.prototype);



// ================ //
// Factory Function //
// ================ //
// A function that create Objects.

// function personMaker(name, age) {
//     const pernon = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(this.name);
//         }
//     }
//     return pernon;
// }

// let p1 = personMaker("Sakib", 17);
// let p2 = personMaker("Ansari", 17);


// ============ //
// New Operator //
// ============ //
// The new operator lets developer create an intance of a user - defines object type or of one of the built -in object type that had a constructor function

// Constructors - doesn't return anything & start with capital
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// Person.prototype.tak = () => {
//     console.log(this.name);
// }
// let p1 = new Person("Sakib", 17);
// let p2 = new Person("Ansari", 17);



// ======= //
// Classes //
// ======= //
// Classes are a template for creating Object

// The constructor method is a special method of a class for creating and initializing an object instance of this class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(this.name);
//     }
// }


// let p1 = new Person("Sakib", 17);
// let p2 = new Person("Ansari", 17);



// =========== //
// Inheritance //
// =========== //
// Inharitance is a mechanism tahat allows us to create new classes on the basic of already existing classes.

// class Person {
//     constructor(name, age) {
//         console.log("Parent");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(this.name);
//     }
// }
// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("Student");
//         super(name, age);
//         this.marks = marks;
//     }
// }
// class Teacher extends Person {
//     constructor(name, age, subject) {
//         console.log("Teacher");
//         super(name, age); // Parent class constructor is being called
//         this.subject = subject;
//     }
// }
// let s1 = new Student("Ansari", 21, 1)
// let t1 = new Teacher("Hk", 21, "sasa")
// console.log(t1);



class Mammal {
// class Mammal {
//     constructor(name) {
//         this.name = name;
//         this.type = "Warm-Blooded"
//     }
//     eat() {
//         console.log("I am eating");
//     }
// }

// class Dog extends Mammal {
//     constructor(name) {
//         super(name);
//     }
//     bark() {
//         console.log("woof...");
//     }
//     eat() {
//         console.log("Dog is eating...");
//     }
// }


// class Cat extends Mammal {
//     constructor(name) {
//         super(name);
//     }
//     meaw() {
//         console.log("Meaaw...");
//     }
// }