class Vehicle{
     constructor(){
        console.log("creating vehicle...")
    }
   
    accelerate():void{
        console.log("accelerating...")
    }
}

class Car extends Vehicle{
    constructor(){
        super()
        console.log("creating car...")
        super() //this will give error 
    }
    reverse():void{
        console.log("Revering...")
    }
}

let audi=new Car()
audi.accelerate()
audi.reverse()