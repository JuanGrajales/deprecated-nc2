// Challenge 1
// Use reduce to concatenate the letters into a single string "hello". Review the use of the string concatenation operator if necessary.
// Challenge 2
// Use reduce to get the total of multiplying all the numbers in the array.
// Bonus Challenge
// Use reduce to flatten this array of arrays (called a two-dimensional array) by using the Array.concat() method inside the callback method for reduce.

// 1
const letters = ["h", "e", "l", "l", "o"];
const greeting =
  // The below line should console.log: "hello"
  console.log(greeting);

// 2 - uncomment lines 9 and 11
const numbers = [100, 3, 4, 1, 2];
//const total =
// The below line should console.log: 2400
//console.log(total);

//Bonus - uncomment lines 15 and 17
const arrays = [
  ["how", "now"],
  ["brown", "cow"],
];
//const flattenedArray = arrays.reduce( // your code here);
// The below line should console.log: ["how", "now", "brown", "cow"]
//console.log(flattenedArray);

// solution
// 1: Use reduce to concatenate the letters into a single string "hello". Review the use of the concatenation operator if necessary.
const letters = ["h", "e", "l", "l", "o"];
const greeting = letters.reduce((word, letter) => word + letter);
console.log(greeting); // should say "hello"

// 2: Use reduce to get the total of multiplying all the numbers in the array.
const numbers = [100, 3, 4, 1, 2];
const total = numbers.reduce((a, c) => a * c);
console.log(total); // should say 2400

//Bonus:
// 3: Use reduce to flatten this array of arrays (called a two-dimensional array) by using the Array.concat() method inside the callback method for reduce.
const arrays = [
  ["how", "now"],
  ["brown", "cow"],
];
const flattenedArray = arrays.reduce((a, c) => a.concat(c));
console.log(flattenedArray);
