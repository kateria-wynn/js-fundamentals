/* 
Write a function called appendToString, which accepts two strings. 
The function should return a new string which consists of the second string 
appended to the first string.

Examples:

appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
*/

// str1, space, str2 ✅
// str1, str2 ✅
// empty str1, str2 ✅
// str1, empty str2 ✅
// There is a string method concat() but will use the addition operator (+)
// because it has better performance

function appendToString(str1, str2) {
  // if both are not empty strings
  if (str1 !== '' && str2 !== '') return str1 + str2;
  // if str1 or str2 is empty
  if (str1 === '') return str2;
  if (str2 === '') return str1;
}
appendToString('Hello', ' World!');
appendToString('Foo', 'bar');
appendToString('bar', 'Foo');
appendToString('', 'test');
appendToString('other test', '');
