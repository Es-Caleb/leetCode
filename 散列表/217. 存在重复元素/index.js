/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Set();
    for (let x of nums) {
        if (hash.has(x)) {
            return true;
        }
        hash.add(x);
    }
    return false;
};
// 题目地址 https://leetcode-cn.com/problems/contains-duplicate/
// 提交记录 https://leetcode-cn.com/submissions/detail/175026877/