/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let word2ch = new Map(), ch2word = new Map();
    let words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (const [k, v] of words.entries()) {
        let ch = pattern[k];
        if ((word2ch.has(v) && word2ch.get(v) !== ch) || (ch2word.has(ch) && ch2word.get(ch) !== v)) {
            return false;
        }
        word2ch.set(v, ch);
        ch2word.set(ch, v);
    }
    return true;
};
// 题目地址 https://leetcode-cn.com/problems/word-pattern/
// 提交记录 https://leetcode-cn.com/submissions/detail/176120725/