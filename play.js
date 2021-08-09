// working with objects
const person = {
    name: "Max",
    age: 17,
    greet() {
        return `Hi! I'm ${this.name} and I'm ${this.age} years old.`;
    },
};
console.log(person);

// working with arrays
const hobbies = ["Football", "Tennis", "Photography"];
const declareHobbies = hobbies.map((hobby) => `I love ${hobby}\n`);
console.log(declareHobbies);

// rest and spread operator
// rest
const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4));

// spread
const anArray = [1, 2, 3];
const spreadArray = [...anArray];
console.log(spreadArray);

const anObject = { student: "This", class: "That" };
const spreadObject = { ...anObject };
console.log(spreadObject);

// Destructuring
const printName = ({ name }) => console.log(name);
printName(person);
const { age } = person;
console.log(age);
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby2);

// classes
class Square {
    constructor(width) {
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }

    perimeter() {
        return this.width * 2;
    }
}

const mySquare = new Square(4);
console.log(mySquare.area());
console.log(mySquare.perimeter());

// async
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData()
        .then((text) => {
            console.log(text);
            return fetchData();
        })
        .then((text2) => {
            console.log(text2);
        });
}, 2000);
