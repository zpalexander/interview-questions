/**
 * Merge sort
 */

// Complexity O(n log(n))

export default function mergeSort(unsortedArray) {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  const sortedArray = [];
  const middle = Math.floor(unsortedArray.length / 2);
  let lowerHalf = unsortedArray.slice(0, middle);
  let upperHalf = unsortedArray.slice(middle);
  lowerHalf = mergeSort(lowerHalf);
  upperHalf = mergeSort(upperHalf);
  while (lowerHalf.length > 0 && upperHalf.length > 0) {
    let x;
    if (lowerHalf[0] > upperHalf[0]) {
      x = upperHalf.shift();
    } else {
      x = lowerHalf.shift();
    }
    sortedArray.push(x);
  }
  while (lowerHalf.length > 0) {
    const x = lowerHalf.shift();
    sortedArray.push(x);
  }
  while (upperHalf.length > 0) {
    const x = upperHalf.shift();
    sortedArray.push(x);
  }
  return sortedArray;
}
