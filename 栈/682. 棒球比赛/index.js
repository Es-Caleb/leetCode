/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = [];
    for (let i = 0; i < ops.length; i++) {
        switch(ops[i]) {
            case 'C':
                res.pop();
                break;
            case 'D': 
                res.push(res[res.length - 1] * 2);
                break;
            case '+':
                res.push(res[res.length - 1] + res[res.length - 2])
                break;
            default:
                res.push(parseInt(ops[i]))
                break;
        }
    }
    let sum = 0;
    res.forEach(item => {
        sum += item;
    })
    return sum;
};
// 题目地址 https://leetcode-cn.com/problems/baseball-game/
// 提交记录 https://leetcode-cn.com/submissions/detail/171096987/