
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
myname =


myname = Mr.henok;
console.log(myname) //Mr.henok

// 2.Re-assignment: const ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.
// Example: Updating Variables

// const x; // not work b/c SyntaxError: Missing initializer in const declaration
// x = 2;
// console.log(x)

const x = 4;
console.log(x)