/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let mergeTwoLists = (l1,l2) => {
        let preHead = new ListNode(-1)
        let preNode = preHead;
        while(l1 && l2){
            if(l1.val <= l2.val){
                preNode.next = l1
                l1 = l1.next
            }else{
                preNode.next = l2
                l2 = l2.next
            }
            preNode = preNode.next
        }
        preNode.next = l1 ? l1 : l2
        return preHead.next
    }
    if(lists.length == 0) return null
    let res = lists[0]
    for(let i = 1;i < lists.length;i++){
        if(lists[i]){
            res = mergeTwoLists(res,lists[i])
        }
    }
    return res;
};
// 题目地址 https://leetcode-cn.com/problems/merge-k-sorted-lists/
// 提交记录 https://leetcode-cn.com/submissions/detail/170366929/