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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const flattens = (root) => {
        if (!root) {
            return;
        }
        flatten(root.left);
        flatten(root.right);
        // 定义存储左节点和右节点
        const left = root.left;
        const right = root.right;
        // 把左都变成右
        root.left = null;
        // 右节点变成左
        root.right = left;

        let p = root;
        // 将原来的右节点接到现在的右节点后面
        while(p.right != null) {
            p = p.right;
        }
        p.right = right;
    }
    flattens(root);
    return root;
    
};
// 题目地址 https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
// 提交记录 https://leetcode-cn.com/submissions/detail/157136495/