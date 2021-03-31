// Slack - join onea-2021-01-07-react and 3-react channels
// GitHub - https://github.com/JuanGrajales/nc/tree/main/react/feb-2021
// Slide Deck will be sent through Slack at the beginning of every workshop
// Stand Up - beginning of every workshop

// data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object

// Object syntax
// step 1: choose keyword (const, let, var)
// step 2: create the object name (use camelCase)
// step 3: use assignment operator (=)
// step 4: open up curly braces {}
// step 5: add as many key/value pairs as you want, each key/value will be separated by a comma
const obj = {
  message: "hello",
  msg2: "bonjour",
};

// key/value pair syntax
// keyName : value
// value can be any data type (i.e. String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object)

// methods vs functions

const obj2 = {
  message: "hello",
  msg2: "bonjour",
  func1() {
    console.log("this is a method");
  },
};

function foo() {
  console.log(`this is a function`);
}

// calling a function
//   foo();

// calling a method
// objectName.methodName()
//   obj2.func1();

// when would you use an object instead of a regular variable or vice versa?
const player = {
  height: "160",
  goalsPerGame: 5,
  hairColor: "red",
};

let currentGoals = 5;

// example object
const bicycle = {
  color: "blue",
  electric: false,
  start() {
    console.log("You begin to pedal the bike.");
    return 2;
  },
  start2: function () {
    console.log("You begin to pedal the bike.");
    return 2;
  },
};

//   console.log(bicycle);
console.log(bicycle.color);
console.log(bicycle.electric);
console.log(bicycle.start);
console.log(bicycle.start());

// how do you change the color of the bike?
// how to change the value of a property?
// step 1: use dot notation (objName.propertyName) to specify the property you want to change
// step 2: use the assignment operator (=)
// step 3: specify the new value

bicycle.color = "red";

// how do you change the start method?
bicycle.start = function () {
  console.log(`new method value`);
};

// turn this into an arrow function
// superpower: hoisting
hi();

function hi() {
  return "Hello";
}

const hiArrow = () => {
  return "Hello";
};

hiArrow();

// arrow function with explicit return

function hi2(name) {
  return { message: name };
}

const hi2Arrow = () => {
  return { message: name };
};

// arrow function without explicit return

function hi3(name) {
  return "hello";
}

const hi3Arrow = (name) => "hello";

// arrow function without return and without parenthesis for parameters

function hi4(name) {
  return "hello";
}

const hi4Arrow = (name) => "hello";

// class syntax
class ClassName {
  constructor(param1, param2 = "hi") {
    this.property1 = param1;
    this.property2 = param2;
    // make as many properties as you want
  }

  // add methods here
  method1() {
    // how can you print the properties of the object here?
    console.log("method1");
  }
}

let v1 = new ClassName("test");

// monopoly
let player1 = {
  name: "Wen",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player2 = {
  name: "John",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player3 = {
  name: "Fred",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

let player4 = {
  name: "Brian",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
};

class Player {
  constructor(name, money, houses) {
    this.name = name;
    this.money = money;
    this.houses = houses;
  }

  roll() {
    console.log(`Rolling dice`);
  }
}

let p1 = new Player("Wen", 100000, []);
let p2 = new Player("Fred", 100000, []);
let p3 = new Player("John", 100000, []);
let p4 = new Player("Brian", 100000, []);
console.log(p1);

//   console.log(v1.property1);

// method chaining (split, reverse, join)
// reverse a string
let str = "nauJ";
//   let str2 = str[3]+str[2]+str[1]+str[0]
console.log(str.split(""));
let revArr = [1, 2, 3, 4];
console.log(revArr.reverse());
console.log(revArr.join(""));
let revStr = str.split("").reverse().join("");
console.log(revStr);
let strAsArr = str.split("");
let strArrRev = strAsArr.reverse();
let revStr2 = strArrRev.join("");

// OOP: APIE
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// inheritance
class Vehicle {
  constructor(type = "Car") {
    this.type = type;
  }

  getType() {
    console.log("car");
  }
}

class Motorcycle extends Vehicle {
  constructor(type = "motorcycle", numWheels = 2) {
    super(type);
    this.numWheels = numWheels;
  }

  getType() {
    console.log("Motorcycle");
  }
}

let vehicle2 = new Vehicle();
vehicle2.getType();
let bike = new Motorcycle();
bike.getType();

// filter
let filterArr = [1, 1, 1, 2, 2, 2];
let evenArr = [];
for (let i = 0; i < filterArr.length; i++) {
  if (filterArr[i] % 2 === 0) {
    evenArr.push(filterArr[i]);
  }
}

console.log(evenArr);

let evenArr2 = filterArr.filter((number, index) => {
  console.log(`current Index: ${index} number: ${number}`);
  return number % 2 === 0;
});

let evenArr3 = filterArr.filter((number, index) => number % 2 === 0);

console.log(evenArr3);

// map
let mapArr = [1, 1, 1, 2, 2, 2];
let doubleArr = [];
for (let i = 0; i < mapArr.length; i++) {
  doubleArr.push(mapArr[i] * 2);
}

let mapArr2 = mapArr.map((number, index) => {
  return number * 2;
});

//   console.log(doubleArr);
console.log(mapArr2);

// reduce
let reduceArr = [1, 1, 1, 2, 2, 2];
let sum = 0;
for (let i = 0; i < reduceArr.length; i++) {
  sum += reduceArr[i];
}

console.log(sum);

let sum2 = reduceArr.reduce((accum, curr, index) => {
  console.log(`Index = ${index} \naccum = ${accum} \ncurr = ${curr}`);
  return accum + curr;
}, 10);

console.log(sum2);
//   console.log(reduceArr);

// array method that mutates original array?
reduceArr.reverse();
console.log(reduceArr);

// retrospective
// anything that can be improved?
