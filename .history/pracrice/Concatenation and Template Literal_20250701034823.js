// String Concatenation example
let myname = "Henok"; // Declare variable for name
let ag = 22; // Declare variable for age

// Create message by joining strings using + operator
let messageConcat = "My name is " + myname + " and I am " + age + " years old.";
console.log(messageConcat); // Output: My name is Henok and I am 22 years old.

// Template Literal example
// Use backticks and ${} to embed variables directly
let messageTemplate = `My name is ${myname} and I am ${age} years old.`;
console.log(messageTemplate); // Output: My name is Henok and I am 22 years old.

// Multiline Template Literal example
// Allows easy multiline strings without + or \n
let multilineMessage = `My name is ${myname}.
I am ${ag} years old.
I love coding and learning new things.`;
console.log(multilineMessage);
/* Output:
My name is Henok.
I am 22 years old.
I love coding and learning new things.
*/

// all the key template literal features  examples


// 1. Embedding variables
let name = "Henok";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Henok and I am 22 years old.

// 2. Multiline string
let multiline = `This is line one.
This is line two.
This is line three.`;
console.log(multiline);
/* Output:
This is line one.
This is line two.
This is line three.
*/

// 3. Expression inside template literal
console.log(`5 + 3 = ${5 + 3}`);
// Output: 5 + 3 = 8

// 4. Conditional (ternary) operator inside template literal
console.log(`You are ${age >= 18 ? "an adult" : "a minor"}.`);
// Output: You are an adult.

// 5. Function call inside template literal
function greet(person) {
  return `Hello, ${person}!`;
}
console.log(`Greeting message: ${greet(name)}`);
// Output: Greeting message: Hello, Henok!

// 6. Creating HTML or formatted string
let html = `
  <div>
    <h1>Welcome, ${name}!</h1>
    <p>Age: ${age}</p>
  </div>
`;
console.log(html);
/* Output:
<div>
  <h1>Welcome, Henok!</h1>
  <p>Age: 22</p>
</div>
*/

// 7. Tagged template literal (advanced, example just shows usage)
function tag(strings, ...values) {
  return strings[0] + values.map((v, i) => `<b>${v}</b>` + strings[i + 1]).join('');
}
console.log(tag`Name: ${name}, Age: ${age}`);
// Output: Name: <b>Henok</b>, Age: <b>22</b>
