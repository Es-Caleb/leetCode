/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let temp = new Set();
    let sum = 0;
    s.split('').forEach(x => {
        if (temp.has(x)) {
            temp.delete(x);
            sum +=2;
        } else {
            temp.add(x);
        }
    })
    return sum + (temp.size > 0 ? 1 : 0);
};
// 题目地址 https://leetcode-cn.com/problems/longest-palindrome/
// 提交记录 https://leetcode-cn.com/submissions/detail/176495672/