/**
 * Bubble sort
 */

// Complexity O(n^2)

export default function bubbleSort(arr) {
    var isSorted = false;
    while (!isSorted) {
        var swaps = 0;
        for (var i=0; i<arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swaps = swaps + 1;
            }
        }
        if (swaps === 0) {
            isSorted = true;
        }
    }
    return arr;
}
