/*
comparison operators are used to compare two values, returning a Boolean value (true or false)
1. Basic Comparison Operators
 Greater Than (>)
 Less Than (<)
 Greater Than or Equal (>=)
 Less Than or Equal (<=)
 
 */
console.log(50 > 30) // true
console.log(50 < 30) // false
console.log(30 >= 30) // true
console.log(50 <= 40) //false
console.log(50 == 40) // false

/*
 2. Comparison of Strings
 JavaScript compares strings from left to right, one letter at a time, using each character's Unicode (ASCII) value.
Just Remember:
Compared letter by letter
Longer word can be bigger if starting letters match
Capital letters < small letters

 Why?
"apple" > "banana" →  false
'a' comes before 'b' in the alphabet.
So "apple" is less than "banana".
"glowing" > "glow" →  true
First 4 letters are the same: "glow"
"glowing" is longer, so it's greater.

Important:
Capital letters (like 'A') have lower values than small letters (like 'a').
Example: "Zebra" > "apple" →  false
 */
console.log('apple' > 'banana') //  returns false because 'a' (ASCII: 97) is less than 'b' (ASCII: 98).
console.log('glowing' > 'glow') // returns true because after comparing the common characters ('g', 'l', 'o', 'w'), the string "glowing" has additional characters.
console.log('glow' > 'glowing') //false b/c no additional char
console.log('Zebra' > 'apple') // → false)

/* 3. Type Coercion in Comparison
 JavaScript performs type coercion in certain comparisons, meaning it automatically converts one data type to another. This can lead to unexpected results, especially when comparing strings and numbers.

*/
console.log('2' > 1) // is true because the string "2" is converted to the number 2, and 2 > 1 is true.
console.log('01' == 1) // is true because the string "01" is converted to the number 1, and 1 == 1 is true.

/*
5.Strict Equality (===) vs Loose Equality (==) 

Loose Equality (==):
Changes types to match before comparing.
Can cause confusing results.

Strict Equality (===):
Does not change types.
Checks if both value and type are the same.

*/
// Example 1:
console.log('01' == 1) // true (loose)
console.log('01' === 1) // false (strict)

/*

Why?
"01" is a string, 1 is a number

== changes "01" to a number → 1 == 1 → true

=== keeps types → "01" !== 1 → false b/c str not equal to num

*/
// Example 2:
console.log(false == 0) // true (loose)
console.log(false === 0) // false (strict)

/*

== turns false into 0 → 0 == 0 →  true

=== compares false (boolean) and 0 (number) →  false

 Tip:
Always use === to avoid weird bugs caused by type conversion.



-------
Remember:
Comparison	Same Type?	Same Value?	Result
"5" == 5	        No	        Yes	      true
"5" === 5         No	        Yes	      false
true == 1	        No	        Yes	      true
true === 1	   No	        Yes	     false
5 === 5	        Yes	        Yes      	true

*/

/*

5. Null and Undefined in Comparison
JavaScript has special rules when comparing null and undefined. While they are loosely equal (==), they are not strictly equal (===).

*/
consol.log(null == undefined) //is true because JavaScript considers them loosely equal in value like both are zero(0).
console.log(null === undefined) //is false because their types are different (null is an object, and undefined is a type itself).

/*
6. Null in Mathematical Comparisons
null has unique behavior when used in mathematical comparisons (such as <, >, <=, >=). In these comparisons, null is treated as 0.
*/

console.log(null > 0) // is false because null is treated as 0, and 0 > 0 is false.
console.log(null < 1 ) //is true because null is treated as 0, and 0 < 1 is true.
console.log(null >= 0) //is true because null is treated as 0, and 0 >= 0 is true.
console.log(null == 0) //is false because null is not converted to 0 in equality checks (==).

/*
7. Examples and Exercises
Let's put some of these comparisons to the test! Try predicting the output of the following comparisons.

*/
console.log(3 <= 5);               // true
console.log("mango" > "banana");  // true
console.log("2" > "3");            // false
console.log(undefined == null);   // true
console.log(null === undefined);  // false
console.log(null < 1);             // true

/*

Key Takeaways
Always use === instead of == to avoid issues with type coercion.
String comparisons are done based on ASCII (Unicode) values.
JavaScript automatically converts strings to numbers in numerical comparisons.
Null behaves differently in mathematical and equality comparisons.
Undefined always results in false in numerical comparisons.


*/