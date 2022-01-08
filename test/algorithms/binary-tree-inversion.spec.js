/**
 * binary-tree-inversion.spec.js
 *
 * Test harness for binary tree inversion
 */

/* Dependencies */
import invertTree from '../../solutions/algorithms/binary-tree-inversion';

/* Helpers */
function TreeNode(val) {
    var node = {};
    node.val = val;
    node.left = node.right = null;
    return node;
}

/* Test Cases */
describe('Algorithms: Binary Search', () => {

    it('should return the original root for a null root node', () => {
        const nullRoot = TreeNode(4);
        const expectedResult = nullRoot;
        expect(invertTree(nullRoot)).toEqual(expectedResult);
    });

    it('should invert a normal tree', () => {
        // Create sample nodes
        let root = TreeNode(0);
        let one = TreeNode(1);
        let two = TreeNode(2);
        let three = TreeNode(3);
        let four = TreeNode(4);

        // Put together input tree
        root.left = one;
        root.right = two;
        one.left = three;
        one.right = four;

        // Build the expected output
        let expectedResult = TreeNode(0);
        expectedResult.left = two;
        expectedResult.right = one;
        expectedResult.right.left = four;
        expectedResult.right.left = three;

        // Run the code and compare
        expect(invertTree(root)).toEqual(expectedResult);
    });

});
