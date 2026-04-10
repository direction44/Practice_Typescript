"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHexCode(color) {
    let colors = {
        Red: "#FF0000",
        Green: "#00FF00",
        Blue: "#0000FF",
    };
    return colors[color];
}
console.log(getHexCode("Blue"));
console.log(getHexCode("Green"));
//# sourceMappingURL=index14.js.map