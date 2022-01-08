/**
 * depth-first-search.spec.js
 *
 * Test harness for depth first search
 */
/* Dependencies  */
import dfs from '../../solutions/algorithms/depth-first-search.js';

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
    const expectedResult = [0, 1, 7, 3, 2, 5, 6, 4, 8];
    expect(dfs(sampleGraph, 0)).toEqual(expectedResult);
  });
});
