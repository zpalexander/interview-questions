/**
 * Write a function to reverse an array.
 */

export function reverseArray(arr) {
    return arr.reverse();
};

/**
 * Now do it without using any array API methods.
 */

export function reverseArrayBuffer(arr) {
    var output = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output;
};

/**
 * Now do it without a buffer
 */

 export function reverseArrayInplace(arr) {
    var temp;
    var arrayLength = arr.length;
    for (var i = 0; i < Math.floor(arrayLength/2); i++) {
        temp = arr[arrayLength - i - 1];
        arr[arrayLength - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
 };
