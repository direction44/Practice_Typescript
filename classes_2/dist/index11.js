"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log(`some sound...`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`Roars....`);
        return 0;
    }
}
let d = new Dog();
d.makeSound();
//# sourceMappingURL=index11.js.map