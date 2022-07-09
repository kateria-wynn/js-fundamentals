/* 
Write a function called slice, which accepts an array, and two numbers.

The function should return a new array with the elements starting at the 
index of the first number and going until the index of the second number.

If a third parameter is not passed to the function, it should slice 
until the end of the array by default.

If the third parameter is greater than the length of the array, 
it should slice until the end of the array.

Do not use the built in Array.slice() function!

Examples:

slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
*/

// var for the new array --> result ✅
// loop through each num in array --> if the index matches the starting index
// --> push that element in result array --> old school for loop ✅
// stop pushing 1 before the index num for 2nd param ✅
// if third param is missing, push all elements starting at specific index ✅
// if third param is greater than length of array, push all elements starting at
// specific index ✅
// There's a built in slice() method but can't use.

function slice(arr, startIndex, endIndex) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (endIndex === undefined || endIndex > arr.length) {
      if (i === startIndex || i > startIndex) {
        result.push(arr[i]);
      }
    } else if (i === startIndex || (i <= endIndex - 1 && i > startIndex)) {
      result.push(arr[i]);
    }
  }
  return result;
}
slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
