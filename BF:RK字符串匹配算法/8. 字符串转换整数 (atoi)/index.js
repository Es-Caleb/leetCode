/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const re = new RegExp(/^(-|\+)?\d+/);
    let str = s.trim().match(re);
    let res = str ? Number(str[0]) : 0;
    return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31))
};
// 题目地址 https://leetcode-cn.com/problems/string-to-integer-atoi/
// 提交记录 https://leetcode-cn.com/submissions/detail/182863475/