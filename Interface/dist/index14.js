"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class creditCard {
    pay(amount) {
        console.log(`Paid Using credit card ${amount}`);
    }
}
class UPI {
    pay(amount) {
        console.log(`Paid Using UPI ${amount}`);
    }
}
function processPayment(payment, bill) {
    payment.pay(bill);
}
processPayment(new creditCard(), 70000);
processPayment(new UPI(), 5000);
//# sourceMappingURL=index14.js.map