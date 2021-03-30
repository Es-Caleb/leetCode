/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }
    const a = [];
    a.push(root);
    while(a.length !== 0) {
        const lengSize = a.length;  //(即将访问的层的节点数目）
        ret.push([]);   // 先添加一个空数组
        for( let i = 0; i < lengSize; i++ ) {
            const node = a.shift();
            ret[ret.length - 1].push(node.val);
            // 如果子节点存在，加入并循环
            if (node.children) {
                for(let i = 0; i < node.children.length; i++) {
                    a.push(node.children[i])
                }
            }
        }
    }
    return ret;
};
// 题目地址 https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/161589799/