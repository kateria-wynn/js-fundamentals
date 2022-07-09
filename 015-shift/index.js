/* 
Write a function called shift which accepts an array 
and removes the first value in the array and then returns the value removed. 
It should return undefined if the array is empty.

Do not use the built in shift function!

Examples:

var arr = ["a","b","c"];
shift(arr); // "a"

arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
*/

// immediately accessing element at index 0 arr[0] and then return ✅
// need to use splice() method to remove an element at a specific index ✅
// if arr.length === 0 return undefined ✅
// There is a built in shift function but can't use

function shift(arr) {
  let firstValue = null;
  if (arr.length === 0) {
    return undefined;
  } else {
    firstValue = arr[0];
    arr.splice(0, 1);
    return firstValue;
  }
}
var arr = ['a', 'b', 'c'];
shift(arr);

arr;

var emptyArr = [];
shift(emptyArr);
