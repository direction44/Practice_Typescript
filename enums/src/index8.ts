enum playingBackStates{
    stop,
    playing,
    pause
}

type volumeLevel="Low"|"Midium"|"High";

type source=string|string[]

interface Player{
    state:playingBackStates,
    volume:volumeLevel,
    source:source
}

function updatePlayer(player:Player):void{
    if(Array.isArray(player.source)){
        console.log("PlayList:"+player.source.join(","))
    }
    else{
        console.log("PlayList:"+player.source)
    }

    switch(player.state)
    {
        case playingBackStates.pause:
            console.log("Player is paused")
        break
        case playingBackStates.stop:
            console.log("Player is stop")
            break
        case playingBackStates.playing:
            console.log("Player is playing")
    }
}

let songList=["song A","song B","song C"]

let song="song A"

let player:Player={
    state:playingBackStates.playing,
    volume:"High",
    source:song
}

updatePlayer(player)