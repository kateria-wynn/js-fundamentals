/* 
Write a function called prependToString, which accepts two strings. 
The function should return a new string with the second string prepended 
to the first string.

Examples:

prependToString('awesome', 'very') // 'veryawesome'
prependToString('world', 'hello ') // 'hello world'
prependToString('nothing', '') // 'nothing'
*/

// str2, str1 ✅
// empty str2, str1 ✅
// There is a string method concat() but will use the addition operator (+)
// because it has better performance

function prependToString(str1, str2) {
  if (str2 !== '' && str1 !== '') return str2 + str1;
  if (str2 === '') return str1;
}
prependToString('awesome', 'very');
prependToString('world', 'hello ');
prependToString('nothing', '');
