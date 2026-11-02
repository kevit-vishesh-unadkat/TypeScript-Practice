// Arrat Declaration 

// let numbers:number[]=[10,20,30,40];

// console.log(numbers);

// let names:string[]=["vishesh","nirmit","yug"]

// console.log(names)

let numbers:Array<number>=[10,20,30];
console.log(numbers)

// object array

let users:{name:string,age:number}[]=[
    {name:"vishesh",age:21},
    {name:"yug",age:22}
]

console.log(users)

// Array with union types

let data:(string | number)[]=[
    "vishesh",
    21,
    "nirmit"
]

console.log(data);

// randomly array

let numbers1:readonly number[]=[10,20,30];

console.log(numbers1)

// Array Destructuring 

let colors:string[]=["red","blue","black"]
let [first, second, third]=colors;

console.log(first);
console.log(second);
console.log(third);


// Spread Operator in Array

let forth:number[]=[10,20];
let fifth:number[]=[30,40];

let combined:number[]=[...forth,...fifth];
console.log(combined);

