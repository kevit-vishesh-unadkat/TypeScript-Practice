"use strict";
// object oriented programming
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name = "vishesh";
    age = 21;
    display() {
        console.log(this.name);
        console.log(this.age);
    }
}
const student = new Student();
student.display();
class Student1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name, this.age);
    }
}
const student1 = new Student1("vishesh", 18);
student1.display();
// Access Modifier
class Car {
    name = "bmw";
}
const car = new Car();
console.log(car.name);
//# sourceMappingURL=10.oops.js.map