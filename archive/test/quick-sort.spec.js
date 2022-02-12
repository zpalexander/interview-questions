/**
 * quick-sort.spec.js
 *
 * Test harness for merge sort algorithm
 */

/* Dependencies */
import quickSort from '../../solutions/algorithms/quick-sort';

/* Test Cases */
describe('Algorithms: Quick Sort', () => {

    it('should return original array for lengths of 0 and 1', () => {
        const emptyArray = [];
        const oneItemArray = [1];
        expect(quickSort(emptyArray)).toEqual(emptyArray);
        expect(quickSort(oneItemArray)).toEqual(oneItemArray);
    });

    it('should sort a multi-item array', () => {
        const arr = [4, 1, 6, 4, 8, 9, 10, -1];
        const sortedArr = [-1, 1, 4, 4, 6, 8, 9, 10];
        expect(quickSort(arr)).toEqual(sortedArr);
    });

});
