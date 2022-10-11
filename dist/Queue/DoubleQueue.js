"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleQueue_1 = require("./SimpleQueue");
class DoubleQueue extends SimpleQueue_1.default {
    constructor() {
        super();
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const val = this.queue.last;
        this.queue.deleteLast();
        return val.data;
    }
    unshift(value) {
        this.queue.insertFirst(value);
    }
}
exports.default = DoubleQueue;
