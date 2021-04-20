/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a, b) => {return a - b});
    let i = 0;
    while(i < citations.length && citations[citations.length - 1 - i] > i) {
      i++
    }
    return i;
};
// 题目地址 https://leetcode-cn.com/problems/h-index/
// 提交记录 https://leetcode-cn.com/submissions/detail/169902396/