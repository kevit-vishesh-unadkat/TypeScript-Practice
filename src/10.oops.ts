// object oriented programming

class Student{
    name:string="vishesh";
    age:number=21;

    display():void{
        console.log(this.name)
        console.log(this.age)
    }
}

const student=new Student()
student.display()


class Student1{
    name:string;
    age:number;

    constructor (name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display():void{
        console.log(this.name,this.age);
    }
}

const student1=new Student1("vishesh",18);
student1.display();

// Access Modifier

class Car{
    public name:string="bmw";
}

const car=new Car();
console.log(car.name)

// public is accessible from everywhere

// private access modifier

class BankAccount{
    private balence:number=5000;

    displayBalance():void{
        console.log(this.balence)
    }
}

const account =new BankAccount();

account.displayBalance();

// Protected Access Moodifier

class Animal {
    protected name:string = "Lion"
}

class Dog extends Animal {
    display():void{
        console.log(this.name);
    }
}

const dog = new Dog();

dog.display();


// Encapsulation

class BankAccount1 {
    private balance: number = 1000;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account1 = new BankAccount();

account.deposit(500);

console.log(account.getBalance()); // 1500