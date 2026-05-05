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
function printDetails(animal) {
    console.log(`Animal name ${animal.name}, animal sound ${animal.speak()}`);
}
printDetails(new Animal("Generic class"));
printDetails(new Dog("Kuki", "german"));
//# sourceMappingURL=index8.js.map