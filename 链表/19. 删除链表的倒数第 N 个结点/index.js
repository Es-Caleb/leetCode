/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) {
        return null;
    }
    let falseNode = new ListNode(-1, head);
    let left = falseNode;
    let right = falseNode;
    // right 先走n步 
    for (let i = 0; i < n; i++) {
        right = right.next;
    }
    while(right.next) {
        right = right.next;
        left = left.next;
    }
    // right走到底 left下一个等于下下个
    left.next = left.next.next;
    return falseNode.next;
};
// 题目地址 https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 提交记录 https://leetcode-cn.com/submissions/detail/166921807/