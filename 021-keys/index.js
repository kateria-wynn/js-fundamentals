/* Write a function called keys, which accepts an object and 
returns an array of all of the keys in the object.

Do not use the built in Object.keys() function!

Examples:

var obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

var obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]

var obj3 = {};
keys(obj3); // []
*/

// accesing the keys in the object
// need to loop over the object --> use for...in loop

function keys(obj) {
  const result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    } else {
      return result;
    }
  }
  return result;
}
