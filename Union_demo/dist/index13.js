"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHexCode(color) {
    switch (color) {
        case "Red":
            return "#FF0000";
        case "Green":
            return "#00FF00";
        case "Blue":
            return "#0000FF";
    }
}
console.log(getHexCode("Blue"));
console.log(getHexCode("Green"));
//# sourceMappingURL=index13.js.map