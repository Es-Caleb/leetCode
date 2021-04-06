/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    if (nums.length == 0) {
        return null;
    }
    if (nums.length == 1) {
        // 如果只有一个值，根据根节点创建树节点
        return new TreeNode(nums[0]);
    }
    // 去中间值 parseInt转换成整数
    var mid = parseInt(nums.length / 2);
    // 创建一个树节点 根节点为 nums[mid] 值
    var root = new TreeNode(nums[mid]);
    // 左子树值从nums 0 - mid前一个
    root.left = sortedArrayToBST(nums.slice(0,mid));
    // 右子树值 从mid后一位到最后
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};
// 题目地址 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/158240501/