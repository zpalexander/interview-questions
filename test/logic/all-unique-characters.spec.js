/**
 * string-manipulation.spec.js
 *
 * Test harness for string manipulation functions
 */

/* Dependencies */
import { hasAllUniques } from '../../solutions/javascript/all-unique-characters';

/* Test Cases */
describe('hasAllUniques', () => {
    it('should default handle string lengths of 0 and 1', () => {
        const emptyStr = '';
        const oneCharStr = 'a';
        expect(hasAllUniques(emptyStr)).toBe(true);
        expect(hasAllUniques(oneCharStr)).toBe(true);
    });

    it('should be able to tell if a string has all unique characters', () => {
        const uniqueStr = 'abcdefg';
        const dupeStr = 'abcdefga';
        expect(hasAllUniques(uniqueStr)).toBe(true);
        expect(hasAllUniques(dupeStr)).toBe(false);
    });
});
