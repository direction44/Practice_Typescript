"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log(`some sound...`);
    }
}
class Dog extends Animal {
    makeSound() {
        super.makeSound();
        console.log(`Roars....`);
    }
}
let d = new Dog();
d.makeSound();
//# sourceMappingURL=index13.js.map