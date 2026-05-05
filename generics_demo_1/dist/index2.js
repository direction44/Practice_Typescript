"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    get(index) {
        if (index < 0 || index > this.items.length) {
            return undefined;
        }
        return this.items[index];
    }
    getAll() {
        return this.items;
    }
    remove(index) {
        if (index < 0 || index > this.items.length) {
            return undefined;
        }
        return this.items.splice(index)[0];
    }
    update(index, newItme) {
        if (index < 0 || index > this.items.length) {
            return false;
        }
        this.items[index] = newItme;
        return true;
    }
}
let obj = new Storage();
obj.addItem(10);
obj.addItem(20);
obj.addItem(30);
console.log(obj.getAll());
obj.update(1, 24);
console.log(obj.getAll());
obj.remove(2);
//# sourceMappingURL=index2.js.map