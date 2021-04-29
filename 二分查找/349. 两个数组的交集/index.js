/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = new Map();
    let res = [];
    for (let i of nums1) {
        map[i] = true;
    }
    for (let j of nums2) {
        if (map[j]) {
            map[j] = false;
            res.push(j);
        }
    }
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 提交记录 https://leetcode-cn.com/submissions/detail/173145482/