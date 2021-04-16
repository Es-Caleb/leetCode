/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >>> 1;
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
// 题目地址 https://leetcode-cn.com/problems/search-insert-position/
// 提交记录 https://leetcode-cn.com/submissions/detail/168530572/