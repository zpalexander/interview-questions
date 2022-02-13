/**
 * Quick sort
 */

// Complexity O(n log(n))

export default function quickSort(unsortedArray) {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }
    const less = [];
    const equal = [];
    const greater = [];
    const pivot = unsortedArray[0];
    for (let x = 0; x < unsortedArray.length; x++) {
        if (unsortedArray[x] < pivot) {
            less.push(unsortedArray[x]);
        }
        if (unsortedArray[x] === pivot) {
            equal.push(unsortedArray[x]);
        }
        if (unsortedArray[x] > pivot) {
            greater.push(unsortedArray[x]);
        }
    }
    return quickSort(less).concat(equal.concat(quickSort(greater)));
}
