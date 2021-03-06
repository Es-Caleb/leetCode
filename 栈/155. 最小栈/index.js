/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.s1 = [];
    this.s2 = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.s1.push(val);
    this.s2.push(Math.min(this.s2[this.s2.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop();
    this.s2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1[this.s1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2[this.s2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 
// 题目地址 https://leetcode-cn.com/problems/min-stack/
// 提交记录 https://leetcode-cn.com/submissions/detail/165210666/