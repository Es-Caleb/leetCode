/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let sArr = s.split('');
    if (sArr.length % 2 === 1) {
        return false;
    }
    const map = new Map([[')', '('], ['}', '{'], [']', '[']]);
    let stack = [];
    for (let i of sArr) {
        if (map.get(i)) {
            if (stack[stack.length - 1] != map.get(i)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    return !stack.length;
};
// 题目地址 https://leetcode-cn.com/problems/valid-parentheses/
// 提交记录 https://leetcode-cn.com/submissions/detail/165224351/