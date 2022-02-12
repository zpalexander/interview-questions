/**
 * Bubble sort
 */

// Complexity O(n^2)

export default function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaps = swaps + 1;
      }
    }
    if (swaps === 0) {
      isSorted = true;
    }
  }
  return arr;
}
