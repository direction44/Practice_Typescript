let calculator:{
    add:(a:number,b:number)=>number,
    subtract:(a:number,b:number)=>number
}={
    add:(a,b)=>{
    return a+b;
    },
    subtract:(a,b)=>{
        return a-b
    }
}
console.log(calculator.add(3,5))
console.log(calculator.subtract(8,5))