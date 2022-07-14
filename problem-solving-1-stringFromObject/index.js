/* 
Write a function called stringFromObject that generates a string from an object's key/value pairs.

The format should be "key = value, key = value".

Each key/value pair should be separated by a comma and space except for the last pair.

Examples:

stringFromObject({ a: 1, b: '2' });
_// "a = 1, b = 2"_
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
_// "name = Elie, job = Instructor, isCatOwner = false"_
stringFromObject({});
_// ""_
*/

// loop through properties in an obj --> for...in loop
// template literal to build out the string
// push each the strings to an object
// .join(', ') --> creates a string from arr
function stringFromObject(obj) {
  const strArr = [];
  if (Object.keys(obj).length === 0) {
    return '';
  } else {
    for (let key in obj) {
      strArr.push(`${key} = ${obj[key]}`);
    }
    return strArr.join(', ');
  }
}
stringFromObject({});
stringFromObject({ a: 1, b: '2' });
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
