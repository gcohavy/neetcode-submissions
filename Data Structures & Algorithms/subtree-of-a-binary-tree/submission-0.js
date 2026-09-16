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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false;
        if(this.isEqual(root, subRoot)) return true;
        const lEqual = this.isSubtree(root.left, subRoot);
        const rEqual = this.isSubtree(root.right, subRoot);

        return lEqual || rEqual;
    }

    isEqual(p, q) {
        if(!p && !q) return true;
        if(p?.val !== q?.val) return false;

        const lEqual = this.isEqual(p.left, q.left);
        const rEqual = this.isEqual(p.right, q.right);

        return lEqual && rEqual;
    }
}
