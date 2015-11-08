/**
 * Merge sort
 */

// Complexity O(n log(n))

function mergeSort(unsortedArray) {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }
    var sortedArray = [];
    var middle = Math.floor(unsortedArray.length / 2);
    var lowerHalf = unsortedArray.slice(0, middle);
    var upperHalf = unsortedArray.slice(middle);
    lowerHalf = mergeSort(lowerHalf);
    upperHalf = mergeSort(upperHalf);
    while (lowerHalf.length > 0 && upperHalf.length > 0) {
        var x;
        if (lowerHalf[0] > upperHalf[0]) {
            x = upperHalf.shift();
        }
        else {
            x = lowerHalf.shift();
        }
        sortedArray.push(x);
    }
    while (lowerHalf.length > 0) {
        var x = lowerHalf.shift();
        sortedArray.push(x);
    }
    while (upperHalf.length > 0) {
        var x = upperHalf.shift();
        sortedArray.push(x);
    }
    return sortedArray;
}
