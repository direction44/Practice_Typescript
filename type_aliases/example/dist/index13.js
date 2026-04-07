"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    let total = 0;
    let items = order.items;
    for (let item of items) {
        total += item.price;
    }
    order.total = total;
}
function calculateDiscount(customer, order) {
    if (customer.isPremium) {
        return order.total * 0.1;
    }
    return 0;
}
function orderProcessing(customer, order) {
    calculateOrderTotal(order);
    let Discount = calculateDiscount(customer, order);
    const finalBill = order.total - Discount;
    return `Order ${order.orderId} for ${customer.name} :₹${finalBill.toFixed(2)}`;
}
let customer = {
    id: "101",
    name: "Ravi Verma",
    email: "ravi@gmail.com",
};
let order = {
    orderId: "ORD-1001",
    customerId: "101",
    items: [{ name: "Laptop", price: 50000 }, { name: "Mouse", price: 3000 }],
};
console.log(orderProcessing(customer, order));
//# sourceMappingURL=index13.js.map