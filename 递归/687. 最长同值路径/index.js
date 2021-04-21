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
var longestUnivaluePath = function(root) {
    let res = 0;
    const dfs = (node, prve) => {
        if (!node) return 0
        const left = dfs(node.left, node.val);
        const right = dfs(node.right, node.val);
        res = Math.max(res, left + right);
        return node.val === prve ? Math.max(left, right) + 1 : 0
    }
    dfs(root, null);
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/longest-univalue-path/
// 提交记录 https://leetcode-cn.com/submissions/detail/170359625/