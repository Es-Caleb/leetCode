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
var findBottomLeftValue = function(root) {
    let ans = [];
    const pre = (root, f) => {
        if (!root) return;
        ans.push([f, root.val]);
        pre(root.right, f + 1);
        pre(root.left, f + 1);
    }
    pre(root, 1);
    // 根据深度排序
    ans.sort((a, b) => {
        return a[0] - b[0];
    })
    return ans[ans.length - 1][1];
};
// 题目地址 https://leetcode-cn.com/problems/find-bottom-left-tree-value/
// 提交记录 https://leetcode-cn.com/submissions/detail/178840139/