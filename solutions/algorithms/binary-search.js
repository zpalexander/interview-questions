/**
 * Binary search
 */

// Complexity O(log(n))

function binarySearch(arr, n) {
    var middle = Math.floor(arr.length / 2);
    console.log(arr);
    if (arr.length === 1 && arr[middle] != n) {
        return -1;
    }
    else if (arr[middle] === n) {
        return n;
    }
    else if (arr[middle] < n) {
        return binarySearch(arr.slice(middle, arr.length), n);
    }
    else {
        return binarySearch(arr.slice(0, middle), n);
    }
}
