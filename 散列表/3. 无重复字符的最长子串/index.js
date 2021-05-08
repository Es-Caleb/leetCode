/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = new Set();
    let r = -1, ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (i != 0) {
            hash.delete(s.charAt(i - 1));
        }
        while(r + 1 < s.length && !hash.has(s.charAt(r+1))) {
            hash.add(s.charAt(r + 1));
            r++;
        }
        ans = Math.max(ans, r - i + 1);
    }
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 提交记录 https://leetcode-cn.com/submissions/detail/175056206/