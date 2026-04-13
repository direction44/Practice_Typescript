"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["shipped"] = 1] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 2] = "delivered";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus;
console.log(order.shipped);
//# sourceMappingURL=index1.js.map