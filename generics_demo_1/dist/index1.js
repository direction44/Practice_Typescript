"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numBox = new Box(100);
let strBox1 = new Box("100");
let boolBox2 = new Box(true);
console.log(numBox.getValue());
console.log(strBox1.getValue());
console.log(boolBox2.getValue());
//# sourceMappingURL=index1.js.map