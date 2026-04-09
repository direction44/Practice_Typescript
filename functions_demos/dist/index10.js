"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(product) {
    return product.price * product.quantity;
}
function printInvoice(product) {
    let result = calculateTotal(product);
    console.log(`${product.name} price is ${result}`);
}
let p = {
    name: "Laptop",
    price: 45000,
    quantity: 4
};
printInvoice(p);
//# sourceMappingURL=index10.js.map