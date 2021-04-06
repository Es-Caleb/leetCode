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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 如果为空 返回false
    if (!root) {
        return false;
    }
    // 如果两边都为空 判断根节点是否等于targetSum
    if (root.left == null && root.right == null) {
        return root.val == targetSum
    }
    // 走 左、右节点，目标总数减去当前值，看是否走一条是能减完的
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    
};
// 题目地址 https://leetcode-cn.com/problems/path-sum/
// 提交记录 https://leetcode-cn.com/submissions/detail/157871566/