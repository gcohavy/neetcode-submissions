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
     * @return {void}
     */
    reorderList(head) {
        //split into first and second
        let slow = head, fast = head.next;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;

        //reverse second half
        let prev = null;
        slow.next = null;
        while(second) {
            let tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }
        second = prev;

        //merge both
        while(second) {
            let tmp1 = head.next, tmp2 = second.next;
            head.next = second;
            second.next = tmp1;
            head = tmp1;
            second = tmp2;
        }
    }
}
