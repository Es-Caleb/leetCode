/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let obj = {}, max = 0, maxcount = 0;
    for (let i = 0; i < tasks.length; i++) {
        obj[tasks[i]] = obj[tasks[i]] ? obj[tasks[i]] + 1 : 1
    }
    for (let j in obj) {
        if (max < obj[j]) {
            max = obj[j];
            maxcount = 1;
        } else if (max === obj[j]) {
            maxcount++;
        }
    }
    return Math.max((max-1) * (n+1) + maxcount, tasks.length);
    // 由于n表示间隔数，将每n+1个设为一组，一共有max-1组，比如ABCABCA，此时(max-1)(n+1)代表ABCABC
    // 最后一组由出现次数最多字母的个数组成，即需要加上ma出现次数最多xcount现在已经保存了字母的排序，如果将其他字母插入，可能长度会大于(max-1)*(n+1)+maxcount，所以取Math.max就好了
};
// 题目地址 https://leetcode-cn.com/problems/task-scheduler/
// 提交记录 https://leetcode-cn.com/submissions/detail/170675608/