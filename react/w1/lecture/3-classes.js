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
