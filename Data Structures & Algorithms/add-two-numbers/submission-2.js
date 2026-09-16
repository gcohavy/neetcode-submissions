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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let head = dummy;
        let carry = 0;
        let sum = 0;

        while (l1 || l2) {
            sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            if(sum > 9) {
                carry = 1;
                sum = sum % 10;
            } else carry = 0;

            dummy.next = new ListNode(sum);
            dummy = dummy.next;

            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
        }

        if(carry) dummy.next = new ListNode(1);

        return head.next;

    }
}
