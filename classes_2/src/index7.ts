class Vehicle{
    
    accelerate():void{
        console.log("accelerating...")
    }
}

class Car extends Vehicle{
    constructor(){
        super()
        console.log("creating car...")
    }
    reverse():void{
        console.log("Revering...")
    }
}

let audi=new Car()
audi.accelerate()
audi.reverse()