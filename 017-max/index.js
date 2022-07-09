/* 
Write a function called max, which accepts an array 
and returns the highest value.

Do not use the built-in Math.max() function!

Examples:

max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
*/

// loop through each element in array --> for..of ✅
// variable max --> hold the highest value ✅
// checking each num --> comparing if curr num > num in max var --> reassign
// --> whatever the curr num is ✅
// return variable ✅
// There is a built in Math.max() method but can't use.

function max(arr) {
  let max = null;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

max([5, 1, 4, 7, 1, 2]);
max([3, 4, 12, 1, 8]);
max([-1, 6, 3, 2.2, -10, -4]);
