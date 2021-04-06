/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n == 0) {
        return [];
    }
    const loop = (start, end) => {
        let res = [];
        if (start > end) {
            return [null];
        }
        // i指针滑动，枚举left和right分段的所有可能
        for (let i = start; i <= end; i++) {
            let left = loop(start, i - 1)
            let right = loop(i + 1, end)
            // 循环左右两侧，加入数组里
            for (const leftNode of left) {
                for (const rightNode of right) {
                    let node = new TreeNode(i);
                    node.left = leftNode;
                    node.right = rightNode;
                    res.push(node);
                }
            }
        }
        return res
    }
    return loop(1, n);
};
// 题目地址 https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
// 提交记录 https://leetcode-cn.com/submissions/detail/159710045/