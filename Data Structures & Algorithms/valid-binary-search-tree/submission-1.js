/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.check(root,-Infinity, Infinity);
    }

    check(root, min, max) {
        if(!root) return true;
        if(root.val <= min || root.val >= max) return false;
        const leftSide = this.check(root.left, min, root.val);
        const rightSide = this.check(root.right, root.val, max);
        return leftSide && rightSide;
    }
}
