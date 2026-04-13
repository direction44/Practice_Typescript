"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = -6] = "pending";
    OrderStatus[OrderStatus["shipped"] = -5] = "shipped";
    OrderStatus[OrderStatus["delivered"] = -4] = "delivered";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus;
console.log(order.shipped);
//# sourceMappingURL=index2.js.map