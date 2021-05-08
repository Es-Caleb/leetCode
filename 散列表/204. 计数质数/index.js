/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            ans += 1;
            for (let j =i * i; j < n; j+= i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/count-primes/
// 提交记录 https://leetcode-cn.com/submissions/detail/175378556/