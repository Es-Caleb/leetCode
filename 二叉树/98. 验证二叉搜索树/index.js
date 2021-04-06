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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    const bstTrue = (root, below, above) => {
        if (!root) {
            return true;
        }
        if (root.val <= below || root.val >= above ) {
            // 右子树小于当前节点  左子树大于当前节点
            return false;
        }
        return bstTrue( root.left, below, root.val ) && bstTrue( root.right, root.val, above )
    }
    return bstTrue(root, -Infinity, Infinity);

};
// 题目地址 https://leetcode-cn.com/problems/validate-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/158683977/