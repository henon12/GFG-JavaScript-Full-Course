// Lesson 4: Data Types - JS
// 1. Primitive Data Types
// String - text inside quotes
let name = "Henok";
console.log(typeof name); // "string"

// Number - integers or decimals
let age = 22;
let price = 200;
console.log(typeof age);   // "number"
console.log(typeof price); // "number"

// Boolean - true or false
let isOnline = true;
console.log(typeof isOnline); // "boolean"

// Undefined - declared but not assigned
let country;
console.log(typeof country); // "undefined"

// Null - intentionally empty
let emptyValue = null;
console.log(typeof emptyValue); // "object" (weird JS behavior)


// 2.Non-Primitive Data Types
// Object - key-value pairs
let person = {
     name: "Henok",
     age: 25,
     course: "CS"
   };
   console.log(typeof person); // "object"
   
   // Array - list of values
   let numbers = [1, 2, 3, 4];
   console.log(typeof numbers); // "object"
   