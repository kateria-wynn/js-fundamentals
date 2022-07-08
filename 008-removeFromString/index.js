/* 
Write a function called removeFromString, which accepts a string, 
a starting index (number) and a number of characters to remove.

The function should return a new string with the characters removed.

Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '
*/

// need to place the chars in string in an array ['E', 'l', 'i', 'e'] ✅
// loop over each element and place in array --> push() ✅
// need to remove elements from array --> splice() ✅
// concatenate elements in newStr array and
// create a new string --> .join('') ✅

function removeFromString(str, startIndex, charsToRemove) {
  const newStr = [];
  for (let char of str) {
    newStr.push(char);
  }
  console.log(newStr.splice(startIndex, charsToRemove));
  console.log(newStr.join(''));
}
removeFromString('Elie', 2, 2);
removeFromString('Elie', 0, 1);
removeFromString('Rithm School', 0, 6);
removeFromString('Rithm School', 2, 4);
removeFromString('Rithm School', 6, 400);
