"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(shape) {
    if ("radius" in shape) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.side * shape.side;
    }
}
const circle = { radius: 5 };
const square = { side: 8 };
console.log(area(circle));
console.log(area(square));
//# sourceMappingURL=index8.js.map