var firstName = "Dave";
function sayHello(firstName) {
    return "Hello, ".concat(firstName, " !");
}
console.log(sayHello(firstName));
var firstNumber = 42;
var secondNumber = 78;
function multiply(a, b) {
    return a * b;
}
console.log(multiply(firstNumber, secondNumber));
var someOme = {
    firstname: "John",
    lastname: "Doe"
};
typeof (someOme.age) === undefined ?
    console.log(someOme.firstname + " " + someOme.lastname + " is " + someOme.age + " years old")
    : console.log(someOme.firstname + " " + someOme.lastname + " got not age;");
