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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    // 求出二叉树的最大深度
    const maxDepth = function(root) {
        if (!root) {
            return 0;
        }
        return Math.max( maxDepth(root.left), maxDepth(root.right)) + 1;
    }
    // 左右子树的最大深度 相差不超过1 true
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    
};
// 题目地址 https://leetcode-cn.com/problems/balanced-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/157874462/