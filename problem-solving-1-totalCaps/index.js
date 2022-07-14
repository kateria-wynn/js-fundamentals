/* 
Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

Examples:

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
*/
// create count var --> set 0
// loop over each element in arr for..of loop
// each el is a string --> loop over each string
// check each char in string --> char === char.toUpperCase()
// if it does --> add one to count
// if not, count = count;

function totalCaps(arr) {
  let count = 0;
  for (let str of arr) {
    for (let char of str) {
      if (char === char.toUpperCase()) {
        count++;
      } else {
        count = count;
      }
    }
  }
  return count;
}
totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE']);
totalCaps(['Elie', 'Matt', 'Tim']);
totalCaps(['hello', 'world']);
