/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
      return s;
  }
  let ans = '';
  let maxLen = 0;
  for (let i = 0;i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let tmpStr = s.substring(i, j);
      if (isLongest(tmpStr) && tmpStr.length > maxLen) {
        ans = s.substring(i, j);
        maxLen = tmpStr.length;
      }
    }
  }
  return ans;
};
function isLongest(str) {
  let middle = parseInt(str.length/2);
  for (let i = 0; i < middle; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
// 题目地址 https://leetcode-cn.com/problems/longest-palindromic-substring/
// 提交记录 https://leetcode-cn.com/submissions/detail/180644507/