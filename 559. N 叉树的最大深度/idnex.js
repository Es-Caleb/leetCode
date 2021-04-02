/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    // 没有子节点 返回1
    if (root.children.length === 0) {
        return 1;
    }
    let max = 0;
    for (let ind in root.children) {
        max = Math.max(max, maxDepth(root.children[ind]));
    }
    return max + 1;
};
// 题目地址 https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/162840918/