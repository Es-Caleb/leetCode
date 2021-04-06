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
    // 如果根节点和两数相减是正数或负数,那两个值都在同一个子树
    while ((root.val - p.val) * (root.val - q.val) > 0) {
        root = p.val < root.val ? root.left : root.right;
    }
    //如果相乘的结果是负数，说明p和q位于根节点的两侧，如果等于0，说明至少有一个就是根节点
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/160828397/