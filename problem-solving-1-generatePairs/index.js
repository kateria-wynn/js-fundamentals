/* 
Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

Examples:

generatePairs(3) // `[ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]`
generatePairs(2) // `[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]`
generatePairs(1) // `[ [0, 0], [0, 1], [1,1]]`
generatePairs(0) // `[ [0, 0]]`
*/

function generatePairs(integer) {
  const result = [];
  let countA = 0;
  let countB = 0;

  while (countA == countB || countA < countB) {
    result.push([countA, countB]);
    if (countA === integer && countB === integer) {
      result.push([countA, countB]);
      break;
    } else {
      countB++;
    }
    if (countB > integer) {
      countA++;
      countB = countA;
    }
  }
  if (result.length === 2) {
    result.splice(1, 1);
  }
  console.log(result);
}

generatePairs(0);
generatePairs(1);
generatePairs(2);
generatePairs(3);
