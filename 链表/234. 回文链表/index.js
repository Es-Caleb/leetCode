
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let left = head;
    const traverse = (right) => {
        if (right === null) return true;
        // 后序遍历
        let res = traverse(right.next);
        res = res && (right.val === left.val);
        left = left.next;
        return res;
    }
    return traverse(head);
};
// 题目地址 https://leetcode-cn.com/problems/palindrome-linked-list/
// 提交记录 https://leetcode-cn.com/submissions/detail/166904680/