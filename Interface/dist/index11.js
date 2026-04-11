"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name :${this.name} and Age is ${this.age}`);
    }
}
let person = new Person("Divya", 29);
person.show();
//# sourceMappingURL=index11.js.map