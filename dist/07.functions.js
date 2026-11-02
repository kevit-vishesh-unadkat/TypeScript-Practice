"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    console.log("Hello From Vishesh");
}
greet();
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function sub(a, b) {
    return a - b;
}
console.log(sub(40, 30));
// optional parameter
function hello(name, age) {
    console.log(`Hello ${name}`);
    if (age !== undefined) {
        console.log(`age is ${age}`);
    }
}
hello("vishesh");
hello("vishesh", 21);
// Default parameter
function hello1(name = "Guest") {
    console.log(`Hello ${name}`);
}
hello1("vishesh");
hello1();
// Rest parameter
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(100, 200, 300));
// return type
function mul(a, b) {
    return a * b;
}
const result = mul(10, 20);
console.log(result);
// function expression 
const name = function (name) {
    console.log(`Hello ${name}`);
};
name("vishesh");
// Arrow Functions
const add_number = (a, b) => {
    return a + b;
};
console.log(add_number(56, 78));
// generic function 
function getValue(value) {
    return value;
}
console.log(getValue(100));
console.log(getValue("vishesh"));
// function with union type
function printId(id) {
    console.log(id);
}
printId(101);
printId("vish3");
// function with tuple parameter
// Tuples allow you to define a fixed number of parameters with specific types.
function displayUser(user) {
    console.log(`Name: ${user[0]}`);
    console.log(`Age: ${user[1]}`);
}
displayUser(["Rahul", 22]);
// Nested functions
function outerFunction() {
    function InnerFunction() {
        console.log("Inside Inner Function");
    }
    return InnerFunction();
}
outerFunction();
// recursive functions
function fact(num) {
    if (num <= 1) {
        return 1;
    }
    return num * fact(num - 1);
}
console.log(fact(5));
// higher order functions
function calculate() {
    return function (a, b) {
        return a + b;
    };
}
const add1 = calculate();
console.log(add1(10, 50));
// Clousers
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment());
console.log(increment());
greet2();
function greet2() {
    console.log("hello");
}
//# sourceMappingURL=07.functions.js.map