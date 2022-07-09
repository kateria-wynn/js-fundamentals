/* 
Write a function called push which accepts two parameters, an array and any value.

The function should add the value to the end of the array and 
then return the new length of the array.

Do not use the built in Array.push() function!

Examples:

var arr = [1, 2, 3];
push(arr, 10); // 4

arr; // [1, 2, 3, 10]

var secondArr = [5, 2, 1, 6];
push(secondArr, 20); // 5

arr; // [5, 2, 1, 6, 20]
*/

// adding an element to the end
// immediately go to the end of array and inset a new element after the last index ✅
// --> use splice() to insert inside of the array at a specific index ✅
// return arr.length ✅
// There is a push() method but can't use.

function push(arr, val) {
  // insert the value at new index
  arr.splice(arr.length + 1, 0, val);
  return arr.length;
}
var arr = [1, 2, 3];
push(arr, 10);

arr;

var secondArr = [5, 2, 1, 6];
push(secondArr, 20);

arr;
