/**
 * Write a function that prints row N of Pascal's triangle.
 */

export default function pascalsTriangle(rowNumber) {
    let lastRow = [];
    let thisRow = [1];
    for (let currentRowIndex = 1; currentRowIndex <= rowNumber; currentRowIndex++) {
        lastRow = thisRow;
        thisRow = [];
        for (let currentColumnIndex = 0; currentColumnIndex < currentRowIndex - 1; currentColumnIndex++) {
            if (currentColumnIndex === 0) {
                thisRow.push(lastRow[currentColumnIndex]);
            } else {
                const newColumnValue = lastRow[currentColumnIndex - 1] + lastRow[currentColumnIndex];
                thisRow.push(newColumnValue);
            }
        }
        thisRow.push(1);
    }
    return thisRow;
}
