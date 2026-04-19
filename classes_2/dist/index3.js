"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor() {
        console.log("creating vehicle...");
    }
    accelerate() {
        console.log("accelerating...");
    }
}
class Car extends Vehicle {
    constructor() {
        super();
        console.log("creating car...");
    }
    reverse() {
        console.log("Revering...");
    }
}
let audi = new Car();
audi.accelerate();
audi.reverse();
//# sourceMappingURL=index3.js.map