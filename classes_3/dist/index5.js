"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doubler(a) {
    if (typeof a === "number") {
        return a * 2;
    }
    else if (typeof a === "string") {
        return a + a;
    }
}
console.log(doubler(10));
console.log(doubler("Hello"));
//# sourceMappingURL=index5.js.map