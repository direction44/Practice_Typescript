"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    show() {
        console.log(`Name: ${this.name} and Age is ${this.age} and Gender is ${this.gender}`);
    }
}
let person = new Person("Divya", 29, "female");
person.show();
//# sourceMappingURL=index12.js.map