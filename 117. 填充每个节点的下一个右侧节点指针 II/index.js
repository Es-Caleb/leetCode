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
    let queue = [root];
    while (queue.length) {
        const n = queue.length;
        let last = null;
        for (let i = 1; i <= n; ++i) {
            let node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            if (i !== 1) {
                last.next = node;
            }
            last = node;
        }
    }
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/160059146/