/* Implement a function called multiples that accepts two numbers: x and n.

The function should return the first n multiples of the number x.

Assume that x is a positive integer.

Examples:

multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10]
*/

// x is num
// n multiples
function multiples(x, n) {
  const result = [];
  let currNum = x;

  while (result.length < n) {
    result.push(currNum);
    currNum = currNum + x;
  }
  return result;
}

multiples(3, 4);
multiples(2, 5);
