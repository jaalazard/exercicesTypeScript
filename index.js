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
typeof someOme.age === undefined
    ? console.log(someOme.firstname +
        " " +
        someOme.lastname +
        " is " +
        someOme.age +
        " years old")
    : console.log(someOme.firstname + " " + someOme.lastname + " got no age;");
var races;
(function (races) {
    races["Golden"] = "Golden";
    races["Rott"] = "Rott";
    races["Pit"] = "Pit";
    races["Staffie"] = "Staffie";
    races["Corgi"] = "Corgi";
})(races || (races = {}));
var myDog = {
    race: races.Staffie,
    name: "Ralph",
    colors: ["grey", "white"],
    origin: "UK",
    age: 1,
    birthday: new Date("2022-10-30"),
    meals: ["dogfood", 2],
    isCool: true
};
function whosDatDogg(dog) {
    return "This dog is a ".concat(dog.race, ", his name is ").concat(dog.name, ", and he is ").concat(dog.colors, ". This race comes from ").concat(dog.origin, ". ").concat(dog.name, " \n    got ").concat(dog.age, " year(s) old and he is born the ").concat(dog.birthday, ". ").concat(dog.name, " eats ").concat(dog.meals[0], " ").concat(dog.meals[1], " times each day.");
}
console.log(whosDatDogg(myDog));
//Test d'any
var myNumber = 10;
myNumber = 10 + 5;
console.log(myNumber);
