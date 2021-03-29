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
var countNodes = function(root) {
    if(!root) {
        return 0;
    }
    const left = countNodes(root.left);
    const right = countNodes(root.right);
    return left + right + 1;
};
// 题目地址 https://leetcode-cn.com/problems/count-complete-tree-nodes/
// 提交记录 https://leetcode-cn.com/submissions/detail/161146821/