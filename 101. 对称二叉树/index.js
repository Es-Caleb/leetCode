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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const symmetric = (a, b) => {
        //递归的终止条件是两个节点都为空
		//或者两个节点中有一个为空
        if ( !a && !b ) {
            return true
        }
        if ( !a || !b ) {
            return false
        }
        // 两个节点相同 并且 左边右边一样
         return a.val == b.val && symmetric(a.left, b.right) && symmetric(a.right, b.left)
    }
    const res = new Boolean(symmetric(root, root));
    return res;
};