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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];
    const traverse = (root) => {
        if (!root) return;
        res.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/157045555/