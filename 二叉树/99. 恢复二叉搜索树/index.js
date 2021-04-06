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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const dfs = (root, nums) => {
        if (!root) {
            return;
        }
        dfs(root.left, nums);
        nums.push(root.val);
        dfs(root.right, nums);
    }
    // 找出需要交换的数
    const exchangeNum = (nums) => {
        let x = -1, y = -1;
        for (let i = 0; i < nums.length - 1; ++i) {
            if (nums[i + 1] < nums[i]) {
                y = nums[i + 1];
                if (x === -1) {
                    x = nums[i];
                }
                else break;
            }
        }
        return [x, y];
    }
    // 交换位置
    const recover = (r, count, x, y) => {
       if (r != null) {
           if (r.val == x || r.val == y) {
                r.val = r.val === x ? y : x;
                if (--count === 0) {
                    return;
                }
           }
            recover(r.left, count, x, y);
            recover(r.right, count, x, y);
       }
    }
    const nums = [];
    // 中序遍历
    dfs(root, nums);
    const [a, b] = exchangeNum(nums);
    recover(root, 2, a, b);
    
};
// 题目地址 https://leetcode-cn.com/problems/recover-binary-search-tree/
// 提交记录 https://leetcode-cn.com/submissions/detail/159975288/