/* 
Write a function called pop which accepts an array.

The function should remove the last value in the array and return the value 
removed or undefined if the array is empty.

Do not use the built in Array.pop() function!

Examples:

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0
*/

// go immediately to the last element in the array --> arr[arr.length - 1]
// return this value
// need to use splice() to delete elements from array
// if arr.length === 0 return undefined

function pop(arr) {
  let lastVal = null;
  lastVal = arr[arr.length - 1];
  // start at last index, delete one element
  arr.splice(arr.length - 1, 1);
  if (lastVal === null && arr.length === 0) return undefined;
  return lastVal;
}
var arr = [1, 2, 3, 4];
pop(arr);

var emptyArr = [];
pop(emptyArr);
