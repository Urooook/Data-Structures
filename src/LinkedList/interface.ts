export interface IListNode<T> {
    data: T
    next: IListNode<T> | null
    prev: IListNode<T> | null
}

export interface ILinkedList<T> {
    get first(): IListNode<T> | null
    get last(): IListNode<T> | null
    insertFirst(dd: T): void
    insertLast(dd: T): void
    deleteFirst(): void
    deleteLast(): void
    displayListForward(): void
    displayListBackward(): void
    get items(): Iterable<IListNode<T>>
}