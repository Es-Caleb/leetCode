/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (!nums || nums.length < 3) {
        return 0;
    }
    let newArr = nums.sort(function(a,b) {return a - b});
    let sum = newArr[1] + newArr[2] + newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        let L = i + 1, R = newArr.length - 1;
        while(L < R) {
            let newSum = newArr[i] + newArr[L] + newArr[R];
            if (Math.abs(target - newSum) < Math.abs(target - sum)) {
                sum = newSum;
            }
            if (newSum < target) {
                L++;
            } else if (newSum > target) {
                R--;
            } else {
                return sum;
            }
        }
    }
    return sum;
};
// 题目地址 https://leetcode-cn.com/problems/3sum-closest/
// 提交记录 https://leetcode-cn.com/submissions/detail/164705871/