/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
     if (!root) {
        return root;
    }
    const connectTwoNode = (node1, node2) => {
        if (node1 == null || node2 == null) {
            return;
        }
        node1.next = node2;
        connectTwoNode(node1.left, node1.right);
        connectTwoNode(node1.right, node2.left);
        connectTwoNode(node2.left, node2.right);
    }
    connectTwoNode(root.left, root.right);
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// 提交记录 https://leetcode-cn.com/submissions/detail/157127758/