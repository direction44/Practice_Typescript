"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["shipped"] = "SHIPPED";
    Status["delivered"] = "DELIVERED";
})(Status || (Status = {}));
let allOptions = Object.values(Status);
allOptions.forEach((option) => {
    console.log(option);
});
//# sourceMappingURL=index7.js.map