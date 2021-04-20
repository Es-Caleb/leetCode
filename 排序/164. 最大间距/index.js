/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    nums = nums.sort((a, b) => {return a - b});
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i+1] - nums[i]);
    }
    return max;
};
// 题目地址 https://leetcode-cn.com/problems/maximum-gap/
// 提交记录 https://leetcode-cn.com/submissions/detail/169885227/