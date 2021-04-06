/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    const traverse = (root) => {
        if (!root) return;
        root.children.forEach(child =>
            traverse(child)
        )
        res.push(root.val);
    }
    traverse(root);
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/161161228/