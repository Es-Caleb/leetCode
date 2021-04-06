/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    const allSum = (root) => {
        if (!root) {
            return 0;
        }
        //如果该节点的左节点不为空，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则找到了一个左叶子
        if (root.left) {
            if ( root.left.left == null && root.left.right == null ) {
                sum += root.left.val;
            }
            // 遍历左子树
            allSum(root.left);
        }
        if (root.right) {
            // 遍历右子树
            allSum(root.right);
        }
    }
    allSum(root);
    return sum;
};
// 题目地址 https://leetcode-cn.com/problems/sum-of-left-leaves/
// 提交记录 https://leetcode-cn.com/submissions/detail/158193145/