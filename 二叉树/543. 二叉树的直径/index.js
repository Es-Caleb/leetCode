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
var diameterOfBinaryTree = function(root) {
    let ans = 1;
    const depth = (root) => {
        if (!root) {
            return 0;
        }
        const left = depth(root.left);
        const right = depth(root.right);
        // 左子树深度(节点个数) + 右子树深度（节点个数） + 1个根节点 该节点为起点的路径经过节点数的最大值
        ans = Math.max(ans, left + right + 1);
        // 返回该节点为根的子树的深度
        return Math.max(left, right) + 1;
    }
    depth(root);
    return ans - 1;
};
// 题目地址 https://leetcode-cn.com/problems/diameter-of-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/162100900/