/**
 * spacify.spec.js
 *
 * Test harness for spacify function
 */

/* Dependencies */
import spacify from '../../solutions/javascript/spacify';

/* Test Cases */
describe('JavaScript: Spacify', () => {

    it('should return original string for lengths 0 and 1', () => {
        const emptyStr = '';
        const oneLetterStr = 'a';
        expect(spacify(emptyStr)).toEqual(emptyStr);
        expect(spacify(oneLetterStr)).toEqual(oneLetterStr);
    });

    it('should add spaces between the characters of a string', () => {
        const exampleStr = 'abcdef';
        const expectedResult = 'a b c d e f';
        expect(spacify(exampleStr)).toEqual(expectedResult);
    });

    it('should know how to handle spaces', () => {
        const exampleStr = 'abc def';
        const expectedResult = 'a b c   d e f';
        expect(spacify(exampleStr)).toEqual(expectedResult);
    });

});
