/**
 * Write a function that flattens a multi-dimensional array of unknown
 * depth and composition into a one-dimensional array.
 */


// Imperative solution
export function flattenArrayImperative(input) {
    const output = [];
    for (let i = 0; i < input.length; i++) {
    // If the index is a nested array, recurse into it
        if (input[i].constructor === Array) {
            const smallerArray = flattenArrayImperative(input[i]);
            for (let j = 0; j < smallerArray.length; j++) {
                output.push(smallerArray[j]);
            }
        } else {
            output.push(input[i]);
        }
    }
    return output;
}

// Functional solution
export function flattenArrayFunctional(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArrayFunctional(toFlatten) : toFlatten), []);
}
