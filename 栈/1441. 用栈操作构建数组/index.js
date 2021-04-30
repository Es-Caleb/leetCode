/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack = [], arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i+1);
        stack.push('Push');
        while(arr[arr.length - 1] !== target[arr.length - 1]) {
            arr.pop();
            stack.push('Pop');
        }
        if (target.length === arr.length) return stack;
    }
    return stack;
};
// 题目地址 https://leetcode-cn.com/problems/build-an-array-with-stack-operations/
// 提交记录 https://leetcode-cn.com/submissions/detail/173425857/