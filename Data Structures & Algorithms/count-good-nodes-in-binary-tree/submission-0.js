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
     * @return {number}
     */
    goodNodes(root) {
        return this.count(root, root.val);
    }

    count(root, max) {
        if(!root) return 0;
        let res = root.val >= max ? 1 : 0;
        max = Math.max(root.val, max);
        res += this.count(root.left, max);
        res += this.count(root.right, max);
        return res;
    }
}
