/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2];
    newArr = newArr.sort(function(a, b){return a - b});
    if (newArr.length % 2 === 0) {
        return (newArr[newArr.length / 2] + newArr[(newArr.length / 2) - 1]) / 2;
    } else {
        return newArr[(newArr.length - 1) / 2];
    }
};