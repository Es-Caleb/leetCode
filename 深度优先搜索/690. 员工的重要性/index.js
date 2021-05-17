/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = new Map();
    for (let employee of employees) {
        map.set(employee.id, employee);
    }
    const dfs = (id) => {
        let employ = map.get(id);
        let total = employ.importance;
        let subordinates = employ.subordinates;
        for (let subordinate of subordinates) {
            total += dfs(subordinate)
        }
        return total;
    }
    return dfs(id);
};
// 题目地址 https://leetcode-cn.com/problems/employee-importance/
// 提交记录 https://leetcode-cn.com/submissions/detail/178213566/