/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    if (N === 1) {
        return 0;
    }
    let length = 2 ** (N - 1);
    if (K > length / 2) {
        let val = kthGrammar(N - 1, K - length / 2);
        return val === 0 ? 1 : 0;
    } else {
        return kthGrammar(N - 1, K);
    }
};
// 题目地址 https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
// 提交记录 https://leetcode-cn.com/submissions/detail/172813209/