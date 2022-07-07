/* 
Write a function called charAt which accepts a string and an index (number) 
and returns the character at that index.

The function should return an empty string if the number is greater than the 
length of the string.

Do not use the built in charAt method - the tests will fail if you do!

Examples:

charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
*/

// get char at string index ✅
// find string length --> is it less than index param? --> empty string ✅
// There is a built in charAt() method but can't use it. Will access the index of
// the string using square brackets []

function charAt(str, i) {
  return i > str.length ? '' : str[i];
}
charAt('awesome', 2);
charAt('awesome', 12);
