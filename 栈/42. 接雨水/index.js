/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    let L = 0, R = height.length - 1;
    let LMax = 0, RMax = 0;
    while (L < R) {
        LMax = Math.max(LMax, height[L]);
        RMax = Math.max(RMax, height[R]);
        if (height[L] < height[R]) {
            ans += LMax - height[L];
            L++;
        } else {
            ans += RMax - height[R];
            R--;
        }
    }
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/trapping-rain-water/
// 提交记录 https://leetcode-cn.com/submissions/detail/165230230/