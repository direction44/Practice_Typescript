function calculate(a:number,b:number,operation:(x:number,y:number)=>number)
{
    return operation(a,b)
}

console.log(calculate(9,4,(x,y)=>x*y))
