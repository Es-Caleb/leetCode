/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
// 题目地址 https://leetcode-cn.com/problems/two-sum/
// 提交记录 https://leetcode-cn.com/submissions/detail/164324121/