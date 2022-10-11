export interface IStackObject<T> {
    maxSize: number
    top: number
    stackArray: Array<T>

    get head(): T | null
    push(item: T): void
    pop(): T | null
    isEmpty(): boolean
    isFull(): boolean
}