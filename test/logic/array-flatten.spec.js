/**
 * array-flatten.spec.js
 *
 * Test harness for array flatten functions
 */
/* Dependencies */
import { flattenArrayImperative, flattenArrayFunctional } from '../../solutions/logic/array-flatten';

/* Test Cases */
describe('Logic: Array Flatten', () => {
  const mdArray = [1, 2, [3, 4, [5, 6, [7]], 8], [9]];
  const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('should flatten an array in an imperative style', () => {
    expect(flattenArrayImperative(mdArray)).toEqual(flatArray);
  });

  it('should flatten an array in a functional style', () => {
    expect(flattenArrayFunctional(mdArray)).toEqual(flatArray);
  });
});

