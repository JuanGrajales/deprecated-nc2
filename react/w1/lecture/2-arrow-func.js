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
