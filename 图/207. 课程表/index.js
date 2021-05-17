/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0);
    let map = {};
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    let queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        let firstCour = queue.shift();
        count++;
        let followUp = map[firstCour];
        if (followUp && followUp.length) {
            for (let j = 0; j < followUp.length; j++) {
                inDegree[followUp[j]]--;
                if (inDegree[followUp[j]] === 0) {
                    queue.push(followUp[j]);
                }
            }
        }
    }
    return count === numCourses;
};
// 题目地址 https://leetcode-cn.com/problems/course-schedule/
// 提交记录 https://leetcode-cn.com/submissions/detail/177533499/