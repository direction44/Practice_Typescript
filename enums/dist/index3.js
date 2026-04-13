"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 6] = "pending";
    OrderStatus[OrderStatus["shipped"] = 7] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 8] = "delivered";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus;
console.log(order.shipped);
//# sourceMappingURL=index3.js.map