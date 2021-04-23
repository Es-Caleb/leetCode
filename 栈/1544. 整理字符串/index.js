/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let res = [];
    for (let i of s) {
        if (res.length && res[res.length - 1] !== i && res[res.length - 1].toUpperCase() === i.toUpperCase()) {
            res.pop();
        } else {
            res.push(i);
        }
    }
    return res.join("")
};
// 题目地址 https://leetcode-cn.com/problems/make-the-string-great/
// 提交记录 https://leetcode-cn.com/submissions/detail/171084977/