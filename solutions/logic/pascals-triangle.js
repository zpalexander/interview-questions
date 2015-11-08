/**
 * Write a function that prints row N of Pascal's triangle.
 */

function pascalsTriangle(rowNumber) {
    var lastRow = [];
    var thisRow = [1];
    for (var currentRowIndex=1; currentRowIndex<=rowNumber; currentRowIndex++) {
        lastRow = thisRow;
        thisRow = [];
        for (var currentColumnIndex=0; currentColumnIndex<currentRowIndex - 1; currentColumnIndex++) {
            if (currentColumnIndex == 0) {
                thisRow.push(lastRow[currentColumnIndex]);
            }
            else {
                var newColumnValue = lastRow[currentColumnIndex-1] + lastRow[currentColumnIndex];
                thisRow.push(newColumnValue);
            }
        }
        thisRow.push(1);
    }
    return thisRow;
}
