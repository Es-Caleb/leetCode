/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const rows = image.length;
    const cols = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === newColor) return image;
    const mark = ( i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || image[i][j] !== oldColor) return;
        image[i][j] = newColor;
        mark(i + 1, j);
        mark(i, j + 1);
        mark(i - 1, j);
        mark(i, j - 1);
    }
    mark(sr, sc);
    return image;
};
// 题目地址 https://leetcode-cn.com/problems/flood-fill/
// 提交记录 https://leetcode-cn.com/submissions/detail/178925760/