let firstName: string = "Dave";

function sayHello(firstName: string): string {
  return `Hello, ${firstName} !`;
}

console.log(sayHello(firstName));

let firstNumber: number = 42;
let secondNumber: number = 78;

function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(firstNumber, secondNumber));

interface Person {
  firstname: string;
  lastname: string;
  age?: number;
}

const someOme: Person = {
  firstname: "John",
  lastname: "Doe",
};

typeof someOme.age === undefined
  ? console.log(
      someOme.firstname +
        " " +
        someOme.lastname +
        " is " +
        someOme.age +
        " years old"
    )
  : console.log(someOme.firstname + " " + someOme.lastname + " got no age;");

enum races {
  Golden = "Golden",
  Rott = "Rott",
  Pit = "Pit",
  Staffie = "Staffie",
  Corgi = "Corgi",
}
interface Dog {
  race: races;
  name: string;
  colors: string[];
  origin: string;
  age: number;
  birthday: Date;
  meals: [string, number];
  isCool?: boolean;
}

const myDog: Dog = {
  race: races.Staffie,
  name: "Ralph",
  colors: ["grey", "white"],
  origin: "UK",
  age: 1,
  birthday: new Date("2022-10-30"),
  meals: ["dogfood", 2],
  isCool: true,
};

function whosDatDogg(dog: Dog) {
  return `This dog is a ${dog.race}, his name is ${dog.name}, and he is ${dog.colors}. This race comes from ${dog.origin}. ${dog.name} 
    got ${dog.age} year(s) old and he is born the ${dog.birthday}. ${dog.name} eats ${dog.meals[0]} ${dog.meals[1]} times each day.`;
}

console.log(whosDatDogg(myDog));

// alias - types persos
type Town = {
  latitude: number;
  longitude: number;
};

const puertoEscondido: Town = {
  latitude: 15.857163238,
  longitude: -97.066999732,
};

//génériques
function myMagicBox<T>(content: T): T {
    console.log("I got something (" + content + ") in my magic box");
    return content;
}

const stringInTheBox = myMagicBox<string>("Hey");
const numInTheBox = myMagicBox<number>(2023);

