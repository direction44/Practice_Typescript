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
}
class Manager extends Emp {
    constructor(ename, salary, bonus) {
        super(ename, salary);
        this.bonus = bonus;
    }
    show() {
        console.log(`salary:${this.salary} and bonus:${this.bonus}`);
    }
}
let boss = new Manager("Namita", 50000, 25000);
boss.display();
boss.show();
//# sourceMappingURL=index9.js.map