/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 
 // 执行用时: 236 ms
 // 内存消耗: 110.7 MB
var buildTree = function(preorder, inorder) {
    if( preorder.length == 0 || inorder.length == 0 ) {
        return null;
    }
    const res = new TreeNode(preorder[0]);
    for (let i = 0; i < preorder.length; i++) {
        if (preorder[0] == inorder[i]) {
            // 当前序遍历0 等于 中序遍历 i时，inorder中 i 左为左子树 右为右子树
            var pre_left = preorder.slice(1,i+1);
            var pre_right = preorder.slice(i+1);
            var in_left = inorder.slice(0,i);
            var in_right = inorder.slice(i+1);
            res.left = buildTree( pre_left, in_left);
            res.right = buildTree( pre_right, in_right);
        }
    }
    
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 提交记录 https://leetcode-cn.com/submissions/detail/158635715/

// 第二种
// 执行用时：108 ms
// 内存消耗：41.1 MB
var buildTree = function(preorder, inorder) {
    
    const trees = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {
        if (preStart > preEnd) {
            return null;
        }
        var index = 0;
        for (var i = inStart; i <= inEnd; i++ ) {
            if (preorder[preStart] == inorder[i]) {
                index = i;
                break;
            }
        }
        const root = new TreeNode(preorder[preStart]);
        var leftSize = index - inStart;
        root.left = trees(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1);
        root.right = trees(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1 , inEnd );
        return root;
    }
    return trees(preorder, 0, preorder.length -1, inorder, 0, inorder.length -1);
};
// 提交记录 https://leetcode-cn.com/submissions/detail/158636520/
