/*
Write a function called repeat, which accepts a string and a number 
and returns a new string with the string repeated that number of times.

Do not use the built in repeat method - the tests will fail if you do!

Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''
*/

// string is added to the next string based off of the number provided
// zero means empty string ✅
// create an empty array ✅
// keep placing this string in the array ['Matt', 'Matt', 'Matt'] ✅
// while less than the number ✅
// once the loop is over concatinate all elements in array with no separator
// 'MattMattMatt' --> use join('') method and separate by an empty str ✅
// There is a built in method repeat() but can't use.

function repeat(str, num) {
  const repeatedStr = [];
  let count = 0;
  if (num === 0) return '';
  while (count < num) {
    count++;
    repeatedStr.push(str);
  }

  return repeatedStr.join('');
}
repeat('Matt', 3);
repeat('Elie', 2);
repeat('Michael', 0);
