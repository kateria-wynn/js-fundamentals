/* 
Write a function called min, which accepts an array of numbers 
and returns the lowest value.

Do note use the built-in Math.min() function!

Examples:

min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
*/

// loop through each el in array --> old school for loop to access index ✅
// compare each num to each other --> which one is less than? ✅
// min variable will hold the current min number ✅
// assign min to first num in arr ✅
// if the curr num is greater than min, keep min var
// else assign to curr num in loop
// return min var

function min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
      min = min;
    } else {
      min = arr[i];
    }
  }

  return min;
}
min([5, 1, 4, 7, 1, 2]);
min([-1, 6, 3, 2.2, -10, -4]);
