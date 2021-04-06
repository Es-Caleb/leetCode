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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return root;
    }
    if (root.val > key) {
        // 大于值 在左子树
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        // 小于值，在右子树
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left && !root.right) {
            // 都为空 删除
            root = null;
        } else if (!root.left && root.right) {
            // 左为空 等于右
            root = root.right;
        } else if (root.left && !root.right) {
            // 右为空 =左
            root = root.left;
        } else if (root.left && root.right) {
            // 比当前节点小的最大节点，将值进行替换
            root.val = findMin(root.right);
            // 删除该最大节点
            root.right = deleteNode(root.right, root.val);
        }
    }
    return root;
};
var findMin = function(root) {
    while(root.left !== null) {
        root = root.left;
    }
    return root.val;
}
// 题目地址 https://leetcode-cn.com/problems/delete-node-in-a-bst/
// 提交记录 https://leetcode-cn.com/submissions/detail/162461295/