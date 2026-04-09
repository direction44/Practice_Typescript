"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyDiscount(price, discount = 0.1) {
    return price * (1 - discount);
}
console.log(applyDiscount(100, 0.1));
console.log(applyDiscount(100, 0.3));
//# sourceMappingURL=index8.js.map