class Musician{
    playInstrument():void{
        console.log(`Making Some Music...`)
    }
}

class Gutarist extends Musician{
    playInstrument(): void {
        console.log(`Strumming the guitar strings...`)
    }
}

class Drummer extends Musician{
    
    playInstrument(): void {
        console.log(`Hitting the drums...`)
    }
} 

function play(musician:Musician):void{
musician.playInstrument()
}

let musician:Musician[]=[new Drummer(),new Gutarist]
musician.forEach((musician)=>{
    play(musician)
})