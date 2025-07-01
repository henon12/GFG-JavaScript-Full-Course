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



