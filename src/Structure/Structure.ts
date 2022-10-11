import {IStructureObject, KeyStructureType} from "./interface";

export default class Structure<T = unknown> implements IStructureObject<T> {
    public funcPart: string = `
        switch (key) {
            {item}
            default:
                throw new Error('Key not defined')
        }
    `
    constructor(keys: KeyStructureType[]) {
        if(!keys.length) {
            throw new Error('Keys is not defined');
        }
        let returnPart = '';
        keys.forEach((key, idx) => {
            returnPart += this.getKeyValString(key);
        })
        this.funcPart = this.funcPart.replaceAll(/\{item\}/g, returnPart);
    }

    funcPartObj() {
        return this.funcPart;
    }

    get(key: KeyStructureType): T {
        return Function('key', this.funcPart)(key);
    }

    set(key: KeyStructureType, value: T): void {
        const prepareKey = typeof key === "string" ? `'${key}'` : `${key}`;
        const regular = new RegExp(`case\\s${prepareKey}:\\sreturn\\s(.+);`, 'g');
        if (!regular.test(this.funcPart)) {
            throw new Error('Key is not defined');
        }
        this.funcPart = this.funcPart.replaceAll(regular, this.getKeyValString(key, value));
    }

    private getKeyValString(key: KeyStructureType, value: T | null = null): string {
        const prepareKey = typeof key === "string" ? `'${key}'` : `${key}`;
        return `case ${prepareKey}: return '${value}';\n`;
    }
}