/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
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
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let ans = [];
    while (queue.length) {
        let firstCour = queue.shift();
        ans.push(firstCour);
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
    return ans.length === numCourses ? ans : [];
    // 题目地址 https://leetcode-cn.com/problems/course-schedule-ii/
    // 提交记录 https://leetcode-cn.com/submissions/detail/178180721/