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
    diameterOfBinaryTree(root) {
        let res = 0;
        function depth(root) {
            if(!root) return 0;
            const left = depth(root.left);
            const right = depth(root.right);
            res = Math.max(res, left + right);
            return Math.max(left, right) + 1;
        }
        depth(root);

        return res
    }

}
