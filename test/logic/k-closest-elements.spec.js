import { kClosestElements } from '../../solutions/logic/k-closest-elements';

describe('k closest elements', () => {
    it('should return k closest elements', () => {
        expect(kClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
    });

    it('should return k closest elements when x is outside range', () => {
        expect(kClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
    });
});
