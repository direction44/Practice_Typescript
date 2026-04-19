"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    constructor(ename, salary) {
        this.ename = ename;
        this.salary = salary;
    }
    display() {
        console.log(`${this.ename},${this.salary}`);
    }
    raiseSalary() {
        this.salary += this.salary * 0.1;
    }
    toString() {
        return `${this.ename},${this.salary}`;
    }
}
class Manager extends Emp {
    constructor(ename, salary, bonus) {
        super(ename, salary);
        this.bonus = bonus;
    }
    show() {
        console.log(`salary:${this.salary} and bonus:${this.bonus}`);
    }
    raiseIncome() {
        super.raiseSalary();
        this.bonus += this.bonus * 0.1;
    }
    toString() {
        return `${super.toString()},${this.bonus}`;
    }
}
let boss = new Manager("Namita", 50000, 25000);
console.log("before raise");
console.log(boss);
boss.raiseIncome();
console.log("afrer raise");
console.log(boss);
//# sourceMappingURL=index14.js.map