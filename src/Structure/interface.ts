export type KeyStructureType = string | number

export interface IStructureObject<T> {
    set(key: KeyStructureType, value: T): void
    get(key: KeyStructureType): T
}