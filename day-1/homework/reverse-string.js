// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: string datatype "hello"
O: return string reversed "olleh"
C: Use a loop and concatenate
E: N/A
*/

function reverseString(input) {
  // YOUR CODE HERE //
    // Create something to collect the output
    let reversed = '';
  
    //  Use a for-loop starting at the last index and ending at 0
    // Index of last char is str.length - 1
    for (let i = input.length - 1; i >= 0; i--) {
      
      // Use the += operator to concatenate
      reversed += input[i];
    }
  
    return reversed;
  }
  // log
  console.log(reverseString('hello')); // 'olleh'
  


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
