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
var sumNumbers = function(root) {
    const sums = (root, sum) => {
        if (!root) {
            return 0;
        }
        sum = sum * 10 + root.val;
        if ( root.left == null && root.right == null ) {
        // 遍历到叶子节点
            return sum;
        } else {
            return sums(root.left, sum) + sums(root.right, sum)
        }
    }
    return sums(root, 0);
};
// 题目地址 https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
// 提交记录 https://leetcode-cn.com/submissions/detail/159234129/