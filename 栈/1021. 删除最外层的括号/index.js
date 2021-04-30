/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let count = 0, ans = '';
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(' && count++ > 0) ans += '(';
        if (S[i] === ')' && count-- > 1) ans += ')';
    }
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/remove-outermost-parentheses/
// 提交记录 https://leetcode-cn.com/submissions/detail/173428951/