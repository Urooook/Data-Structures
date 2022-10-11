"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../LinkedList/LinkedList");
class SimpleQueue {
    constructor() {
        this.queue = new LinkedList_1.default();
    }
    get head() {
        return this.queue.first?.data || null;
    }
    isEmpty() {
        return this.queue.isEmpty();
    }
    push(dd) {
        this.queue.insertLast(dd);
    }
    shift() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const val = this.queue.first?.data;
        this.queue.deleteFirst();
        return val;
    }
}
exports.default = SimpleQueue;
