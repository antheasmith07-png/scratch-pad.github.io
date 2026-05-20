// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
I: a function that prints numbers from 1 to 100
O: multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of 3 and 5 "FizzBuzz"
C: none
E: N/A
*/
function fizzBuzz() {
  // YOUR CODE HERE //
  //create a while loop that starts at 1 and stops at 100
  var i = 1;
  while (i <= 100) {
    // if statement that returns "FizzBuzz" if a multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      // if statement that returns "Fizz" if a multiples of 3
    } else if (i % 3 === 0) {
      console.log("Fizz");
      // if statement that returns "Buzz" if number is multiples 5
    } else if ( i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

//log

console.log(fizzBuzz());
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
