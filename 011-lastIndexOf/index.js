/* 
Write a function called lastIndexOf, which accepts an array and a number.

The function should return the last index at which the value exists,
or -1 if the value is not found.

Do not use the built in Array.lastIndexOf() function!

Examples:

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
*/

// looping through each element of the array --> old school for loop ✅
// checking if current element matches num ✅
// if it does match --> access the curr index --> push to new array ✅
// if arr.length === 1 return elem at index zero ✅
// if arr.length is > 1 --> find the larger number and return ✅
// if at end of array and num not found return -1 ✅

function lastIndexOf(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) result.push(i);
  }
  if (result.length === 0) {
    return -1;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return Math.max(...result);
  }
}

lastIndexOf([1, 2, 3, 4], 2);
lastIndexOf([1, 2, 3, 4, 2], 2);
lastIndexOf([1, 2, 3, 4], 22);
