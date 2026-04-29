"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log(`some sound...`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`Barks...`);
    }
}
class Lion extends Animal {
    makeSound() {
        console.log(`Roars...`);
    }
}
let animal = new Dog();
animal.makeSound();
animal = new Lion();
animal.makeSound();
//# sourceMappingURL=index1.js.map