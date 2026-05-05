function printLength<T extends {length:number}>(value:T){
    console.log(value.length)
}

printLength("sachin")
printLength([10,30,50,70.90])