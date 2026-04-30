"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class shape {
    describe() {
    }
}
class Circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    draw() {
        console.log(`this is a circle`);
    }
    describe() {
        console.log("this is shape");
    }
}
class Rectangle extends shape {
    constructor(height, base) {
        super();
        this.height = height;
        this.base = base;
    }
    area() {
        return this.base * this.height;
    }
    draw() {
        console.log(`this is a Rectangle`);
    }
    describe() {
        console.log("this is shape");
    }
}
let s = [new Circle(5), new Rectangle(3, 5)];
s.forEach((shape) => {
    if ("draw" in shape) {
        shape.draw();
    }
});
//# sourceMappingURL=index12.js.map