import {IStackObject} from "./interace";

export default class Stack<T = unknown> implements IStackObject<T> {
    public maxSize;
    public top;
    public stackArray;

    constructor(size: number = 10) {
        this.maxSize = size;
        this.top = -1;
        this.stackArray = new Array(size);
    }

    get head() {
        return this.stackArray[this.top];
    }

    public push(item: T) {
        this.stackArray[++this.top] = item;
    }

    public pop() {
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }
        return this.stackArray[this.top--];
    }

    public isEmpty(): boolean {
        return this.top === -1;
    }

    public isFull(): boolean {
        return this.top === this.maxSize - 1;
    }
}