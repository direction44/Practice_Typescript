type Circle={
    radius:number,
    kind:"circle"
}
type Square={
    side:number,
    kind:"square" 
}
type Shape=Circle|Square


function area(shape:Shape){
    if(shape.kind=="circle"){
        return Math.PI*Math.pow(shape.radius,2)
    }
    else{
        return shape.side*shape.side
    }
}

const circle:Circle={radius:5,kind:"circle"}
const square:Square={side:8,kind:"square"}
console.log(area(circle))
console.log(area(square))