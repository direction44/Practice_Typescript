"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repo {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
}
let userObj = new Repo();
userObj.add({ id: 1, name: "Disha" });
userObj.add({ id: 2, name: "Niya" });
console.log(userObj.findById(2));
//# sourceMappingURL=index7.js.map