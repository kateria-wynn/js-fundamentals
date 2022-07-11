/* 
Write a function called swapKeyAndValue, which accepts an object and a key.

The function should return a new object with the given key and its value flipped, 
and all the other key/value pairs unchanged.

Examples:

var instructor = { name: 'Elie', job: 'Instructor' };

swapKeyAndValue(instructor, 'name');
_// {Elie: 'name', job: "Instructor"}_

swapKeyAndValue(instructor, 'job');
_// {name: "Elie", Instructor: 'job'}
*/

// return a new obj --> result
// iterate over each key in obj
// if key matches keyToSwap
// add a new key to result obj result[] --> place the value inside
// assign the new key (old value) to the original keyToSwap
// else --> add each key and value (unchanged) to the result obj

function swapKeyAndValue(obj, keyToSwap) {
  const result = {};
  for (let key in obj) {
    if (key === keyToSwap) {
      result[obj[key]] = keyToSwap;
    } else {
      // key = value (left unchanged)
      result[key] = obj[key];
    }
  }
  return result;
}

var instructor = { name: 'Elie', job: 'Instructor' };

swapKeyAndValue(instructor, 'name');

swapKeyAndValue(instructor, 'job');
