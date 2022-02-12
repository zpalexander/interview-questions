import { findLongestConsecutiveSequence } from '../../solutions/algorithms/longest-consecutive-sequence';

describe('Longest Consecutive Sequence', () => {
    it('should handle test case #1', () => {
        expect(findLongestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toEqual(4);
    });

    it('should handle test case #2', () => {
        expect(findLongestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
    });
});
