/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let tail = dummy;

        while(true) {
            const kth = this.getKth(tail, k);
            if(!kth) break;

            const next = kth.next;
            let prev = next;
            let curr = tail.next;

            while(curr !== next) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            const tmp = tail.next;
            tail.next = kth;
            tail = tmp;
        }        

        return dummy.next;
    }

    getKth(node, k) {
        while(node && k > 0) {
            node = node.next;
            k--;
        }
        return node;
    }
}
