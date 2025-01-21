interface person{
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Employee implements person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(phrase: string){
        console.log(`phrase ${phrase} ${this.name}`);
    }
}
// create an object of Employee class;
const employee = new Employee("John Doe", 30);
employee.greet("Hello");
