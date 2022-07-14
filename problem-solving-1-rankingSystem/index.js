/* 
Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.

Examples:

rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]
*/

// do a numeric sort of the arr least to greatest
// a + b
// loop over elements in arr

function rankings(arr) {
  let rankings = {};
  let originalArr = arr.slice();
  let sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  let reversedArr = sortedArray.reverse();
  let result = [];

  // for each number add one to the index
  for (let i = 0; i < reversedArr.length; i++) {
    rankings[sortedArray[i]] = i + 1;
  }

  for (let num of originalArr) {
    if (num in rankings) {
      result.push(rankings[num]);
    }
  }
  return result;
}

rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]
