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
        this.color = "blue";
    }
    reverse() {
        console.log("Revering...");
    }
    display() {
        console.log("color of car is ", this.color);
    }
}
let audi = new Car();
audi.accelerate();
audi.reverse();
audi.display();
//# sourceMappingURL=index8.js.map