/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const dir = path.split('/'), stack = [];
    for (const i of dir) {
        if (i === '.' || i === '') continue;
        if (i === '..') {
            stack.length > 0 ? stack.pop() : null
            continue;
        };
        stack.push(i);
    }
    return '/' + stack.join('/')
};
// 题目地址 https://leetcode-cn.com/problems/simplify-path/
// 提交记录 https://leetcode-cn.com/submissions/detail/170723154/