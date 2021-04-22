/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.arr = new Array(k);
    this.front = 0;     // 头部指针
    this.rear = 0;      // 尾部指针
    this.max = k;       // 数组的最大长度
    this.cnt = 0;       // 当前长度
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) {
        return false;
    } else {
        this.front = (this.front - 1 + this.max) % this.max;
        this.arr[this.front] = value;
        this.cnt++;
        return true;
    }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) {
        return false;
    } else {
        this.arr[this.rear] = value;
        this.rear = (this.rear + 1 + this.max) % this.max;
        this.cnt++;
        return true;
    }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        this.front = (this.front + 1 + this.max) % this.max;
        this.cnt--;
        return true;   
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        this.rear = (this.rear - 1 + this.max) % this.max;
        this.cnt--;
        return true;
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    // 为空 返回 -1
    if (this.isEmpty()) {
        return -1
    } else {
        return this.arr[this.front];
    }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.arr[(this.rear - 1 + this.max) % this.max];
    }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.cnt === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.cnt === this.arr.length;
};

// 题目地址 https://leetcode-cn.com/problems/design-circular-deque/
// 提交记录 https://leetcode-cn.com/submissions/detail/170718357/