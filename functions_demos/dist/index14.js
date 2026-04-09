"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(products) {
    let total = 0;
    products.forEach((product) => {
        total += product.price;
    });
    return total;
}
const shoppingCart = [
    {
        name: "laptop",
        price: 55000
    },
    {
        name: "Mouse",
        price: 5000
    },
];
console.log(calculateTotal(shoppingCart));
//# sourceMappingURL=index14.js.map