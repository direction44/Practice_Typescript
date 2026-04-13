"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shipStatus;
(function (shipStatus) {
    shipStatus["pending"] = "PENDING";
    shipStatus["shipped"] = "SHIPPED";
    shipStatus["delivered"] = "DELIVERED";
})(shipStatus || (shipStatus = {}));
function getShippedMessage(status) {
    switch (status) {
        case shipStatus.pending:
            return "order is pending";
        case shipStatus.delivered:
            return "order is delivered";
        case shipStatus.shipped:
            return "order is shipped";
    }
}
console.log(getShippedMessage(shipStatus.delivered));
//# sourceMappingURL=index6.js.map