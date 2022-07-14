/* 
Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

The function should return an array with the following format: [lowestKey, highestKey]

Examples:

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
Remember all object keys are strings, even if they hold numeric values.
*/
// loop through the obj ✅
// pull out each key --> change the key to a number --> Number(); ✅
// push each key into an array ✅
// Math.min() --> set these as variables ✅
// Math.max() ✅
// result.push(min, max); ✅

function minMaxKeyInObject(obj) {
  const objKeys = [];
  const result = [];
  let min = null;
  let max = null;

  for (let key in obj) {
    objKeys.push(Number(key));
  }
  min = Math.min(...objKeys);
  max = Math.max(...objKeys);

  result.push(min, max);
  return result;
}

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
