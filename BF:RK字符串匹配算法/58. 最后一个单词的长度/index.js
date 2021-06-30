/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  while(end >= 0 && s[end] == ' ' ) end--;
  if (end < 0 ) return 0;
  let start = end;
  while (start >= 0 && s[start] !== ' ') start--;
  return end - start;
};

// 题目地址 https://leetcode-cn.com/problems/length-of-last-word/
// 提交记录 https://leetcode-cn.com/submissions/detail/191069920/