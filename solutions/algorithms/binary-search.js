/**
 * Binary search
 */

// Complexity O(log(n))

export default function binarySearch(arr, n) {
    const middle = Math.floor(arr.length / 2);
    if (arr.length <= 1 && arr[middle] !== n) {
        return -1;
    } else if (arr[middle] === n) {
        return n;
    } else if (arr[middle] < n) {
        return binarySearch(arr.slice(middle, arr.length), n);
    }
    return binarySearch(arr.slice(0, middle), n);
}
