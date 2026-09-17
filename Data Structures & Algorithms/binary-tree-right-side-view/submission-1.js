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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const res = [];
        let cur = [root];
        while(cur.length > 0) {
            res.push(cur[cur.length - 1].val);
            cur = this.level(cur);
        }

        return res;
    }

    level(roots) {
        const ret = [];
        for(let root of roots) {
            if(!root) continue;
            if(root.left) ret.push(root.left)
            if(root.right) ret.push(root.right);
        }

        return ret;
    }
}
