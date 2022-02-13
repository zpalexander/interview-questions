/**
 * frankenzombie.spec.js
 *
 * Test harness for frankenzombie function
 */
import { totalTime } from '../../solutions/logic/frankenzombie';

/* Test Cases */
describe('Logic: Frankenzombie', () => {
    it('should handle a simple overlapping list', () => {
        const sampleInput = [[1, 3], [2, 6]];
        const expectedResult = 5;
        const actualResult = totalTime(sampleInput);
        expect(actualResult).toEqual(expectedResult);
    });

    it('should handle a list where cards do not overlap', () => {
        const sampleInput = [[1, 3], [5, 6], [20, 24]];
        const expectedResult = 7;
        const actualResult = totalTime(sampleInput);
        expect(actualResult).toEqual(expectedResult);
    });

    it('should handle a more complicated list', () => {
        const sampleInput = [[10, 14], [4, 18], [19, 20], [19, 20], [13, 20]];
        const expectedResult = 16;
        const actualResult = totalTime(sampleInput);
        expect(actualResult).toEqual(expectedResult);
    });
});

