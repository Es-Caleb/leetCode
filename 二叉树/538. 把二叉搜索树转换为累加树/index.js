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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    const convertSum = (root) => {
        if(!root) {
            return;
        }
        convertSum(root.right);
        sum += root.val;
        root.val = sum;
        convertSum(root.left);
    }
    convertSum(root);
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/162489325/