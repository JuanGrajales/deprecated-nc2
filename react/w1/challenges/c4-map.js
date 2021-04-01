// Challenge 1
// Use the map method on the numbers array given at line 2 to add 5 to each number and put the results into a new array. The code has been started for you at line 3.
// Challenge 2
// Use the map method on the same numbers array to turn it into an array of strings, and add a colon and a space after each number. The code has been started for you at line 7.
// Challenge 3
// Use the map method on the words array on line 13 to remove the "s" from the end of each word. The code has been started for you in line 14. Hint: Research the use of the String.slice() method to remove the final letter from a string. There are other String methods that could also be used.
// Challenge 4
// Use the map method on the words array from line 13 to return an array with just the first letter of each word. The code has been started for you in line 19.
// Bonus Challenge
// Use the map method on the words array to return an array with just the first letter of each word capitalized (along with the rest of the word in lower case)

// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive =
  // The below line should console.log: [6, 6, 7, 8, 10]
  console.log(numbersAddFive);

// 2 - uncomment the lines that start with "const" and "console.log"
// const numbersReformatted =
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "]
// console.log(numbersReformatted);

// 3
const words = ["planes", "trains", "automobiles"];
// const singularWords =
// The below line should console.log: ["plane", "train", "automobile"]
// console.log(singularWords);

// 4:
// const firstLetters =
// The below line should console.log: ["p", "t", "a"]
// console.log(firstLetters);

// Bonus:
// const capitalizedWords =
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
// console.log(capitalizedWords);

// solution
// 1: Use the map method on the numbers array to add 5 to each number and put the results into a new array. The code has been started for you below.
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map((n) => n + 5);
console.log(numbersAddFive); /* This should console.log [6, 6, 7, 8, 10] */

// Use the map method on the same numbers array to turn it into an array of strings and add a colon and a space after each number.
const numbersReformatted = numbers.map((n) => n + ": ");
console.log(
  numbersReformatted
); /* The result should be an array that looks like this: ["1: ", "1: ", "2: ", "3: ", "5: "] */

// 3: Use the map method on the words array to remove the "s" from the end of each word. Hint: Research the use of the String.slice() method to remove the final letter from a string. The String.substring() method could also be used.
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map((w) => w.slice(0, -1));
// Resulting array in the console should be: ["plane", "train", "automobile"]
console.log(singularWords);

// 4: Bonus: Use the map method on the words array to return an array with just the first letter of each word:
const firstLetters = words.map((w) => w[0]);
// Resulting array in the console should be: ["p", "t", "a"]
console.log(firstLetters);

// 5: Bonus: Use the map method on the words array to return an array with just the first letter of each word capitalized (along with the rest of the word in lower case):
const capitalizedWords = words.map(
  (w) => w[0].toUpperCase() + w.slice(1, w.length)
);
// Resulting array in the console should be: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);
