interface Drawable{
    draw():void
}

abstract class shape{
    abstract area():number
    describe():void{

    }
}

class Circle extends shape implements Drawable{
    constructor(public radius:number){
        super()
    }
    area(): number {
        return Math.PI*Math.pow(this.radius,2)
    }
    draw(): void {
        console.log(`this is a circle`)
    }
    describe(): void {
        console.log("this is shape")
    }
}


class Rectangle extends shape implements Drawable{
    constructor(public height:number,public base:number){
        super()
    }
    area(): number {
        return this.base*this.height
    }
    draw(): void {
        console.log(`this is a Rectangle`)
    }
    describe(): void {
        console.log("this is shape")
    }
}

let s:shape[]=[new Circle(5),new Rectangle(3,5)]
s.forEach((shape)=>{
    if("draw" in shape){
        (shape as Drawable).draw()
    }
})
