function getValue<T>(arr:T[]):T{
    return arr[0]!
}

console.log(getValue([10,20,30,"40"]))
