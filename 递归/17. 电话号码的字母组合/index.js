/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];
    const map = { 
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const queue = [];
    queue.push('');
    for (let i = 0; i < digits.length; i++) {
        const leveSize = queue.length;
        for (let j = 0; j < leveSize; j++) {
            const firstNum = queue.shift();
            const content = map[digits[i]];
            for (let item of content) {
                queue.push(firstNum + item);
            }
        }
    }
    return queue;
};
// 题目地址 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 提交记录 https://leetcode-cn.com/submissions/detail/168126425/