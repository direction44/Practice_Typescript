class Vehicle{
     constructor(){
        console.log("creating vehicle...")
    }
   
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