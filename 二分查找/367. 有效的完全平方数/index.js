/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) {
        return true;
    }
    let l = 2, r = num;
    while(l <= r) {
        let x = parseInt((r + l) / 2);
        let guessSum = x * x;
        if (guessSum === num) {
            return true;
        }else if (guessSum > num) {
            r = x - 1;
        } else {
            l = x + 1;
        }
    }
    return false;
};
// 题目地址 https://leetcode-cn.com/problems/valid-perfect-square/
// 提交记录 https://leetcode-cn.com/submissions/detail/173434738/