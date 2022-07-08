/* 
Write a function called stringLastIndexOf, which accepts two strings: 
the first is a word and the second is a single character.

The function should return the last index at which the character exists 
or -1 if the character is not found.

Do not use the built in String.lastIndexOf() function!

Examples:

stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1
*/

// iterate through the word ✅
// use an old school for loop --> need to access the indexes in the word ✅
// if the singleChar is equal to the current char ✅
// push the index of current char into an array --> indexes ✅
// outside of the loop, access the last element in the array ✅
// --> indexes[indexes.length - 1]
// if the last element in the array is a Number.isInteger()
// return indexes[indexes.length - 1] ✅
// if it's not a Number.isInteger() return -1 ✅
// There's a built in method lastIndex() but can't use.

function stringLastIndexOf(word, singleChar) {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (singleChar === word[i]) {
      indexes.push(i);
    }
  }
  return Number.isInteger(indexes[indexes.length - 1])
    ? indexes[indexes.length - 1]
    : -1;
}
stringLastIndexOf('awesome', 'e');
stringLastIndexOf('awesome', 'z');
