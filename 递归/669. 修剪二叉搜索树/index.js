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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if (!root) {
        return root;
    }
    if (root.val > high) return trimBST(root.left, low, high);  // 大于high，在左边
    if (root.val < low) return trimBST(root.right, low, high);  // 小于low， 在右边
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/trim-a-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/170350962/