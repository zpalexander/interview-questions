/**
 * Write a function that finds all pairs of integers in an integer array that sum to n
 */

function findSumPairs(data, n) {
    var found = {};
    var results = [];
    for (var i=0; i<data.length; i++) {
        if (found[n-data[i]] == true) {
            results.push({
                a: data[i],
                b: n - data[i]
            });
        }
        found[data[i]] = true;
    }
    return results;
}
