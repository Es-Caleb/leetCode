/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = new Array(k);
    this.front = 0;     // 头部指针
    this.rear = 0;      // 尾部指针
    this.max = k;       // 数组的最大长度
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    } else {
        this.arr[this.rear] = value;
        this.rear = (this.rear + 1) % this.max;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    } else {
        this.arr[this.front] = '';
        this.front = (this.front + 1) % this.max;
        return true;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    // 为空 返回 -1
    if (this.isEmpty()) {
        return -1
    } else {
        return this.arr[this.front];
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        let val = this.rear - 1 >= 0 ? this.rear - 1 : this.max - 1;
        return this.arr[val];
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    // 头尾指针处于同一位置，且头指针数据为空
    if (this.front === this.rear && !this.arr[this.front]) {
        return true;
    } else {
        return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    // 头尾指针处于同一位置，且头指针数据不为空
    if (this.front === this.rear && !!this.arr[this.front]) {
        return true;
    } else {
        return false;
    }
};

// 题目地址 https://leetcode-cn.com/problems/design-circular-queue/
// 提交记录 https://leetcode-cn.com/submissions/detail/165630286/