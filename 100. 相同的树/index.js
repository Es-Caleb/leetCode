/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const calculation = (p, q) => {
        if ( p == null && q == null ) {
            return true;
        } else if ( p == null || q == null ) {
            return false;
        } else if ( p.val != q.val ) {
            return false;
        }
        return calculation(p.left, q.left) && calculation(p.right, q.right)
    }
    return new Boolean(calculation(p, q));
};