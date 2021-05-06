/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let ss = {};
    let tt = {};
    for (let i=0; i < s.length; i++) {
        let x = s[i], y = t[i];
        if ((ss[x] && ss[x] !== y) || (tt[y] && tt[y] !== x)) {
            return false;
        }
        ss[x] = y;
        tt[y] = x;
    }
    return true;
};
// 题目地址 https://leetcode-cn.com/problems/isomorphic-strings/
// 提交记录 https://leetcode-cn.com/submissions/detail/174753184/