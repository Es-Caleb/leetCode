/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            delete hash[nums[i]]
        } else {
            hash[nums[i]] = 1
        }
    }
    return Object.keys(hash)[0];
};
// 题目地址 https://leetcode-cn.com/problems/single-number/
// 提交记录 https://leetcode-cn.com/submissions/detail/174695230/