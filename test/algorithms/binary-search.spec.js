/**
 * binary-search.spec.js
 *
 * Test harness for binary search algorithm
 */

/* Dependencies */
import expect from 'expect';
import binarySearch from '../../solutions/algorithms/binary-search';

/* Test Cases */
describe('Algorithms: Binary Search', () => {

    it('should always return false for an empty array', () => {
        const emptyArray = [];
        const n = 5;
        const expectedResult = -1;
        expect(binarySearch(emptyArray, n)).toBe(expectedResult);
    });

    it('should find the element if it exists and return -1 if it doesn\'t', () => {
        const twoItemArray = [1, 2];
        const n1 = 1;
        const n3 = 3;
        expect(binarySearch(twoItemArray, n1)).toBe(n1);
        expect(binarySearch(twoItemArray, n3)).toBe(-1);
    });

});


