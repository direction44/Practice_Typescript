"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playingBackStates;
(function (playingBackStates) {
    playingBackStates[playingBackStates["stop"] = 0] = "stop";
    playingBackStates[playingBackStates["playing"] = 1] = "playing";
    playingBackStates[playingBackStates["pause"] = 2] = "pause";
})(playingBackStates || (playingBackStates = {}));
function updatePlayer(player) {
    if (Array.isArray(player.source)) {
        console.log("PlayList:" + player.source.join(","));
    }
    else {
        console.log("PlayList:" + player.source);
    }
    switch (player.state) {
        case playingBackStates.pause:
            console.log("Player is paused");
            break;
        case playingBackStates.stop:
            console.log("Player is stop");
            break;
        case playingBackStates.playing:
            console.log("Player is playing");
    }
}
let songList = ["song A", "song B", "song C"];
let song = "song A";
let player = {
    state: playingBackStates.playing,
    volume: "High",
    source: song
};
updatePlayer(player);
//# sourceMappingURL=index8.js.map