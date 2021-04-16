// Slack channels - join onea-2021-02-02-react and 3-react
// Slide Deck will be sent through Slack at the beginning of every workshop
// Stand Up - beginning of every workshop

// IMPORTANT: If you were to start learning how to speak, read, and write a new language (e.g. French or Japanese) today how long would it take you to master it? How long would it take you be good enough to have a fluent converstation with someone?

// data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object

let str = `Juan`;
let num = 2.12345;

// Object syntax
const obj = {
  message: "hello",
  msg2: "bonjour",
};

// methods vs functions
const obj2 = {
  message: "hello",
  msg2: "bonjour",
  method1() {
    console.log("this is a method");
  },
};

function foo() {
  console.log(`this is a function`);
}

// calling a function
// foo();

// calling a method
// objectName.methodName()
// obj2.method1();

// when would you use an object instead of a regular variable or vice versa?
const player = {
  height: "160",
  goalsPerGame: 5,
  hairColor: "red",
  name: "Katherine",
  id: 1,
};

let playerHeight = "160";
let goalsPerGame = 7;
let hairColor = "red";

let currentGoals = 5;

// example object
const bicycle = {
  color: "blue",
  electric: false,
  start() {
    console.log("You begin to pedal the bike.");
    return 2;
  },
  bikeColor() {
    console.log(this.color);
  },
};

console.log(bicycle);

// how do you change the color of the bike?
bicycle.color = "red";

console.log(bicycle);

// how do you change the start method?
bicycle.start();

bicycle.start = function () {
  console.log("Good job Kristen!");
};

bicycle.start();
bicycle.bikeColor();
