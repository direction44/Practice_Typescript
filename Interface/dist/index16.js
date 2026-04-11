"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 101,
    name: "Garvit",
    email: "gravit@gmail.com"
};
const products = [{ id: 101, name: "Laptop", price: 70000 }, { id: 1012, name: "Mouse", price: 4000 }];
function createOrder(user, products) {
    if (products.length === 0) {
        return {
            success: false,
            error: "No prouct selected"
        };
    }
    let total = 0;
    products.forEach((product) => {
        total += product.price;
    });
    return {
        success: true,
        data: {
            id: 1,
            user,
            product: products,
            totalAmount: total,
            status: "pending"
        }
    };
}
function processPaymentMethod(order, method) {
    if (order.status !== "pending") {
        return {
            success: false,
            error: "Order cancelled or proccessed"
        };
    }
    return {
        success: true,
        data: Object.assign(Object.assign({}, order), { status: "completed" })
    };
}
const responce = createOrder(user, products);
if (responce.success) {
    console.log("Order created", responce.data);
    let paymentres = processPaymentMethod(responce.data, "UPI");
    if (paymentres.success) {
        // console.log(paymentres,paymentres.data)
        console.log("payment Successfull Final Order:", paymentres.data);
    }
    else {
        console.log(`Payment error`, paymentres.error);
    }
}
else {
    console.log(`error in creating order ${responce.error}`);
}
//# sourceMappingURL=index16.js.map