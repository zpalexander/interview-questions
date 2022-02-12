/**
 * Write a function that finds all pairs of integers in an integer array that sum to n
 */

export function findSumPairs(data, n) {
  const found = {};
  const results = [];
  for (let i = 0; i < data.length; i++) {
    if (found[n - data[i]] === true) {
      results.push({
        a: data[i],
        b: n - data[i],
      });
    }
    found[data[i]] = true;
  }
  return results;
}
