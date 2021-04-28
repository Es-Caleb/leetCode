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
var minDiffInBST = function(root) {
    let ans = Number.MAX_SAFE_INTEGER;
    let abs = -1;
    const dfs = (root) => {
        if (!root) {
            return;
        }
        dfs(root.left);
        if (abs == -1) {
            abs = root.val;
        } else {
            ans = Math.min(ans, root.val - abs);
            abs = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
// 提交记录 https://leetcode-cn.com/submissions/detail/172760343/