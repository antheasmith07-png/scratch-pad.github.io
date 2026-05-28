// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/*
I: Create a range function tha takes 2 integers and returns an array between the inegers
O: If the first argument is greater than the 2nd return the range in reverse order
*/
function range(start, end) {
   // YOUR CODE HERE //
  //create an array to collect the output 
  var output = [];
  if (start <= end) {
    // Forward range loop
    for (let i = start; i <= end; i++) {
      output.push(i);
    }
  } else {
    // Reverse range loop
    for (let i = start; i >= end; i--) {
      output.push(i);
    }
  }
// Return the output
  return output; 
}
  

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
