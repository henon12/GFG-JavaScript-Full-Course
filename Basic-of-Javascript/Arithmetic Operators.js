//  Arithmetic Operators in JavaScript

// 1. Basic Arithmetic Operations
const x = 12;
const y = 3;

console.log("=== Basic Arithmetic Operations ===");
console.log("Addition:", x + y); // 15
console.log("Subtraction:", x - y); // 9
console.log("Multiplication:", x * y); // 36
console.log("Division:", x / y); // 4
console.log("Remainder:", x % y); // 0
console.log("Exponentiation x ** 2:", x ** 2); // 144
console.log("Exponentiation y ** 3:", y ** 3); // 27

// 2. String Addition
const a = "12";
const b = "3";

console.log("\n=== String Addition (Concatenation) ===");
console.log("a + b:", a + b); // "123" (string concatenation)

// 3. Other Operations with String Numbers
console.log("\n=== Arithmetic with String Numbers ===");
console.log("a - b:", a - b); // 9
console.log("a * b:", a * b); // 36
console.log("a / b:", a / b); // 4

// 4. Mixing String and Number
const c = 12;
const d = "3";

console.log("\n=== Mixing Number and String ===");
console.log("c + d:", c + d); // "123"
console.log("c - d:", c - d); // 9
console.log("c * d:", c * d); // 36
console.log("c / d:", c / d); // 4

// 5. Invalid String Arithmetic
const str1 = "apple";
const str2 = "mango";

console.log("\n=== Non-numeric String Operations ===");
console.log("str1 + str2:", str1 + str2); // "applemango"
console.log("str1 - str2:", str1 - str2); // NaN
console.log("str1 * str2:", str1 * str2); // NaN
console.log("str1 / str2:", str1 / str2); // NaN

// 6. Best Practice: Convert String to Number
console.log("\n=== Converting Input to Number ===");
const userInput = "42"; // Simulating user input
const numberInput = Number(userInput); // Convert to number

if (!isNaN(numberInput)) {
  console.log(`Converted and added: ${numberInput + 8}`); // 50
} else {
  console.log("Invalid input");
}
