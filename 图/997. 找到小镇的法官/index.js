/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let goBeli = Array(N).fill(0);  // 信任
    let beli = Array(N).fill(0);    // 被信任
    for (let [a, b] of trust) {
        goBeli[a - 1]++;
        beli[b - 1]++;
    }
    for (let i = 0; i < N; i++) {
        if (goBeli[i] === 0 && beli[i] === N - 1) {
            return i + 1;
        }
    }
    return -1;
};
// 题目地址 https://leetcode-cn.com/problems/find-the-town-judge/
// 提交记录 https://leetcode-cn.com/submissions/detail/176729959/