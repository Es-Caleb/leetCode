/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) {
        return '#';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');
    const transTree = (list) => {
        let rootVal = list.shift();
        if (rootVal == '#') {
            return null;
        }
        var node = new TreeNode(rootVal);
        node.left = transTree(list);
        node.right = transTree(list);
        return node;
    };
    return transTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 // 题目地址 https://leetcode-cn.com/problems/serialize-and-deserialize-bst/
 // 提交记录 https://leetcode-cn.com/submissions/detail/162434453/