const readlineSync = require("readline-sync");

// === STRING INPUT ===
const name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}`);
console.log("Type of name:", typeof name); // string

// === NUMBER INPUT AND CONVERSION ===
const ageInput = readlineSync.question("What is your age? ");

// Method 1: Using Number()
const age = Number(ageInput);

// Method 2: Using parseInt()
const age2 = parseInt(ageInput);

// Method 3: Using unary plus +
const age3 = +ageInput;

console.log("Number(age):", age);
console.log("parseInt(age):", age2);
console.log("Unary +age:", age3);

// Type checks
console.log("Type of age:", typeof age); // number
console.log("Valid number?", !isNaN(age)); // true or false

// Calculate birth year if valid
if (!isNaN(age)) {
  const year = new Date().getFullYear() - age;
  console.log(`You were born in ${year}`);
} else {
  console.log("Invalid age input");
}

// === NUMBER TO STRING ===
const luckyNum = 7;
const str1 = String(luckyNum);
const str2 = luckyNum.toString();

console.log("String(luckyNum):", str1, "Type:", typeof str1);
console.log("luckyNum.toString():", str2, "Type:", typeof str2);

// === BOOLEAN CONVERSION ===
const test1 = Boolean(name); // true if name not empty
const test2 = Boolean(""); // false (empty string)
const test3 = Boolean(0); // false
const test4 = Boolean(123); // true
const test5 = Boolean(null); // false

console.log("Boolean(name):", test1);
console.log("Boolean(''):", test2);
console.log("Boolean(0):", test3);
console.log("Boolean(123):", test4);
console.log("Boolean(null):", test5);
