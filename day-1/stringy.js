// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: string datatype
O: return length of the string as a number
C: N/A
E: N/A
*/
function length(string) {
  // YOUR CODE HERE //
  //Use .length property to determine the length of the string
  return string.length
}
//use console.log to determine the length of a string
console.log(length("string"));

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: string datatype
O: return a new string that is lowercase
C: N/A
E: N/A
*/
//assign string to a variable
let string = "Hello";
function toLowerCase(string) {
  // YOUR CODE HERE //
  //use the .lowercase property to lower case the string
  return string.toLowerCase()
}
//log to see if the string is lowercased
console.log(toLowerCase("string"));

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: a string datatype
O: return a new string that is uppercased
C: N/A
E: N/A
*/
//assign string to a variable
let string = "Hello";
function toUpperCase(string) {
  // YOUR CODE HERE //
  //Use the .toUpperCase function to return the string as all Upper Case

  return string.toUpperCase()
}
// log to the console
console.log(toUpperCase(string));

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: Solve this problem using a combination of split and join.
 *
 */
/*
I: a string datatype
O: return a new string with a dash
C: must use the split and join method
E: N/A
*/
let string = "Hello World";
function toDashCase(string) {
  // YOUR CODE HERE //
  //split string using the .split method
  return string.split(" ")
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 *
 */

function beginsWith(string, char) {
  // YOUR CODE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
  // YOUR CODE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
  // YOUR CODE HERE //
  var args = Array.from(arguments);
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
