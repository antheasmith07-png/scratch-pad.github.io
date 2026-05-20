// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/*
I: Array
O: loop forward over the Array
C: Print values using console.log
E: N/A
*/
// declare an Array

var array = ['Ice', 'Cream', 'Sundae'];
function printArrayValues(array) {
  // YOUR CODE HERE //

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
//log to the console
console.log(printArrayValues(array));
/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/*
I: Array
O: loop backwards over the Array
C: Print values using console.log
E: N/A
*/
// declare an Array

var array = ['Ice', 'Cream', 'Sundae'];
function printArrayValuesInReverse(array) {
  // YOUR CODE HERE //
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
//log to the console
console.log(printArrayValuesInReverse(array));


/**
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Object
O: Array returning Object Keys
C: N/A
E: N/A
*/
// creat an object
let object = {
  number: 10,
  age: 5
};
function getObjectKeys(object) {
  // YOUR CODE HERE //
  for (var key in object) {
    console.log(key);
  }
}
console.log(getObjectKeys(object));

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/*
I: Object
O: loop over Object and print its keys to the console
C: N/A
E: N/A
*/
function printObjectKeys(object) {
  // YOUR CODE HERE //
  for (var key in object) {
  console.log(key);
}
}
console.log(pringObjectKeys(object));
/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE HERE //
  // create for loop
  for (var key in object) {
    console.log(key);
  }
}
console.log(getObjectValues(object));
/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/* 
I: Object
O: loop over object and print its values
C: N/A
E: N/A
*/
function printObjectValues(object) {
  // YOUR CODE HERE //
  for (var key in object) {
    console.log(object[key]);
  }
}
console.log(printObjectValues(object));
/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Object
O: return number of key/value pairs stored within the Object
*/
function getObjectLength(object) {
  // YOUR CODE HERE //
  return Object.keys(object).length;
}

console.log(getObjectLength(object));


/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
/*
I: Object
O: loop in reverse and print values to the console
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE HERE //
  Object.values(object).reverse().forEach(value => {
    console.log(value);
  });
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
