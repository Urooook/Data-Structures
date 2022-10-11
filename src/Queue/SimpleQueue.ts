import {ISimpleQueue} from "./interface";
import {ILinkedList} from "../LinkedList/interface";
import LinkedList from "../LinkedList/LinkedList";

export default class SimpleQueue<T = unknown> implements ISimpleQueue<T> {
    protected queue: LinkedList<T>;

    constructor() {
        this.queue = new LinkedList();
    }

    get head(): T | null {
        return this.queue.first?.data || null
    }

    public isEmpty(): boolean {
        return this.queue.isEmpty();
    }

    public push(dd: T): void {
        this.queue.insertLast(dd);
    }

    public shift(): T {
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        const val = this.queue.first?.data;
        this.queue.deleteFirst();
        return val;
    }
}