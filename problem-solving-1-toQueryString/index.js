/*
A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark. Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. If the value is an array, add another pair to the string with each value

Examples:

toQueryString`({}) // ""`
toQueryString`({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"`
toQueryString`({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"`
*/

// if empty object then return empty string
// loop through each prop in obj --> for in loop
// put in template literal --> will have to check
// if the key is an array
// if it is loop through the array and complete the
// string
// push each part of the string into an array
// join() the array --> separator --> empty string
// return result
function toQueryString(obj) {
  const strArr1 = [];
  const strArr2 = [];
  let concatStrArr = null;
  if (Object.keys(obj).length === 0) {
    return '';
  } else {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        for (let el of obj[key]) {
          strArr1.push(`${key}=${el}`);
        }
      } else {
        strArr2.push(`${key}=${obj[key]}`);
      }
    }
  }
  concatStrArr = strArr1.concat(strArr2);
  return concatStrArr.join('&');
}
toQueryString({});
toQueryString({ bar: [2, 3], foo: 1 });
toQueryString({ name: 'Elie', nums: [1, 2, 3, 4] });
