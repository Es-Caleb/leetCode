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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    // 如果左子树为null 只计算右子树的
    if (root.left == null) {
        return Math.min(minDepth(root.right)) + 1;
    }
    // 如果右子树为null 只计算左子树的
    if (root.right == null) {
        return Math.min(minDepth(root.left)) + 1;
    }
    // 当两边都不为null 取最小的
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 题目地址 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/157498879/