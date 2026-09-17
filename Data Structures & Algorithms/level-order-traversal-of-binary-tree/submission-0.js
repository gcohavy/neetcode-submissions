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
     * @return {number[][]}
     */
    levelOrder(root) {
        let roots = [root];
        const ret = [];
        let cur;
        while(roots.length > 0) {
            cur = [];
            for(let root of roots) {
                if(root) cur.push(root.val);
            }
            if(cur.length > 0) ret.push(cur);
            roots = this.list(roots);
        }

        return ret;
    }

    list(roots) {
        const ret = [];
        for(let root of roots) {
            if(root) ret.push(root.left, root.right);
        }
        return ret;
    }
}
