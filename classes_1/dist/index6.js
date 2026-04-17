"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    constructor(ename, age) {
        this.ename = ename;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.ename}, age:${this.age}`);
    }
}
let e1 = new Emp("shiva", 32);
let e2 = new Emp("Mannat", 15);
e1.display();
e2.display();
//# sourceMappingURL=index6.js.map