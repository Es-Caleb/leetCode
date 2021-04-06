/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const G = new Array(n + 1).fill(0);
    // 
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            // [以j为头结点左子树节点数量] * [以j为头结点右子树节点数量]
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};
// 题目地址 https://leetcode-cn.com/problems/unique-binary-search-trees/
// 提交记录 https://leetcode-cn.com/submissions/detail/159244247/