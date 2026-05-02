"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swapFirstTwo(value) {
    if (value.length < 1) {
        return value;
    }
    let newArr = [...value];
    [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
    return newArr;
}
console.log(swapFirstTwo([45, 53, 24, 56]));
console.log(swapFirstTwo(["A", "B", "C", "D"]));
//# sourceMappingURL=index7.js.map