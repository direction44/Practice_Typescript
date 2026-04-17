"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    constructor(ename, salary) {
        this.ename = ename;
        this.salary = salary;
    }
    display() {
        console.log(`Name: ${this.ename}, age:${this.salary}`);
    }
    raiseSalary() {
        this.salary += this.salary * 0.1;
    }
}
let e1 = new Emp("shiva", 32000);
let e2 = new Emp("Mannat", 15000);
e1.display();
e2.display();
e1.raiseSalary();
e2.raiseSalary();
e1.display();
e2.display();
//# sourceMappingURL=index7.js.map