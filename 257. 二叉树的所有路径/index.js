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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];
    const allTree = (root, pathNum) => {
        if (!root) {
            return;
        }
        if ( root.left == null && root.right == null ) {
        // 遍历到叶子节点 添加最后一个数，并加入res数组
            pathNum += root.val;
            res.push(pathNum);
            return;
        }
        // 加入当前值并添加 ->
        pathNum += root.val + '->';
        allTree(root.left, pathNum);
        allTree(root.right, pathNum);
    }
    allTree(root, '');
    return res;

};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-paths/
// 提交记录 https://leetcode-cn.com/submissions/detail/158170586/