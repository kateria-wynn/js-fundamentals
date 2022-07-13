/* 
Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array.

The returned value should be an array in the following format: [secondHighest, highest]

The order of the numbers passed in could be any order.

Do not use the build in sort() method - the tests will fail!

Examples:

twoHighest([1, 2, 10, 8]); _// [8, 10]_
twoHighest([6, 1, 9, 10, 4]); _// [9,10]_
twoHighest([4, 25, 3, 20, 19, 5]); _// [20,25]_
twoHighest([1, 2, 2]) // _[2, 2]_;
*/

function frequency(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in count)) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }
  return count;
}

function twoHighest(arr) {
  const result = [];
  const secondHighestArr = [];

  let highest = 0;
  let secondHighest = 0;

  // loop through the frequency obj
  for (let num in frequency(arr)) {
    if (frequency(arr)[num] > 1) {
      result.push(frequency(arr)[num], frequency(arr)[num]);
    }
  }
  if (result.length === 0) {
    for (let num of arr) {
      if (num > highest) {
        highest = num;
      }
    }
    for (let num of arr) {
      if (num === highest) {
        result.push();
      } else if (num < highest) {
        secondHighestArr.push(num);
      }
    }
    for (let num of secondHighestArr) {
      if (num > secondHighest) {
        secondHighest = num;
      }
    }
    result.push(secondHighest, highest);
    return result;
  } else {
    return result;
  }
}

twoHighest([1, 2, 10, 8]); // [8, 10]_
twoHighest([6, 1, 9, 10, 4]); // [9,10]_
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]_
twoHighest([1, 2, 2]); // _[2, 2]_;
