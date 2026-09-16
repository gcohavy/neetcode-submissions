// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let cur = head;
        let map = new Map();
        map.set(null, null);

        while(cur){
            const copy = new Node(cur.val);
            map.set(cur, copy);
            cur = cur.next;
        }

        cur = head;

        while(cur) {
            const copy = map.get(cur);
            copy.next = map.get(cur.next);
            copy.random = map.get(cur.random);
            cur = cur.next;
        }

        return map.get(head);
    }
}
