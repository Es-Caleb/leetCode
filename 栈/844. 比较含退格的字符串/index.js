/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const backSpace = (str) => {
        let stack = [];
        for (let i of str) {
            if (i === '#') {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
        return stack.join('');
    }
    return backSpace(s) === backSpace(t);
};
// 题目地址 https://leetcode-cn.com/problems/backspace-string-compare/
// 提交记录 https://leetcode-cn.com/submissions/detail/171103486/