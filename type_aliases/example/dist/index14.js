"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addProduct(id, name, price, category, quantity, isAvailable = true) {
    return {
        id,
        name,
        price,
        category,
        quantity,
        isAvailable,
    };
}
function calculateInventory(products) {
    let total = 0;
    for (let product of products) {
        total += product.price * product.quantity;
    }
    return total;
}
function filterByCategory(products, category) {
    return products.filter((product) => product.category === category);
}
let product1 = addProduct("101", "laptop", 60000, "electornic", 3, true);
let product2 = addProduct("101", "Mobile", 23000, "electornic", 5);
let product3 = addProduct("101", "keyboard", 3000, "electornic", 2, false);
let product4 = addProduct("101", "chair", 6000, "furniture", 6, true);
let allProducts = [product1, product2, product3, product4];
console.log(calculateInventory(allProducts));
console.log(filterByCategory(allProducts, "electornic"));
//# sourceMappingURL=index14.js.map