// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
/*
I: input base as string or number
O: return function that tests whether the value is greater than the base
*/
function createGreaterThanFilter(base) {
  // YOUR CODE HERE
  //create a function that takes a value and tests if it greater than the base
  return function(value) {
    return value > base;
  };
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
/*
I: input base as string or number
O: return function that tests whether the value is less than the base
*/
function createLessThanFilter(base) {
  return function (value) {
    return value < base;
  };
  // YOUR CODE HERE
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I: startWiths character
O: test whether the startsWith character matches a given string using a function
*/
function createStartsWithFilter(startsWith) {
  // YOUR CODE HERE
  return function (string) {
    // Get the first character of the string
    const firstChar = string[0];
    
    // Check if the string is empty and compare case-insensitively
    return firstChar?.toLowerCase() === startsWith.toLowerCase();
  };
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I: endsWith single character
O: return a function that tests for the last character in the string to match with endswith
*/
function createEndsWithFilter(endsWith) {
  // YOUR CODE HERE //
  return function (string) {
    // Get the last character of the string
    const lastChar = string[string.length - 1];
    
    // Check if the string is empty and compare case-insensitively
    return lastChar?.toLowerCase() === endsWith.toLowerCase();
  };
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 *
 * examples:
 *
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 *
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 *
 */
/*
I: an array of strings and a funtion to modify a string
O:return the array of strings modified
C: N/A
E: N/A
*/
function modifyStrings(strings, modify) {
  // YOUR CODE HERE
  //create an output to put a new Array
  var output=[];
  //create a for loop to loop over strings
  for (var i = 0; i < strings.length; i++) {
    // pass each string to the modify function and capture the result
    var newStr = modify(strings[i]);
    // push that result into our output collection
    output.push(newStr);
  }
  
  // return the final array
  return output;
}


  /**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 *
 * examples:
 *
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 *
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */

function allStringsPass(strings, test) {
  // YOUR CODE HERE //
  var pass=[];
  //create a for loop to loop over strings
  for (var i = 0; i < strings.length; i++) {
    // pass each string to the modify function and capture the result
    if (!test(strings[i])) {
      return false; // Return false early if any string fails
    }
  }
  return true; // Return true only if all strings pass
}

  



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
