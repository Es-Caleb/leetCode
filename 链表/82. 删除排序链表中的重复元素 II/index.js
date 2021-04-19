/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let falseNode = new ListNode(-1, head);
    let pre = falseNode;
    let cur = pre.next;
    while(cur != null) {
        let curNum = 0;
        let deleNode = cur;
        while(deleNode != null && deleNode.val == cur.val) {
            curNum++;
            deleNode = deleNode.next;
        }
        if (curNum > 1) {
            pre.next = deleNode;
        } else {
            pre = cur;
        }
        cur = deleNode;
    }
    return falseNode.next;
};
// 题目地址 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/169503070/