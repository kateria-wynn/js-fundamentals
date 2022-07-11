/* 
Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Do not use the built in Object.entries() function!

Examples:

var obj = { a: 1, b: 2, c: 3 };
entries(obj); 
_// [["a",1], ["b",2], ["c",3]]_

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2); 
_// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]_

var obj3 = {};
entries(obj3); _// []
*/
