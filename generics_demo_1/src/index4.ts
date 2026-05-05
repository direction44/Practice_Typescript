function printName<T extends {name:string}>(value:T){
    console.log(value.name)
}

printName({name:"Adi",age:30})
printName({name:"disha"})