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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    const a = [];
    const nodeTree = [];
    nodeTree.push(root);
    let orderLeft = true;

    while(nodeTree.length) {
        let list = [];
        const size = nodeTree.length;
        for(let i = 0; i < size; i++) {
            const node = nodeTree.shift();
            if (orderLeft) {
                list.push(node.val);
            } else {
                list.unshift(node.val);
            }
            if (node.left != null) nodeTree.push(node.left);
            if (node.right != null) nodeTree.push(node.right);
        }
        a.push(list);
        orderLeft = !orderLeft;
    }
    return a;
};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/160038274/