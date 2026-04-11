interface mathOperation{
    (a:number,b:number):number;
}

let add:mathOperation=(a,b)=>{
    return a+b
}
let sub:mathOperation=(a,b)=>{
    return a-b
}
let mult:mathOperation=(a,b)=>{
    return a*b
}

console.log(add(10,30))
console.log(sub(350,230))
console.log(mult(5,30))