/* 
Write a function called squareEvenNumbers which accepts an array and 
returns the sum of all of the even numbers in the array squared.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); _// 0
squareEvenNumbers([5, 6, 7]); _// 36
*/

// 2 squares is 4 --> 4 squared is 16 --> 16 + 4 --> 20
// loop through elements in array --> for..of ✅
// check if the curr el is even --> if even multiply by itself --> push to a result array ✅
// use reduce() to add all elements in arr ✅
// reduce() --> because want to get a single value  ✅
// return result ✅

function squareEvenNumbers(arr) {
  let result = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num * num);
    }
  }

  return result.reduce((a, b) => a + b, 0);
}
squareEvenNumbers([1, 2, 3, 4, 5]);
squareEvenNumbers([1, 3, 5, 7]);
squareEvenNumbers([5, 6, 7]);
