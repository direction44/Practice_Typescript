"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paymentMode;
(function (paymentMode) {
    paymentMode["UPI"] = "UPI";
    paymentMode["COD"] = "COD";
    paymentMode["NetBanking"] = "NetBanking";
})(paymentMode || (paymentMode = {}));
const payment = paymentMode.COD;
console.log(payment);
//# sourceMappingURL=index4.js.map