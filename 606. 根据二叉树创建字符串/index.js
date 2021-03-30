/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) {
        return '';
    }
    if (t.left == null && t.right == null) {
        return t.val + '';
    }
    if (t.right == null) {
        return t.val + '(' + tree2str(t.left) + ')';
    }
    return t.val + '(' + tree2str(t.left) + ')(' + tree2str(t.right) + ')';
};
// 题目地址 https://leetcode-cn.com/problems/construct-string-from-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/161603542/