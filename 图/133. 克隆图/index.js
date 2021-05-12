/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = new Map();
    return dfs(node, map);
};

function dfs(node, map){
    if(!node) return node
    // 一. 如果map中存在,直接返回存在的值
    if(map.has(node.val)) return map.get(node.val);
    // 二. map 中不存在, 就新建个Node 复制 邻居
    let cp = new Node(node.val);
    map.set(cp.val, cp);
    cp.neighbors = node.neighbors.map(nb => dfs(nb, map));
    return cp;
}
// 题目地址 https://leetcode-cn.com/problems/clone-graph/
// 提交记录 https://leetcode-cn.com/submissions/detail/176737628/