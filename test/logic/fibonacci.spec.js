/**
 * fibonacci.spec.js
 *
 * Test harness for fibonacci functions
 */
/* Dependencies */
import { fibonacciIterative, fibonacciRecursive } from '../../solutions/logic/fibonacci';

/* Test Cases */
describe('Logic: Fibonacci', () => {
  const input1 = 0;
  const expectedRes1 = 0;
  const input2 = 4;
  const expectedRes2 = 3;
  const input3 = 10;
  const expectedRes3 = 55;

  it('should handle calculating fibonacci iteratively', () => {
    // Case 1
    expect(fibonacciIterative(input1)).toEqual(expectedRes1);
    // Case 2
    expect(fibonacciIterative(input2)).toEqual(expectedRes2);
    // Case 3
    expect(fibonacciIterative(input3)).toEqual(expectedRes3);
  });

  it('should handle calculating fibonacci recursively', () => {
    // Case 1
    expect(fibonacciRecursive(input1)).toEqual(expectedRes1);
    // Case 2
    expect(fibonacciRecursive(input2)).toEqual(expectedRes2);
    // Case 3
    expect(fibonacciRecursive(input3)).toEqual(expectedRes3);
  });
});
