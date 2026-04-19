class Vehicle{
    
    accelerate():void{
        console.log("accelerating...")
    }
}

class Car extends Vehicle{
    color:string;
    constructor(){
        super()
        console.log("creating car...")
        this.color="blue";
    }
    reverse():void{
        console.log("Revering...")
    }
    display():void{
        console.log("color of car is ",this.color)
    }
}

let audi=new Car()
audi.accelerate()
audi.reverse()
audi.display()