/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const number = board[i][j];
            if (number === '.') continue;
            const col = `${number}c${i}`;
            const row = `${number}r${j}`;
            const sectionStr = `${number}s(${Math.floor(i/3)},${Math.floor(j/3)})`;
            if (set.has(col) || set.has(row) || set.has(sectionStr)) return false;
            set.add(col);
            set.add(row);
            set.add(sectionStr);
        }
    }
    return true;
};
// 题目地址 https://leetcode-cn.com/problems/valid-sudoku/
// 提交记录 https://leetcode-cn.com/submissions/detail/176480396/