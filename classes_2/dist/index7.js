"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
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
//# sourceMappingURL=index7.js.map