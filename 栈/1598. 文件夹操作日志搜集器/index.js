/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];
    for (const i of logs) {
        if (i === './' || i === '') continue;
        if (i === '../') {
            stack.length > 0 ? stack.pop() : null
            continue;
        };
        stack.push(i);
    }
    return stack.length;
};
// 题目地址 https://leetcode-cn.com/problems/crawler-log-folder/
// 提交记录 https://leetcode-cn.com/submissions/detail/171087788/