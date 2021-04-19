/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let a = b = head;
    const reverse = (a, b) => {
        let pre = null, cur = a, nxt = a;
        while (cur != b) {
            nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }
        // 返回反转后的头结点
        return pre;
    }
    for (let i = 0; i < k; i++) {
        if (b == null) return head;
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};
// 题目地址 https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
// 提交记录 https://leetcode-cn.com/submissions/detail/169509235/