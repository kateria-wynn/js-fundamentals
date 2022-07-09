/* 
Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm

Do not use the built in Array.reverse() function!

Examples:

reverse([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
reverse([]); // []

var arr = [1, 2, 3];
reverse(arr); // [3, 2, 1]
arr; // [3, 2, 1]
*/

// need to count 0 - 4 --> using index
// placing elements from reversedArr into original arr & deleting elements
// arr.splice(0,1,reversedArr[0]);
// arr.splice(1,1,reversedArr[1]);
// arr.splice(2,1,reversedArr[2]);
// arr.splice(3,1,reversedArr[3]);
// arr.splice(4,1,reversedArr[4]);

function reverse(arr) {
  let reversedArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      arr.splice(i, 1, reversedArr[i]);
    }
    return arr;
  }
}

reverse([5, 4, 3, 2, 1]);
reverse([]);

var arr = [1, 2, 3];
reverse(arr);
arr;
