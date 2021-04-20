/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) =>(''+b+a)-(''+a+b));
    return !nums[0] ? '0' : nums.join('')
};
// 题目地址 https://leetcode-cn.com/problems/largest-number/
// 提交记录 https://leetcode-cn.com/submissions/detail/169888655/