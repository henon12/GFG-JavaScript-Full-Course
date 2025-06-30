
// 1.Block Scoping

// var - Function-scoped. Can be redeclared and reassigned.
var age;
age = 22;
console.log(age) // 22

// we can update var
age = 23;
console.log(age) // 23


// other are let.....it's Block-scoped. Can be reassigned, but not redeclared in the same scope.
let myname = henok;
console.log(myname) // henok

myname = Mr.henok;
console.log(myname) //Mr.henok

2.Re-assignment: const ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.
// Example: Updating Variables

