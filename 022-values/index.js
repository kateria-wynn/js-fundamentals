/* 
Write a function called values, which accepts an object 
and returns an array of all of the values in the object.

Do not use the built in Object.values() function!

Examples:

var obj = { a: 1, b: 2, c: 3 };
values(obj); _// [1,2,3]_

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); _// ["Matt", "Lane", true]_

var obj3 = {};
values(obj3); _// []
*/

function values(obj) {
  let result = [];
  for (let value in obj) {
    if (obj.hasOwnProperty(value)) {
      result.push(obj[value]);
    } else {
      console.log(result);
    }
  }
  console.log(result);
}

var obj = { a: 1, b: 2, c: 3 };
values(obj);

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2);

var obj3 = {};
values(obj3);
