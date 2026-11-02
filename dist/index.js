"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello ${person} ,welcome to chaicode`;
}
const username = 'vishesh';
console.log(greet(username));
// let age:number;
// age=21
// console.log(age)
let age = 21;
age = 24;
console.log(age);
// Global Scope
let name = "vishesh";
function Hello() {
    console.log(name);
}
Hello();
// Functional Scope
function Hello1() {
    let name = "nirmit";
    console.log(name);
}
Hello1();
// Blocked Scope
if (true) {
    let age = 22;
    console.log(age);
}
// console.log(age);  Error
let email;
email = "vishesh@gmail.com";
console.log(email);
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);
//# sourceMappingURL=index.js.map