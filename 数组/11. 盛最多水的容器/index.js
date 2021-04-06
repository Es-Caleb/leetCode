/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;
    while( left < right) {
        let ans = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, ans);
        // 如果左边小于右边 左边加一位 否则右边加一位
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max;
};
// 题目地址 https://leetcode-cn.com/problems/container-with-most-water/
// 提交记录 https://leetcode-cn.com/submissions/detail/164362027/