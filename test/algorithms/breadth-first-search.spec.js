/**
 * breadth-first-search.spec.js
 *
 * Test harness for breadth first search
 */
/* Dependencies  */
import bfs from '../../solutions/algorithms/breadth-first-search.js';

/* Test Cases */
describe('Algorithms: Breadth First Search', () => {
    const sampleGraph = [
        [1, 3, 8],
        [0, 7],
        [3, 5],
        [0, 2, 4],
        [3, 8],
        [2, 6],
        [5],
        [1],
        [0, 4],
    ];

    it('should visit nodes in order', () => {
        const expectedResult = [0, 1, 3, 8, 7, 2, 4, 5, 6];
        expect(bfs(sampleGraph, 0)).toEqual(expectedResult);
    });
});
