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
