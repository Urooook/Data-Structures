import SimpleQueue from "./SimpleQueue";
import {IDoubleQueue} from "./interface";
import {IListNode} from "../LinkedList/interface";

export default class DoubleQueue<T = unknown> extends SimpleQueue<T> implements IDoubleQueue<T> {
    constructor() {
        super();
    }

    public pop(): T {
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        const val = <IListNode<T>>this.queue.last;
        this.queue.deleteLast();
        return val.data;
    }

    public unshift(value: T) {
        this.queue.insertFirst(value);
    }
}