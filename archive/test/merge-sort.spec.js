/**
 * merge-sort.spec.js
 *
 * Test harness for merge sort algorithm
 */

/* Dependencies */
import mergeSort from '../solutions/merge-sort';

/* Test Cases */
describe('Algorithms: Merge Sort', () => {

    it('should return original array for lengths of 0 and 1', () => {
        const emptyArray = [];
        const oneItemArray = [1];
        expect(mergeSort(emptyArray)).toEqual(emptyArray);
        expect(mergeSort(oneItemArray)).toEqual(oneItemArray);
    });

    it('should sort a multi-item array', () => {
        const arr = [4, 1, 6, 4, 8, 9, 10, -1];
        const sortedArr = [-1, 1, 4, 4, 6, 8, 9, 10];
        expect(mergeSort(arr)).toEqual(sortedArr);
    });

});


