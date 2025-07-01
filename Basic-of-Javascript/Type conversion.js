// Variables as strings
const strNum1 = "3";
const strNum2 = "10";

// Adding strings (concatenation)
console.log("String add:", strNum1 + strNum2); // "310"

// Convert strings to numbers and add
const num1 = Number(strNum1);
const num2 = Number(strNum2);
console.log("Number add:", num1 + num2); // 13

// Check types
console.log(typeof strNum1); // "string"
console.log(typeof num1); // "number"

// Convert numbers to strings
const num3 = 123;
const strFromNum = String(num3);
console.log("Converted to string:", strFromNum);
console.log(typeof strFromNum); // "string"

// Boolean conversions
console.log("Boolean of 'Hello':", Boolean("Hello")); // true
console.log("Boolean of empty string:", Boolean("")); // false
console.log("Boolean of 0:", Boolean(0)); // false
console.log("Boolean of 100:", Boolean(100)); // true

// Practical: convert user input string to number and add 8
const userInput = "42"; // example input as string
const convertedInput = Number(userInput);

if (!isNaN(convertedInput)) {
  console.log("User input + 8 =", convertedInput + 8); // 50
} else {
  console.log("Invalid input");
}
