"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printProduct(products) {
    for (let product of products)
        console.log(`${product.name}-${product.price}`);
}
const products = [{
        id: 101,
        name: "Laptop",
        price: 10000,
        inStock: true
    }, {
        id: 102,
        name: "Mouse",
        price: 5000,
        inStock: true
    }, {
        id: 103,
        name: "Keyboard",
        price: 4000,
        inStock: true
    }];
printProduct(products);
//# sourceMappingURL=index10.js.map