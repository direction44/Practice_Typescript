"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Musician {
    playInstrument() {
        console.log(`Making Some Music...`);
    }
}
class Gutarist extends Musician {
    playInstrument() {
        console.log(`Strumming the guitar strings...`);
    }
}
class Drummer extends Musician {
    playInstrument() {
        console.log(`Hitting the drums...`);
    }
}
function play(musician) {
    musician.playInstrument();
}
let musician = [new Drummer(), new Gutarist];
musician.forEach((musician) => {
    play(musician);
});
//# sourceMappingURL=index3.js.map