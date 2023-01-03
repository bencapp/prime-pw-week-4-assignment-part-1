console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName("Frank"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return `${firstNumber} plus ${secondNumber} is: ${
    firstNumber + secondNumber
  }!`;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return `${firstNumber} times ${secondNumber} times ${thirdNumber} is: ${
    firstNumber * secondNumber * thirdNumber
  }!`;
}
console.log(multiplyThree(3, 6, 23));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true:", isPositive(3));
console.log("isPositive - should say false:", isPositive(0));
console.log("isPositive - should say false:", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
console.log(getLast(["purple", "green", "yellow", "blue"]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  let valueFound = false;
  let currentIndex = 0;
  while (!valueFound && currentIndex < array.length) {
    if (value === array[currentIndex]) {
      valueFound = true;
    }
    //including console log to check that the while loop is working properly
    console.log(`Current Index: ${currentIndex}, value found = ${valueFound}`);
    currentIndex++;
  }
  return valueFound;
}
//testing color array
let colorArray = [
  "yellow",
  "blue",
  "green",
  "purple",
  "orange",
  "violet",
  "teal",
];
console.log(find("green", colorArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i in array) {
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}
let sumArray = [2, 4, 6, 9, 10];
console.log(`The sum of ${sumArray} is: ${sumAll(sumArray)}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function findPositive(array) {
  let newArray = [];
  for (let item of array) {
    if (item > 0) {
      newArray.push(item);
    }
  }
  return newArray;
}
let testArray = [-2, 4, 9, 0, -13, "purple", false];
console.log(findPositive(testArray));
// Note: I discovered through this test that the 'false' value for a boolean is considered less than 0, while the 'true' value is considered greater than 0.
// Is this useful? I am curious how often one would mix data types in the same array.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// CEASER CIPHER
// Description from edabit.com site:
// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// TODO: Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

// Examples from the website:
// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b
// NOTE: The '-' character should not change through the cipher, and character case should be stay the same as it goes through the cipher.
// I'm going to assume that no number characters should change either.

function ceaserCipher(string, rotationFactor) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    console.log(string.charCodeAt(i));
  }
  return newString;
}

const testZero = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const testOne = "The quick brown fox jumped over the lazy dog";
const testTwo = "The-quick-brown-fox-jumped-over-the-lazy-dog";
const testThree = "1493abcxyzABCXYZ4938--++,.";

console.log(ceaserCipher(testZero, 2));
console.log(ceaserCipher(testZero, 8));
console.log(ceaserCipher(testOne, 5));
console.log(ceaserCipher(testTwo, 5));
console.log(ceaserCipher(testThree, 5));
console.log(ceaserCipher(testTwo, 9));
console.log(ceaserCipher(testTwo, 1));
console.log(ceaserCipher(testThree, 3));
