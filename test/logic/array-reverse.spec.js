/**
 * array-reverse.spec.js
 *
 * Test harness for binary search algorithm
 */

/* Dependencies */
import expect from 'expect';
import { reverseArray, reverseArrayBuffer, reverseArrayInplace } from '../../solutions/logic/array-reverse';

/* Test Cases */
describe('Logic: Array Reverse', () => {
  it('should reverse an array using the JS API', () => {
    const testArray = [1, 2, 3];
    const reverseTestArray = [3, 2, 1];
    expect(reverseArray(testArray)).toEqual(reverseTestArray);
  });

  it('should reverse an array iteratively', () => {
    const testArray = [1, 2, 3];
    const reverseTestArray = [3, 2, 1];
    expect(reverseArrayBuffer(testArray)).toEqual(reverseTestArray);
  });

  it('should reverse an array in place without a buffer', () => {
    const testArray = [1, 2, 3];
    const reverseTestArray = [3, 2, 1];
    expect(reverseArrayInplace(testArray)).toEqual(reverseTestArray);
  });
});
