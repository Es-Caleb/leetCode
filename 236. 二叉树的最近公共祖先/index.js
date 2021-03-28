/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if( !root || root == p || root == q ) return root;
    // 递归左右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 如果左子树为空，则指向右子树
    if (left == null) return right;
    if (right == null) return left;
    return root;
    
};
// 题目地址 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/160859945/