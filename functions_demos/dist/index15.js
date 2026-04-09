"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTotal(amount, currency) {
    let symbol = currency === "INR" ? "₹" : currency === "USD" ? "$" : "Amount";
    return `${symbol} ${amount} `;
}
function calculateTotal(products) {
    let total = 0;
    products.forEach((product) => {
        if (product.discount) {
            let discountedPrice = product.price * (1 - product.discount);
            total += discountedPrice;
        }
        else {
            total += product.price;
        }
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
//# sourceMappingURL=index15.js.map