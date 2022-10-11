export interface ISimpleQueue<T> {
    get head(): T | null;

    push(value: T): void;
    shift(): T;
    isEmpty(): boolean;
}

export interface IDoubleQueue<T> extends ISimpleQueue<T>{
    pop(): T;
    unshift(value: T): void;
}