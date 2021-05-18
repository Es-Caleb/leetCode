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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let queue = [root];
    while(queue.length) {
        let len = queue.length;
        let sum = x + y;
        while(len--) {
            let node = queue.shift();
            let {val, left, right} = node;
            if( left && right && (x === left.val && y === right.val || x === right.val && y === left.val) ) return false
            if (x === val || y === val) sum -= val;
            if (sum === 0) return true;
            if (left) queue.push(left);
            if (right) queue.push(right);
        }
    }
    return false;
};
// 题目地址 https://leetcode-cn.com/problems/cousins-in-binary-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/178614376/