var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    while(this.arr[0] < t-3000) {
        this.arr.shift();
    }
    return this.arr.length;
};
// 题目地址 https://leetcode-cn.com/problems/number-of-recent-calls/
// 提交记录 https://leetcode-cn.com/submissions/detail/165708546/