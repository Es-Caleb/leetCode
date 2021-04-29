/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let l = 0, r = 0, ans = [];
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] === nums2[r]) {
            ans.push(nums1[l]);
            l++;
            r++;
        } else nums1[l] < nums2[r] ? l++ : r++;
    }
    return ans;
};
// 题目地址 https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/173146388/