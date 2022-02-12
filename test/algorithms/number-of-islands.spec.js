import { numberOfIslands } from '../../solutions/algorithms/number-of-islands';

describe('Number of Islands', () => {
    it('should handle detecting one island', () => {
        const grid = [
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(numberOfIslands(grid)).toEqual(1);
    });

    it('should handle detecting multiple islands', () => {
        const grid = [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1],
        ];

        expect(numberOfIslands(grid)).toEqual(3);
    });
});
