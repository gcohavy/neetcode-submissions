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
        let res = root;
        const leftContains = this.ancestor(root.left, p, q);
        const rightContains = this.ancestor(root.right, p, q);

        if(leftContains)  res = this.lowestCommonAncestor(root.left, p, q);
        if(rightContains) res = this.lowestCommonAncestor(root.right, p, q);

        return res;
    }

    contains(root, v) {
        if(!root) return false;
        if(root.val === v.val) return true;
        if(this.contains(root.left, v)) return true;
        if(this.contains(root.right, v)) return true;
        return false;
    }

    ancestor(root, p, q) {
        return this.contains(root, p) && this.contains(root, q);
    }
}
