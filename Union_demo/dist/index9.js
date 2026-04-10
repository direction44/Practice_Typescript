"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(shape) {
    if (shape.kind == "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.side * shape.side;
    }
}
const circle = { radius: 5, kind: "circle" };
const square = { side: 8, kind: "square" };
console.log(area(circle));
console.log(area(square));
//# sourceMappingURL=index9.js.map