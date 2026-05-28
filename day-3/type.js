// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
/*
I: value
O: determine if it is an Array and state true or false
C: N/A
E: N/A
*/
function isArray(value) {
  // YOUR CODE HERE //
 return Array.isArray(value); //log true if an Array 
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 *
 */
/*
I: value
O: return true if the value is an object, false if not
C: N/A
E: N/A
*/
function isObject(value) {
  // YOUR CODE HERE //
  if (Array.isArray(value)) return false;
  //eliminate the null value as an object
  if (value === null) return false;
  // eliminate date as an object
  if (value instanceof Date) return false;
  return typeof value === 'object';
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: value
O: return true if an Array or Object, false if otherwise
C: N/A
E: N/A
*/
function isCollection(value) {
  // YOUR CODE HERE //
  //if array is array return true
  if (Array.isArray(value)) return true;
  //eliminate the null value as an object
  if (value === null) return false;
  // eliminate date as an object
  if (value instanceof Date) return false;
  // if equal to object as a collection return true
  return typeof value === 'object';
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/*
I: value
O: return the typeof value as a string
C: N/A
E: N/A
*/
function typeOf(value) {
  // YOUR CODE HERE //
  //return null for value null
  if (value === null) return "null";
  //return array if tested value is an array
  if (Array.isArray(value)) return "array";
  //return date if there is instance of a Date
  if (value instanceof Date) return "date";

  return typeof(value);
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
