/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let successor = null;
    const reverse = (head, n) => {
        if (n === 1) {
            successor = head.next;
            return head;
        }
        let last = reverse(head.next, n - 1);
        head.next.next = head;
        head.next = successor;
        return last;
    }
    if (left === 1) {
        return reverse(head, right);
    }
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
};
// 题目地址 https://leetcode-cn.com/problems/reverse-linked-list-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/166873251/