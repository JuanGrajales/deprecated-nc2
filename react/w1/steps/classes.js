// How to create a class
// step 1: use keyword class
// step 2: write class name using PascalCase
// step 3: use {}
// step 4: use constructor keyword
// step 5: ()
// step 6: inside the () write your parameters seperated by comma
// step 7: {}
// step 8: each property assign it the value of the corresponding parameter by using this.propertyName = parameter

class ExampleClass {
  constructor(param1) {
    this.property1 = param1;
  }
}

// How to add a method to a class that calls a property of the class
// step 1: outside the {} of the constructor but instide the {} of the class
// step 2: methodName using camelCase
// step 3: ()
// step 4: {}
// step 5: whatever code you want to execute inside the method (e.g. console.log())
// step 6: call a property of a class by doing this.propertyName
// step 7(optional): add parameters to your method

class ExampleClass2 {
  constructor(param1) {
    this.property1 = param1;
  }

  method1() {
    console.log(`${this.property1}`);
  }
}

let obj = new ExampleClass2();
