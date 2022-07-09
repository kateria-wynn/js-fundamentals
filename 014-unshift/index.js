/* 
Write a function called unshift which accepts an array and a value 
and adds the value to the beginning of the array.

This function should return the new length of the array.

Do not use the built in Array.unshift() function!

Examples:

var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4
*/

// immediately putting the element in index 0 ✅
// use splice() to insert an element in array at specific index (0) ✅

function unshift(arr, val) {
  arr.splice(0, 0, val);
  return arr.length;
}
var arr = [1, 2, 3];
unshift(arr, 0);
arr;

unshift([4, 5, 6], 10);
