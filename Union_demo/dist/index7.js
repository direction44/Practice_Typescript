"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    if (Array.isArray(person)) {
        console.log(`Hello ${person.join(",")}`);
    }
    else {
        console.log(`Hello ${person}`);
    }
}
greet("Sachin");
greet(["Rahun", "Namit", "Nitya"]);
//# sourceMappingURL=index7.js.map