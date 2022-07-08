/* 
Write a function called stringIndexOf, which accepts two strings: 
the first is a word and the second is a single character.

The function should return the first index in the word at 
which the character exists or -1 if the character is not found.

Do not use the built in String.indexOf() function!

Examples:

stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1
*/

// iterate over each char in the word ✅
// does singleChar match the char? --> grab this index and save in an array
// --> indexes ✅
// access the array at indexes[0] to get the first index ✅
// doesn't have a number? return -1 ✅
// There is a string method indexOf() but can't use. I need to have access to the
// indexes of the strings chars so will use an old school for loop.

function stringIndexOf(word, singleChar) {
  const indexes = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === singleChar) {
      indexes.push(i);
    }
  }
  console.log(Number.isInteger(indexes[0]) ? indexes[0] : -1);
}
stringIndexOf('awesome', 'e');
stringIndexOf('awesome', 'z');
