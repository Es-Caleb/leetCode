/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.arr = [];
    this.topNum = 0;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x);
    this.topNum = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let res = '', temp = [];
    while(this.arr.length > 1) {
        this.topNum = this.arr.shift();
        temp.push(this.topNum);
    }
    res = this.arr.shift();
    this.arr = temp;
    temp = [];
    return res;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topNum;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.arr.length === 0;
};

// 题目地址 https://leetcode-cn.com/problems/implement-stack-using-queues/
// 提交记录 https://leetcode-cn.com/submissions/detail/165702814/