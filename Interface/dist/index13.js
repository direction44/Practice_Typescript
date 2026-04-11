"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`name: ${this.name} salary: ${this.salary}`);
    }
}
let dev = new Developer("Nitya", 20000);
dev.display();
//# sourceMappingURL=index13.js.map