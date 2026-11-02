"use strict";
// Arrat Declaration 
Object.defineProperty(exports, "__esModule", { value: true });
// let numbers:number[]=[10,20,30,40];
// console.log(numbers);
// let names:string[]=["vishesh","nirmit","yug"]
// console.log(names)
let numbers = [10, 20, 30];
console.log(numbers);
// object array
let users = [
    { name: "vishesh", age: 21 },
    { name: "yug", age: 22 }
];
console.log(users);
// Array with union types
let data = [
    "vishesh",
    21,
    "nirmit"
];
console.log(data);
// randomly array
let numbers1 = [10, 20, 30];
console.log(numbers1);
// Array Destructuring 
let colors = ["red", "blue", "black"];
let [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);
// Spread Operator in Array
let forth = [10, 20];
let fifth = [30, 40];
let combined = [...forth, ...fifth];
console.log(combined);
//# sourceMappingURL=08.arrays.js.map