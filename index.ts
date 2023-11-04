let firstName: string = "Dave";

function sayHello(firstName : string): string {
    return `Hello, ${firstName} !`;
}

console.log(sayHello(firstName));


let firstNumber: number = 42;
let secondNumber: number = 78;

function multiply(a: number, b:number): number {
    return a * b;
}
console.log(multiply(firstNumber, secondNumber));


interface Person {
    firstname: string,
    lastname: string,
    age?: number
}

const someOme: Person = {
    firstname: "John",
    lastname: "Doe",
};

typeof(someOme.age) === undefined ?
console.log(someOme.firstname + " " + someOme.lastname + " is " + someOme.age + " years old")
: console.log(someOme.firstname + " " + someOme.lastname + " got no age;")
