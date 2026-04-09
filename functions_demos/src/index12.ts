type Mathoperation=(a:number,b:number)=>number
let add:Mathoperation=(a,b)=>a+b
let sub:Mathoperation=(a,b)=>a-b
let mult:Mathoperation=(a,b)=>a*b

console.log(add(30,45))
console.log(sub(20,45))
console.log(mult(90,45))