import { combinationSum } from '../../solutions/algorithms/combination-sum';

/* Test Cases */
describe('Logic: Combination Sum', () => {
    it('should handle a basic solution', () => {
        expect(combinationSum([2, 3, 5], 8)).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
    });
});
