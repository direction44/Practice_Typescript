"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UPIPayment {
    pay(amount) {
        console.log("Payment using UPI Is" + amount);
    }
}
class CODPayment {
    pay(amount) {
        console.log("Payment using COD Is" + amount);
    }
}
class CardPayment {
    pay(amount) {
        console.log("Payment using Card Is" + amount);
    }
}
class orderService {
    createOrder(user, products) {
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
    processPaymentMethod(order, strategy) {
        if (order.status !== "pending") {
            return {
                success: false,
                error: "Order cancelled or proccessed"
            };
        }
        strategy.pay(order.totalAmount);
        return {
            success: true,
            data: Object.assign(Object.assign({}, order), { status: "completed" })
        };
    }
}
const user = {
    id: 101,
    name: "Garvit",
    email: "gravit@gmail.com"
};
const products = [{ id: 101, name: "Laptop", price: 70000 }, { id: 1012, name: "Mouse", price: 4000 }];
let orderSer = new orderService();
const responce = orderSer.createOrder(user, products);
if (responce.success) {
    console.log("Order created", responce.data);
    let UPI = new UPIPayment();
    let paymentres = orderSer.processPaymentMethod(responce.data, UPI);
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
//# sourceMappingURL=index17.js.map