"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class storage {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        if (index < 0 || index >= this.items.length) {
            return undefined;
        }
        return this.items[index];
    }
    getAll() {
        if (this.items.length < 0) {
            undefined;
        }
        return this.items;
    }
    searchByName(name) {
        for (let item of this.items) {
            if (item.name === name) {
                return item;
            }
        }
        return undefined;
    }
    searchByID(ID) {
        for (let item of this.items) {
            if (item.id === ID) {
                return item;
            }
        }
        return undefined;
    }
}
let userObj = new storage();
userObj.add({ id: 1, name: "Disha" });
userObj.add({ id: 2, name: "adi" });
console.log(userObj.get(1));
console.log(userObj.getAll());
//# sourceMappingURL=index13.js.map