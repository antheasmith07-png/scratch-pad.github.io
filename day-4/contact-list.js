// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object.
 *
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 *
 */
/*
I:Create a factory function that takes in id, nameFirst, and nameLast as parameters
O: return a contact object
C: N/A
E: N/A
*/
function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  //return an object with nameFirst and nameLast
  return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast,
  };
}

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 */
/*
I:create a function that takes in array of objects and fullName
O:return the contact object that matches the fullName or undefined if no object matches
C: N/A
E: N/A
*/

function findContact(array, fullName) {
  // YOUR CODE HERE
  for (var i = 0; i < array.length; i++) {
    var combinedName = array[i].nameFirst + " " + array[i].nameLast;
   if (combinedName === fullName) {
    return array[i];
   }
  }
}

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 */
/*
I: create function that takes in the parameters array of contacts and a contact object to remove
O: search through the array and remove contact if found
C:N/A
E:N/A
*/
function removeContact(array, contact) {
  // YOUR CODE HERE
  for (var i = 0; i < array.length; i++) {
 var newContact = {array[i].id, array[i].nameFirst, array[i].nameLast};
    //test if contact matches anything in the array
   if (newContact === contact) {
    //if contact matches delete contact object at index i
    array.splice(i, 1);
    //return updated array
    return array;
   }
   
  }
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
/*
I: Create a function that takes in the parameters array of objects and a letter
O: return contact objects whose first names begin with the letter inputed
C: N/A
E: N/A
*/
function getNamesThatBeginWithLetter(array, letter) {
  //create a variable to push new array into
  var begin = [];
  // YOUR CODE HERE
  for (var i = 0; i < array.length; i++) {
   var firstLetter = array[i].nameFirst[0];
    //test if contact first name matches the letter
   if (firstLetter === letter) {
    return begin.push(array[i]);
}
  }
    return begin;
}
/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 */
/*
I: create a function that takes in an array of contact objects
O: return a string of each objects full name followed by a linebreak character
C: N/A
E: N/A
*/
function getAllContactNames(array) {
  // YOUR CODE HERE
  // return a string by using the join operator to add linebrea character
  return contacts.map(contact => contact.fullName).join('\n') + '\n';
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
