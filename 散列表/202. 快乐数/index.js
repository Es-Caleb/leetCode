/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function hashSum(n) {
        let sum = 0;
        while(n > 0) {
            // 取余
            const bit = n % 10;
            sum += bit ** 2;
            // 保留整数
            n = Math.trunc(n / 10);
        }
        return sum;
    }
    const s = new Set();
    while(n !== 1 && !s.has(n)){
        s.add(n);
        n = hashSum(n);
    }
    return n === 1;
};
// 题目地址 https://leetcode-cn.com/problems/happy-number/
// 提交记录 https://leetcode-cn.com/submissions/detail/174728976/