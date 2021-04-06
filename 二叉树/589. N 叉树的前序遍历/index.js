/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    const traverse = (root) => {
        if (!root) return;
        res.push(root.val);
        root.children.forEach(child =>
            traverse(child)
        )
    }
    traverse(root);
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/161159712/