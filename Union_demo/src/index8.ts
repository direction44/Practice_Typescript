type Circle={
    radius:number
}
type Square={
    side:number   
}
type Shape=Circle|Square


function area(shape:Shape){
    if("radius" in shape){
        return Math.PI*Math.pow(shape.radius,2)
    }
    else{
        return shape.side*shape.side
    }
}

const circle:Circle={radius:5}
const square:Square={side:8}
console.log(area(circle))
console.log(area(square))