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
    search(predicate) {
        return this.items.find(predicate);
    }
}
let userObj = new storage();
userObj.add({ id: 1, name: "Disha" });
userObj.add({ id: 2, name: "adi" });
console.log(userObj.search((u) => u.id === 1));
console.log(userObj.search((u) => u.name === "adi"));
//# sourceMappingURL=index14.js.map