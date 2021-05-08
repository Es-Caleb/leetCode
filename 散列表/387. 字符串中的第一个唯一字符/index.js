/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     // 长度为26的数组，存放字符的出现次数
    const counts = new Array(26).fill(0);
     // 遍历s的每个字符，统计出现次数
    for (const c of s) {
         // 97是 a 的Unicode值
        counts[c.charCodeAt(0) - 97]++;
    }
    // 再次遍历s
    for (let i = 0; i < s.length; i++) {
        // 找出第一个频次为1的字符的索引
        if (counts[s[i].charCodeAt(0) - 97] == 1) {
            return i;
        }
    }
    // 没有只出现1次的字符，返回-1
    return -1;
};
// 题目地址 https://leetcode-cn.com/problems/first-unique-character-in-a-string/
// 提交记录 https://leetcode-cn.com/submissions/detail/175462925/