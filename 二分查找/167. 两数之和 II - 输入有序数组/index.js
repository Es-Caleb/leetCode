/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        left = i + 1;
        while(left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if(numbers[mid] == target - numbers[i]) {
                return [i + 1, mid+ 1];
            } else if(numbers[mid] < target - numbers[i]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return [-1, -1];
};
// 题目地址 https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// 提交记录 https://leetcode-cn.com/submissions/detail/168548826/