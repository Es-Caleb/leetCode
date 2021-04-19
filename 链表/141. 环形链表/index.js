/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true
        }
    }
    return false;
};
// 题目地址 https://leetcode-cn.com/problems/linked-list-cycle/
// 提交记录 https://leetcode-cn.com/submissions/detail/169546231/