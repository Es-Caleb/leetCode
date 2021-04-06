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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return [];
    }
    const res = [];
    const path = [];
    const hasPathSum = (root, targetSum) => {
        if (!root) {
            return [];
        }
        if (root.left == null && root.right == null && root.val == targetSum ) {
            path.push(root.val);
            res.push(path.slice());
            path.pop();
        }
        path.push(root.val);
        hasPathSum(root.left, targetSum - root.val);
        hasPathSum(root.right, targetSum - root.val);
        path.pop();
    }
    hasPathSum(root, targetSum);
    return res;
 
};
// 题目地址 https://leetcode-cn.com/problems/path-sum-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/157915099/