/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    if (!nums || nums.length < 3) {
        return res;
    }
    let newArr = nums.sort(function(a,b) {return a - b});
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0) {
            break;
        }
        if ( i > 0 && newArr[i] === newArr[i-1]) {
            continue;
        }
        let L = i + 1, R = newArr.length - 1;
        while(L < R) {
            let sum = newArr[i] + newArr[L] + newArr[R]
            if (sum === 0) {
                res.push([newArr[i], newArr[L], newArr[R]]);
                while (L<R && newArr[L] == newArr[L+1]) L++; // 去重
                while (L<R && newArr[R] == newArr[R-1]) R--; // 去重
                L++;
                R--;
            } else if (sum < 0) {
                // 和小于0 左小了
                L++;
            } else if (sum > 0) {
                // 和大于0 右大了
                R--;
            }
        }
    }
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/3sum/
// 提交记录 https://leetcode-cn.com/submissions/detail/164678141/