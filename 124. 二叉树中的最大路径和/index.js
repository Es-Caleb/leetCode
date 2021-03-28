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
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const dfs = (root) => {
        if (!root) {
            return 0;
        }
        // 左子树提供的最大路径和
        const left = dfs(root.left);
        // 右子树提供的最大路径和
        const right = dfs(root.right);
        // 树内部最大的和
        maxSum = Math.max(maxSum, left + root.val + right);
        // 子树对外提供的最大和
        const outMaxNum = root.val + Math.max(left, right);
        return outMaxNum < 0 ? 0 : outMaxNum;
    }
    dfs(root);
    return maxSum;
};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
// 提交记录 https://leetcode-cn.com/submissions/detail/160531633/