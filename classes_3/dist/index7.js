"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class creditCardPayment extends Payment {
    process() {
        console.log(`Processing ${this.amount} Using credit card...`);
    }
}
class UPIPayment extends Payment {
    process() {
        console.log(`Processing ${this.amount} Using UPI...`);
    }
}
function checkout(payment) {
    payment.process();
}
const myPurchase = new UPIPayment(5000);
checkout(myPurchase);
//# sourceMappingURL=index7.js.map