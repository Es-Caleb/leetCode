/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s) {
        return false;
    }
    const checkin = (s,t) => {
        if (s == null && t == null) {
            return true;
        }
        if (s == null || t == null) {
            return false;
        }
        return s.val == t.val && checkin(s.left, t.left) && checkin(s.right, t.right);
    }
    return checkin(s, t) || isSubtree(s.left, t) || isSubtree(s.right,t);
};
// 题目地址 https://leetcode-cn.com/problems/subtree-of-another-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/162861462/