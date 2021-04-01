// Slack channels - join onea-2021-02-02-react and 3-react
// Slide Deck will be sent through Slack at the beginning of every workshop
// Stand Up - beginning of every workshop

// data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object

// Object syntax
const obj = {
  message: "hello",
  msg2: "bonjour",
};

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

// console.log(bicycle);

// how do you change the color of the bike?

// how do you change the start method?
