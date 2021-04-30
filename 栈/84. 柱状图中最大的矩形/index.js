/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (!heights || !heights.length) return 0;
    heights.unshift(0), heights.push(0);
    const stack = [];
    let maxArea = 0;
    const getStackLastItem = () => stack[stack.length - 1];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[ getStackLastItem() ] > heights[i]) {
            const j = stack.pop();
            const width = i - getStackLastItem() - 1;
            maxArea = Math.max(maxArea, width * heights[j] )
        }
        stack.push(i)
    }
    return maxArea
};
// 题目地址 https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
// 提交记录 https://leetcode-cn.com/submissions/detail/173405195/