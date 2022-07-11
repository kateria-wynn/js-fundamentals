/* 
Write a function called countValues which accepts an array and a 
number and returns the number of times that value appears in the array.

Examples:

countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0
*/

function countValues(arr, numToCount) {
  let count = 0;
  for (let num of arr) {
    if (num === numToCount) {
      count++;
    }
  }
  return count;
}
countValues([4, 1, 4, 2, 3, 4, 4], 4);
countValues([4, 1, 4, 2, 3, 4, 4], 100);
countValues([], 1);
