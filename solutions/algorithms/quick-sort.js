/**
 * Quick sort
 */

// Complexity O(n log(n))

export default function quickSort(unsortedArray) {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }
    var less = [], equal = [], greater = [];
    var pivot = unsortedArray[0];
    for (var x=0; x<unsortedArray.length; x++) {
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
