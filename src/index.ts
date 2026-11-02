function greet(person:string):string{
    return `Hello ${person} ,welcome to chaicode`
}

const username:string='vishesh'
console.log(greet(username))


// let age:number;
// age=21
// console.log(age)

let age:number=21;
age=24;
console.log(age);

// Global Scope
let name="vishesh"

function Hello(){
    console.log(name);
}

Hello()

// Functional Scope

function Hello1(){
    let name="nirmit"
    console.log(name)
}

Hello1()

// Blocked Scope

if (true){
    let age=22
    console.log(age);
}

// console.log(age);  Error

let email :string |undefined

email="vishesh@gmail.com"

console.log(email)

let id1: symbol = Symbol("id");

let id2: symbol = Symbol("id");

console.log(id1 === id2);

