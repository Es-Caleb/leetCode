/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let item of strs) {
        let arr = Array.from(item);
        arr.sort();
        let key = arr.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(item);
        map.set(key, list);
    }
    return Array.from(map.values());
};
// 题目地址 https://leetcode-cn.com/problems/group-anagrams/
// 提交记录 https://leetcode-cn.com/submissions/detail/175419044/