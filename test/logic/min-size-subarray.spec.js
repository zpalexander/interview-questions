import { getMinSizeSubarray } from '../../solutions/logic/min-size-subarray.js';

describe('min Size subarray', () => {
    it('should get 2 from (7, [2,3,1,2,4,3])', () => {
        expect(getMinSizeSubarray(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
    });
});
