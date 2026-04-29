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
function playSound(animal) {
    animal.makeSound();
}
let animal = new Dog();
playSound(animal);
animal = new Lion();
playSound(animal);
//# sourceMappingURL=index2.js.map