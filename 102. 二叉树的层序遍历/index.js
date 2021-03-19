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
            // 添加队头的值
            ret[ret.length - 1].push(node.val);
            //放置左子树根节点
            if (node.left) a.push(node.left);
            //放置右子树根节点
            if (node.right) a.push(node.right);
        }
    }
    return ret;
};