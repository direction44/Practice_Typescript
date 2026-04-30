"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    constructor(name) {
        this.name = name;
    }
}
class student extends person {
    getRole() {
        return "Student";
    }
}
let p;
p = new student("Ravi");
console.log(`Name ${p.name}`);
console.log(`Role ${p.getRole()}`);
//# sourceMappingURL=index6.js.map