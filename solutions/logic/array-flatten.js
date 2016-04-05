/**
 * Write a function that flattens a multi-dimensional array of unknown
 * depth and composition into a one-dimensional array.
 */


// Imperative solution
var flattenArrayImperative = function(input) {
    var output = [];
    for (var i=0; i<input.length; i++) {
        // If the index is a nested array, recurse into it
        if (input[i].constructor === Array) {
            var smallerArray = flattenArray(input[i]);
            for (var j=0; j<smallerArray.length; j++) {
                output.push(smallerArray[j]);
            }
        }
        else {
            output.push(input[i]);
        }
    }
    return output;
};

// Functional solution
var flattenArrayFunctional = function(arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};
