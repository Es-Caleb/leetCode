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
var findTilt = function(root) {
    let sum = 0;
    const traverse = (root) => {
        if (!root) {
            return 0;
        }
        let left = traverse(root.left);
        let right = traverse(root.right);
        sum += Math.abs(left - right);
        return left + right + root.val;
    }
    traverse(root);
    return sum;
};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-tilt/
// 提交记录 https://leetcode-cn.com/submissions/detail/162845524/