"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "string") {
        console.log("ID:", id.toLowerCase());
    }
    else {
        console.log("ID:", id.toFixed(2));
    }
}
printId(101);
printId("AD-101");
//# sourceMappingURL=index3.js.map