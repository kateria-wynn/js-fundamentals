/* 
Write a function called slice, which accepts an array, and two numbers.

The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

If a third parameter is not passed to the function, it should slice until the end of the array by default.

If the third parameter is greater than the length of the array, it should slice until the end of the array.

Do not use the built in Array.slice() function!

Examples:

slice([1, 2, 3, 4, 5], 0, 2); _// [1, 2]_
slice([1, 2, 3, 4, 5], 2, 4); _// [3, 4]_
slice([1, 2, 3, 4, 5], 2); _// [3, 4, 5]_
slice([1, 2, 3, 4, 5], 2, 10); _// [3, 4, 5]_
*/
