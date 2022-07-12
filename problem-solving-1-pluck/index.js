/* 
Write a function called pluck, which takes an array of objects and the name of a key.

The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

Examples:

pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
// ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
// [true, false, undefined]
*/

// return array
// loop over each el in array (an obj) and access the key inside that matches the param and push to new array -->? for...of

function pluck(arr, pluckKey) {
  const result = [];
  let highestObjLength = 0;

  for (let obj of arr) {
    if (Object.keys(obj).length > highestObjLength) {
      highestObjLength += Object.keys(obj).length;
    }
    if (pluckKey in obj) {
      for (let key in obj) {
        if (key === pluckKey) {
          result.push(obj[key]);
        }
      }
    } else {
      result.push(undefined);
    }
  }
  return result;
}

pluck(
  [
    { name: 'Tim', isBoatOwner: true },
    { name: 'Matt', isBoatOwner: false },
    { name: 'Elie' },
  ],
  'isBoatOwner'
);
pluck([{ name: 'Tim' }, { name: 'Matt' }, { name: 'Elie' }], 'name');
