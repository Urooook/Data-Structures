import {ILinkedList, IListNode} from "./interface";
import ListNode from "./ListNode";

export default class LinkedList<T = unknown> implements ILinkedList<T>{
    #first: IListNode<T> | null;
    #last: IListNode<T> | null;

    get first() {
        return this.#first;
    }

    set first(item: IListNode<T> | null) {
        this.#first = item;
    }

    get last() {
        return this.#last;
    }

    set last(item: IListNode<T> | null) {
        this.#last = item;
    }

    constructor() {
        this.first = null;
        this.last = null;
    }

    public isEmpty(): boolean {
        return this.first == null;
    }

    public insertFirst(dd: T): void {
        const newLink = new ListNode(dd);
        if(this.isEmpty()){
            this.last = newLink;
        } else {
            this.first.prev = newLink;
        }
        newLink.next = this.first;
        this.first = newLink;
    }

    public insertLast(dd: T): void {
        let newLink = new ListNode(dd);
        if(this.isEmpty()){
            this.first = newLink;
        } else {
            this.last.next = newLink;
            newLink.prev = this.last;
        }
        this.last = newLink;
    }

    public deleteFirst() {
        const temp = this.first.data;
        if(this.first.next == null){
            this.last = null
        } else {
            this.first.next.prev = null;
        }
        this.first = this.first.next;
        return temp;
    }

    public deleteLast() {
        const temp = this.last.data;
        if(this.first.next == null){
            this.first = null
        } else {
            this.last.prev.next = null;
        }
        this.last = this.last.prev;
        return temp;
    }

    public displayListForward() {
        let current = this.first;
        while(current !== null) {
            console.log(current.data)
            current = current?.next || null;
        }
    }

    public displayListBackward() {
        let current = this.last;
        while(current !== null) {
            console.log(current.data)
            current = current?.prev || null;
        }
    }

    get items(): Iterable<IListNode<T>> {
        let current = this.first;
        return {
            *[Symbol.iterator](): Iterator<IListNode<T>> {
                while (current) {
                    yield current;
                    current = current.next
                }
            }
        }
    }

    get reverseItems() {
        let current = this.last;
        return {
            * [Symbol.iterator]() {
                while (current) {
                    yield current;
                    current = current.prev
                }
            }
        }
    }

}

