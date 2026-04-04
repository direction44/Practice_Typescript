"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bankAccount = {
    balance: 1000,
    deposit: function (amt) {
        bankAccount.balance += amt;
    },
    withdraw: function (amount) {
        bankAccount.balance -= amount;
    }
};
console.log(bankAccount.balance);
bankAccount.deposit(2000);
console.log(bankAccount.balance);
bankAccount.withdraw(1000);
console.log(bankAccount.balance);
//# sourceMappingURL=index20.js.map