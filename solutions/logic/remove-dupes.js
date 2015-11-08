/**
 * Write a function that removes any duplicate characters from a string
 */

function removeDupes(s) {
    var sortedCharArray = s.split('').sort();
    var output = [];
    for (var i=1; i<sortedCharArray.length + 1; i++) {
        if (sortedCharArray[i] !== sortedCharArray[i-1]) {
            output.push(sortedCharArray[i-1]);
        }
    }
    return output.join('');
}
