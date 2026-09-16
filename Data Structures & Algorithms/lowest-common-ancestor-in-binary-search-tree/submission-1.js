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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(node) {
            if (!node) return null;

            const left = dfs(node.left);
            const right = dfs(node.right);

            // If this node is either p or q, bubble it up
            if (node === p || node === q) return node;

            // If both sides found something, this node is the LCA
            if (left && right) return node;

            // Otherwise bubble up whichever side found a target (or null)
            return left || right;
        }

        return dfs(root);
    }

}
