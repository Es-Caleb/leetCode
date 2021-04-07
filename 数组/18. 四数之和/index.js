/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    if (!nums || nums.length < 4) {
        return res;
    }
    let newArr = nums.sort(function(a,b) {return a - b});
    for (let i = 0; i < newArr.length; i++) {
        if ( i > 0 && newArr[i] === newArr[i-1]) {
            continue;
        }
        for (let j = i + 1; j < newArr.length; j++) {
            if ( j > i + 1 && newArr[j] === newArr[j-1]) {
                continue;
            }
            let L = j + 1, R = newArr.length - 1;
            while(L < R) {
                let sum = newArr[i] + newArr[L] + newArr[R] + newArr[j]
                if (sum === target) {
                    res.push([newArr[i], newArr[L], newArr[R], newArr[j]]);
                    while (L<R && newArr[L] == newArr[L+1]) L++; // 去重
                    while (L<R && newArr[R] == newArr[R-1]) R--; // 去重
                    L++;
                    R--;
                } else if (sum < target) {
                    // 和小于0 左小了
                    L++;
                } else if (sum > target) {
                    // 和大于0 右大了
                    R--;
                }
            }
        }
    }
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/4sum/
// 提交记录 https://leetcode-cn.com/submissions/detail/164832801/