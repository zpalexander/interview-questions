import { wordSearch } from '../../solutions/algorithms/word-search';

describe('Word Search', () => {
    it('should find positive match #1', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'ABCCED';
        expect(wordSearch(board, word)).toEqual(true);
    });

    it('should find positive match #2', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'SEE';
        expect(wordSearch(board, word)).toEqual(true);
    });

    it('should fail to find negative match', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'ABCB';
        expect(wordSearch(board, word)).toEqual(false);
    });
});
