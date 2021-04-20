/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let a = Math.abs(nums[i] - nums[j]);
            let b = Math.abs(i - j);
            if (a <= t && b <= k) {
                return true;
            }
        }
    }
    return false;
};
// 题目地址 https://leetcode-cn.com/problems/contains-duplicate-iii/
// 提交记录 https://leetcode-cn.com/submissions/detail/169891928/