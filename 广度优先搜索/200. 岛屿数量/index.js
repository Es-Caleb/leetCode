/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0;
    const rows = grid.length;
    if (rows === 0) return 0;
    const cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                mark(grid, i, j, rows, cols);
                ans++;
            }
        }
    }
    return ans;
};

function mark(grid, i, j, rows, cols) {
  if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || grid[i][j] === "0") return;

  grid[i][j] = "0";
  mark(grid, i + 1, j, rows, cols);
  mark(grid, i, j + 1, rows, cols);
  mark(grid, i - 1, j, rows, cols);
  mark(grid, i, j - 1, rows, cols);
}
// 题目地址 https://leetcode-cn.com/problems/number-of-islands/
// 提交记录 https://leetcode-cn.com/submissions/detail/178632866/