import { twoSum } from '../../solutions/logic/two-sum';

describe('twoSum', () => {
    it('should handle the first example', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('should handle the second example', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should handle the 3rd example', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});
