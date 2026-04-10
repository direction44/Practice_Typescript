"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    if (typeof person === "object") {
        console.log(`Hello ${person.join(",")}`);
    }
    else {
        console.log(`Hello ${person}`);
    }
}
greet("Sachin");
greet(["Rahun", "Namit", "Nitya"]);
//# sourceMappingURL=index6.js.map