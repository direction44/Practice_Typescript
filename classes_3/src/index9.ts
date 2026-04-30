interface Transport{
    startEngine():void
    stopEngine():void
}

class Truck implements Transport{
    startEngine(): void {
        console.log(`Diesel engine roaring to life.....`)
    }
    stopEngine(): void {
        console.log(`ar brakes engaged. Truck stopped `)
    }
}

class electricScooter implements Transport{
    startEngine(): void {
        console.log(`silent Power On.Battery Status 90%`)
    }
    stopEngine(): void {
        console.log(`scooter power down.`)
    }
}

function manageFleet(fleet:Transport[]){
    fleet.forEach((vehicle,index) => {
        console.log(`vechile number ${index+1}`)
        vehicle.startEngine()
        vehicle.stopEngine()
    });
}

const myFleet:Transport[]=[new Truck(),new electricScooter()]

manageFleet(myFleet)