
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) return null;
    let slow = head;
    let fast = head;
    let preSlow;
    while(fast && fast.next) {
        // 保存当前slow
        preSlow = slow;
        // slow 走一步，fast走两步
        slow = slow.next;
        fast = fast.next.next;
    }
    const root = new TreeNode(slow.val);
    if (preSlow != null) {
        // 切断preSlow和中心slow，构建左子树
        preSlow.next = null;
        root.left = sortedListToBST(head);
    }
    root.right = sortedListToBST(slow.next);
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/178218915/