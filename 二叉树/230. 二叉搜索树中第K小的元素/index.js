/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = [];
    const traverse = (root) => {
        if (!root) return;
        traverse(root.left);
        res.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return res[k-1];
};
// 题目地址 https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
// 提交记录 https://leetcode-cn.com/submissions/detail/157508642/