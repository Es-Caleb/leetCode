/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) return [];
    let map = new Map(), left = 0, right = 10, res = [];
    while(right <= s.length) {
        let cur = s.substring(left, right);
        map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
        left++;
        right++;
    }
    for (let [k, v] of map) {
        if (v > 1) res.push(k);
    }
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/repeated-dna-sequences/
// 提交记录 https://leetcode-cn.com/submissions/detail/176107704/