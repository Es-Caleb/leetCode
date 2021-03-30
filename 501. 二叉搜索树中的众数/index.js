/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let mode = 0, count = 0, maxCount = 0;
    let res = [];
    const dfs = (root) => {
        if (!root) {
            return;
        }
        dfs(root.left);
        update(root.val);
        dfs(root.right);
    }
    const update = (val) => {
        if(val == mode) {
            // 如果 值等于 mode 那么出现次数加1
            count++;
        } else {
            // 如果值不等于mode，count为1，mode为该数
            count = 1;
            mode = val;
        }
        if(count == maxCount) {
            // 如果出现次数count=最大出现次数，加入数组
            res.push(mode)
        }
        if (count > maxCount) {
            // 如果出现次数大于最大出现次数 数组清空只加该值
            maxCount = count;
            res = [mode]
        }
    }
    dfs(root);
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/161621553/