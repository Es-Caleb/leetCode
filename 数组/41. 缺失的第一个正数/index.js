/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] >= 1 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) { 
            return i + 1;        
        }
    }
    return nums.length + 1;
};
// 题目地址 https://leetcode-cn.com/problems/first-missing-positive/
// 提交记录 https://leetcode-cn.com/submissions/detail/164763234/