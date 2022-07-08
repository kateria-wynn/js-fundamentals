/* 
Write a function called stringIncludes, which accepts two strings: the first string 
is a word and the second string is a single character.

The function should return true if the first string includes the character, 
otherwise it should return false.

Do not use the built in String.includes() function!

Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false
*/

// loop through word --> does the current char match the SingleChar?
// if it does --> add 1 to a counter
// outside of the loop, if counter > 1 return true else return false
// There is a built in includes() method but can't use. Will use a for...of loop because
// can iterate over a string

function stringIncludes(word, singleChar) {
  let count = 0;
  for (let char of word) {
    if (char === singleChar) {
      count++;
    }
  }
  return count > 1 ? true : false;
}
stringIncludes('awesome', 'e');
stringIncludes('awesome', 'z');
