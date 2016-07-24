/**
 * Binary Tree inversion
 */

export default function invertTree(root) {
  if (!root || (root.left === null && root.right === null)) {
    return root;
  }
  const left = root.left ? root.left : null;
  const right = root.right ? root.right : null;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
}
