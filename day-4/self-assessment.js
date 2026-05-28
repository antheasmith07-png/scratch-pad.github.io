/*
Create a function called countGreaterThanFour that takes in an array of strings.
This function should return the number of strings in the input array that have
a length greater than 4. If the input array is not an array, return 0.

In your implementation, breakdown the IOCE in detail and pseudocode every step.

example output:

      countGreaterThanFour(['hello', 'world', 'we', 'are', 'strings']); // => 3
*/
/*
I: a function that takes in an array strings
O: return the number of strings in the input array that has a length greater than 4
C: if the input an array is less than 4 return 0
E: N/A
*/
function countGreaterThanFour(array) {
       // Check if input is an array; return 0 if not
  if (!Array.isArray(array)) {
    return 0;
  }
let count = 0;
      //run loop to count over how many strings is in an array
      for (i = 0; i < array.length; i++) {
      //if string count is greater than 4 count the strings
      if (array[i] > 4) {
            count++; {
      return count;
      //if count is less than 4 return 0
}    
}
} else if {
      return 0;
}
}
