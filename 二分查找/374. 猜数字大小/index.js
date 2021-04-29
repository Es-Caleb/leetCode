/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    let r = n;
    while(l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (guess(mid) === -1) {
            r = mid - 1;
        }else if (guess(mid) === 1) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
};
// 题目地址 https://leetcode-cn.com/problems/guess-number-higher-or-lower/
// 提交记录 https://leetcode-cn.com/submissions/detail/173149313/