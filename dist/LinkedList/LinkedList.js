"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LinkedList_first, _LinkedList_last;
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor() {
        _LinkedList_first.set(this, void 0);
        _LinkedList_last.set(this, void 0);
        this.first = null;
        this.last = null;
    }
    get first() {
        return __classPrivateFieldGet(this, _LinkedList_first, "f");
    }
    set first(item) {
        __classPrivateFieldSet(this, _LinkedList_first, item, "f");
    }
    get last() {
        return __classPrivateFieldGet(this, _LinkedList_last, "f");
    }
    set last(item) {
        __classPrivateFieldSet(this, _LinkedList_last, item, "f");
    }
    isEmpty() {
        return this.first == null;
    }
    insertFirst(dd) {
        const newLink = new ListNode_1.default(dd);
        if (this.isEmpty()) {
            this.last = newLink;
        }
        else {
            this.first.prev = newLink;
        }
        newLink.next = this.first;
        this.first = newLink;
    }
    insertLast(dd) {
        let newLink = new ListNode_1.default(dd);
        if (this.isEmpty()) {
            this.first = newLink;
        }
        else {
            this.last.next = newLink;
            newLink.prev = this.last;
        }
        this.last = newLink;
    }
    deleteFirst() {
        const temp = this.first.data;
        if (this.first.next == null) {
            this.last = null;
        }
        else {
            this.first.next.prev = null;
        }
        this.first = this.first.next;
        return temp;
    }
    deleteLast() {
        const temp = this.last.data;
        if (this.first.next == null) {
            this.first = null;
        }
        else {
            this.last.prev.next = null;
        }
        this.last = this.last.prev;
        return temp;
    }
    displayListForward() {
        let current = this.first;
        while (current !== null) {
            console.log(current.data);
            current = current?.next || null;
        }
    }
    displayListBackward() {
        let current = this.last;
        while (current !== null) {
            console.log(current.data);
            current = current?.prev || null;
        }
    }
    get items() {
        let current = this.first;
        return {
            *[Symbol.iterator]() {
                while (current) {
                    yield current;
                    current = current.next;
                }
            }
        };
    }
    get reverseItems() {
        let current = this.last;
        return {
            *[Symbol.iterator]() {
                while (current) {
                    yield current;
                    current = current.prev;
                }
            }
        };
    }
}
exports.default = LinkedList;
_LinkedList_first = new WeakMap(), _LinkedList_last = new WeakMap();
