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
     * @return {boolean}
     */
    hasCycle(head) {
        if(head == null || head.next == null) return false;
        let s = head, f = head;
        while(true) {
            s = s.next;
            f = f.next?.next;
            if(f == null) return false;
            if(s === f) return true;
        }
    }
}
