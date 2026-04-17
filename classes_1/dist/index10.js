"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let s1 = new Student("Disha", 24);
console.log(s1.name);
// console.log(s1.age)
console.log(s1.getAge());
//# sourceMappingURL=index10.js.map