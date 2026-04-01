"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(...nums) {
    let total = 0;
    for (let i of nums) {
        total += i;
    }
    return total;
}
let res = sum(10, 20, 30, 40);
console.log(res);
//# sourceMappingURL=index12.js.map