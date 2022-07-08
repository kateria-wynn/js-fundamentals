/* 
Write a function called indexOf, which accepts an array and a number.

The function should return the first index at which the value exists 
or -1 if the value is not found.

Do not use the built in Array.indexOf() function!

Examples:

var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1
*/

// looping through the elements of array --> old school for loop ✅
// checking if curr elemt matches num --> match? access the current index & return ✅
// if at end of array and element not found, return -1 --> outside of the loop ✅
// There is a built in indexOf() method but can't use

function indexOf(arr, num) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) result = i;
  }
  return result === null ? -1 : result;
}

var arr = [5, 10, 15, 20];
indexOf(arr, 20);

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2);

var arr3 = [1, 2];
indexOf(arr3, 10);
