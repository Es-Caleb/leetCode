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
var invertTree = function(root) {
    const filp = (root) => {
        if (!root) return;
        let ret = root.left;
        root.left = root.right;
        root.right = ret;
        filp(root.left);
        filp(root.right);
    }
    filp(root);
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/invert-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/157121182/