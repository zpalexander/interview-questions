/**
 * TreeNode.js
 *
 * Generator function for a binary tree node
 */

export default function TreeNode(val) {
    const node = {};
    node.val = val;
    node.left = node.right = null;
    return node;
}
