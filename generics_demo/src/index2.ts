function getValue<T>(arr:T[]):T{
    return arr[0]!
}
let arr:number[]=[10,20,30,40]
let arr1:string[]=["Hello","Namita","Disha"]
console.log(getValue<number>(arr))
console.log(getValue<string>(arr1))