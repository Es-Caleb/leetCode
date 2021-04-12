/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = new ListNode(0);
    let head = sum;
    // 在进位或者两个链表之中有一个存在的前提下执行
    while(carry || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let r = val1 + val2 + carry;
        // 大于10 进1位
        carry = r >= 10 ? 1 : 0;
        // sum下一个节点
        sum.next = new ListNode(r % 10);
        // sum指向下一个节点
        sum = sum.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return head.next;
};
// 题目地址 https://leetcode-cn.com/problems/add-two-numbers/
// 提交记录 https://leetcode-cn.com/submissions/detail/166894101/