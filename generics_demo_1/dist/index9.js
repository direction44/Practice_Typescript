"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `animal can make sound`;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        return `Dog Barks....`;
    }
}
class AnimalServices {
    constructor() {
        this.animal = [];
    }
    add(animal) {
        this.animal.push(animal);
    }
    findByName(name) {
        return this.animal.find((a) => a.name === name);
    }
}
let animalServices = new AnimalServices();
animalServices.add(new Dog("Kuki", "german"));
animalServices.add(new Dog("Rocky", "Rottweiller"));
console.log(animalServices.findByName("Rocky"));
//# sourceMappingURL=index9.js.map