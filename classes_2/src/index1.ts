class Vehicle{
    accelerate():void{
        console.log("accelerating...")
    }
}

class Car extends Vehicle{
    reverse():void{
        console.log("Revering...")
    }
}

let audi=new Car()
audi.accelerate()
audi.reverse()