
// lesson 2-3 : JavaScript Variables & Difference between var, let and const


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



Search...






























Variable Naming Convention
Naming variables is a crucial and often overlooked skill in programming. A well-named variable can reveal whether the code was written by a beginner or an experienced developer. In real-world projects, much time is spent modifying and extending code. This task becomes significantly easier when variable names are clear and descriptive.

Rules for Naming Variables
Before we discuss how to come up with good variable names, let's review the rules for creating them:

Characters Allowed: A variable name can consist of letters (both uppercase and lowercase), numbers, the dollar sign ($), and the underscore (_).
No Leading Numbers: A variable name cannot start with a number but can end with one.
No Special Characters: Avoid special characters such as @, #, -, or brackets.



let username;
let age;
let _isValid;
let $price;
let number1;
let number_2;
When a variable name consists of multiple words, you should not separate them with spaces. Instead, use camelCase or underscores.




let userName; // camelCase
let user_age; // using underscore
Writing Good Variable Names
Good variable names should describe the type of data stored in them. This practice enhances code readability and maintainability, especially in larger codebases. Here are some tips for writing good variable names:

Descriptive Names: The name should convey the variable's purpose or the type of data it holds.
Consistent Naming Convention: Follow a consistent naming convention, such as camelCase, for easier readability.
Practical Examples
Consider the following examples to understand how naming impacts code clarity:




let userName = "Prakash";
console.log(userName); // Outputs: Prakash
The variable name userName clearly indicates that it stores a user's name. Now, imagine if we named it x instead:




let x = "Prakash";
console.log(x); // Outputs: Prakash
The variable name x does not convey any meaningful information about the data it holds. It could be anything, making the code harder to understand.

Variable Name Conventions
Single Word Variables: Use descriptive names for single-word variables.



let age = 25;
2. Multiple Words Variables: Use camelCase or underscores.




let homeAddress = "123 Main St"; // camelCase
let home_address = "123 Main St"; // using underscore
3. Case Sensitivity: Remember that variable names are case-sensitive.




let userAge = 25;
let UserAge = 30; // Different variable
Avoid Unnecessary Symbols
While $ and _ are allowed, avoid using them unnecessarily, as they can make the code look cluttered and unprofessional. Only use these symbols if they enhance the clarity of your code.




let $price = 100;
let _isValid = true;
Summary
In summary, good variable names are essential for writing clean, readable, and maintainable code. Follow these guidelines to improve your variable naming skills:

Use descriptive names that convey the variable's purpose.
Follow a consistent naming convention, such as camelCase.
Avoid starting variable names with numbers.
Avoid unnecessary symbols like $ and _.

