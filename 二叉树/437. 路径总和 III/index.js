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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let pathNum = 0;    // 路径数量
    let pathSum = 0;    // 路径和
    let path = [];
    const hasPathSum = (root) => {
        if (!root) {
            return 0;
        }
        pathSum = pathSum + root.val;
        path.push(root.val);
        if (pathSum == sum) {
            // 如果路径和与sum相同，pathNum+1
            pathNum++;
        }
        let nowPathSum = pathSum;
        for(let i = 0; i < path.length - 1; i++) {
            nowPathSum = nowPathSum - path[i]
            if (nowPathSum === sum) { // 如果有相等的路径和，pathNum+1
                pathNum++;
            }
        }
        hasPathSum(root.left);
        hasPathSum(root.right);
        pathSum = pathSum - root.val;   // 尝试完毕该节点后还原路径和
        path.pop();     // 还原路径数组
    }
    hasPathSum(root);
    return pathNum;
};
// 题目地址 https://leetcode-cn.com/problems/path-sum-iii/
// 提交记录 https://leetcode-cn.com/submissions/detail/162484800/