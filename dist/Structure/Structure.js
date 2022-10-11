"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Structure {
    constructor(keys) {
        this.funcPart = `
        switch (key) {
            {item}
            default:
                throw new Error('Key not defined')
        }
    `;
        if (!keys.length) {
            throw new Error('Keys is not defined');
        }
        let returnPart = '';
        keys.forEach((key, idx) => {
            returnPart += this.getKeyValString(key);
        });
        this.funcPart = this.funcPart.replaceAll(/\{item\}/g, returnPart);
    }
    funcPartObj() {
        return this.funcPart;
    }
    get(key) {
        return Function('key', this.funcPart)(key);
    }
    set(key, value) {
        const prepareKey = typeof key === "string" ? `'${key}'` : `${key}`;
        const regular = new RegExp(`case\\s${prepareKey}:\\sreturn\\s(.+);`, 'g');
        if (!regular.test(this.funcPart)) {
            throw new Error('Key is not defined');
        }
        this.funcPart = this.funcPart.replaceAll(regular, this.getKeyValString(key, value));
    }
    getKeyValString(key, value = null) {
        const prepareKey = typeof key === "string" ? `'${key}'` : `${key}`;
        return `case ${prepareKey}: return '${value}';\n`;
    }
}
exports.default = Structure;
