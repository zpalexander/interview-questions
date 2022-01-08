/**
 * pascals-triangle.spec.js
 *
 * Test harness for Pascal's Triangle problem
 */
/* Dependencies */
import pascalsTriangle from '../../solutions/logic/pascals-triangle';

/* Test Cases */
describe('Logic: Pascal\'s Triangle', () => {
  it('should return the first row of pascal\'s triangle', () => {
    expect(pascalsTriangle(1)).toEqual([1]);
  });

  it('should return the second row of pascal\'s triangle', () => {
    expect(pascalsTriangle(2)).toEqual([1, 1]);
  });

  it('should return the third row of pascal\'s triangle', () => {
    expect(pascalsTriangle(3)).toEqual([1, 2, 1]);
  });

  it('should return the seventh row of pascal\'s triangle', () => {
    expect(pascalsTriangle(7)).toEqual([1, 6, 15, 20, 15, 6, 1]);
  });
});
