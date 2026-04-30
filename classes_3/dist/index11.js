"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    generateReceipt() {
        console.log(`Receipt Generated.....`);
    }
}
class creditCardPayment extends Payment {
    process(amount) {
        console.log(`Processing ${amount} Using credit card...`);
    }
    refund(amount) {
        console.log(`Refunded ${amount} to credit card...`);
    }
}
class UPIPayment extends Payment {
    process(amount) {
        console.log(`Processing ${amount} Using UPI...`);
    }
    refund(amount) {
        console.log(`Refunded ${amount} to UPI...`);
    }
}
const p1 = new creditCardPayment();
p1.process(50000);
p1.refund(4000);
const p2 = new UPIPayment();
p2.process(50000);
p2.refund(4000);
//# sourceMappingURL=index11.js.map