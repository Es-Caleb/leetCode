/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s1 = [...s].sort().join('');
    let t1 = [...t].sort().join('');
    return s1 === t1;
};
// 题目地址 https://leetcode-cn.com/problems/valid-anagram/
// 提交记录 https://leetcode-cn.com/submissions/detail/175060958/