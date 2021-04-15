/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const helper = (start, end) => {
        if (end - start + 1 < k) {
            return 0;
        }
        const occur = {};
        for (let i = start; i <= end; i++) {
            if (occur[s[i]] === undefined) {
                occur[s[i]] = 1;
            } else {
                occur[s[i]]++;
            }
        }
        // 区间长度>=k 并且start的字符出现次数<k
        while (end - start + 1 >= k && occur[s[start]] < k) {
            start++;    // start右移
            // 区间长度>=k 并且end的字符出现次数<k
        }
        while (end - start + 1 >= k && occur[s[end]] < k) {
            end--;      // end左移
        }
        if (end - start + 1 < k) {
            return 0;
        }
        for (let i = start; i <= end; i++) {
            if (occur[s[i]] < k) {
                return Math.max(helper(start, i - 1), helper(i + 1, end));
            }
        }
        return end - start + 1;
    }
    return helper(0, s.length - 1);
};
// 题目地址 https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/
// 提交记录 https://leetcode-cn.com/submissions/detail/168148860/