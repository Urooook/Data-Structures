"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(size = 10) {
        this.maxSize = size;
        this.top = -1;
        this.stackArray = new Array(size);
    }
    get head() {
        return this.stackArray[this.top];
    }
    push(item) {
        this.stackArray[++this.top] = item;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.stackArray[this.top--];
    }
    isEmpty() {
        return this.top === -1;
    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
}
exports.default = Stack;
