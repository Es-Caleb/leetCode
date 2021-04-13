/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        const start = intervals[i][1];
        const [end] = intervals[i + 1];
        if (start >= end) {
            const data = [...intervals[i], ...intervals[i + 1]];
            const item = [Math.min(...data), Math.max(...data)];
            intervals.splice(i, 2, item);
            i--;
        }
    }
    return intervals;
};
// 题目地址 https://leetcode-cn.com/problems/merge-intervals/
// 提交记录 https://leetcode-cn.com/submissions/detail/167276296/