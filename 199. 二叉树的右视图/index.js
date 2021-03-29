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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }
    const a = [];
    a.push(root);
    while(a.length !== 0) {
        const lengSize = a.length;  //(即将访问的层的节点数目）
        for( let i = 0; i < lengSize; i++ ) {
            const node = a.shift();
            //放置左子树根节点
            if (node.left) a.push(node.left);
            //放置右子树根节点
            if (node.right) a.push(node.right);
            // 层序遍历，将每层最后一个节点加入数组
            if (i == lengSize -1) {
                ret.push(node.val);
            }
        }
    }
    return ret;
};
// 题目地址 https://leetcode-cn.com/problems/binary-tree-right-side-view/
// 提交记录 https://leetcode-cn.com/submissions/detail/161144837/