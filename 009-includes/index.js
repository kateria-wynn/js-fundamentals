/* 
Write a function called includes, which accepts an array and a number.

The function should return true if the value exists in the array 
and false if it does not.

Do not use the built in Array.includes() function!

Examples:

includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false
*/

// loop through the elements in array ✅
// check if curr element matches number --> match? return true ✅
// if at end of array and no match to number --> return false ✅
// if the array is empty --> return false ✅
// There is a built in includes() method but can't use.

function includes(arr, num) {
  let result = null;
  for (let el of arr) {
    if (el === num) result = true;
  }
  return result !== true || arr.length === 0 ? false : true;
}

includes([1, 2, 3, 4], 4);
includes([1, 2, 3, 4], 14);
includes([], 14);
