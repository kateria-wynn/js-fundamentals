/*
Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

Examples:

countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers(`[]`); // 0
*/

// create count var
// if it's not an array --> return 0
// else loop through each el of arr --> for...of loop
// if el is not NaN isNaN()
// count = count
// else add one to count --> count++
function countNumbers(arr) {
  let count = 0;
  if (Array.isArray(arr)) {
    for (let el of arr) {
      if (isNaN(Number(el))) {
        count = count;
      } else {
        count++;
      }
    }
  }
  return count;
}

countNumbers(Array.isArray(`[]`));
countNumbers(['a', 'b', '3', 'awesome', '4']);
countNumbers(['32', '55', 'awesome', 'test', '100']);
