/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const trees = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
        if (inStart > inEnd) {
            return null;
        }
        var index = 0;
        for (var i = inStart; i <= inEnd; i++) {
            if ( inorder[i] == postorder[postEnd] ) {
                index = i;
                break;
            }
        }
        const root = new TreeNode(postorder[postEnd]);
        var leftSize = index - inStart;
        root.left = trees(inorder, inStart, index - 1, postorder, postStart , postStart + leftSize -1 );
        root.right = trees(inorder, index + 1 , inEnd, postorder, postStart + leftSize ,postEnd - 1 );
        return root;
    }
    return trees(inorder, 0, inorder.length-1, postorder, 0, postorder.length -1);
};
// 题目地址 https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/158646344/