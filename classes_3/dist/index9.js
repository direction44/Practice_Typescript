"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Truck {
    startEngine() {
        console.log(`Diesel engine roaring to life.....`);
    }
    stopEngine() {
        console.log(`ar brakes engaged. Truck stopped `);
    }
}
class electricScooter {
    startEngine() {
        console.log(`silent Power On.Battery Status 90%`);
    }
    stopEngine() {
        console.log(`scooter power down.`);
    }
}
function manageFleet(fleet) {
    fleet.forEach((vehicle, index) => {
        console.log(`vechile number ${index + 1}`);
        vehicle.startEngine();
        vehicle.stopEngine();
    });
}
const myFleet = [new Truck(), new electricScooter()];
manageFleet(myFleet);
//# sourceMappingURL=index9.js.map