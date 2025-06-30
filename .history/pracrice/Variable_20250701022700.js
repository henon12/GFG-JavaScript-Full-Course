
// 1.Block Scoping

// var - Function-scoped. Can be redeclared and reassigned.
var age;
age = 22;
console.log(age) // 22

// we can update var
age = 23;
console.log(age) // 23


// other are let.....it's Block-scoped. Can be reassigned, but not redeclared in the same scope.
// let myname = henok; // not work b/c  ReferenceError: henok is not defined
// console.log(myname) // henok

let myname;
myname = "Henok";  // ✅ string in quotes
console.log(myname); // Output: Henok

myname = "Mr.henok"; // ✅ string in quotes
console.log(myname); // Output: Mr.henok


// 2.Re-assignment: const ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.
// Example: Updating Variables

// const x; // not work b/c SyntaxError: Missing initializer in const declaration
// x = 2;
// console.log(x)

const x = 4;
console.log(x)


lesson 2
// for summary all thing

// var - function scoped
var a = 10;
a = 20; // can reassign
var a = 30; // can redeclare
console.log("var a:", a); // 30

// let - block scoped
let b = 40;
b = 50; // can reassign
// let b = 60; ❌ Error: Cannot redeclare
console.log("let b:", b); // 50

// const - block scoped and constant
const c = 70;
// c = 80; ❌ Error: Cannot reassign
console.log("const c:", c); // 70


// Function - scoped; A var variable is visible throughout the entire function, no matter where it is declared.

// Block-scoped :A block is anything inside { } like in if, for, or function.



